/** Functiones - Function Expresion
 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/13.js"></script>
*/
function sumar(numero=0,numero2=0){
    console.log(numero + numero2)

}
sumar()


//sumar() //Error en function expresion no se pueden llamar antes de la declaracion. Si estuviera declarada como arriba  (function declaration)si se puede llamar

const sumar2=function( numero=0,numero2=0){
 return numero+numero2
}

const resultado=sumar2(20,30)

console.log(resultado)


// 