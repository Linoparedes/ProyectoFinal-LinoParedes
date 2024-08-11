const productos = [
    {id:1, nombre:"Remera Blanca", descripcion:"Remera corte boxy lisa escote redondo- Tela algodón.", precio:30500, imagen:"remera01.webp", categoria:"remeras"},
    {id:2, nombre:"Remera Celeste", descripcion:"Remera corte boxy lisa escote redondo- Tela algodón.", precio:32000, imagen:"remera02.webp", categoria:"remeras"},
    {id:3, nombre:"Remera Amarilla", descripcion:"Remera corte boxy lisa escote redondo- Tela algodón.", precio:29000, imagen:"remera03.webp", categoria:"remeras"},
    {id:4, nombre:"Remera Rosa", descripcion:"Remera corte boxy lisa escote redondo- Tela algodón.", precio:25000, imagen:"remera04.webp", categoria:"remeras"}
]

function agregarProducto(id) { 
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarritoLS();
    carrito.push(producto);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
    console.log("El producto #" + id + " se ha agregado correctamente al Carrito!");
}

function eliminarProducto(id) {
    const carrito = cargarCarritoLS();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarritoLS(carritoActualizado);
    renderCarrito();
    renderBotonCarrito();
    console.log("El producto #" + id + " se ha eliminado correctamente del Carrito!");
}

function renderBotonCarrito() {
    let total = totalProductos();
    document.getElementById("totalCarrito").innerHTML = total;
}

function totalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.length;
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
    console.log("El carrito se ha vaciado correctamente!");
}

function cargarProductoLS() {
    let id = JSON.parse(localStorage.getItem("producto"));
    const producto = productos.find(item => item.id == id);

    return producto;
}

function guardarProductoLS(id) {
    localStorage.setItem("producto", JSON.stringify(id));
}

setTimeout(() => {
    console.log("Gracias Profes!");
    }, 5000)

    let boton =
document.getElementById("nosotros")
boton.addEventListener("click", funApi)
function funApi() {
    fetch("https://pokeapi.co/api/v2/gender")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
