/**
 * Juego de Trivia
 * @author Moises Campos <moisescamposdaw@gmail.com>
 */


/**
 * Función de inicio de la página. Se encarga de recuperar datos, calcular e imprimir resultadosç
 * - Uso del LocalStorage para recuperar y guardar datos
 * - El LocalStorage se vacía aquí
 */
function inicio_resultados(){
    let tiempoInicio, tiempoFin, tiempoTotal, puntuacionTop, puntuacionSesion, bonificacion;
    let penitenciaTiempoExcesivo=-5, totalPuntos=0;

    puntuacionTop = Number(localStorage.getItem("puntuacionTop"));
    puntuacionSesion = Number(localStorage.getItem("puntuacionSesion"));
    tiempoInicio = Number(localStorage.getItem("tiempoInicio"));
    tiempoFin = Number(localStorage.getItem("tiempoFin"));
    bonificacion = Number(localStorage.getItem("bonificacion"));
    
    localStorage.clear(); // Vaciado del localStorage

    tiempoTotal = tiempoFin - tiempoInicio;
    tiempoTotal = (tiempoTotal/1000).toFixed(2);


    // Cuando los datos lleguen vacíos
    if (isNaN(puntuacionSesion)) {
        puntuacionSesion = 0;
    }

    if (isNaN(puntuacionTop)) {
        puntuacionTop = puntuacionSesion;
    }

    if (isNaN(bonificacion)) {
        bonificacion = 0;
    }

    totalPuntos = (puntuacionSesion + bonificacion);


    // Menos puntos por tiempo de respuesta excesivo
    if (tiempoTotal>40) {
        totalPuntos += penitenciaTiempoExcesivo;
    }else {
        penitenciaTiempoExcesivo =0;
    }
    
    document.getElementById("tiempoTotal").innerHTML += tiempoTotal +" segundos";

    // Actualización del puntaje Top
    if (totalPuntos>puntuacionTop) {
        puntuacionTop = totalPuntos;
        document.getElementById("puntuacionTop").innerHTML = "** Nueva puntuación Máxima: <strong>" + puntuacionTop + " puntos</strong> **";
    }else {
        document.getElementById("puntuacionTop").innerHTML += "<strong>" + puntuacionTop + " puntos</strong> **";
    }

    localStorage.setItem("puntuacionTop", puntuacionTop);

    document.getElementById("puntuacionSesion").innerHTML += "<strong>" + puntuacionSesion + " puntos</strong>"; 
    document.getElementById("bonificacion").innerHTML += "<strong>" + bonificacion + " puntos</strong>";
    document.getElementById("penitencia").innerHTML += "<strong>" + penitenciaTiempoExcesivo + " puntos</strong>";
    document.getElementById("totalPuntos").innerHTML += totalPuntos + " puntos";

}

inicio_resultados();  

/**
 * Envía al usuario a la página de inicio.
 * El inicio cargará el puntaje TOP
 */
function reiniciar(){
    window.open("index.html", "_self");
}