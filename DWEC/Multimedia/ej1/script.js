const reproductor = document.getElementById("reproductor");
const rutaVideo = document.getElementById("videoSource");
const listaVideos = document.querySelectorAll(".miniatura");
const barraContenedor = document.querySelector(".barra-contenedor");
const anuncio = document.querySelector(".anuncio");
const cerrarAnuncio = document.getElementById("close");
const controles = document.querySelector(".controles");

let playPause = document.getElementById("play");
let silenciarButton = document.getElementById("silenciar");
let retrocederButton = document.getElementById("retroceder");
let avanzarButton = document.getElementById("avanzar");
let reiniciarButton = document.getElementById("reiniciar");
let volumenDownButton = document.getElementById("volumeDown");
let volumeUpButton = document.getElementById("volumeUp");
let tiempoDiv = document.querySelector(".tiempo");

let avanzar = 10;

reiniciar();

listaVideos.forEach((miniatura) => {
  miniatura.addEventListener("click", () => {
    const newSrc = miniatura.getAttribute("data-video-src");

    reiniciar();

    if (newSrc) {
      rutaVideo.src = newSrc;
      reproductor.load();
    } else {
      alert("fallo del sistema");
    }
  });
});

playPause.addEventListener("click", () => {
  if (reproductor.paused) {
    reproductor.play();
  } else {
    reproductor.pause();
  }
});

silenciarButton.addEventListener("click", () => {
  reproductor.muted = !reproductor.muted;
});

retrocederButton.addEventListener("click", () => {
  reproductor.currentTime -= avanzar;
});

avanzarButton.addEventListener("click", () => {
  reproductor.currentTime += avanzar;
});

reiniciarButton.addEventListener("click", () => {
  reproductor.currentTime = 0;
});

volumeUpButton.addEventListener("click", () => {
  if (reproductor.volume < 1) {
    reproductor.volume = Math.min(1, reproductor.volume + 0.1);
  }
});

volumenDownButton.addEventListener("click", () => {
  if (reproductor.volume > 0) {
    reproductor.volume = Math.max(0, reproductor.volume - 0.1);
  }
});

reproductor.addEventListener("timeupdate", () => {
  const porcentaje = (reproductor.currentTime / reproductor.duration) * 100;
  tiempoDiv.style.width = `${porcentaje}%`;
});

barraContenedor.addEventListener("click", (e) => {
  const clickX = e.offsetX;
  const barraWidth = barraContenedor.offsetWidth;
  const clickRatio = clickX / barraWidth;

  reproductor.currentTime = clickRatio * reproductor.duration;
});

cerrarAnuncio.addEventListener("click", () => {
  anuncio.style.display = "none";
});

function reiniciar() {
  anuncio.style.display = "block";
  cerrarAnuncio.style.display = "none";
  controles.style.visibility = "hidden";

  setTimeout(() => {
    cerrarAnuncio.style.display = "block";
    controles.style.visibility = "visible";
  }, 10000);
}
