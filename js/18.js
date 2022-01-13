/**
 * Comparacion y Operador Estricto
 * 
 * == (Comparacion pero no es estricto, comprueba el valor pero no el tipo de dato)
 * === (Comparador estricto, comprueba el valor y el tipo de dato)
 *  * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/18.js"></script>
*
 */


 const numero1=20
 const numero2="20"

//Ejemplo comparador no estricto  == - igual ó != - distinto

console.log('Ejemplo comparador no estricto ==: ')
if(numero1==numero2){
    console.log('Si, son iguales')
}else{
    console.log('No, no son iguales')
}

console.log(typeof numero1)
console.log(typeof numero2)

//Ejemplo comparador estricto === 
console.log('Ejemplo comparador estricto ===: ')
if(numero1===numero2){
    console.log('Si, son iguales')
}else{
    console.log('No, no son iguales')
}

//funciones corsetivas

const authenticado=true

if(authenticado===true){
    console.log('Si esta autenticado')
}
// si es booleano se puede omitir el comparador
if(authenticado){
    console.log('Si esta autenticado')
}