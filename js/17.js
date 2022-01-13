/* Condicionales
 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/17.js"></script>
*
*/


// El código se va a ejecutar de arriba hacia abajo, pero con los condiiconales podemos
// ejecutar código basado en ciertas condiciones 
//     Si pides un uber, primero revisamos que haya un chofer disponible, si utilizas
//     un sistema para sacar una cita con un doctor, revisamos que haya disponibilidad

//     si realizas un retiro del banco, revisamos que tu tarjeta sea válida y tengas la cantidad solicitada


const numero1=1
const numero2=2

console.log(numero1)
console.log(numero2)


/**
 * Condicional IF -- Se ejecuta la parte del codigo que cumple la condicion
 * Operadores comparacion
 * > - Mayor que
 * < - Menor que
 * >= - Mayor igual que
 * <= - Menor igual que
 * == - Igual
 * != - Distinto

 */

const disponible=4000

const retirar =20000

if(disponible >retirar){
    // se cumple la condicion y se ejecuta el codigo
    console.log('Si puedes retirar')
}else{
    // No se cunmple, ejecutar este codigo
    console.log('Lo siento, no puedes retirar')
}


