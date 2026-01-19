function ratonEncima(elemento) {
    elemento.classList.add("circulo");
}

function ratonSale(elemento) {
    elemento.classList.remove("circulo");
}

function pulsarMantener(elemento) {
    elemento.classList.remove("sombra");
}

function pulsarSoltar(elemento) {
    elemento.classList.add("sombra");
}

function doblePulsar(elemento) {
    elemento.classList.remove("sombra");
    elemento.classList.add("sombraDentro");
    elemento.classList.add("circulo");
}

function eliminar(elemento) {
    elemento.parentNode.remove();
}