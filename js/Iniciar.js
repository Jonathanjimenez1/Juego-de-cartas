 function inicio() {
    document.querySelector("#mov").innerText = "00";
    movimientos=0;
    nivelActual=nivel1;
    repartir();
    maxContador();
   
  
   

      
document.querySelectorAll(".tarjeta").forEach(function(elemento) {
 elemento.addEventListener("click", descubrir);
 mostrarcontador();
 });

document.querySelector("#contadores").classList.remove("invisible");
 document.querySelector(".reiniciar").classList.remove("visible");
 document.querySelector(".nivel").classList.remove("visible");
 document.querySelector(".ganador").classList.remove("visible"); 
var niveltexto= document.querySelector("#niveles")
        niveltexto= 1;
        document.querySelector("#niveles").innerHTML = niveltexto;

}  




    
    function reiniciojuego() {
        inicio();
        totalTarjetas=nivel1.grupotarjetas;
        nivel2.valor=1;
        document.getElementById('mesa').style.display="flex";
        document.querySelector("#comenzar").classList.remove("invisible"); 
        document.querySelector(".tiempo").classList.remove("nomostrar");
    }

    


function mostrarcontador() {
    document.getElementById('contadores').style.display="flex"
    
  }



function cambiarfondo() {
    document.body.style.backgroundImage= "url(css/Imagenes/azul.jpg)";
    
    document.body.style.backgroundSize="100%";
    
    
};

function descubircartas() {
    document.getElementById('mesa').style.display="flex";
    iniciaCronometro();
    
   
     
   
   
}

function comenzar() {
    document.getElementById('comenzar').style.display="flex"
    inicio();
    
}

function ocultarjugar() {
document.getElementById('jugar').style.display="none";
mostrarcontador();
    
}

function ocultarboton() {
    document.getElementById('boton').style.display="none";
    
}









     
