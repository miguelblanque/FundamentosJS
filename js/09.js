/**Operaciones en los arreglos 
 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/09.js"></script>
*/

const tecnologias=['HTML','CSS','JavaScript', 'React', 'Node.js']
//Añadir elemento array
tecnologias.push('GraphQL')// No utilizar, modifica el objeto original, añade al final
tecnologias.unshift('GraphQL')//No utilizar, modifica el objeto original, añade al principio

//Mejor hacerlo asi, se crea un nuevo objeto sin modificar el objeto original
const nuevoArreglo=[...tecnologias,'GraphQL']

const nuevoArreglo2=['GraphQL',...tecnologias]

//Eliminar elementos Array
 //Elimina el ultimo elemento
tecnologias.pop() //No utilizar, modifica el objeto original
//elimina desde el inicio
tecnologias.shift() //No utilizar, modifica el objeto original
//elimina desde la posicion 2 hasta el final
 tecnologias.splice(2) //No utilizar, modifica el objeto original
// elimina desde la posicion2 ,1 elemento ( el numero de elementos indicados por parametro)
tecnologias.splice(2,1) //No utilizar, modifica el objeto original
/** *****Estos no deben utilizarse en react porque modifican el objeto original ****
Mejor utilizar map y foreach*/


// Map y For Each

//En react usar filter, permite filtar y recorrer, 
// con return, devuelve todos menos el indicado
const nuevoArrayFilter=tecnologias.filter( function(tech){
   return tech=='React'
    // console.log('desde filter: ',tech)
})
console.table(nuevoArrayFilter)

//Remplazar elementos Array
//No, modifica objeto original, Añadir elemento en la posicion 0
tecnologias[0]='React'

// Mejor utilizar map
const nuevoArrayMap =tecnologias.map(function(tech){
    if(tech=== 'HTML'){
        return 'React'
    }else{
        return tech
    }
})

console.table(tecnologias)
// console.table(nuevoArreglo)
// console.table(nuevoArreglo2)

console.table(nuevoArrayMap)
