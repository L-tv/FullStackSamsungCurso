

function comenzar () {
  
  var visualizador = document.getElementById("visualizador");
  
  var archivos = document.getElementById("archivos");
  
     archivos.addEventListener("change", procesar, false);

  var controles = document.getElementById("controles");
  
    controles.style.display = "none";
}

function procesar (e) {
  
    var archivos = e.target.files;
    
    visualizador.innerHTML="";
    
    var video = archivos [0];

    if(!video.type.match(/video/)) {
    
        alert("Selecciona un video, por favor");
      
        
      }else {
        alert("Su video se esta cargando...")
        
        visualizador.innerHTML+"Nombre del archivo: " + video.name + "<br>";
      
        var lector = new FileReader ();
      
        lector.readAsDataURL(video);
      
        lector.addEventListener("load", mostrarEnWeb, false); 
        
        controles.style.display = "block";
    
         
        
      }

}

function mostrarEnWeb (e) {
  
    var resultado = e.target.result;
    
    visualizador.innerHTML = "<video src=' " + resultado + "' width=75%'>";
    

    var start = document.getElementById("start");
    var pausa = document.getElementById("pausa");
    var masvolumen = document.getElementById("masvolumen");
    var menosvolumen = document.getElementById("menosvolumen");
    
    start.onclick = function () { document.querySelector('video').play(); 
    }
    
    pausa.onclick = function () { document.querySelector('video').pause();
    }
    masvolumen.onclick = function() {
      
      if (document.querySelector('video').volume < 1) {
        
           document.querySelector('video').volume += 0.1;
         }else{
           alert("Maximo volumen alcanzado")
         }
       }
    menosvolumen.onclick = function() {
      
      if (document.querySelector('video').volume > 0.1) {
        
           document.querySelector('video').volume -= 0.1;
         }else{
           alert("El video esta silenciado")
         }
       }
}  

window.addEventListener("load", comenzar, false);