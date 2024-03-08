const juego = {
    opciones:(0:'✂️', 1:'🗒️', 2:'🪨'),
    nombreJugadores: (jugador1:jugador1, jugador2:jugador2),
    scores: (puntoJ1: 0, puntoJ2: 0),
}

console.log(juego.opciones);
console.log(juego.nombreJugadores);
console.log(juego.scores);

let pedirNuevoNombre = () => {
    return prompt("Por favor ingrese nombre de usuario")
};

let nuevoNombre = pedirNuevoNombre();
console.log(nuevoNombre);

/*let cambiarNombre = (nuevoNombre) => {
    let regex = /^[A-Za-z0-9]+$/;
    if(regex.test(nuevoNombre)){
        juego.nombreJugadores.jugador1=nuevoNombre;
        console.log('Bienvenido ${juego.nombreJugadores.jugador1}!');
    }
    else{
        juego.nombreJugadores.jugador1 = "jugador1";
        console.log('Mejor te llamaré...' ${juego.nombreJugadores.jugador1}!);
    }
};
*/

const cambiarNombre = function (nuevoNombre){
    const validarNombre=/^[A-Za-z0-9]+$/;
    if(validarNombre.test(nuevoNombre)) {
        console.log("Bienvenido " + nuevoNombre + " !");
    } else {
        console.log("Mejor te llamaré..." + juego.nombreJugadores.jugador1);
        return juego.nombreJugadores.jugador1;
    }
};

const nombreUsuario = pedirNuevoNombre();
const nombreFinal = cambiarNombre();

const generarNumeroAleatorio = () => String(Math.random()*3);
const imprimirManoAleatoria = 

