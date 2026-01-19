let naranja = document.getElementById("naranja");
let boton = document.getElementById("boton");
let tiempo = Math.floor(Math.random() * (5-2+1)) + 2;
let tiempoInicio = 0;
let tiempoEnPulsar = 0;


function posicionAleatoria() {
    const maximo = 400;
    const minimo = 0;

    let top = Math.floor(Math.random()*(maximo-minimo+1)+minimo);
    let left = Math.floor(Math.random()*(maximo-minimo+1)+minimo);

    boton.style.top = top + 'px';
    boton.style.left = left + 'px';
}

function hacerVisible() {
    console.log("Me hago visible");
    naranja.classList.remove("oculto");

    tiempoInicio = Date.now();
}

function medirTiempo() {
    let tiempoFinal = Date.now();
    let tiempoTranscurrido = tiempoFinal - tiempoInicio;
    alert("El tiempo transcurrido ha sido de "+tiempoTranscurrido+ " milisegundos");
}

posicionAleatoria();
boton.addEventListener("click", medirTiempo);
setTimeout(hacerVisible, tiempo*1000);