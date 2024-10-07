function inicio(){
    // localStorage.clear();

    let tiempoInicio, tiempoFin, tiempoTotal, puntuacionTop, puntuacionSesion;

    puntuacionTop = Number(localStorage.getItem("puntuacionTop"));
    puntuacionSesion = Number(localStorage.getItem("puntuacionSesion"));
    tiempoInicio = Number(localStorage.getItem("tiempoInicio"));
    tiempoFin = Number(localStorage.getItem("tiempoFin"));
    tiempoTotal = tiempoFin - tiempoInicio;

    
    if (tiempoTotal<60000) { // Si es menor a un minuto el mensaje será en seg
        document.getElementById("tiempoTotal").innerHTML += (tiempoTotal/1000).toFixed(2) +" segundo(s)";
    }else { // Si no, será en min
        document.getElementById("tiempoTotal").innerHTML += (tiempoTotal/60000).toFixed(2)  +" minuto(s)"; 
    }

    if (puntuacionSesion>puntuacionTop) {
        puntuacionTop = puntuacionSesion;
        localStorage.clear();
        localStorage.setItem("puntuacionTop", puntuacionTop);
        document.getElementById("puntuacionTop").innerHTML = "Nueva puntuación Máxima : " + puntuacionTop + " puntos";
        document.getElementById("puntuacionSesion").innerHTML = "";
    }else {
        document.getElementById("puntuacionTop").innerHTML += puntuacionTop + " puntos";
        document.getElementById("puntuacionSesion").innerHTML += puntuacionSesion + " puntos";
    }
}

inicio();