/** Condicionales ternarios
 * sintaxis:
 *  variable ? condicionTrue: condicionFalse
 *  se puede negar la condicion con !
 *  se pueden anidar condicionales
 *  
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/20.js"></script>
*
 */


const autenticado=true

console.log('Ejemplo ternarios: ')
autenticado?console.log('usuario autenticado'):console.log('usuario no autenticado, dirigir hacia login')


autenticado?
   console.log('usuario autenticado'):
   console.log('usuario no autenticado, dirigir hacia login')


   const saldo=600
const pagar=700
const tarjeta=true

 console.log('Ejemplo doble ternario: ')

 saldo>pagar?console.log('Puedes pagar'):console.log('No puedes pagar')

 saldo>pagar?
     console.log('Puedes pagar con saldo'):
     tarjeta?
       console.log('Puedes pagar con tarjeta'):
       console.log('No puedes pagar')