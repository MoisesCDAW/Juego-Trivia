const preguntas = [
    "¿Cuál es la flor nacional de Japón?",
    "¿Cuál es el animal nacional de Australia?",
    "¿Cómo se llamaba Estambul antes de 1923?",
    "¿Cuál es el país más pequeño del mundo?",
    "¿Cuál es el río más largo del mundo?",
    "¿Cómo le llaman los locales a la Ciudad de Nueva York?",
    "¿Cómo se llaman los androides principales de Star War?",
    "¿Dónde se celebraron los primeros Juegos Olimpicos modernos?",
    "¿Cuántos lados tiene un pentágono?",
    "¿A qué país pertenece la Isla de Pascua?"
];

const respuestas = [
    ["Flor de Cerezo", "Girasol", "Orquideas", "Margarita"],
    ["Canguro", "León", "Hipopótamo", "Flamenco"],
    ["Constantinopla", "Roma", "Madrid", "Hispania"],
    ["El Vaticano", "Mónaco", "Puerto Rico", "Marbella"],
    ["Río Nilo", "Río del Amazonas", "Río Rin", "Río Misisipi"],
    ["Gotham", "Gohan", "City", "New Jersey"],
    ["C3PO y R2D2", "OP3C y 2DR2", "C3PO y D2R2", "CTPO y R2D2"],
    ["Atenas", "Roma", "Constantinopla", "Moscú"],
    ["Cinco", "Díez", "Dos", "Cuatro"],
    ["Chile", "EEUU", "China", "Indonesia"]
];

let cantidadPreguntas = 5, numPregunta, inicioJuego;
let sesionPreguntas=[], sesionRespuestas=[];

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


function inicio(){
    selectPreguntas();
    inicioJuego = new Date().getTime();
    localStorage.clear();                      // OJO, Se está vaciando el localStorage

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