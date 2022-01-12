// Functiones - Function Expresion

// function sumar(numero=0,numero2=0){
//     console.log(numero + numero2)

// }
// sumar()


//sumar() //Error en function expresion no se pueden llamar antes de la declaracion. Si estuviera declarada como arriba  (function declaration)si se puede llamar

const sumar=function( numero=0,numero2=0){
 return numero+numero2
}

const resultado=sumar(20,30)

console.log(resultado)


// 