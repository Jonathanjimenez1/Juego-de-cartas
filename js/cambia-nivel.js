
function cambiarnivel() {
  totalTarjetas=nivel2.grupotarjetas;
  inicio();
 juegoterminado();
 clearInterval(cronometro);
 iniciaCronometro();
 movimientos=0;
 
 
  
 
 }
 
 document.querySelector("#subir").addEventListener("click", cambiarnivel)


 function subirnivel() {
  var niveltexto= document.querySelector("#niveles")
  niveltexto= 2;
  nivelActual={
    nivel2,
    movimientosMax:8,
   };

   document.querySelector("#mov-total").innerText="8";
    
  
 nivel2.valor++;

 document.querySelector("#niveles").innerHTML = niveltexto;}

 

  document.querySelector("#subir").addEventListener("click", subirnivel);


 
 function juegoterminado() {
 
  
   movimientos=0;
 
     if (nivel2.valor > 1) {
       document.querySelector(".ganador").classList.add("visible"); 
       document.getElementById('mesa').style.display="none";
       document.querySelector("#contadores").classList.add("invisible"); 
       document.querySelector("#comenzar").classList.add("invisible"); 
       document.querySelector(".tiempo").classList.add("nomostrar");
       
      }
        }
 

 
 




  


