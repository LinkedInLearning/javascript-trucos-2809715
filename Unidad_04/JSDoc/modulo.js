/**
 * la descripción del módulo
 * @module Constantes
 * @author Natalia Corea <naty@correo.com>
 * @copyright Creative Commons
 * @version 1.2.0
 */

 //una variable
/**
* La descripción de la variable
* @type {number}
*/
let miVariable = 123;

//una constante
/**
 * @const {number} - el numero de pasos del proceso
 */
const numeroPasos = 5;

//un objeto
/** 
 * Caracteristicas de un objeto 3D
 * @typedef {Object} Propiedades
 * @property {boolean} largo - El largo del objeto
 * @property {boolean} ancho - El ancho del objeto
 * @property {boolean} profundidad - La profundidad del objeto
 * @property {string} color - El color del objeto
 */
const Propiedades = {
    largo: 5,
    ancho: 4,
    profundidad: 3,
    color: "verde"
}

//un listener a un evento

/**
 * @typedef {object} MouseEvent
 * @typedef {object} HTMLElement
 */

/**
 * Reporta el click a un botón
 * @param {MouseEvent} e - el evento click del botón
 * @listens MouseEvent
 */
function clickHandler(e) {
    //...
}
document.getElementById.addEventListener("click", clickHandler);


module.exports = {};