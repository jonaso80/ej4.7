let board = document.querySelector('.board');
// Variables de estado del juego (¡Imprescindibles!)
let cartasGiradas = []; // Para guardar las 2 cartas que el jugador ha girado
let bloqueado = false;  // Para impedir clics mientras se comprueban las cartas

crearCartas();
contenidocartas();

board.addEventListener('click', clickCartas);

// 1. Creación de las cartas (y empiezan boca abajo sin 'flipped')
function crearCartas() {
    for (let i = 0; i < 16; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        // Quitar 'flipped' aquí para que empiecen boca abajo
        // card.classList.add('flipped');
        board.appendChild(card);
    }
}

// 2. Asignación y Barajado de contenido (¡Función independiente y limpia!)
function contenidocartas() {
    let cartas = document.querySelectorAll('.card');
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
    const valoresCartas = [...numeros, ...numeros];

    // Algoritmo Fisher-Yates (Barajado)
    for (let i = valoresCartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [valoresCartas[i], valoresCartas[j]] = [valoresCartas[j], valoresCartas[i]];
    }

    // Asignar el contenido a las cartas
    cartas.forEach((card, index) => {
        card.innerHTML = valoresCartas[index];
    });
}


function clickCartas(event) {
    const cartaClicked = event.target;

    // ⛔ 1. Guardias: Evitar clics innecesarios
    if (!cartaClicked.classList.contains('card') || bloqueado ||
        cartaClicked.classList.contains('matched') ||
        cartaClicked.classList.contains('flipped')) {
        return;
    }

    // ✅ 2. Girar la carta
    cartaClicked.classList.add('flipped');
    cartasGiradas.push(cartaClicked);

    // ⏳ 3. Comprobar si hay dos cartas giradas
    if (cartasGiradas.length === 2) {
        bloqueado = true; // Bloquea clics adicionales

        const [carta1, carta2] = cartasGiradas;

        if (carta1.innerHTML === carta2.innerHTML) {
            // ¡SON IGUALES!
            carta1.classList.add('matched');
            carta2.classList.add('matched');
            resetCartasGiradas(); // Prepara para el siguiente par
        } else {
            // ¡NO SON IGUALES!
            setTimeout(() => {
                carta1.classList.remove('flipped'); // Vuelve a voltear
                carta2.classList.remove('flipped'); // Vuelve a voltear
                resetCartasGiradas(); // Prepara para el siguiente par
            }, 1000); // Espera 1 segundo para que el jugador vea la carta
        }
    }
}

// Pequeña función auxiliar para mantener el código limpio
function resetCartasGiradas() {
    cartasGiradas = [];
    bloqueado = false;
}