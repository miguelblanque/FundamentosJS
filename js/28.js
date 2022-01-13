/** Imports y Exports
 * *
 *   
 * 
 *  Para probar incluir en el alchivo index.html el script -> <script src="js/28.js"></script>
*/

// en vez de declarar la funcion sumar en esta clase la vamos a importar desde funciones.js
// function sumar(numero1=0, numero2=0){
//     return numero1+numero2
// }

// en react no es necesario poner las extensiones
import funcionSumar from "./funciones.js"

const resultado =funcionSumar(20,30)

console.log(resultado)