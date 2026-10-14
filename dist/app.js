'use strict';
const menu=document.querySelector('#menu'),nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','메뉴 열기')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','메뉴 열기');menu.focus()}});
const faces=['줄연마','니들연마','샌드연마','곡률성형'];let face=0,turn=0;
function selectFace(i){face=i;turn=i;document.querySelector('#cube').style.transform=`rotateX(-22deg) rotateY(${-32-turn*90}deg)`;document.querySelector('#face-label').textContent=`0${i+1} / ${faces[i]}`;document.querySelectorAll('[data-face]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.face)===i)))}
document.querySelector('#rotate').addEventListener('click',()=>selectFace((face+1)%4));
document.querySelectorAll('[data-face]').forEach(b=>b.addEventListener('click',()=>selectFace(Number(b.dataset.face))));
document.querySelectorAll('[data-interest]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('[name=product]').value=a.dataset.interest}));
const form=document.querySelector('#interest-form'),contact=form.elements.contact,status=document.querySelector('#form-status');
function validateContact(){const v=contact.value.trim();const good=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||/^01[016789]\d{7,8}$/.test(v.replace(/[\s()-]/g,''));contact.setCustomValidity(good?'':'이메일 주소 또는 올바른 휴대전화 번호를 입력해 주세요.');return good}
contact.addEventListener('input',()=>{contact.setCustomValidity('');status.textContent=''});
form.addEventListener('submit',e=>{e.preventDefault();validateContact();if(!form.elements.name.value.trim())form.elements.name.setCustomValidity('이름을 입력해 주세요.');if(!form.reportValidity())return;status.textContent='입력 형식을 확인했습니다. 현재는 미리보기로, 신청 내용은 저장·전송되지 않았습니다.'});
form.elements.name.addEventListener('input',()=>form.elements.name.setCustomValidity(''));
form.addEventListener('input',()=>{status.textContent=''});
const dialog=document.querySelector('#image-dialog');document.querySelectorAll('[data-expand]').forEach(b=>b.addEventListener('click',()=>{const img=b.querySelector('img');dialog.querySelector('img').src=img.src;dialog.querySelector('img').alt=img.alt;dialog.showModal()}));document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('pending');observer.unobserve(entry.target)}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('pending');observer.observe(el)})}
