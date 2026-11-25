const $=s=>document.querySelector(s);
const D0=[
["Dr. Tariro Moyo","General Practice","Harare","12 Churchill Ave, Avondale","+263 242 700 101",4.8,96],
["Dr. Blessing Sibanda","General Practice","Bulawayo","45 Fort St, City Centre","+263 292 700 102",4.6,61],
["Dr. Chenai Mawere","General Practice","Mutare","8 Herbert Chitepo St","+263 202 700 103",4.5,38],
["Dr. Farai Ndlovu","Paediatrics","Harare","3 Baines Ave, Milton Park","+263 242 700 104",4.9,120],
["Dr. Nomsa Dube","Paediatrics","Bulawayo","22 Jason Moyo St","+263 292 700 105",4.7,74],
["Dr. Rudo Chikwanha","Cardiology","Harare","19 Josiah Tongogara Ave","+263 242 700 106",4.8,88],
["Dr. Themba Ncube","Cardiology","Bulawayo","7 Leopold Takawira Ave","+263 292 700 107",4.4,41],
["Dr. Simba Mutasa","Dentistry","Harare","5 Samora Machel Ave","+263 242 700 108",4.7,69],
["Dr. Rumbi Gwata","Dentistry","Gweru","14 Main St","+263 254 700 109",4.5,33],
["Dr. Kudzai Marufu","Gynaecology","Harare","27 Nelson Mandela Ave","+263 242 700 110",4.9,102],
["Dr. Sithabile Moyo","Gynaecology","Masvingo","10 Robert Mugabe Way","+263 392 700 111",4.6,29],
["Dr. Tafara Zhou","Orthopaedics","Harare","31 Enterprise Rd, Highlands","+263 242 700 112",4.7,52],
["Dr. Lindiwe Khumalo","Dermatology","Bulawayo","16 Joshua Nkomo St","+263 292 700 113",4.6,47]
];
const rn=s=>()=>(s=(s*1664525+1013904223)>>>0)/4294967296;
const FF=["Chiedza","Nyasha","Tendai","Rutendo","Vimbai","Tsitsi","Nomvula","Thandiwe","Ruvimbo","Precious","Memory","Fadzai","Sibongile","Charity","Joyce","Patience","Mercy"],
FM=["Tinashe","Takudzwa","Kudakwashe","Tapiwa","Munyaradzi","Thabo","Bongani","Lloyd","Walter","Ellis","Brighton","Prince","Obert","Gift","Cleopas","Tawanda","Admire"],
LN=["Moyo","Ncube","Dube","Sibanda","Mutasa","Chigumba","Mapfumo","Makoni","Gumbo","Tshuma","Nkomo","Banda","Chikore","Mhlanga","Zvobgo","Marange","Hove","Mutendi","Kanengoni","Sithole"],
SP=["General Practice","Paediatrics","Cardiology","Dentistry","Gynaecology","Orthopaedics","Dermatology","Ophthalmology","ENT","Psychiatry","Neurology","Urology"],
CT=[["Harare","242"],["Bulawayo","292"],["Mutare","202"],["Gweru","254"],["Masvingo","392"],["Kwekwe","255"],["Victoria Falls","213"]],
ST=["Main St","Samora Machel Ave","Jason Moyo St","Herbert Chitepo St","Leopold Takawira Ave","Park Lane","Second St","Nelson Mandela Ave"],
CM=[[5,"Very attentive and explained everything in plain language."],[5,"Short wait, kind staff and a clear treatment plan."],[4,"Professional and thorough. The office was clean and easy to find."],[5,"Made my child feel at ease. We will definitely return."],[4,"Good care, though the waiting room was busy at lunchtime."],[5,"Listened carefully and never rushed me. Highly recommended."],[3,"Good doctor, but I waited almost an hour past my appointment time."],[5,"Accurate diagnosis and a follow-up call the next day."],[4,"Fair pricing and helpful advice on aftercare."],[5,"Best consultation I have had in years."]],
PN=["Tendai M.","Grace K.","Joseph P.","Rudo C.","Blessed N.","Anesu T.","Lerato S.","Farai H.","Memory D.","Kuda B."],MO=["Oct 2026","Sep 2026","Aug 2026","Jul 2026","Jun 2026","May 2026"],
SK=["#8d5524","#6f4220","#a0673a","#5a3519","#7b4a26"],HR=["#1a1210","#241813","#2e1d14"];
const D=D0.map(d=>({n:d[0],sp:d[1],city:d[2],addr:d[3]+", "+d[2],ph:d[4],a:d[5],c:d[6],f:/Tariro|Nomsa|Rudo|Chenai|Kudzai|Sithabile|Lindiwe|Rumbi/.test(d[0])}));
SP.forEach((sp,si)=>{for(let k=0;k<6;k++){const r=rn(si*100+k+7),pk=a=>a[Math.floor(r()*a.length)],f=r()<.5,c=pk(CT);D.push({n:"Dr. "+pk(f?FF:FM)+" "+pk(LN),sp,city:c[0],addr:(10+Math.floor(r()*90))+" "+pk(ST)+", "+c[0],ph:"+263 "+c[1]+" 700 "+(200+si*10+k),a:4.2+r()*.7,c:15+Math.floor(r()*110),f})}});
D.forEach((d,i)=>{const r=rn(i*31+5);d.id=i;d.sk=SK[Math.floor(r()*5)];d.hc=HR[Math.floor(r()*3)];d.hue=(SP.indexOf(d.sp)*29)%360;const b=Math.floor(r()*10);d.rv=[0,1,2,3].map(j=>{const m=CM[(b+j*3)%10];return{s:m[0],t:m[1],w:PN[(i+j*3)%10],m:MO[(j+Math.floor(r()*2))%6]}})});
function av(d,s){return`<svg role="img" aria-label="Illustrated portrait of ${d.n}" width="${s}" height="${s}" viewBox="0 0 100 100" style="border-radius:50%;flex:none"><rect width="100" height="100" fill="hsl(${d.hue} 45% 82%)"/>${d.f?`<ellipse cx="50" cy="48" rx="22" ry="28" fill="${d.hc}"/>`:''}<path d="M12 100Q14 68 50 66Q86 68 88 100Z" fill="#fff"/><path d="M40 66L50 84L60 66Z" fill="#0F4C5C"/><rect x="44" y="52" width="12" height="16" fill="${d.sk}"/><circle cx="50" cy="42" r="17" fill="${d.sk}"/><path d="M33 40Q31 22 50 23Q69 22 67 40Q60 31 50 31Q40 31 33 40Z" fill="${d.hc}"/><circle cx="44" cy="43" r="1.8" fill="#222"/><circle cx="56" cy="43" r="1.8" fill="#222"/><path d="M44 50Q50 54 56 50" stroke="#7a3b2e" stroke-width="1.6" fill="none"/></svg>`}
let R={},sp="All";
try{R=JSON.parse(localStorage.getItem('zr')||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem('zr',JSON.stringify(R))}catch(e){}};
const avg=d=>{const u=R[d.id]||[],t=d.c+u.length;return{a:(d.a*d.c+u.reduce((s,r)=>s+r.s,0))/t,c:t}};
const st=n=>'★'.repeat(Math.round(n))+'☆'.repeat(5-Math.round(n));
const cities=["All cities",...new Set(D.map(d=>d.city))],sps=["All",...new Set(D.map(d=>d.sp))];
$('#city').innerHTML=cities.map(c=>`<option>${c}</option>`).join('');
function render(){
$('#chips').innerHTML=sps.map(s=>`<button class="pill ${s==sp?'sel':''}" aria-pressed="${s==sp}" onclick="sp='${s}';render()">${s}</button>`).join('');
const q=$('#q').value.toLowerCase(),c=$('#city').value;
const L=D.filter(d=>(sp=="All"||d.sp==sp)&&(c.startsWith("All")||d.city==c)&&(d.n+d.sp).toLowerCase().includes(q));
$('#list').innerHTML=sps.slice(1).map(s=>{const g=L.filter(d=>d.sp==s);return g.length?`<section class="grp" aria-labelledby="g-${s[0]}${s.length}"><h2 id="g-${s[0]}${s.length}">${s} <span>(${g.length})</span></h2><div class="grid">${g.map(card).join('')}</div></section>`:''}).join('')||'<p>No doctors match your search.</p>'}
function card(d){const r=avg(d);return`<article class="card"><div style="display:flex;gap:12px;align-items:center">${av(d,64)}<div><h3 style="margin:0">${d.n}</h3><p class="mu" style="margin:0">${d.sp}</p></div></div><p class="stars" aria-label="${r.a.toFixed(1)} out of 5 stars">${st(r.a)} <span class="mu">${r.a.toFixed(1)} (${r.c})</span></p><p class="mu">“${d.rv[0].t}”</p><p>📍 ${d.addr}</p><p>📞 <a href="tel:${d.ph.replace(/\s/g,'')}">${d.ph}</a></p><p style="display:flex;gap:8px;margin-top:12px"><button class="btn" onclick="book(${d.id})">Book Appointment</button><button class="btn s" onclick="rate(${d.id})">Ratings</button></p></article>`}
function modal(h){$('#modal').innerHTML=`<div class="mask" onclick="if(event.target==this)cl()"><div class="modal" role="dialog" aria-modal="true" aria-label="Dialog"><button class="x" aria-label="Close" onclick="cl()">×</button>${h}</div></div>`;$('#modal .x').focus()}
function cl(){$('#modal').innerHTML=''}
addEventListener('keydown',e=>{if(e.key==='Escape')cl()});
/* booking */
let B={};
const slots=['08:30','09:30','11:00','14:00','15:30'];
function days(){const a=[];for(let i=1;a.length<5;i++){const x=new Date(Date.now()+i*864e5);if(x.getDay())a.push(x)}return a}
function book(id){B={id};bk()}
function bk(){const d=D[B.id];modal(`<h2>Book with ${d.n}</h2><p class="mu">${d.sp} · ${d.addr}</p><h3>Choose a day</h3><div>${days().map(x=>{const k=x.toDateString();return`<button class="pill ${B.day==k?'sel':''}" onclick="B.day='${k}';bk()">${x.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})}</button>`}).join(' ')}</div><h3 style="margin-top:14px">Choose a time</h3><div>${slots.map(t=>`<button class="pill ${B.t==t?'sel':''}" onclick="B.t='${t}';bk()">${t}</button>`).join(' ')}</div>
<form novalidate onsubmit="go(event)"><label for="nm">Full name</label><input id="nm" autocomplete="name"><div class="err" id="e1"></div><label for="ph">Phone number</label><input id="ph" type="tel" autocomplete="tel"><div class="err" id="e2"></div><label for="rs">Reason for visit (optional)</label><textarea id="rs" rows="2"></textarea><div class="err" id="e3" role="alert"></div><p><button class="btn">Confirm Appointment</button></p></form>`)}
function go(e){e.preventDefault();const n=$('#nm').value.trim(),p=$('#ph').value.trim();$('#e1').textContent=n.length<3?'Enter your full name.':'';$('#e2').textContent=!/^[+\d\s]{9,}$/.test(p)?'Enter a valid phone number.':'';$('#e3').textContent=!(B.day&&B.t)?'Please choose a day and time above.':'';if(document.querySelector('.err:not(:empty)'))return;
const d=D[B.id],ref='ZD-'+Math.random().toString(36).slice(2,8).toUpperCase();
modal(`<h2 style="color:var(--ok)">Appointment confirmed ✓</h2><p>Reference: <b>${ref}</b></p><p><b>Day:</b> ${B.day} at ${B.t}<br><b>Patient:</b> ${n}</p><h3>Doctor & office</h3><p>${d.n}, ${d.sp}<br>📍 ${d.addr}<br>📞 ${d.ph}</p><p class="mu">Please arrive 10 minutes early. To change your booking, call the office and quote your reference.</p><p class="np"><button class="btn" onclick="window.print()">Print confirmation</button> <button class="btn s" onclick="rate(${d.id})">Rate this doctor</button></p>`)}
/* ratings */
let rs=0;
function rate(id,sc){const d=D[id],r=avg(d),u=R[id]||[],all=[...u.slice().reverse().map(x=>({s:x.s,t:x.t,w:'You',m:'Just now'})),...d.rv];rs=sc||0;
modal(`<div style="display:flex;gap:14px;align-items:center">${av(d,72)}<div><h2 style="margin:0">${d.n}</h2><p class="mu" style="margin:0">${d.sp} · ${d.city}</p></div></div><p class="stars">${st(r.a)} <span class="mu">${r.a.toFixed(1)} from ${r.c} ratings</span></p><h3>Rate your visit</h3><div class="sg" role="group" aria-label="Your rating">${[1,2,3,4,5].map(i=>`<button aria-label="${i} star${i>1?'s':''}" aria-pressed="${rs>=i}" onclick="rate(${id},${i})">${rs>=i?'★':'☆'}</button>`).join('')}</div><label for="rt">Your comment (optional)</label><textarea id="rt" rows="2"></textarea><div class="err" id="re" role="alert"></div><button class="btn" onclick="sub(${id})">Submit rating</button><h3 style="margin-top:20px">Recent patient reviews</h3>${all.map(x=>`<div class="rev"><span class="stars">${st(x.s)}</span> <b>${x.w}</b> <span class="mu">· ${x.m}</span><br>${x.t?x.t.replace(/[<>&]/g,''):'<i class="mu">No comment</i>'}</div>`).join('')}`);}
function sub(id){if(!rs){$('#re').textContent='Please choose a star rating.';return}(R[id]=R[id]||[]).push({s:rs,t:$('#rt').value.trim().slice(0,300)});save();render();rate(id)}
$('#q').oninput=render;$('#city').onchange=render;render();