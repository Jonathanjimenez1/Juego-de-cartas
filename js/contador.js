function iniciaCronometro() {
  var segundos= 18;
  var minutos= 0;
  var segundosTexto;
  var minutosTexto;
  

  function actualizacontador() {
   segundos--;
   if (segundos < 0) {
     segundos = 0;
     minutos--;
   }


     if (minutos <0) {
        segundos=0;
        minutos=0;
        clearInterval(cronometro);
      timeover();
        
     }
     
     
     segundosTexto = segundos;
     minutosTexto  = minutos;
    
    if (segundos < 10) {
       segundosTexto= "0" + segundos;
    }

    if (minutos < 10) { 
       minutosTexto= "0" + minutos;
       
    }
   

     document.querySelector("#minutos").innerText = minutosTexto;
     document.querySelector("#segundos").innerText = segundosTexto;
     
   }

   cronometro=setInterval(actualizacontador,1000);
  
 

 }

 