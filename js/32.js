/** Template String
 * 
 *  - Se utilizan con comillas especiales ` -backtick. la nomenclatura es: `${ nombreVariableOFuncion}`
 * 
 *  Para probar incluir en el alchivo index.html el script -> <script src="js/32.js"></script>
 */

const producto = 'Tablet de 12 pulgadas'
const precio = 400
const marca = "Orange"

// con el simbolo + nos muestra todo en pantalla sin espacio: Tablet de 12 pulgadas400Orange
console.log(producto + precio + marca)
// si añadimos espacios y formato muestra: Tablet de 12 pulgadas ,Precio:400€, Marca:Orange
console.log(producto +', Precio:'+ precio +'€, Marca:'+ marca)

// tambien se pueden utilizar comas
// con el simbolo + nos muestra todo en pantalla sin espacio: Tablet de 12 pulgadas400Orange
console.log(producto , precio , marca)
// si añadimos espacios y formato muestra: Tablet de 12 pulgadas ,Precio:400€, Marca:Orange
console.log(producto ,', Precio:', precio ,'€, Marca:', marca)

// Utilizando Template String:  tenemos que usar comillas especiales (`backtick`): Tablet de 12 pulgadas ,Precio:400€, Marca:Orange
console.log(`Tablet de 12 pulgadas, Precio:400€, Marca:Orange`)
//Si inyectamos las variables 
console.log(`${producto}, Precio:${precio}€, Marca:${marca}`)

//Tambien se puede añadir texto desde una funcion
function textoDesdeFuncion(){
  return 'Este texto proviene de un funcion'
}

console.log(`${producto}, Precio:${precio}€, Marca:${marca}, ${textoDesdeFuncion()}`)

//tambien se puede añadir el texto desde funcion utilizando ,

console.log(`${producto}, Precio:${precio}€, Marca:${marca}`,textoDesdeFuncion())