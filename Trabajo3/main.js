// Variables para el carrito y el total
const carrito = document.querySelector('#lista-carrito');
const totalPagar = document.querySelector('#total-pagar');
let total = 0;

// Función para agregar un producto al carrito
function agregarProductoAlCarrito(nombre, precio) {
    // Crear un elemento de lista para el producto
    const producto = document.createElement('li');
    producto.textContent = `${nombre}: $${precio}`;

    // Agregar el producto al carrito
    carrito.appendChild(producto);

    // Actualizar el total
    total += precio;
    totalPagar.textContent = `$${total}`;
}

// Event listener para los botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.agregar-carrito');
botonesAgregar.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        const productoNombre = e.target.getAttribute('data-producto');
        const productoPrecio = parseInt(e.target.previousElementSibling.textContent.replace('Precio: $', ''), 10);
        agregarProductoAlCarrito(productoNombre, productoPrecio);
    });
});
