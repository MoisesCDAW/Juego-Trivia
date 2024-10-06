
// VARIABLES
let correcta, contadorPreguntas, cantidadPreguntas, finJuego;

// ARRAYS VARIABLES
let resAleatorias = [], sesionRespuestas = [];


// FUNCIONES DEL PROGRAMA

function validarRespuesta(valor){

    if (valor.value==correcta) {
        alert("Respuesta CORRECTA");
    }else {
        alert("Respuesta INCORRECTA");
    }

    cantidadPreguntas--;
    contadorPreguntas++;

    if (cantidadPreguntas>-1) {
        localStorage.setItem("cantidadPreguntas", cantidadPreguntas);
        localStorage.setItem("contadorPreguntas", contadorPreguntas);
        window.open("preguntas.html", "_self");

    }else{
        finJuego = new Date().getTime(); // Se crea con la fecha actual  
        localStorage.setItem("tiempoFin", finJuego); // Devuelve el resultado en miliseg
        
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

    for (let i = 0; i < 4; i++) {
        sesionRespuestas.push(localStorage.getItem("respuestas"+contadorPreguntas+"."+i));
    }

    correcta = sesionRespuestas[0];

    resAleatorias = ordenAleatorio(sesionRespuestas);

    document.getElementById("pregunta").innerHTML = localStorage.getItem("pregunta"+contadorPreguntas); 

    for (let i = 0; i < resAleatorias.length; i++) {
        document.getElementById("boton"+(i+1)).innerHTML = resAleatorias[i];
        document.getElementById("boton"+(i+1)).value = resAleatorias[i];
    }
}

inicio();