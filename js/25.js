/** Eventos del DOM - inputs
 * *
 * 
 * 
 *  Para probar incluir en el alchivo DOM.html el script -> <script src="js/25.js"></script>
*/


const inputNombre=document.querySelector('.nombre')

inputNombre.value = 'Un value desde JS'



// input para detectar lo que el usuario escribe 
const inputNombreEscritura = document.querySelector('.nombre')
inputNombreEscritura.addEventListener('input', function(){
    console.log('Escribiendo en el input: input')
    //Muesta el valor del input
    console.log('Valor input: ',inputNombreEscritura.value)
})

inputNombreEscritura.addEventListener('input', function(e){
    console.log('Escribiendo: ',e)
    console.log('Target: ',e.target)
    console.log('Target.value: ',e.target.value) //controlar caracteres
})

// keydown - cuando presionas las tecla
inputNombreEscritura.addEventListener('keydown', function(){
    console.log('Escribiendo en el input: Keydown')
})

// keyup - Cuando presionas y levantas la tecla
inputNombreEscritura.addEventListener('keyup', function(){
    console.log('Escribiendo en el input: Keyup')
})



// Modificamos la propiedad nombre para que sea password y no se muestre su valor
const inputPassword=document.querySelector('.password')
inputPassword.type='password'

//Implementamos una funcion para que muestre el texto del password durante 1 sg y despues lo oculte
inputPassword.addEventListener('input',functionPassword)

function functionPassword(e){
    console.log(e.target.value)
    inputPassword.type='text'

    setTimeout(()=> {
        inputPassword.type='password'
    },1000);
}