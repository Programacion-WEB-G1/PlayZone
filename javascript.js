function Validar (){
    verificarContrasena();
    validarEdad();

}
function verificarContrasena() {
    var pass1 = document.getElementById("inputPassword6").value;
    var pass2 = document.getElementById("inputPassword7").value;
    var tieneMayuscula = /[A-Z]/.test(pass1);
    var tieneNumero = /[0-9]/.test(pass1);
    if (tieneMayuscula && tieneNumero) {
    } else {
        alert(
            "La contraseña debe contener al menos una mayúscula y un número."
        );
        return;
    }
    if (pass1 === pass2) {
    } else {
        alert("Las contraseñas deben ser iguales");
    }
}

  function validarEdad() {
    var fechaInput = document.getElementById("validationDefault05").value;
    var fechaNacimiento = new Date(fechaInput);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }

    if (edad < 18) {
      alert("Debes ser mayor de 18 años para acceder.");
      return false;
    }

    return true;
}

document.getElementById('btn-editar').addEventListener('click', function() {
    // Mostrar el formulario de edición
    document.getElementById('form-edicion').style.display = 'flex';
});
