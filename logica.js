
console.table(alimentos);
const carrito = [];
let contenedor = document.getElementById("cats");

function renderizarAlimentos(){
    for(const alimento of alimentos){
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${alimento.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${alimento.id}</h5>
                    <p class="card-text">${alimento.detalle}</p>
                    <p class="card-text">$ ${alimento.precio}</p>
                    <button id='btn${alimento.id}' class="btn btn-primary align-bottom">Comprar</button>
                </div>
            </div>   
        `;
    }
    
    //EVENTOS
    alimentos.forEach((alimento)=>{
        document.getElementById(`btn${alimento.id}`).addEventListener('click',()=>{
            agregarACarrito(alimento);
    });
});
}

renderizarAlimentos();

function agregarACarrito(Agregar){
    carrito.push(Agregar);
    console.table(carrito);
    
 alert(`Agregaste ${Agregar.detalle} al carrito de compras !`); 


    //agregar fila a la tabla de carrito
    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${Agregar.id}</td>
            <td>${Agregar.detalle}</td>
            <td>${Agregar.precio}</td>
        </tr>
    `;
    //incrementar el total
    let totalCarrito = carrito.reduce((acumulador,alimento)=>acumulador+alimento.precio,0);
    document.getElementById('total').innerText = 'Total a pagar $: '+totalCarrito;
}


//json
const guardoLocal = (clave, valor)=>{localStorage.setItem (clave,valor)};
guardoLocal('listaDeAlimentos',JSON.stringify(alimentos));

class alimento{
    constructor(Object){
        this.detalle = Object.alimento.Touppercase();
        this.precio = parseFloat (obj.precio);
    }

    sumaIva(){
        this.precio= this.precio*1.21;
    }
}
const almacenados = JSON.parse(localStorage.getItem('listaDeAlimentos'));
const producto = [];
for (const objetc of almacenados) {
    producto.push(new alimento(objetc));

}
for (const alimento of producto) {
    producto.sumaIva();
    
}


