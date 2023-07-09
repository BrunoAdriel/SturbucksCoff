//Documentos vinculados

let contenedorProductos = document.getElementById("nuestrosProductos");
let tablaCarro  = document.getElementById('tablaCarro');
let carritoGuardado = JSON.parse(localStorage.getItem('carro'));
mostrar ();
let carro = carritoGuardado || [];
let totalAPAGAR = document.getElementById('total');

//DOM

//funcion para renderizar los productos
function renderizarProductos(lista){
    for (const prod of lista){
        contenedorProductos.innerHTML+=`<div class="card" style="width: 18rem;">
        <img src=${prod.foto} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">${prod.precio}.</p>
            <button id=${prod.id} class="btn btn-primary comprar">Comprar</button>
        </div>`;
    }

    //evento botones

    let buttons = document.getElementsByClassName('comprar');
    for(const boton of buttons ){
        boton.addEventListener('click', ()=> {
            const prodACarro = products.find((prodd) => prodd.id == boton.id);
            agregarACarrito(prodACarro);
        })
    }
}

renderizarProductos(products);

//Carrito

function agregarACarrito(p){
    carro.push(p);
    tablaCarro.innerHTML += `
    <tr>
        <td>${p.foto}</td>
        <td>${p.nombre}</td>
        <td>${p.precio}</td>
        <td><button class="btn btn-primary eliminar">Eliminar</button></td>
    </tr>
    `;

    let total = carro.reduce((ac, prod) => ac + prod.precio, 0);

    totalAPAGAR.innerHTML =  `Total a pagar total $ ${total}` ;
    localStorage.setItem('carro', JSON.stringify(carro));

//Eliminar prod de carrito

    let eliminar = document.getElementsByClassName('eliminar');
    for (const btn of eliminar) {
        btn.addEventListener('click',(element)=>{
            element.target.parentNode.parentNode.remove();
        })
    }


}

function mostrar() {
    if(carritoGuardado != null){
        carritoGuardado.forEach(e=> {
            tablaCarro.innerHTML += `
            <tr>
                <td>${e.foto}</td>
                <td>${e.nombre}</td>
                <td>${e.precio}</td>
                <td><button class="btn btn-primary eliminar">Eliminar</button></td>
            </tr>
            `;
        });
    }

    //Eliminar prod de carrito \copie el codigo de arriba 

    let eliminar = document.getElementsByClassName('eliminar');
    for (const btn of eliminar) {
        btn.addEventListener('click',(element)=>{
            element.target.parentNode.parentNode.remove();
        })
    }


};





//////////

    // carritoGuardado.forEach(element => {
    //     tablaCarro.innerHTML += `
    //     <tr>
    //         <td>${p.foto}</td>
    //         <td>${p.nombre}</td>
    //         <td>${p.precio}</td>
    //     </tr>
    //     `
    //     element.appendChild(tablaCarro);
    // });

/////


    // for (const carro of carritoGuardado){
    //     carro.push(p);
    //     tablaCarro.innerHTML += `
    //     <tr>
    //         <td>${p.foto}</td>
    //         <td>${p.nombre}</td>
    //         <td>${p.precio}</td>
    //     </tr>
    //     `
    //     carro.appendChild(tablaCarro);
    // }

// funciones antiguas

// let aPagar = parseFloat(prompt("Ingresa un precio maximo a pagar\n 0-para salir"));

// function filtrarPorPrecio(precio){
//     const filtrado = products.filter((prod)=> prod.precio <= precio);
//     return filtrado;
// } 

//funcion para filtrar productos por precio 
// while(aPagar != 0){
//     if(isNaN(aPagar)){
//         alert("ingresaste un precio no valido");
//     }else{
//         const prodFiltrado = filtrarPorPrecio(aPagar);
//         console.table(prodFiltrado);
//         renderizarProductos(prodFiltrado);
//     }
    
//     aPagar = parseFloat(prompt("Ingresa un precio maximo a pagar\n 0-para salir"));
// }