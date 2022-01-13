/** Manipulas elementos HTML con JS
 * *
 * - Primero se imprime todo el html y despues JS lo reescribe
 * 
 *  Para probar incluir en el alchivo DOM.html el script -> <script src="js/23.js"></script>
*/

const heading = document.querySelector('.heading')

// si se modifica la propiedad se cambia directamente en el html. verificar inspecionando elemento
heading.textContent='Un nuevo html'

console.log(heading.textContent)

// Modificamos el value del formulario value="hola mundo" por 
const inputNombre=document.querySelector('#nombre')

inputNombre.value = 'Un valor por default'


//Modificamos todos los enlaces del formulario:
// -Enlace 1 -> Nuevo Enlace: 0
// -Enlace 2 -> Nuevo Enlace: 1
// -Enlace 3 -> Nuevo Enlace: 2 
// -Enlace 4 -> Nuevo Enlace: 3

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach((enlace,index) => enlace.textContent='Nuevo Enlace: '+index)
