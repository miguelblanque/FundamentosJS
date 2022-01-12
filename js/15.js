// Array Functions y Array Methods

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


console.log(nuevoArray)
console.log(nuevoArray2)