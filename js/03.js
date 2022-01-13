/**
 * Tipos de datos 
 * 
* 1- undefined
* 2- Boolean
* 3- Number
* 4- String o Cadenas de Texto
* 5 - BigInt 
* 6 - Symbol
* 7 - Null
 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/03.js"></script>
*
*/

//1- undefined
let cliente
console.log('1- Ejemplo let')
console.log(cliente)
console.log(typeof cliente)


//2- Boolean

 const descuento=true
console.log('2- Ejemplo Boolean')
console.log(descuento)
console.log(typeof descuento)

//3 -Number

const numero1=20.20
const numero2 =30
const numero3=-100
console.log('3- Ejemplo Number')
console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

//4- String o Cadenas de Texto
// Se puede usar comillas simple o dobles

const alumno="Miguel"


let producto="Monitor 20 pulgadas"
let producto2='Monitor 20 Pulgadas'

const numero="30"
const numero21=30

console.log('4- Ejemplo String')
console.log(alumno)
console.log(producto)
console.log(producto2)
console.log(typeof numero)
console.log(typeof numero21)


//5 - BigInt 
// No se puede utilizar con numeros int, a no se si parsee con Number

const numeroGrande= BigInt(99999923929392932323392323233)

console.log('5- Ejemplo BigInt')

console.log(typeof numeroGrande);

const numero10 = 10
const numero20=20


console.log(numero10 + Number(numeroGrande))

const numero31 ="30"
const numero41=30

console.log(typeof String(numero41))

console.log(typeof Number(numero31))


//6 - Symbol

const primerSymbol=Symbol(30)

const segundoSymbol=Symbol(30)

console.log('6- Ejemplo Symbol')

console.log(primerSymbol=== segundoSymbol)

console.log(primerSymbol.valueOf())

console.log(segundoSymbol.valueOf())

// 7 -Null
console.log('7- Ejemplo Null')
const descuento1 = null
console.log(typeof descuento1)

