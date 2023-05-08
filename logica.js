
console.table(alimentos);
const carrito = [];
let contenedor = document.getElementById("cats");

function renderizarAlimentos() {
    for (const alimento of alimentos) {
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${alimento.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${alimento.nombre}</h5>
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

let vaciarCarrito = document.getElementById("vaciar")
vaciarCarrito.addEventListener("click", respuestaClick)
function respuestaClick() { console.log("vaciarCarrito"); }

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
//evento submit
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', validar);
function validar(evento) {
    if ((campoNombreGato.value == '') || (CampoEdad.value == '')) {
        evento.preventDefault()
        alert('ingresar nombre o edad de la mascota validos')
    }
}


/*funcion para calcular la edad del gato en caso de tener uno*/
let btnCalcularEdad = document.getElementById('btn-calcular-edad');
btnCalcularEdad.addEventListener('click', function() {
  let edadEnAnios = parseFloat(CampoEdad.value);
  let edadEnCiclosDeVida = calcularEdadEnCiclosDeVida(edadEnAnios);
  alert(`La edad de ${campoNombreGato.value} es ${edadEnAnios} años humanos y ${edadEnCiclosDeVida} años gatunos.`);
});

function calcularEdadEnCiclosDeVida(edadEnAnios) {
  if (edadEnAnios === 1) {
    return 15;
  } else if (edadEnAnios === 2) {
    return 25;
  } else {
    return 25 + ((edadEnAnios - 2) * 4);
  }
}

