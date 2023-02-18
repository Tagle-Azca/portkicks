const botonMostrar = document.getElementById("botonMostrar");
const contenedorElementos = document.getElementById("contenedorElementos");
const imagenOculta = contenedorElementos.querySelector("img");

botonMostrar.addEventListener("click", () => {
contenedorElementos.style.display = "block";
imagenOculta.style.display = "inline";
});
