const filaForm = document.getElementById("fila");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", addFila);

const editButton = filaForm.querySelector(".editButton");
const deleteButton = filaForm.querySelector(".deleteButton");

editButton.addEventListener("click", function () {
  comprobarFila.call(this);
  editarInputs.call(this);
});

deleteButton.addEventListener("click", deleteFila);


function addFila() {
  const copia = filaForm.cloneNode(true);
  const inputscopia = copia.querySelectorAll("input");
  inputscopia.forEach((input) => input.setAttribute("disabled", ""));

  document.body.insertBefore(copia, document.querySelector(".addDiv"));

  const deletebtn = copia.querySelector(".deleteButton");
  deletebtn.addEventListener("click", deleteFila);

  const editbtn = copia.querySelector(".editButton");
  editbtn.addEventListener("click", function() {
    comprobarFila.call(this);
    editarInputs.call(this);
  });
}

function deleteFila() {
  let opcion = confirm(
    "¿Deseas eliminar la fila?"
  );

  if (opcion) {
    const fila = this.parentNode.parentNode;
    fila.remove();
  }
}

function editarInputs() {
  const fila = this.parentNode.parentNode;
  const inputsFila = fila.querySelectorAll("input");

  inputsFila.forEach((i) => i.removeAttribute("disabled"));
}

function comprobarFila() {
    const fila = this.parentNode.parentNode;

    const inputs = fila.querySelectorAll("input");

    inputs.forEach(input => {
        (input.value = "");
    } )
}
