function validarNombreApellidos(texto) {
  let pattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!pattern.test(texto)) {
    alert("El nombre no puede contener numeros");
    return false;
  }
}

function validarEmail(email) {
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    alert("Formato del e-mail incorrecto");
  }
}

function validarDNI(dni) {
  let pattern = /^\d{8}[A-Za-z]$/;
  if (!pattern.test(dni)) {
    alert("Formato del DNI incorrecto");
  }
}

function validarPassword(pass) {
  if (pass.length < 6) {
    alert("Contraseña demasiado corta. Debe ser como minimo de 6 caracteres");
  }
}

function validarPasswordIguales(pass1, pass2) {
  if (pass1 !== pass2) {
    alert("LAs contraseñas no coinciden");
  }
}

let ipValido = function(ip) {
  let pattern = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/;
  if (!pattern.test(ip)) {
    return false;
  }else {
    return true;
  }
}

function envio() {
    if (validarNombreApellidos) {
        alert("Campos enviados");
    }else {
        alert("Algun campo falla");
    }
}

if (!ipValido) {
    alert("Algo esta mal");
}
