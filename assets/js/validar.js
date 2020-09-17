function validar() {
    var nombre, correo, telefono, asunto, mensaje, expresion;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    asunto = document.getElementById("asunto").value;
    mensaje = document.getElementById("mensaje").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if (nombre === "" || correo === "" || telefono === "" || asunto === "" || mensaje === "") {

        swal({
            title: "Todos los campos son obligatorios",
            icon: "warning",
            button: "OK",
        });
        return false;
    } else if (nombre.length < 4 || nombre.length > 60) {

        swal({
            title: "El nombre debe contener entre 4 a 60 caracteres",
            icon: "warning",
            button: "OK",
        });
        return false;
    } else if (telefono.length < 6 || telefono.length > 10) {

        swal({
            title: "El Nro de teléfono debe contener entre 6 a 10 caracteres",
            icon: "warning",
            button: "OK",
        });
        return false;
    } else if (isNaN(telefono)) {
        swal({
            title: "El teléfono ingresado no es un número",
            icon: "warning",
            button: "OK",
        });
        return false;
    } else if (correo.length > 100) {

        swal({
            title: "El correo es muy largo",
            icon: "warning",
            button: "OK",
        });
        return false;
    } else if (!expresion.test(correo)) {
        swal({
            title: "El correo no es válido",
            icon: "warning",
            button: "OK",
        });
        return false;
    } else if (asunto.length < 3 || asunto.length > 60) {

        swal({
            title: "El asunto debe contener entre 3 a 60 caracteres",
            icon: "warning",
            button: "OK",
        });
        return false;
    } else if (mensaje.length < 5 || mensaje.length > 300) {

        swal({
            title: "El mensaje debe contener entre 2 a 60 palabras",
            icon: "warning",
            button: "OK",
        });
        return false;
    }

}