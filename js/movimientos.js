function actualizarcontador() {
  var movimientosTexto;
  movimientos++
  movimientosTexto = movimientos;
  
 if (movimientos > nivelActual.movimientosMax ) {
    gameover();
    return;
  };

  
  
  document.querySelector("#mov").innerText = movimientosTexto;
}

function maxContador() {
   

  var movimientosMaxTexto= [nivelActual.movimientosMax];

  
  document.querySelector("#mov-total").innerText = movimientosMaxTexto;

  }



