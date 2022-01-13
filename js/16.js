/* Otros Array Methods útiles
 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/16.js"></script>
* 
*/

// Estos array methods no mutan el array original, para saber cuales mutan o no podemos consultar la pagina donde 
//https://doesitmutate.xyz/
//En react debemos evitar usar todos los que mutan

const tecnologias=['HTML','CSS','JavaScript', 'React', 'Node.js']
const numeros =[12,20,30]

let nuevoArray;

//filter
const nuevoArray2 =tecnologias.filter(tech => tech !== 'React')

// includes - Comprobar si un elemento existe dentro de un array 
const resultado = tecnologias.includes('React') 
 console.log('Ejempo includes. Existe React dentro de tecnologias: ',resultado)

// Some - Si al Menos un elemento del array cumple devuelve True
const resultado2 = numeros.some( numero => numero > 15)

console.log('Ejemplo some. Existe algun numero > 15 en numeros: ',resultado2)

//Find - devuelve el primer elemento que cumple la condicion
const resultado3 = numeros.find( numero => numero > 15)

console.log('Ejemplo find. Devuelve el primer elemento que cumple la condicion -> numero > 15 en numeros: ',resultado3)

//Every - Si todos los elementos del array cumplen la condición
const resultado4 = numeros.every( numero => numero > 15)

console.log('Ejemplo every. Retorna true o false si todos  cumplen la condicion -> numero > 15 en numeros: ',resultado4)

// Reduce - Ejecuta una función que va a ir acumulando un total. Acumula en el total, indicando donde empieza por parametro
const resultado5 = numeros.reduce( (total,numero) => numero + total,0)

console.log('Ejemplo reduce. Para carritos, acumula en el total: ',resultado5)


// Filter - Crea un nuevo array en base al original
const resultado6 = tecnologias.filter(tech => tech === 'Node.js')

console.log('Ejemplo filter. Devuelve las tecnologias que contengan Node.js: ',resultado6)

// Filter con numeros
const resultado7 = numeros.filter( numero => numero > 15)

console.log('Ejemplo filter. Devuelve todos los numeros > 15: ',resultado7)


// forEach
const arrayForeach=tecnologias.forEach( tech=> console.log('Ejemplo forEach, impimir todas las tenologias:',tech))
// Utilizando el indice
const arrayForeach2=tecnologias.forEach( (tech,index)=> console.log('Ejemplo forEach, impimir todas las tenologias:',index,'-',tech))

// Map
const arrayMap=tecnologias.map( tech=> console.log('Ejemplo map, impimir todas las tenologias:',tech))

//Para saber los array Methods que hay disponibles, al sacar por consola el arrayMap, 
// en la consola, seleccionamos la flechita y em Prototype nos aparecen los disponibles
console.log(arrayMap)

// [[Prototype]]: Array(0)
// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
// [[Prototype]]: Object
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()


