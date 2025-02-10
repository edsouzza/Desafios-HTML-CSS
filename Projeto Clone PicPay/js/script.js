let input = document.querySelector('#campoCPF');
let link    = document.querySelector('.link');
let items   = document.querySelectorAll('.item');

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
