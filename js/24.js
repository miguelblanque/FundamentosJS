/** Eventos del DOM - clicks
 * *
 * 
 * 
 *  Para probar incluir en el alchivo DOM.html el script -> <script src="js/24.js"></script>
*/

const heading=document.querySelector('.heading')
//Podemos añadir un evento + accion a realizar
// Cuando hagamos click en el elemento de cabecera nos aparecera el mensaje en la consola
// 
//Opcion 1
heading.addEventListener('click',function(){
    console.log('Opcion 1 - Diste click en el heading')
})

//Opcion 2 - utilizando function
// No se llama a la funcion
function clickHeading2(){
    console.log('Opcion 2 - Diste click en el heading utilizando funcion')
}
heading.addEventListener('click',clickHeading2)

//Opcion 3
// utilizando  function-expresion, la llamada al metodod se tiene que realizar despues de la declaracion de la funcion
const clickHeading3= function(){
    console.log('Opcion 3 - Diste click en el heading utilizando function-expresion')
}
heading.addEventListener('click',clickHeading3)

//Opcion 4
// utilizando  Array-funtions
const clickHeading4= () => {
    console.log('Opcion 4 - Diste click en el heading utilizando Array-functions')
}
heading.addEventListener('click',clickHeading4)


heading.addEventListener('click',()=> {
    console.log('Opcion 4 - Diste click en el heading utilizando Array-functions')
})

//Opcion 5
// Modificar propiedades cabecera cuando se activa el evento
const heading2=document.querySelector('.heading')
heading2.addEventListener('click',()=> {
    console.log('Opcion 5 - Modificando cabecera utilizando Array-functions')
    heading2.textContent='Nuevo Heading a l dar click'
})

//Opcion 6
//Podemos registrar un evento para todos los enlaces, cada vez que se haga click en un enlace, mostrara un mensaje por pantalla
const enlaces= document.querySelectorAll('.navegacion a')
enlaces.forEach((enlace, index) => enlace.addEventListener('click',()=> {
    console.log('Opcion 6 - Diste click en el enlace: ',index+1)
})
)

