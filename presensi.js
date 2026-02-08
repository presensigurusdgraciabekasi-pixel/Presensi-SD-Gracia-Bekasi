<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;}
@font-face
	{font-family:"Segoe UI Emoji";
	panose-1:2 11 5 2 4 2 4 2 2 3;}
@font-face
	{font-family:PTMono-Regular;
	panose-1:0 0 0 0 0 0 0 0 0 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:8.0pt;
	margin-left:0cm;
	line-height:115%;
	font-size:12.0pt;
	font-family:"Calibri",sans-serif;}
.MsoChpDefault
	{font-size:12.0pt;}
.MsoPapDefault
	{margin-bottom:8.0pt;
	line-height:115%;}
 /* Page Definitions */
 @page WordSection1
	{size:612.25pt 935.4pt;
	margin:72.0pt 72.0pt 72.0pt 72.0pt;}
div.WordSection1
	{page:WordSection1;}
-->
</style>

</head>

<body lang=EN-US style='word-wrap:break-word;text-justify-trim:punctuation'>

<div class=WordSection1>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>//
========== CONFIG ZAPIER + CLOUDINARY ==========</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>const
ZAPIER_WEBHOOK_URL =
&quot;https://hooks.zapier.com/hooks/catch/26327795/uet2dij/&quot;;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>const
CLOUDINARY_UPLOAD_PRESET = &quot;sdgraciapresensi&quot;;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>const
CLOUDINARY_CLOUD_NAME = &quot;sdgraciapresensi&quot;;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>let
selectedStatus = &quot;&quot;;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>let
dataPresensi = JSON.parse(localStorage.getItem('presensiSDGracia')) || [];</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>//
========== FUNGSI UPLOAD CLOUDINARY ==========</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>async
function uploadToCloudinary(file) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const formData = new FormData();</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
formData.append(&quot;file&quot;, file);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
formData.append(&quot;upload_preset&quot;, CLOUDINARY_UPLOAD_PRESET);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
try {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
const response = await fetch(</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
{ method: &quot;POST&quot;, body: formData }</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
if (!response.ok) throw new Error(&quot;Upload gagal&quot;);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
const result = await response.json();</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
return {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
url: result.secure_url,</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
fileName: result.original_filename</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
};</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
} catch (error) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
console.error(&quot;Cloudinary error:&quot;, error);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
throw error;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>function
updateDate() {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const days = [&quot;Minggu&quot;, &quot;Senin&quot;, &quot;Selasa&quot;,
&quot;Rabu&quot;, &quot;Kamis&quot;, &quot;Jumat&quot;, &quot;Sabtu&quot;];</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const months = [&quot;Januari&quot;, &quot;Februari&quot;, &quot;Maret&quot;,
&quot;April&quot;, &quot;Mei&quot;, &quot;Juni&quot;, &quot;Juli&quot;,
&quot;Agustus&quot;, &quot;September&quot;, &quot;Oktober&quot;,
&quot;November&quot;, &quot;Desember&quot;];</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const now = new Date();</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const dayName = days[now.getDay()];</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const dayNum = now.getDate();</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const monthName = months[now.getMonth()];</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const year = now.getFullYear();</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
document.getElementById('currentDate').innerHTML = `&lt;i class=&quot;far
fa-calendar-alt mr-1&quot;&gt;&lt;/i&gt; ${dayName}, ${dayNum} ${monthName}
${year}`;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>function
validateFiles(input) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const maxSize = 10 * 1024 * 1024;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const files = input.files;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
for (let i = 0; i &lt; files.length; i++) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
if (files[i].size &gt; maxSize) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
alert(`File &quot;${files[i].name}&quot; terlalu besar! Maksimal 10MB.`);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
input.value = &quot;&quot;; </span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
return false;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
return true;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>function
setStatus(status) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
selectedStatus = status;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
['btn-Hadir', 'btn-Sakit', 'btn-Dinas', 'btn-Terlambat'].forEach(id =&gt;
document.getElementById(id).classList.remove('active'));</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
document.getElementById('btn-' + status).classList.add('active');</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const area = document.getElementById('dynamicInputArea');</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
area.classList.remove('hidden');</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const now = new Date();</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const timeStr = now.getHours().toString().padStart(2, '0') + &quot;:&quot; +
now.getMinutes().toString().padStart(2, '0');</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
if (status === 'Hadir') {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
const label = now.getHours() &lt; 9 ? &quot;JAM MASUK&quot; : &quot;JAM
PULANG&quot;;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
area.innerHTML = `&lt;div class=&quot;text-center&quot;&gt;&lt;p
class=&quot;text-[10px] font-bold text-indigo-600
uppercase&quot;&gt;${label}&lt;/p&gt;&lt;h3 class=&quot;text-2xl font-bold
text-gray-800&quot;&gt;${timeStr}&lt;/h3&gt;&lt;p class=&quot;text-[9px]
text-gray-400 italic&quot;&gt;Presensi Anda tercatat
otomatis.&lt;/p&gt;&lt;/div&gt;`;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
} else if (status === 'Sakit') {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
area.innerHTML = `&lt;label class=&quot;text-[10px] font-bold text-gray-500
uppercase&quot;&gt;Upload Surat Sakit (PDF/PNG/JPG max 10MB)&lt;/label&gt;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
&lt;input type=&quot;file&quot; id=&quot;uploadFile&quot;
accept=&quot;.pdf,image/*&quot; class=&quot;w-full text-xs mt-1&quot;
onchange=&quot;validateFiles(this)&quot;&gt;`;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
} else if (status === 'Dinas') {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
area.innerHTML = `&lt;label class=&quot;text-[10px] font-bold text-gray-500
uppercase&quot;&gt;Upload Dokumen/Foto/Video Dinas (Max 10MB)&lt;/label&gt;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
&lt;input type=&quot;file&quot; id=&quot;uploadFile&quot; multiple
class=&quot;w-full text-xs mt-1&quot;
onchange=&quot;validateFiles(this)&quot;&gt;`;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
} else if (status === 'Terlambat') {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
area.innerHTML = `&lt;div class=&quot;mb-2&quot;&gt;&lt;p
class=&quot;text-[9px] font-bold text-orange-600 uppercase&quot;&gt;Waktu:
${timeStr}&lt;/p&gt;&lt;/div&gt;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
&lt;label class=&quot;text-[10px] font-bold text-gray-500
uppercase&quot;&gt;Keterangan Terlambat&lt;/label&gt;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
&lt;textarea id=&quot;ketTerlambat&quot; class=&quot;w-full p-2 bg-gray-50
text-xs rounded-lg border-none focus:ring-1 focus:ring-orange-500&quot;
placeholder=&quot;Tuliskan alasan...&quot;&gt;&lt;/textarea&gt;`;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>async
function sendPresensi() {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const nama = document.getElementById('selectNama').value;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
if (!nama || !selectedStatus) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
alert(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>❌</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> Lengkapi data terlebih dahulu!&quot;);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
return;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const now = new Date();</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const jamMasuk = now.toTimeString().slice(0, 5);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
let keterangan = selectedStatus;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
if (selectedStatus === 'Terlambat') {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
keterangan = document.getElementById('ketTerlambat')?.value || 'Terlambat';</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const payload = {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
Nama: nama,</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
Keterangan: keterangan,</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
&quot;Jam Masuk&quot;: jamMasuk,</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
&quot;Jam Pulang&quot;: &quot;-&quot;,</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
Upload: &quot;&quot;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
};</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
const fileInput = document.getElementById('uploadFile');</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
if (fileInput &amp;&amp; fileInput.files.length &gt; 0) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
const file = fileInput.files[0];</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
if (file.size &gt; 5 * 1024 * 1024) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
alert(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>❌</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> File terlalu besar (max 5MB)&quot;);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
return;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
try {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
console.log(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>⏳</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> Uploading file ke Cloudinary...&quot;);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
const uploadResult = await uploadToCloudinary(file);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
payload.Upload = `${uploadResult.fileName} | ${uploadResult.url}`;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
console.log(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>✅</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> File uploaded:&quot;, uploadResult.url);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
} catch (error) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
console.error(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>❌</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> Error upload file:&quot;, error);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
alert(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>❌</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> Gagal upload file&quot;);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
return;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
try {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
console.log(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>⏳</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> Sending data ke Zapier...&quot;);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
const response = await fetch(ZAPIER_WEBHOOK_URL, {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
method: &quot;POST&quot;,</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
body: JSON.stringify(payload)</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
});</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
if (response.ok) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
alert(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>✅</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> Presensi berhasil dikirim ke Google Sheets!&quot;);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
document.getElementById('selectNama').value = &quot;&quot;;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
selectedStatus = null;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
document.getElementById('dynamicInputArea').innerHTML = &quot;&quot;;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
console.log(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>✅</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> Success!&quot;);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
} else {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>           
alert(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>❌</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> Error: &quot; + response.statusText);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
} catch (error) {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
console.error(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>❌</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> Connection error:&quot;, error);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>       
alert(&quot;</span><span style='font-size:14.0pt;font-family:"Segoe UI Emoji",sans-serif;
color:#756F6B'>❌</span><span style='font-size:14.0pt;font-family:PTMono-Regular;
color:#756F6B'> Terjadi kesalahan koneksi&quot;);</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>}</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>window.onload
= function() {</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>   
updateDate();</span></p>

<p class=MsoNormal style='margin-bottom:0cm;line-height:normal;text-autospace:
none'><span style='font-size:14.0pt;font-family:PTMono-Regular;color:#756F6B'>};</span></p>

</div>

</body>

</html>
