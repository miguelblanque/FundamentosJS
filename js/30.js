/** Fect API con Async await
 * *
 *   
 * 
 *   Se utiliza para consumir una api o servicio desde un navegador
 *   Como ejemplo vamos a utilizar https://jsonplaceholder.typicode.com/
 *   
 *   con Await bloqueamos la ejecucion hasta que la respuesta esta lista
 *  
 *  Para probar incluir en el alchivo index.html el script -> <script src="js/30.js"></script>
*/


// utilizamos la parte del codigo de 29.js
const url ='https://jsonplaceholder.typicode.com/comments'

// const consultarApi=()=> {
//     fetch(url)
// .then( respuesta => respuesta.json())
// .then( resultado =>{
//      resultado.forEach( comentario => {
//       console.log(comentario)
//   });
// })
// }
// consultarApi()
 
//Mismo funcionamiento con async
const consultarApi= async ()=> {
   const respuesta =await fetch(url)
   const resultado = await respuesta.json()
   resultado.forEach( comentario => {
          console.log(comentario)
      })
}



consultarApi()

async function consultarApi2() {
    const respuesta1 = await fetch(url)
    console.log(respuesta1)
    console.log('Despues de la respuesta')
    const resultado1 = await respuesta1.json()
    //console.log(resultado1)
    console.log('despues del resultado')
}
consultarApi2()

const consultarApi3 = async () => {
    const respuesta2 = await fetch(url)
    const resultado2 = await respuesta2.json()
    console.log(resultado2)
}
consultarApi3()
 