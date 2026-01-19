//export default function getWordle(word){return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response=>response.json())}

export function comprobarPalabra() {

    for (let i = 0; i < palabraUser.length; i++) {
        if (palabra[i] === palabraUser[i]) {

            rows[rowActual].querySelectorAll(".tile")[i].classList.add("correct");
        }else if (palabra.includes(palabraUser[i])){
            rows[rowActual].querySelectorAll(".tile")[i].classList.add("present");
        }else {
            rows[rowActual].querySelectorAll(".tile")[i].classList.add("absent");
        }
    }
    if (palabraUser === palabra) {
        setTimeout(() => {
            alert("Has ganao");

            for (let i=0; i < rows.length; i++) {
                rows[i].querySelectorAll(".tile").forEach(tile => {
                    tile.textContent = "";
                    tile.classList.remove("correct", "present", "absent", "key");
                });

            }
        }, 600);

    }   else {
        intentos--;
        rowActual++;
        tileActual = 0;
        palabraUser = "";
    }
}

export function manejarTecla(tecla) {
    let tiles = rows[rowActual].querySelectorAll(".tile");
    if (tecla === "⌫") {
        if (tileActual > 0) {
            tileActual--;
            palabraUser = palabraUser.slice(0, -1);
            tiles[tileActual].textContent = "";
        }
        return;
    }

    if (tecla === "BACKSPACE") {
        if (tileActual > 0) {
            tileActual--;
            palabraUser = palabraUser.slice(0, -1);
            tiles[tileActual].textContent = "";
        }
        return;
    }

    if (tecla === "ENTER") {
        if (palabraUser.length === palabra.length) {
            comprobarPalabra();
        }
        return;
    }

    if (/^[A-Z]$/.test(tecla)) {
        if (tileActual < tiles.length) {
            rows[rowActual].querySelectorAll(".tile")[tileActual].classList.add("key");
            tiles[tileActual].textContent = tecla;
            palabraUser += tecla;
            tileActual++;
        }
    }
}