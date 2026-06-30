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