
// Funciones:

// formato: @param {param type} param name - description

/**
 * Genera un número aleatorio entre 0 y el número pasado como parámetro
 * @param {number} max - el número máximo que debe calcularse como aleatorio
 * @returns {number}
 */
function randomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Genera un div donde aplica una clase ball con colores aleatorios
 * @returns {HTMLDivElement}
 */
function generarCirculo() {
    let ball = document.createElement("div");
    ball.className = "ball";
    ball.style.backgroundColor = "rgb(" + randomNum(255) + "," + randomNum(255) + "," + randomNum(255) + ")";
    ball.style.top = randomNum(350) + "px";
    ball.style.left = randomNum(1550) + "px";
    ball.addEventListener("animationend", function (event) {
        document.body.removeChild(event.target);
    });
    document.body.appendChild(ball);
    return ball;
}

/**
* Retorna la suma de a y b 
* @param {number} a
* @param {number} b
* @returns {Promise} El objeto promesa que representa a y b
*/
function suma(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a + b);
    });
}

//Clases

/**
 * @class Figura1
 * Crea una nueva figura
 * @param {string} tipo - el tipo de figura
 * @param {number} color - el color de la figura
 */
var Figura1 = function (tipo, color) {
    this.tipo = tipo;
    this.color = color;
}


/** La descripción de la clase */
class Persona {

    //el constructor de la clase
    /**
     * descripción del constructor
     * @param  {string} _nombre [description]
     * @param  {string} _apellido [description]
     */
    constructor(nombre, apellido) {
        //miembros de la clase que son privados
        /** @private */
        this._nombre = nombre;
        /** @private */
        this._apellido = apellido;
    }

    /**
     * Dice el nombre de la persona
     */
    static decirNombre(str) {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
    }

    /**
     * Devuelve el nombre de la persona
     * @readonly
     */
    get nombre() {
        return nombre;
    }

    /**
     * Indica la dirección de Persona
     * @param {string} dir - la dirección en forma de string
     */
    static indicarDireccion(dir) {
        this.direccion = dir;
    }
}
