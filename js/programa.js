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

let numPregunta, correcta, cantidadPreguntas = 5;

function ordenAleatorio(array){
    let arrayAux = [];

    for (let i = 0; i < array[numPregunta].length; i++) {
        let indiceAleatorio = Math.trunc(Math.random() * (array[numPregunta].length - 0) + 0);
        let valor = array[numPregunta][indiceAleatorio];

        if (arrayAux.indexOf(valor)==-1) {
            arrayAux[i] = valor;
        }else{
            i--;
        }
    }

    return arrayAux;
}


function validar(valor){

    if (valor.value==correcta) {
        alert("Respuesta CORRECTA");     
    }else {
        alert("Respuesta INCORRECTA");
    }

    cantidadPreguntas--;
    if (cantidadPreguntas!=0) {
        selectPregunta();
    }else{
        window.open("resultados.html", "_self");
    }
    
}


function selectPregunta(){
    numPregunta = Math.trunc(Math.random() * (preguntas.length - 0) + 0);
    let pregunta = preguntas[numPregunta];
    correcta = respuestas[numPregunta][0];
    let resAleatorias = ordenAleatorio(respuestas);

    document.getElementById("pregunta").innerHTML = pregunta;

    for (let i = 0; i < resAleatorias.length; i++) {
        console.log(document.getElementById("boton"+(i+1)).innerHTML = resAleatorias[i]);
        document.getElementById("boton"+(i+1)).value = resAleatorias[i];
    }
    

}

selectPregunta();
