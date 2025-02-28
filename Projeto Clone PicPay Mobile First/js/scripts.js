//Controlando o menu mobile
const menuIcon   = document.querySelector('.menu-icon')
const menuList   = document.querySelector('.nav-list')
const imgMenu    = document.querySelector('.menu-icon img')
const body       = document.querySelector('body')

menuIcon.addEventListener('click',() =>{
    if(menuList.classList.contains('ativo')){
        menuList.classList.remove('ativo')
        imgMenu.src = './images/menu/menu.png'
        body.style.overflowY = 'auto'
    }else{
        menuList.classList.add('ativo')
        imgMenu.src = './images/menu/close.png'
        body.style.overflowY = 'hidden'
    }   
})