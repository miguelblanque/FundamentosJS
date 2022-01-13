/** Array Functions y Array Methods
 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/15.js"></script>
*/

const tecnologias=['HTML','CSS','JavaScript', 'React', 'Node.js']

// Si solo contiene un elemento se pueden elimiinar los 
//const nuevoArray =tecnologias.map(function(tech){
//     if(tech=== 'HTML'){
//         return 'GhapQL'
//     }else{
//         return tech
//     }
// })

const nuevoArray =tecnologias.map(tech => {
    if(tech=== 'HTML'){
        return 'GhapQL'
    }else{
        return tech
    }
})


// Se puede sustituir por la linea de abajo
//const nuevoArray2 =tecnologias.filter(function(tech){   
//         return tech === 'React'   
// })

const nuevoArray2 =tecnologias.filter(tech => tech !== 'React')


console.log('Ejemplo map: ',nuevoArray)
console.log('Ejemplo filter: ',nuevoArray2)