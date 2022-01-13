/**
 * condicionales - Else IF y && 
 * 
 *  
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/19.js"></script>
*
 */
const saldo=600
const pagar=700
const tarjeta=true

console.log('Ejemplo condicionales anidados: ')
if(saldo>pagar){
    console.log('Puedes pagar con tu saldo')
}else if(tarjeta){
    console.log('Puedes pagar con tu tarjeta')
}else{
    console.log('No,no puedes pagar')
}


console.log('Ejemplo condicionales &&: ')
if(saldo>pagar || tarjeta){
    console.log('Puedes pagar ')

}else{
    console.log('No,no puedes pagar')
}