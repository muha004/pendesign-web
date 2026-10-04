
const btn=document.getElementById('theme-toggle');
if(localStorage.theme==='dark'){document.body.classList.add('dark');btn.textContent='☀️';}
btn.onclick=()=>{
 document.body.classList.toggle('dark');
 const dark=document.body.classList.contains('dark');
 localStorage.theme=dark?'dark':'light';
 btn.textContent=dark?'☀️':'🌙';
};
