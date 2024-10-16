/**
 * Juego de Trivia
 * @author Moises Campos <moisescamposdaw@gmail.com>
 */


/**
 * @constant {Array<String>} preguntas
 */
const preguntas = [
    "¿Cuál es la flor nacional de Japón?",
    "¿Cuál es el animal nacional de Australia?",
    "¿Cómo se llamaba Estambul antes de 1923?",
    "¿Cuál es el país más pequeño del mundo?",
    "¿Cuál es el río más largo del mundo?",
    "¿Cómo le llaman los locales a la Ciudad de Nueva York?",
    "¿En qué año terminó la segunda guerra mundial?",
    "¿Dónde se celebraron los primeros Juegos Olimpicos modernos?",
    "¿Cuántos lados tiene un pentágono?",
    "¿A qué país pertenece la Isla de Pascua?"
];

/**
 * @constant {Array<String>} respuestas
 */
const respuestas = [
    ["Flor de Cerezo", "Girasol", "Orquideas", "Margarita"],
    ["Canguro", "León", "Hipopotamo", "Flamenco"],
    ["Constantinopla", "Roma", "Madrid", "Hispania"],
    ["El Vaticano", "Monaco", "Puerto Rico", "Marbella"],
    ["Rio Nilo", "Rio del Amazonas", "Rio Rin", "Rio Misisipi"],
    ["Gotham", "Gohan", "City", "New Jersey"],
    ["1945", "1965", "1912", "1950"],
    ["Atenas", "Roma", "Constantinopla", "Moscú"],
    ["5", "10", "2", "4"],
    ["Chile", "EEUU", "China", "Indonesia"]
];

/*
 * {Number} cantidadPreguntas
 * {Number} numPregunta
 * {Object} inicioJuego de tipo Date
 * {Number} puntuacionTop
 * {Array<String>} sesionPreguntas Array con las 5 preguntas
 * {Array<String>} sesionRespuestas Array con todas las respuestas de las 5 preguntas
 */
let cantidadPreguntas = 5, numPregunta, inicioJuego, puntuacionTop;
let sesionPreguntas=[], sesionRespuestas=[];


/**
 * Imprime el puntaje Top en la página de inicio
 */
function getPuntuacionTop() {
    puntuacionTop = localStorage.getItem("puntuacionTop");

    if (puntuacionTop==null) {
        puntuacionTop=0;
    }
    document.getElementById("puntuacionTop").innerHTML += "<strong>" + puntuacionTop + " puntos</strong> **";
}

/**
 * De la lista entera selecciona solo la cantidad de preguntas aleatoriamente
 */
function selectPreguntas(){
    let aux = cantidadPreguntas;
    let pregunta;
    do {
        numPregunta = Math.floor(Math.random() * (preguntas.length - 0) + 0);
        pregunta = preguntas[numPregunta];

        if (sesionPreguntas.indexOf(pregunta)==-1) {
            sesionPreguntas.push(pregunta);
            sesionRespuestas.push(respuestas[numPregunta]);
            aux--;
        }

    } while (aux>0);
}


/**
 * Inicio de la página. Llama al selector de preguntas, recupera e imprime datos
 */
function inicio(){
    selectPreguntas();
    inicioJuego = new Date().getTime();
    localStorage.setItem("tiempoInicio", inicioJuego);

    for (let i = 0; i < sesionPreguntas.length; i++) {
        localStorage.setItem("pregunta"+i, sesionPreguntas[i]);
    }

    for (let i = 0; i < sesionRespuestas.length; i++) {
        for (let j = 0; j < sesionRespuestas[i].length; j++) {
            localStorage.setItem("respuestas"+i+"."+j, sesionRespuestas[i][j]);
        }   
    }

    localStorage.setItem("cantidadPreguntas", cantidadPreguntas-1);
    localStorage.setItem("contadorPreguntas", 0);

    window.open("preguntas.html", "_self");
}

getPuntuacionTop();