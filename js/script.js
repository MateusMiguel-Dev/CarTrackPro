var btnMenu = document.querySelector('#s-menu')
var expBar = document.querySelector('#nav-lat')
var divContent = document.querySelector('#interface')
btnMenu.addEventListener('click', function(){
    expBar.classList.toggle('expandir')
    divContent.classList.toggle('expand')
})

