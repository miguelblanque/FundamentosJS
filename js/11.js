/** 
 * Iteradores en JS
*  - forEach
*  - map

 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/11.js"></script>
*
*/
const tecnologias=['HTML','CSS','JavaScript', 'React', 'Node.js']

//forEach - Acceder a cada elemento del array

console.log('Ejemplo forEach:')
const arrayForeach=tecnologias.forEach( function(tech){
    console.log(tech)
})
// Crear un nuevo array
console.log('Ejemplo map:')
const arrayMap=tecnologias.map( function(tech){

   return tech
})

console.log(arrayForeach)
console.log(arrayMap)