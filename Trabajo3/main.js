const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en zapatillas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevazapatilla = document.createElement("div");
    nuevazapatilla.classList = "tarjeta-producto"; 
    nuevazapatilla.innerHTML = `
    <img src="./imagenes/Productos/${producto.id}.jpg" alt="zapatilla1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevazapatilla);
    nuevazapatilla.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(zapatillas);