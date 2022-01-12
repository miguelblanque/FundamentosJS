// Destructuring de array

const tecnologias=['HTML','CSS','JavaScript', 'React', 'Node.js']

console.log(tecnologias)
//se extraen propiedades en orden, no se buscar el valor
const [html,rEaCt]= tecnologias

console.log(html)
console.log(rEaCt)


// const [var1,var2,var3,var4,var5]= tecnologias
const [,,,,var5]= tecnologias

console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)
console.log(var5)


// const cliente={
//     nombre: 'Miguel',
//     tipo: 'Premium'
// }

// const {tipo} = cliente
// console.log(tipo)