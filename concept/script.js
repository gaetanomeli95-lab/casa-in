const slides=[...document.querySelectorAll('.hero-slide')];
const counter=document.getElementById('slide-current');
let current=0, timer;
function showSlide(i){slides[current].classList.remove('active');current=(i+slides.length)%slides.length;slides[current].classList.add('active');if(counter) counter.textContent=String(current+1).padStart(2,'0');}
function auto(){clearInterval(timer);timer=setInterval(()=>showSlide(current+1),6000)}
document.querySelector('.hero-next')?.addEventListener('click',()=>{showSlide(current+1);auto()});auto();

const header=document.querySelector('.header');
const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
window.addEventListener('scroll',()=>header.classList.toggle('stuck',window.scrollY>120),{passive:true});

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
window.addEventListener('load',()=>document.querySelectorAll('.hero .reveal').forEach(el=>el.classList.add('visible')));

const modal=document.getElementById('flyer-modal');
document.getElementById('open-flyer')?.addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false')});
modal?.querySelector('.modal-close')?.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')});
modal?.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape') modal?.classList.remove('open')});

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}},{passive:true});
