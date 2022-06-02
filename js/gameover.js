function gameover() {
  clearInterval(cronometro);
    document.querySelector(".gameover").classList.add("visible"); 
    document.getElementById('mesa').style.display="none";
  }
  
  function timeover() {
    document.querySelector(".tiempo").classList.add("visible");
    document.getElementById('mesa').style.display="none";
  }