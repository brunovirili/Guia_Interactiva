const recomendaciones = [
    "Salí a caminar durante 20 minutos.",
    "Realizá una rutina de estiramientos.",
    "Andá en bicicleta durante media hora.",
    "Probá hacer una caminata rápida.",
    "Subí escaleras en lugar de usar el ascensor.",
    "Hacé una rutina sencilla con tu propio peso."
];

// Espera a que cargue completamente la página
document.addEventListener("DOMContentLoaded", iniciar);

// Inicializa la aplicación
function iniciar() {
    console.log("Guía Interactiva cargada correctamente.");
    configurarEventos();
}

// Configura todos los eventos de la página
function configurarEventos() {

    const botonVolver = document.querySelector(".volver a");

    if (botonVolver) {
        botonVolver.addEventListener("mouseover", resaltarBoton);
        botonVolver.addEventListener("mouseout", quitarResaltado);
    }

    const boton = document.getElementById("btnRecomendacion");

    if (boton) {
        boton.addEventListener("click", mostrarRecomendacion);
    }

    const formulario = document.getElementById("formContacto");

    if (formulario) {
        formulario.addEventListener("submit", validarFormulario);
    }

    const campoMensaje = document.getElementById("mensaje");

    if (campoMensaje) {
        campoMensaje.addEventListener("input", actualizarContador);
    }
}

// Cambia la opacidad del botón
function resaltarBoton(evento) {
    evento.target.style.opacity = "0.8";
}

// Restaura la opacidad del botón
function quitarResaltado(evento) {
    evento.target.style.opacity = "1";
}

// Muestra una recomendación aleatoria
function mostrarRecomendacion() {
    const indice = Math.floor(Math.random() * recomendaciones.length);

    const resultado = document.getElementById("resultadoRecomendacion");

    resultado.textContent = recomendaciones[indice];
    resultado.style.fontWeight = "bold";
    resultado.style.marginTop = "15px";
}

// Valida el formulario de contacto
function validarFormulario(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const error = document.getElementById("mensajeError");

    try {

        if (nombre === "") {
            throw new Error("Debe ingresar su nombre.");
        }

        if (email === "") {
            throw new Error("Debe ingresar un email.");
        }

        if (!email.includes("@")) {
            throw new Error("El email no es válido.");
        }

        if (mensaje === "") {
            throw new Error("Debe escribir un mensaje.");
        }

        error.style.color = "green";
        error.textContent = "Formulario enviado correctamente.";

    } catch (e) {

        error.style.color = "red";
        error.textContent = e.message;
    }
}

// Actualiza el contador de caracteres del mensaje
function actualizarContador() {

    const mensaje = document.getElementById("mensaje");
    const contador = document.getElementById("contadorCaracteres");

    if (contador) {
        contador.textContent = `${mensaje.value.length} / 200 caracteres`;
    }
}