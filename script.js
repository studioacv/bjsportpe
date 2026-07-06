const topbar=document.getElementById('topbar');
const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
const modal=document.getElementById('loginModal');
const closeLogin=document.getElementById('closeLogin');
const formNote=document.getElementById('formNote');

window.addEventListener('scroll',()=>{topbar.classList.toggle('scrolled',window.scrollY>20)});
menuToggle?.addEventListener('click',()=>mainNav.classList.toggle('open'));
mainNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));

function openModal(){modal.classList.add('show');modal.setAttribute('aria-hidden','false')}
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}
['openLogin','heroLogin','ctaLogin','mockLogin'].forEach(id=>document.getElementById(id)?.addEventListener('click',openModal));
closeLogin?.addEventListener('click',closeModal);
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();formNote.textContent='Mensaje registrado correctamente. Demo visual sin backend.';e.target.reset()});
document.getElementById('loginForm')?.addEventListener('submit',e=>{e.preventDefault();alert('Demo visual: aquí se conectará el login del sistema BJ Sport IA.')});

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
