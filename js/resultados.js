function inicio(){
    let tiempoInicio, tiempoFin, tiempoTotal, puntuacionTop, puntuacionSesion, bonificacion;
    let penitenciaTiempoExcesivo=-5, totalPuntos=0;

    puntuacionTop = Number(localStorage.getItem("puntuacionTop"));
    puntuacionSesion = Number(localStorage.getItem("puntuacionSesion"));
    tiempoInicio = Number(localStorage.getItem("tiempoInicio"));
    tiempoFin = Number(localStorage.getItem("tiempoFin"));
    bonificacion = Number(localStorage.getItem("bonificacion"));
    
    localStorage.clear();

    tiempoTotal = tiempoFin - tiempoInicio;
    tiempoTotal = (tiempoTotal/1000).toFixed(2);

    if (isNaN(puntuacionSesion)) {
        puntuacionSesion = 0;
    }

    if (isNaN(puntuacionTop)) {
        puntuacionTop = puntuacionSesion;
    }

    if (isNaN(bonificacion)) {
        bonificacion = 0;
    }

    totalPuntos += (puntuacionSesion + bonificacion);

    if (totalPuntos>puntuacionTop) {
        puntuacionTop = totalPuntos;
        document.getElementById("puntuacionTop").innerHTML = "Nueva puntuación Máxima: ";
    }

    localStorage.setItem("puntuacionTop", puntuacionTop);


    if (tiempoTotal>40) {
        totalPuntos += penitenciaTiempoExcesivo;
    }else {
        penitenciaTiempoExcesivo =0;
    }

    if (totalPuntos<0) {
        totalPuntos = 0;
    }
    
    document.getElementById("tiempoTotal").innerHTML += tiempoTotal +" segundos";
    document.getElementById("puntuacionTop").innerHTML += "<strong>" + puntuacionTop + " puntos</strong> **";
    document.getElementById("puntuacionSesion").innerHTML += "<strong>" + puntuacionSesion + " puntos</strong>"; 
    document.getElementById("bonificacion").innerHTML += "<strong>" + bonificacion + " puntos</strong>";
    document.getElementById("penitencia").innerHTML += "<strong>" + penitenciaTiempoExcesivo + " puntos</strong>";
    document.getElementById("totalPuntos").innerHTML += totalPuntos + " puntos";

}

inicio();   


function reiniciar(){
    window.open("index.html", "_self");
}