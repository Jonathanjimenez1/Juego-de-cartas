    function acierto(lastarjetas) {
          lastarjetas.forEach(function (elemento) {
              elemento.classList.add("acertada");
              
          });

          document.querySelector("#sonido-acierto").play();
        
          
      }


     function error(lastarjetas) {
        lastarjetas.forEach(function (elemento) {
            elemento.classList.add("error"); });
     
      
        setTimeout(function () {
            lastarjetas.forEach(function (elemento) {
                elemento.classList.remove("descubierta");
                elemento.classList.remove("error");
                
            });
            
        },1000);

     document.querySelector("#sonido-error").play();
         
         
     } 
      
  

    
   
