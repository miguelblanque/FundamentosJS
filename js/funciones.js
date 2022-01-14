/** Imports y Exports
 * 
 *   funciones utilizadas en los archivos 28.js
 *   - para poder importarla tiene que haber un export de la funcion
 *   - solo puede haber un export default por fichero
 *   - si tenemos varias funciones tenemos que usar solo export con las funciones que queramos exportar
 * 
 *  Para probar incluir en el alchivo DOM.html el script -> <script src="js/28.js"></script>
*/


function sumar(numero1, numero2){
    return numero1+numero2
}
function restar(numero1,numero2){
    return numero1-numero2
}
// si tenemos varias funciones tenemos que realizar funciones especificas
export{
    sumar,
    restar
}
// si solo tenemos una funcion podemos usar export default de la funcion creada
//export default sumar;