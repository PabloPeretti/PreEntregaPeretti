const remeras = [
    { id: 1, nombre: "Oversize", precio: 13000 },
    { id: 2, nombre: "polar", precio: 15000 },
    { id: 3, nombre: "remera1", precio: 11500 },
    { id: 4, nombre: "polera", precio: 14500 },
    { id: 5, nombre: "OversizeNegra", precio: 13000 },
];

function stockProducto() {
    let nombre = prompt("Ingrese el producto").toLowerCase();

    while (nombre !== "ESC") {

        const remera = remeras.find((item) => item.nombre.toLowerCase() === nombre);

        if (remera) {
            let mensaje = ` 
                id : ${remera.id}
            nombre: ${remera.nombre}
            precio: ${remera.precio}
            `;

            alert(mensaje);
        } else {
            alert("Producto no encontrado en el stock")
        }

        nombre = prompt("Ingrese el producto a consultar o escriba ESC para salir");

    }
}

stockProducto(); 