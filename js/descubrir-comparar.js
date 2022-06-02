function descubrir( ) {

    document.querySelector("#sonido-carta").play();
    var descubiertas;
    var tarjetasPendientes;
    var totaldescubiertas=document.querySelectorAll(".descubierta:not(.acertada)");

      if (totaldescubiertas.length >1) { 
       return; }

   this.classList.add("descubierta");

   descubiertas=document.querySelectorAll(".descubierta:not(.acertada)");
   if (descubiertas.length < 2) { 
       return; }

    comparar(descubiertas);
    actualizarcontador();
    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
 
    if (tarjetasPendientes.length === 0) {
    clearInterval(cronometro);
  }
    
    
    

    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
    if (tarjetasPendientes.length === 0) {
     setTimeout(finalizar, 1000);
    }
     
    
 }

    function comparar (tarjetasAcomparar) {
       if (tarjetasAcomparar[0].dataset.valor === tarjetasAcomparar[1].dataset.valor) 
       { acierto(tarjetasAcomparar);
         
   } else { error(tarjetasAcomparar);
       
   }  }
