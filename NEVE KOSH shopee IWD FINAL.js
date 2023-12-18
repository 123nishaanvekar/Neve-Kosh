 let loginForm = document.querySelector('.login-form-container');
 let formClose = document.querySelector('#form-close');
 let formBtn = document.querySelector('#login-btn');
 formBtn.addEventListener('click', () => { 
    loginForm.classList.add('active');
 });
  
 formClose.addEventListener('click', () => { 
    loginForm.classList.remove('active');
 });

 let navbar = document.querySelector('.navbar');
 const close=document.querySelector(".close"); 
 const open=document.querySelector(".ham"); 
 const menu=document.querySelector(".menu") 
 
 close.addEventListener("click",()=>
 { 
 menu.style.visibility="hidden":6;
 })
 
 open.addEventListener("click",()=>
 { 
 menu.style.visibility="visible"; 
 })