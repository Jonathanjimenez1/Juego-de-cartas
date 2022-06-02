function finalizar() {
 document.querySelector(".reiniciar").classList.add("visible");
 document.querySelector(".nivel").classList.add("visible");
}

function iniciar() {
    movimientos=0;
    repartir();
    clearInterval(cronometro);
    iniciaCronometro();
   

    document.querySelector("#mov").innerText="00";

    document.getElementById('mesa').style.display="flex";
    document.querySelector(".gameover").classList.remove("visible");
    document.querySelector(".tiempo").classList.remove("visible"); 
   
    document.querySelector(".reiniciar").classList.remove("visible");
    document.querySelector(".nivel").classList.remove("visible");

    document.querySelectorAll(".tarjeta").forEach(function (elemento) {
        elemento.addEventListener("click", descubrir)
        
    })

  
    



    
}


document.querySelectorAll(".reinicio").forEach(function (elemento) {
    elemento.addEventListener("click", iniciar);
    
})

