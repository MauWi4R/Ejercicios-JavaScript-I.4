const juego = {
    opciones:(0:'✂️', 1:'🗒️', 2:'🪨'),
    nombreJugadores: (jugador1:jugador1, jugador2:jugador2),
    scores: (puntoJ1: 0, puntoJ2: 0),
}

/* Solo para imprimir los valores que contiene nuestro objeto y sus arreglos
console.log(juego.opciones);
console.log(juego.nombreJugadores);
console.log(juego.scores);
*/

//Paso 2
//Generar una funcipon flecha para solicitar el nombre del usuario

let pedirNuevoNombre = () => {
    return prompt("Por favor, ingrese su nombre de usuario: ")
};

/* Para probar que se ejecuta la función flecha
let nuevoNombre = pedirNuevoNombre();
console.log(nuevoNombre);

//Solcitar al usuario el nombre
*/

// Función para cambiarNombre

/* Aquí se genero una función flecha para cambiar el nombre

let cambiarNombre = (nuevoNombre) => {
    // Expresión regular par validar que el nombre tenga letras y números
    let regex = /^[A-Za-z0-9]+$/;

    //Validr el nuevo nombre

    if(regex.test(nuevoNombre)){
        // Asignar el nuevo nombre al arreglo
        juego.nombreJugadores.jugador1=nuevoNombre;
        console.log(`Bienvenid@ ${juego.nombreJugadores.jugador1} !`);
    }else{
        //Asignar nombre por defecto o default
        juego.nombreJugadores.jugador1 = "jugador1";
        console.log(`Mejor te llamaré... ${juego.nombreJugadores.jugador1}`);
    }
};

****TERMINA CÓDIGO DE FUNCIÓN FLECHA****
*/

// Función para cambiar nombre

const cambiarNombre = function (nuevoNombre){
    const validarNombre=/^[A-Za-z0-9]+$/;
    if(validarNombre.test(nuevoNombre)) {
        console.log("Bienvenid@ " + nuevoNombre + " !");
    }else {
        console.log("Mejor te llamaré..."+ juego.nombreJugadores.jugador1);
        return juego.nombreJugadores.jugador1;
    }
};

//Solicitar al usuario el nombre
const nombreUsuario = pedirNuevoNombre();
const nombreFinal = cambiarNombre(nombreUsuario);

// Paso 3 - Generar un numero aleatorio

const generarNumeroAleatorio = () => String(Math.floor(Math.random()*3));

// Imprimir mano al azar

const imprimirManoAleatoria = () =>{
    const aleatorio = generarNumeroAleatorio();
    return juego.opciones[aleatorio];
}

// console.log("Mano aleatoria: " + imprimirManoAleatoria());

// +++++ PARTE DOS +++++
// Función imprimir resultado

const imprimirResultado = () => {
    if(juego.scores.puntosJ2 > juego.scores.puntosJ1){
        console.log("Fin del juego. Gana " + juego.nombreJugadores.jugador2 + " Game over 👾🙌")
    }else if (juego.scores.puntosJ1 > juego.scores.puntosJ2){
        console.log("Fin del juego. Gana " + juego.nombreJugadores.jugador1 + " 🥊");
    }
};

const gana = (resultado) => {
    if(resultado === 0){
        console.log("🥊" + juego.nombreJugadores.jugador1 + ":["+ juego.scores.puntosJ1 +"] " + juego.nombreJugadores.jugador2 + ":[" + juego.scores.puntosJ2 + "] 🥊");
    }else if (resultado === 1) {
        console.log("🥊" + juego.nombreJugadores.jugador1 + ":["+ juego.scores.puntosJ1 +"] " + juego.nombreJugadores.jugador2 + ":[" + juego.scores.puntosJ2 + "]");
    }else{
        console.log(juego.nombreJugadores.jugador1 + ":["+ juego.scores.puntosJ1 +"] " + juego.nombreJugadores.jugador2 + ":[" + juego.scores.puntosJ2 + "] 🥊");
    }
};

// Función para evaluar quien gana si jugador 1 o jugador 2

const evalua = (eleccionJugador1,eleccionJugador2) => {
    let gana = 0;
    if(eleccionJugador1 === eleccionJugador2){
        console.log(eleccionJugador1 + " VS " + eleccionJugador2 + " empatan");
    }else if(
        (eleccionJugador1 === "✂️" && eleccionJugador2 === "📄") ||
        (eleccionJugador1 === "📄" && eleccionJugador2 === "🪨") ||
        (eleccionJugador1 === "🪨" && eleccionJugador2 === "✂️")
    ){
        console.log(eleccionJugador1 + " gana a " + eleccionJugador2);
        juego.scores.puntosJ1++;
        gana = 1;
    }else {
        console.log(eleccionJugador2 + " gana a " + eleccionJugador1);
        juego.scores.puntosJ2++;
        gana = 2;
    }
};

// Bloque de la función principal

const main = () =>{
    let contador = 0;
    while (contador = 3){
        // Constantes para almacenar el valor de la mano de cada jugador
        const jugador1Hand = imprimirManoAleatoria();
        const jugador2Hand = imprimirManoAleatoria();

        console.log(juego.nombreJugadores.jugador1 + " eligió: " + jugador1Hand);
        console.log(juego.nombreJugadores.jugador2 + " eligió: " + jugador2Hand);

        evalua(jugador1Hand, jugador2Hand);

        if (juego.scores.puntosJ1 === 3 || juego.scores.puntosJ2 === 3){
            imprimirResultado();
            break;
        }
        contador++;
        gana(gana);
    }
};

console.log("🏁¡Qué comience el juego!🏁");
main();
