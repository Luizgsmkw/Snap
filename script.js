const features = document.querySelector('.features-link');
const company = document.querySelector('.company-link');
const lista1 = document.querySelector('.container-list1');
const lista2 = document.querySelector('.container-list2');
const navBarResponsivo = document.querySelector('.nav-bar')



function aparecerLista() {
    lista1.classList.toggle('lista-visivel')
}

function aparecerLista2() {
    lista2.classList.toggle('lista-visivel2')
}

function menuHamburguer() {
    navBarResponsivo.classList.toggle('navBarResponsivo');
}