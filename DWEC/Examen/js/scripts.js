const pelicula = "Papa Noel y sus amigos";
let letras = [];
let ultimaLetra = "";
let intentos = 0;
let valorLetra = 1000;
let puntos = 0;

reiniciarJuego();
//Creamos el teclado
crearTeclado();
crearCasillas();

document.querySelectorAll(".tecla").forEach((tecla) => {
  tecla.addEventListener("click", () => {
    const boton = tecla.innerText.trim();
    anyadirLetra(boton);
  });
  tecla.addEventListener("mousedown", () => {
    const boton = tecla.innerText.trim();
    let letrasUsadas = document.querySelectorAll(".letraUsada");

    if (letras.includes(boton)) {
      letrasUsadas.forEach((letra) => {
        if (letra.innerText === boton) {
          letra.classList.add("repetida");
        }
      });
    }
  });

  tecla.addEventListener("mouseup", () => {
    let letrasUsadas = document.querySelectorAll(".letraUsada");
    letrasUsadas.forEach((letra) => {
      letra.classList.remove("repetida");
    });
  });

});

document.querySelectorAll(".tecla").forEach((tecla) => {
    tecla.addEventListener("keydown", (event) => {
        const tecla = event.key;
        anyadirLetra(tecla.toUpperCase());
    });
});



function crearCasillas() {
  const padre = document.getElementById("titulo");
  let divPelicula = document.createElement("div");
  divPelicula.id = "divPelicula";

  for (let i = 0; i < pelicula.length; i++) {
    let casilla = document.createElement("div");
    casilla.classList.add("letraPeli");
    casilla.classList.add("letraOculta");
    casilla.innerText = pelicula[i];
    if (pelicula[i] === " ") {
      casilla.classList.add("espacio");
    }
    divPelicula.appendChild(casilla);
  }

  padre.appendChild(divPelicula);
}

//Función para la creación del teclado
function crearTeclado() {
  //Creamos cada tecla con su carácter correspondiente (mediante su código) y la añadimos al teclado.
  for (let teclaActual = 65; teclaActual <= 90; teclaActual++) {
    tecla = document.createElement("button");
    tecla.innerText = String.fromCharCode(teclaActual);
    tecla.classList.add("tecla");
    teclado.appendChild(tecla);
  }
}

//Función para reiniciar el juego
function reiniciarJuego() {
  //Ocultamos las partes del muñeco
  const partes = document.querySelectorAll(".extremidad");

  partes.forEach((parte) => {
    parte.setAttribute("hidden", "true");
  });
}

function anyadirLetra(boton) {
  console.log(boton);
  document.getElementById("ultimaLetra").innerText = boton;
  ultimaLetra = boton;

  if (!letras.includes(boton)) {
    let contenedorLetrasUsadas = document.getElementById(
      "contenedorLetrasUsadas"
    );
    let div = document.createElement("div");
    div.classList.add("letraUsada");
    div.innerText = boton;
    contenedorLetrasUsadas.appendChild(div);

    letras.push(boton);
    console.log(letras);

    comprobar(boton);
  }
}

function comprobar(boton) {
  let extremidadades = document.querySelectorAll(".extremidad");
  let casillas = document.querySelectorAll(".letraOculta");
  let puntuacion = document.getElementById("puntuacion");
  casillas.innerText = pelicula;

  while (intentos < extremidadades.length && valorLetra > 0) {
    if (!pelicula.includes(boton)) {
    extremidadades[intentos].removeAttribute("hidden");
    valorLetra -= 100;
    intentos++;
    return;
  }
  
  if (pelicula.includes(boton)) {
    puntos += valorLetra;
    puntuacion.innerText = puntos;
    casillas.forEach((casilla) => {
      if (casilla.innerText === boton) {
        casilla.classList.remove("letraOculta");
      }
    });
  }
  }

  

  if (intentos === extremidadades.length) {
    console.log("HAS PERDIDO");
    let final = document.createElement("div").innerText = "LOSER";
    final.classList.add("protector");
    document.body.appendChild(final);
  }


  
}
