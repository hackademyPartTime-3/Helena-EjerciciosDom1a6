
let productos = [
    {
        nombre: "Bolsos",
        precio: "45$",
        tienda:"Channels outlet",
        caracteristica:"Saber Màs",
        img: "./img/bolso.jpg"
    },

    {
        nombre: "Zapatillas",
        precio: "55$",
        tienda:"NikeSoutlet",
        caracteristica:"Saber Màs",
        img: "./img/zapatillas.jpg"
    },

    {
        nombre: "Accesorios",
        precio: "25$",
        tienda:"MangoShop",
        caracteristica:"Saber Màs",
        img: "./img/objetos varios.jpg"
    },

    {
        nombre: "Sauvage purfam",
        precio: "65$",
        tienda:"Cosmetics Dior",
        caracteristica:"Saber Màs",
        img: "./img/perfume.jpg"
    },

];
// primero llamo a la variable que contiene los elementos de quiero poner en la card
productos.forEach(producto=>{
let fila = document.querySelector('#fila');
let cols= document.createElement('div');
cols.classList.add("col-12", "col-md-3", "d-flex","justify-content-center");

cols.innerHTML= `
                <div class="card border-0 rounded-6 fondo_card" style="width: 18rem;">
                    <img src="${producto.img}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <h5 class="card-title">${producto.precio}</h5>
                      <h5 class="card-title">${producto.tienda}</h5>
                      <p class="card-text">${producto.caracteristica}</p>
                    </div>
                </div>
`
fila.appendChild(cols);


})