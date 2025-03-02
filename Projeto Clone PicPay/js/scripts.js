let link       = document.querySelector('.link')
let items      = document.querySelectorAll('.item')
let acordeon   = document.querySelectorAll('.acordeon__item')

//Mudando a cor do link qdo passar o mouse sobre a li e voltando a cor inicial qdo li perder o foco
items.forEach(item => {
    item.addEventListener('mousemove', function () {
        let link = item.querySelector('.link'); // Pega SOMENTE o link dentro do item
        if (link) {
            link.style.color = "#686868";
        }
    });

    item.addEventListener('mouseleave', function () {
        let link = item.querySelector('.link'); // Pega SOMENTE o link dentro do item
        if (link) {
            link.style.color = "#000"; // Retorna ao estilo original
        }
    });
});

//Controlando a abertura e fechamento do acordeon
acordeon.forEach(item => {
    item.addEventListener('click', (event) => {
        let descricao = item.nextElementSibling; // Seleciona a descrição correspondente
        let seta = item.querySelector('.acordeon__seta'); // Seleciona a seta

        if (descricao && descricao.classList.contains('acordeon__descricao')) {
            descricao.classList.toggle('hidden'); // Alterna a visibilidade da descrição
        }

        if (event.target.classList.contains('acordeon__seta') || event.target.classList.contains('acordeon__title')) {
            seta.classList.toggle('girar'); // Gira a seta apenas se clicar no título ou na seta
        }
    });
});

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
