import { comprobarPalabra, manejarTecla } from './functions/functions.js';

let palabra = "jaula".toUpperCase();
let palabraUser = "";
let intentos = 5;

let rows = document.querySelectorAll(".row");
let rowActual = 0;
let tileActual = 0;

let teclas = document.querySelectorAll(".key");

document.addEventListener("keydown", (evento) => {
    const tecla = evento.key.toUpperCase();
    manejarTecla(tecla);
});

teclas.forEach(tecla => tecla.addEventListener("click", (evento) => {
    const tecla = evento.target.textContent;
    manejarTecla(tecla);
}));