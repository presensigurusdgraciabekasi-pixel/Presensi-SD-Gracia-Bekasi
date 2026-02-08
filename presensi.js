// ========== CONFIG ZAPIER + CLOUDINARY ==========
const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/26327795/uet2dij/";
const CLOUDINARY_UPLOAD_PRESET = "sdgraciapresensi";
const CLOUDINARY_CLOUD_NAME = "sdgraciapresensi";

let selectedStatus = "";
let dataPresensi = JSON.parse(localStorage.getItem('presensiSDGracia')) || [];

// ========== FUNGSI UPLOAD CLOUDINARY ==========
async function uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
            { method: "POST", body: formData }
        );

        if (!response.ok) throw new Error("Upload gagal");
        const result = await response.json();
        return {
            url: result.secure_url,
            fileName: result.original_filename
        };
    } catch (error) {
        console.error("Cloudinary error:", error);
        throw error;
    }
}

function updateDate() {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    
    const now = new Date();
    const dayName = days[now.getDay()];
    const dayNum = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    document.getElementById('currentDate').innerHTML = `<i class="far fa-calendar-alt mr-1"></i> ${dayName}, ${dayNum} ${monthName} ${year}`;
}

function switchPage(pageId, btn) {
    ['page-input', 'page-today', 'page-monthly'].forEach(id => document.getElementById(id).classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    const buttons = btn.parentElement.querySelectorAll('button');
    buttons.forEach(b => { b.classList.remove('nav-active'); b.classList.add('text-gray-400'); });
    btn.classList.add('nav-active'); btn.classList.remove('text-gray-400');
}

function validateFiles(input) {
    const maxSize = 10 * 1024 * 1024;
    const files = input.files;
    for (let i = 0; i < files.length; i++) {
        if (files[i].size > maxSize) {
            alert(`File "${files[i].name}" terlalu besar! Maksimal 10MB.`);
            input.value = ""; 
            return false;
        }
    }
    return true;
}

function setStatus(status) {
    selectedStatus = status;
    ['btn-Hadir', 'btn-Sakit', 'btn-Dinas', 'btn-Terlambat'].forEach(id => document.getElementById(id).classList.remove('active'));
    document.getElementById('btn-' + status).classList.add('active');
    
    const area = document.getElementById('dynamicInputArea');
    area.classList.remove('hidden');
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');

    if (status === 'Hadir') {
        const label = now.getHours() < 9 ? "JAM MASUK" : "JAM PULANG";
        area.innerHTML = `<div class="text-center"><p class="text-[10px] font-bold text-indigo-600 uppercase">${label}</p><h3 class="text-2xl font-bold text-gray-800">${timeStr}</h3><p class="text-[9px] text-gray-400 italic">Presensi Anda tercatat otomatis.</p></div>`;
    } else if (status === 'Sakit') {
        area.innerHTML = `<label class="text-[10px] font-bold text-gray-500 uppercase">Upload Surat Sakit (PDF/PNG/JPG max 10MB)</label>
        <input type="file" id="uploadFile" accept=".pdf,image/*" class="w-full text-xs mt-1" onchange="validateFiles(this)">`;
    } else if (status === 'Dinas') {
        area.innerHTML = `<label class="text-[10px] font-bold text-gray-500 uppercase">Upload Dokumen/Foto/Video Dinas (Max 10MB)</label>
        <input type="file" id="uploadFile" multiple class="w-full text-xs mt-1" onchange="validateFiles(this)">`;
    } else if (status === 'Terlambat') {
        area.innerHTML = `<div class="mb-2"><p class="text-[9px] font-bold text-orange-600 uppercase">Waktu: ${timeStr}</p></div>
        <label class="text-[10px] font-bold text-gray-500 uppercase">Keterangan Terlambat</label>
        <textarea id="ketTerlambat" class="w-full p-2 bg-gray-50 text-xs rounded-lg border-none focus:ring-1 focus:ring-orange-500" placeholder="Tuliskan alasan..."></textarea>`;
    }
}

async function sendPresensi() {
    const nama = document.getElementById('selectNama').value;
    if (!nama || !selectedStatus) {
        alert("❌ Lengkapi data terlebih dahulu!");
        return;
    }

    const now = new Date();
    const jamMasuk = now.toTimeString().slice(0, 5);
    
    let keterangan = selectedStatus;
    if (selectedStatus === 'Terlambat') {
        keterangan = document.getElementById('ketTerlambat')?.value || 'Terlambat';
    }

    const payload = {
        Nama: nama,
        Keterangan: keterangan,
        "Jam Masuk": jamMasuk,
        "Jam Pulang": "-",
        Upload: ""
    };

    const fileInput = document.getElementById('uploadFile');
    if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        
        if (file.size > 5 * 1024 * 1024) {
            alert("❌ File terlalu besar (max 5MB)");
            return;
        }

        try {
            console.log("⏳ Uploading file ke Cloudinary...");
            const uploadResult = await uploadToCloudinary(file);
            payload.Upload = `${uploadResult.fileName} | ${uploadResult.url}`;
            console.log("✅ File uploaded:", uploadResult.url);
        } catch (error) {
            console.error("❌ Error upload file:", error);
            alert("❌ Gagal upload file");
            return;
        }
    }

    try {
        console.log("⏳ Sending data ke Zapier...");
        const response = await fetch(ZAPIER_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("✅ Presensi berhasil dikirim ke Google Sheets!");
            document.getElementById('selectNama').value = "";
            selectedStatus = null;
            document.getElementById('dynamicInputArea').innerHTML = "";
            console.log("✅ Success!");
        } else {
            alert("❌ Error: " + response.statusText);
        }
    } catch (error) {
        console.error("❌ Connection error:", error);
        alert("❌ Terjadi kesalahan koneksi");
    }
}

window.onload = function() {
    updateDate();
};
