let pantalla = "";
let puedePonerPunto = true;
let puedePonerOperadores = true;

const inputPantalla = document.querySelector('#pantallaId input');
const operadores = ["+","-","x","/","%"];

document.querySelectorAll('.boton').forEach(boton => {
    boton.addEventListener('mousedown', () => boton.classList.add('sombra'));
    boton.addEventListener('mouseup', ()=> boton.classList.remove('sombra'));
    boton.addEventListener('click', ()=> {
        const tecla = boton.textContent.trim();
        manejarTecla(tecla);
    });
});

document.addEventListener("keydown", (event) => {
    const tecla = event.key;

    if (tecla === "Enter") {
        manejarTecla("=");
    } else if (tecla === "Backspace") {
        manejarTecla("<<");
    } else if (tecla === "*") {
        manejarTecla("x");
    } else if (tecla === "/" || tecla === "%" || tecla === "+" || tecla === "-") {
        manejarTecla(tecla);
    } else if (!isNaN(tecla) || tecla === ".") {
        manejarTecla(tecla);
    }
});

function manejarTecla(tecla) {
    if (!isNaN(tecla)) {
        if (pantalla === "0") {
            pantalla = "";
            pantalla += tecla;
            inputPantalla.value = pantalla;
        }else {
            pantalla += tecla;
            inputPantalla.value = pantalla;
        }
        puedePonerOperadores = true;

    } else if (tecla === "."){
        if (!puedePonerPunto) {
            return;
        }
        pantalla += tecla;
        inputPantalla.value = pantalla;
        puedePonerPunto = false;
    }else if (tecla === "C") {
        pantalla = "0";
        inputPantalla.value = pantalla;
    } else if (tecla === "<<") {
        pantalla = pantalla.slice(0, -1);
        inputPantalla.value = pantalla || "0";
    } else if (operadores.includes(tecla)) {
        if (!puedePonerOperadores) {
            return;
        }
        if (tecla === "x") {
            tecla = "*";
        }
        pantalla += tecla;
        inputPantalla.value = pantalla;
        puedePonerPunto = true;
        puedePonerOperadores = false;
    } else if (tecla === "()") {
        let abiertos = 0;
        let cerrados = 0;
        for (let i = 0; i < pantalla.length; i++) {
            if (pantalla[i] === "(") {
                abiertos++;
            } else if (pantalla[i] === ")") {
                cerrados++;
            }
        }

        if (abiertos > cerrados) {
            tecla = ")";
        }else {
            tecla = "(";
        }

        pantalla += tecla;
        inputPantalla.value = pantalla;
        puedePonerPunto = false;
        puedePonerOperadores = true;

    } else if (tecla === "=") {
        let resultado = operacion(pantalla);
            pantalla = resultado.toString();
            document.querySelector('#pantallaId input').value = pantalla;
            puedePonerPunto = true;
    }
}

function operacion(pantalla) {
    return eval(pantalla);
}