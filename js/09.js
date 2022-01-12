//Operaciones en los arreglos 

const tecnologias=['HTML','CSS','JavaScript', 'React', 'Node.js']
//Añadir elemento array
//tecnologias.push('GraphQL',)// No,modifica el objeto original, añade al final
//tecnologias.unshift('GraphQL')//No, modifica el objeto original, añade al principio
//Mejor hacerlo asi, se crea un nuevo objeto sin modificar el objeto original
const nuevoArreglo=[...tecnologias,'GraphQL']

const nuevoArreglo2=['GraphQL',...tecnologias]

//Eliminar elementos Array
 //No, modifica el objeto original
// tecnologias.pop() 
//elimina desde el inicio
// tecnologias.shift()
//elimina desde la posicion 2 hasta el final
// tecnologias.splice(2)
// elimina desde la posicion2 ,1 elemento
// tecnologias.splice(2,1)
// Estos no deben utilizarse en react porque modifican el objeto original

//En react usar filter, permite filtar y recorrer, 
// con return, devuelve todos menos el indicado
// const nuevoArray=tecnologias.filter( function(tech){
//    return tech=='React'
//     // console.log('desde filter: ',tech)
// })
// console.table(nuevoArray)

//Remplazar elementos Array
//No, modifica objeto original, Añadir elemento en la posicion 0
//tecnologias[0]='React'

// Mejor utilizar map
const nuevoArray =tecnologias.map(function(tech){
    if(tech=== 'HTML'){
        return 'React'
    }else{
        return tech
    }
})

console.table(tecnologias)
// console.table(nuevoArreglo)
// console.table(nuevoArreglo2)

console.table(nuevoArray)
