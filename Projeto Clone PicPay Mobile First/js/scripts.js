//Controlando o menu mobile
const menuIcon   = document.querySelector('.menu-icon')
const menuList   = document.querySelector('.nav-list')
const imgMenu    = document.querySelector('.menu-icon img')

menuIcon.addEventListener('click',() =>{
    if(menuList.classList.contains('ativo')){
        menuList.classList.remove('ativo')
        imgMenu.src = './images/menu/menu.png'
    }else{
        menuList.classList.add('ativo')
        imgMenu.src = './images/menu/close.png'
    }   
})