const input = document.querySelector('#campoCPF');

input.addEventListener('focus', function (){
    input.setAttribute('class', 'placeholder-grayDark');
})

input.addEventListener('blur', function (){
    input.setAttribute('class', 'placeholder-gray');
})