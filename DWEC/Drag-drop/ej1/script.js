const div1 = document.querySelector('.contenedor1');
const div2 = document.querySelector('.contenedor2');
let imagen = document.getElementById("imagen");

imagen.addEventListener("dragstart", ()=> {
    console.log("Arrastre iniciado");
});

div2.addEventListener("dragover", (evento)=> {
    evento.preventDefault();
});

div2.addEventListener("drop", () => {
    div2.appendChild(imagen);
});