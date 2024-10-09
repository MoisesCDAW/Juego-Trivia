
// VARIABLES
let correcta, contadorPreguntas, cantidadPreguntas, finJuego;
let timeOut, intervalo, puntuacionSesion, contadorSeg=0, bonificacion=0;

// ARRAYS VARIABLES
let resAleatorias = [], sesionRespuestas = [];


// FUNCIONES DEL PROGRAMA

function validarRespuesta(respuesta){
    clearTimeout(timeOut);
    clearInterval(intervalo);

    let valida = false;

    cantidadPreguntas--;
    contadorPreguntas++;

    if (contadorSeg<=5) {
        bonificacion += Math.ceil(Math.random()*3+0);
    }

    if (respuesta!="SinRespuesta") {
        if (isNaN(Number(respuesta))) {
            respuesta = respuesta.toLowerCase();
            if (respuesta.includes(correcta.toLowerCase())) {
                valida = true;
            }
        }else {
            respuesta = Number(respuesta);
            if (!isNaN(Number(correcta))) {
                valida = respuesta == correcta;
            }
        }
    
        if(valida){
            puntuacionSesion += 10;
            alert("Respuesta CORRECTA");
        }else {
            alert("Respuesta INCORRECTA");
        }
    }
    

    localStorage.setItem("puntuacionSesion", puntuacionSesion);

    if (cantidadPreguntas>-1) {
        localStorage.setItem("cantidadPreguntas", cantidadPreguntas);
        localStorage.setItem("contadorPreguntas", contadorPreguntas);

        window.open("preguntas.html", "_self");

    }else{
        console.log(puntuacionSesion);
        finJuego = new Date().getTime(); // Se crea con la fecha actual  
        localStorage.setItem("tiempoFin", finJuego); // Devuelve el resultado en miliseg
        localStorage.setItem("bonificacion", bonificacion);

        window.open("resultados.html", "_self");
    }
    
}


function ordenAleatorio(arrayRespuestas){
    let arrayAux = [];
    let indiceAleatorio, valor;

    for (let i = 0; i < arrayRespuestas.length; i++) {
        indiceAleatorio = Math.floor(Math.random() * (arrayRespuestas.length - 0) + 0);
        valor = arrayRespuestas[indiceAleatorio];

        if (arrayAux.indexOf(valor)==-1) {
            arrayAux[i] = valor;
        }else{
            i--;
        }
    }

    return arrayAux;
}


function inicio() {
    cantidadPreguntas = localStorage.getItem("cantidadPreguntas");
    contadorPreguntas = localStorage.getItem("contadorPreguntas");
    puntuacionSesion = Number(localStorage.getItem("puntuacionSesion"));
    
    bonificacion = Number(localStorage.getItem("bonificacion"))

    for (let i = 0; i < 4; i++) {
        sesionRespuestas.push(localStorage.getItem("respuestas"+contadorPreguntas+"."+i));
    }

    correcta = sesionRespuestas[0];

    resAleatorias = ordenAleatorio(sesionRespuestas);

    document.getElementById("pregunta").innerHTML = localStorage.getItem("pregunta"+contadorPreguntas); 

    for (let i = 0; i < resAleatorias.length; i++) {
        document.getElementById("opcion"+(i+1)).innerHTML = resAleatorias[i];
        document.getElementById("opcion"+(i+1)).value = resAleatorias[i];
    }

    // intervalo = setInterval(()=>{
    //     contadorSeg++;
    // }, 1000);

    // timeOut = setTimeout(()=>{
    //     alert("TIEMPO AGOTADO, pasando a la siguiente pregunta...");
    //     validarRespuesta("SinRespuesta");
    // }, 10000);
}

inicio();