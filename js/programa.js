/**
 * Juego de Trivia
 * @author Moises Campos <moisescamposdaw@gmail.com>
 */


/**
 * @var {String} correcta
 * @var {Number} contadorPreguntas
 * @var {Number} cantidadPreguntas
 * @var {Object} finJuego de tipo Date
 * @var {Number} intervalo identificador del intervalo
 * @var {Number} puntuacionSesion
 * @var {Number} contadorSeg si se pasa de 10seg, pasa a la siguiente pregunta
 * @var {Number} bonificacion por respuesta < 5seg
 * @var {Array<String>} resAleatorias
 * @var {Array<String>} sesionRespuestas
 */
let correcta, contadorPreguntas, cantidadPreguntas, finJuego;
let intervalo, puntuacionSesion, contadorSeg=0, bonificacion;
let resAleatorias = [], sesionRespuestas = [];


/**
 * Evalúa la respuesta del usuario. Al finalizar las 5 preguntas
 * guarda los resultados en el LocalStorage y abre la página resultados
 * @param {String} respuesta 
 */
function validarRespuesta(respuesta){
    clearInterval(intervalo);

    let valida = false;

    cantidadPreguntas--;
    contadorPreguntas++;

    // "SinRespuesta" por tiempo agotado
    if (respuesta!="SinRespuesta") {
        if (typeof(respuesta)=="string") {
            respuesta = respuesta.toLowerCase();
            if (respuesta.includes(correcta.toLowerCase())) {
                valida = true;
            }
        }else {
            if (typeof(respuesta)=="number") {
                valida = respuesta == correcta; // Guarda true o false
            }
        }
    
        // Puntaje, bonificación y mensaje
        if(valida){
            if (contadorSeg<=5) {
                bonificacion += Math.ceil(Math.random()*3+0);
            }
            puntuacionSesion += 10;
            alert("Respuesta CORRECTA");
        }else {
            alert("Respuesta INCORRECTA");
        }
    }
    

    localStorage.setItem("puntuacionSesion", puntuacionSesion);

    // Guardado de resultados y ejecución de página respectiva
    if (cantidadPreguntas>-1) {
        localStorage.setItem("cantidadPreguntas", cantidadPreguntas);
        localStorage.setItem("contadorPreguntas", contadorPreguntas);
        localStorage.setItem("bonificacion", bonificacion);

        window.open("preguntas.html", "_self");

    }else{
        console.log(puntuacionSesion);
        finJuego = new Date().getTime(); // Se crea con la fecha actual  
        localStorage.setItem("tiempoFin", finJuego); // Devuelve el resultado en miliseg
        localStorage.setItem("bonificacion", bonificacion);

        window.open("resultados.html", "_self");
    }
    
}


/**
 * 
 * @param {Array<String>} arrayRespuestas 
 * @returns Nuevo orden para mostrar las posibles respuestas a la pregunta
 */
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


/**
 * Inicio de la página. Recupera datos y los imprime en la página
 */
function inicio() {
    cantidadPreguntas = localStorage.getItem("cantidadPreguntas");
    contadorPreguntas = localStorage.getItem("contadorPreguntas");
    puntuacionSesion = Number(localStorage.getItem("puntuacionSesion"));
    bonificacion = Number(localStorage.getItem("bonificacion"))

    // Se imprime la pregunta
    document.getElementById("pregunta").innerHTML = localStorage.getItem("pregunta"+contadorPreguntas); 

    // Se guardan las posibles respuestas para la pregunta
    for (let i = 0; i < 4; i++) {
        sesionRespuestas.push(localStorage.getItem("respuestas"+contadorPreguntas+"."+i));
    }

    correcta = sesionRespuestas[0];

    resAleatorias = ordenAleatorio(sesionRespuestas);

    // Imprime las diferentes posibles respuestas
    for (let i = 0; i < resAleatorias.length; i++) {
        document.getElementById("opcion"+(i+1)).innerHTML = resAleatorias[i];
        document.getElementById("opcion"+(i+1)).value = resAleatorias[i];
    }

    // Controla que el usuario responda en < 10seg
    let contador=10;
    intervalo = setInterval(()=>{
        contador--;

        if (contador!=0) {
            document.getElementById("temporizador").innerHTML = contador;
        }
        
        contadorSeg++;

        if (contadorSeg==10) {
            validarRespuesta("SinRespuesta");
        }
    }, 1000);
}

inicio();