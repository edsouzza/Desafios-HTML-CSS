let input      = document.querySelector('#campoCPF')
let link       = document.querySelector('.link')
let items      = document.querySelectorAll('.item')
let acordeon   = document.querySelectorAll('.acordeon__item')

//Mudando a cor do placeholder qdo o campor receber o foco
input.addEventListener('focus', function (){
    input.setAttribute('class', 'placeholder-grayDark');
})

//Mudando a cor do placeholder qdo o campor perder o foco
input.addEventListener('blur', function (){
    input.setAttribute('class', 'placeholder-gray');
})

//Mudando a cor do linki qdo passar o mouse sobre a li e voltando a cor inicial qdo li perder o foco
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

// Altenando entre o menu hamburger e o X de fechar
// document.addEventListener("DOMContentLoaded", () => {
//     let imgOpen  = document.querySelector('.imgOpen');
//     let imgClose = document.querySelector('.imgClose');

//     imgOpen.addEventListener('click', () => {
//         imgOpen.style.display  = 'none';
//         imgClose.style.display = 'block';
//     });

//     imgClose.addEventListener('click', () => {
//         imgClose.style.display = 'none';
//         imgOpen.style.display  = 'block';
//     });
// });
