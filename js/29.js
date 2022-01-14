/** Fect API y Promises
 * *
 *   Es el nuevo ajax en JS, anteriormente se utilizaba XMLHttpRequest
 * 
 *   Se utiliza para consumir una api o servicio desde un navegador
 *   Como ejemplo vamos a utilizar https://jsonplaceholder.typicode.com/
 *  
 *  Para probar incluir en el alchivo index.html el script -> <script src="js/29.js"></script>
*/


const url ='https://jsonplaceholder.typicode.com/comments'
// 1 forma de hacerlo:
// fetch(url)
// .then( (respuesta) => {
//       console.log(respuesta)
//       // obtenemos la respuesta en json
//     return respuesta.json()
// }).then((resultado) =>{
//     console.log('resultado casi listo')
//     console.log(resultado)

//     recorremos las salida y mostramos por consola
//     resultado.forEach( comentario => {
//         console.log(comentario)
//     });
// })

//  2 forma de hacerlo: simplifando el codigo
// fetch(url)
// .then( respuesta => respuesta.json())
// .then( resultado =>{
//      resultado.forEach( comentario => {
//       console.log(comentario)
//   });
// })


// 3 forma de hacerlo: encapsulandolo en una funcion
const consultarApi=()=> {
    fetch(url)
.then( respuesta => respuesta.json())
.then( resultado =>{
     resultado.forEach( comentario => {
      console.log(comentario)
  });
})
}
consultarApi()
 