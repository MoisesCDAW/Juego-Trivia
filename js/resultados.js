function inicio(){
    // localStorage.clear();

    let tiempoInicio, tiempoFin, tiempoTotal;

    tiempoInicio = Number(localStorage.getItem("tiempoInicio"));
    tiempoFin = Number(localStorage.getItem("tiempoFin"));
    tiempoTotal = tiempoFin - tiempoInicio;

        if (tiempoTotal<60000) { // Si es menor a un minuto el mensaje será en seg
            document.getElementById("tiempoTotal").innerHTML = (tiempoTotal/1000).toFixed(2) +" segundo(s)";
        }else {
            document.getElementById("tiempoTotal").innerHTML = (tiempoTotal/60000).toFixed(2)  +" minuto(s)"; // Si no, será en min
        }
}

inicio();