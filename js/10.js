/** Destructuring de array, extraer propiedades de un array 
 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/10.js"></script>
*/
const tecnologias=['HTML','CSS','JavaScript', 'React', 'Node.js']

console.log(tecnologias)
//se extraen propiedades en orden, no se buscar el valor
const [html,rEaCt]= tecnologias

console.log(html)
console.log(rEaCt)

// Se pueden extraer poniendo variables o dejandolo vacio
// const [var1,var2,var3,var4,var5]= tecnologias
const [,,,,var5]= tecnologias

// console.log(var1)
// console.log(var2)
// console.log(var3)
// console.log(var4)
console.log(var5)

//destructuring de un objeto
const cliente={
    nombre: 'Miguel',
    tipo: 'Premium'
}
console.log('Destructuring de un objeto: ')
const {tipo} = cliente
console.log(tipo)