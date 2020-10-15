/*var btnUno = document.getElementById("btnCarritoLibroUno");

btnUno.onclick = mostrarMensaje();*/

function mostrarMensaje(){
    confirm('Estas seguro que quieres agregarlo a tu carrito?');
}

window.onload = function() {
    document.getElementById("btnCarritoLibroUno").onclick = mostrarMensaje;
  }