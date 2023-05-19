
console.table(alimentos);
let carrito = [];
let contenedor = document.getElementById("cats");
let finalizarBtn = document.getElementById('finalizar');
function renderizarAlimentos() {
    for (const alimento of alimentos) {
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${alimento.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title" >${alimento.nombre} </h5>
                    <p class="card-text">${alimento.detalle}</p>
                    <p class="card-text">$ ${alimento.precio}</p>
                    <button id='btn${alimento.id}' class="btn btn-primary align-bottom">Comprar</button>
                </div>
            </div>   
        `;
    }

    //EVENTOS
    alimentos.forEach((alimento) => {
        document.getElementById(`btn${alimento.id}`).addEventListener('click', () => {
            agregarACarrito(alimento);
        });
    });
}

renderizarAlimentos();

function agregarACarrito(Agregar) {
    carrito.push(Agregar);
    console.table(carrito);

    Swal.fire({
        title: '¡Producto agregado!',
        text: `Agregaste ${Agregar.detalle} al carrito de compras.`,
        icon: 'success',
        timer: 2000, // La alerta se cerrará automáticamente después de 2 segundos
        showConfirmButton: false // Oculta el botón "OK"
    });
    ;


    //agregar fila a la tabla de carrito
    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${Agregar.id}</td>
            <td>${Agregar.detalle}</td>
            <td>${Agregar.precio}</td>
        </tr>
    `;
    //incrementar el total
    let totalCarrito = carrito.reduce((acumulador, alimento) => acumulador + alimento.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
}


//json
const guardoLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardoLocal('listaDeAlimentos', JSON.stringify(alimentos));

class alimento {
    constructor(obj) {

        this.precio = parseFloat(obj.precio);
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
const almacenados = JSON.parse(localStorage.getItem('listaDeAlimentos'));
const producto = [];
for (const objetc of almacenados) {
    producto.push(new alimento(objetc));

}
//for (const alimento of producto) {
//  producto.sumaIva();

//}

//borra lo que esta dentro del tablabody

finalizarBtn.onclick = () => {
    carrito = [];
    document.getElementById('tablabody').innerHTML = ''
        ;
    document.getElementById('total').innerText = 'Total a pagar $';
    Swal.fire({
        title: 'Deseas finalizar la compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Confirmamos tu compra!',
                'Tu pedido esta siendo procesado.',
                'success'
            )
        }
    })

}

let CampoEdad = document.getElementById('edad');
CampoEdad.onkeydown = () => console.log('sedetectp');
CampoEdad.onkeydown = () => console.log('sedetectp');

let campoNombreGato = document.getElementById('nombreGato');
campoNombreGato.oninput = () => {
    if (isNaN(campoNombreGato.value)) {
        campoNombreGato.style.color = 'black';
    } else {
        campoNombreGato.style.color = 'red';
    }
}

function calcularEdadEnCiclosDeVida(edadEnAnios) {
    if (edadEnAnios === 1) {
        return 15;
    } else if (edadEnAnios === 2) {
        return 25;
    } else {
        return 25 + ((edadEnAnios - 2) * 4);
    }
}

//prevent en calcular edad
let btnCalcularEdad = document.getElementById('btn-calcular-edad');
btnCalcularEdad.addEventListener('click', function () {
    let edadEnAnios = parseFloat(CampoEdad.value);
    let edadEnCiclosDeVida = calcularEdadEnCiclosDeVida(edadEnAnios);
    let formulario = document.getElementById('btn-calcular-edad');
    formulario.addEventListener('click', validar);
    function validar(e) {
        if ((campoNombreGato.value == '') || (CampoEdad.value == '') || (isNaN(CampoEdad.value))) {
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa edad o nombre de la mascota válidos!',
            });

        } else {
            Swal.fire({
                title: `La edad de ${campoNombreGato.value}`,
                text: ` ${edadEnAnios} años humanos y ${edadEnCiclosDeVida} años gatunos.`,
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
            })
            ;
        }
    }

});



