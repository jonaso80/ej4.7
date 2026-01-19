let minutosUser = 0;
let tiempoSegundos = 0;
let intervaloID;
let input = document.getElementById("minutos");
let botonCronometro = document.getElementById("boton");
let parrafoCron = document.getElementById("cronometro");

function formatearTiempo(num) {
    // Función de utilidad para asegurar que números como '5' se muestren como '05'
    return String(num).padStart(2, '0');
}

function cronometro() {
    // 1. Detener cualquier intervalo anterior
    if (intervaloID) {
        clearInterval(intervaloID);
    }

    // 2. Inicializar el tiempo total en segundos
    minutosUser = parseInt(input.value, 10);
    tiempoSegundos = minutosUser * 60;
    
    // Si el tiempo es inválido o negativo, salimos.
    if (tiempoSegundos <= 0) {
        parrafoCron.textContent = "00:00";
        return;
    }

    // 3. Definir y comenzar el intervalo
    intervaloID = setInterval(function() {
        // Calcular los minutos y segundos a partir del tiempoSegundos actual
        const minutos = Math.floor(tiempoSegundos / 60);
        const segundos = tiempoSegundos % 60; // Segundos restantes dentro del minuto
        
        // Mostrar el tiempo con formato (ej: 01:05)
        parrafoCron.textContent = `${formatearTiempo(minutos)}:${formatearTiempo(segundos)}`;
        
        // 4. ¡LA CORRECCIÓN CLAVE! Decrementar la variable global del tiempo total
        tiempoSegundos--;

        // 5. Comprobar el final de la cuenta
        if (tiempoSegundos < 0) {
            clearInterval(intervaloID);
            parrafoCron.textContent = "¡Tiempo terminado!";
        }
    }, 1000); // El intervalo debe ser 1000 milisegundos (1 segundo)
}

botonCronometro.addEventListener('click', cronometro);