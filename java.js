let closeBtn = document.querySelector('.fa-times');
let openBtn = document.querySelector('.fa-bars');
let sideBarMenu = document.querySelector('.nav');
let closeNow = document.querySelector('.close');

//open navbar
openBtn.addEventListener('click', ()=>{
    sideBarMenu.style.width = "250px";
})
closeBtn.addEventListener('click', ()=>{
    sideBarMenu.style.width="0";
})

closeNow.addEventListener('click',()=>{
    sideBarMenu.style.width="0";
})