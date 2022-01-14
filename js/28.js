/** Imports y Exports
 * *
 *   No se puede usar import si no esta en un modulo. en el Index.html hay que añadir module 
 * 
 *  Para probar incluir en el alchivo index.html el script -> <script src="js/28.js" type="module"></script>
*/

// en vez de declarar la funcion sumar en esta clase la vamos a importar desde funciones.js
// function sumar(numero1=0, numero2=0){
//     return numero1+numero2
// }

// en react no es necesario poner las extensiones
//import funciones from "./funciones.js"
// si tenemos varias funciones hay que usar destroctoring

// import {sumar} from "./funciones.js"
// import { restar } from "./funciones.js"
// se pueden importar en la misma línea
import {sumar, restar} from "./funciones.js"

const resultadoSuma =sumar(20,30)

console.log('El resultado de la suma es: ',resultadoSuma)


const resultadoResta =restar(20,30)

console.log('El resultado de la suma es: ',resultadoResta)
