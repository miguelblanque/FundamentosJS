/** Fect API - Async Awart (Multiples llamadas)
 *   
 * 
 *   Se utiliza para consumir una api o servicio desde un navegador
 *   Como ejemplo vamos a utilizar https://jsonplaceholder.typicode.com/
 *   
 *   con Await bloqueamos la ejecucion hasta que la respuesta esta lista
 *  
 *  Para probar incluir en el alchivo index.html el script -> <script src="js/31.js"></script>
*/

//500 comentarios
const url ='https://jsonplaceholder.typicode.com/comments'
// 5000 fotos
const url2 ='https://jsonplaceholder.typicode.com/photos'


 //Opcion 1- Ejecutar las llamadas secuencialmente- Se observa que el tiempo de respuesta es mas lento y puede llegar a ser un problema
 // hasta que no termina una ejecucion no realiza la siguiente

const consultarApi= async ()=> {
    const inicio=performance.now()
   // console.log('Iniciando la primera consulta - consultarApi')
    const respuesta =await fetch(url)
    const resultado = await respuesta.json()
  console.log(resultado)
  //console.log('Iniciando la segunda consulta - consultarApi')
  const respuesta2 =await fetch(url2)
    const resultado2 = await respuesta2.json()
  console.log(resultado2)
  //console.log('Fin consultarApi')
  const fin=performance.now()
  //Mostramos los tiempos de ejecucion. usamos template string para mostrar variables en el log, las comillas son especiales
  console.log(`Ejecucion consultarApi: ${fin-inicio} ms`)
 }
 
 
 consultarApi()
 

//Opcion 2 - Para optimizar las consultas se realizan las dos llamadas a la vez y el tiempo de respuesta se acorta considerablemente
const consultarApi2= async ()=> {
    const inicio=performance.now()
    //console.log('Iniciando las dos consultas - consultarApi2')
    // Realizamos las dos llamadas a la vez para que inicien al mismo tiempo.
  const [respuesta,respuesta2] = await Promise.all([ fetch(url), fetch(url2) ])
  const resultado =await respuesta.json()
  const resultado2=await respuesta2.json()
  console.log(resultado)
  console.log(resultado2)
  //console.log('Fin consultarApi2')
  const fin=performance.now()
// Mostramos los tiempos de ejecucion. usamos template string para mostrar variables en el log, las comillas son especiales
  console.log(`Ejecucion consultarApi2: ${fin-inicio} ms`)
 }
 
 
 consultarApi2()

 