/** Eventos del DOM - submits
 * *
 *  Creamos una validacion de formulario
 * 
 *  Para probar incluir en el alchivo DOM.html el script -> <script src="js/26.js"></script>
*/

//Añadimos la ocultacion de password y que se muestre durante 1 sg mientras se escribe
const inputPassword=document.querySelector('.password')
inputPassword.type='password'

inputPassword.addEventListener('input',functionPassword)
function functionPassword(e){
    console.log(e.target.value)
    password.type='text'

    setTimeout(()=> {
        password.type='password'
    },1000);
}

// realizamos las validaciones del formulario al hacer click en Login
const formulario=document.querySelector('#formulario')


formulario.addEventListener('submit', e => {
    //detiene la accion de enviar formulario  para realizar las validaciones
    e.preventDefault()

    // Podemos mostrar el valor usando nombre.value
    const nombre=document.querySelector('.nombre')
    console.log('Ejemplo nombre.value: ',nombre.value)
  
    //otra opcion es utilizar el .value en el querySelector y asi podemos usar directamente la variable
    const nombre2=document.querySelector('.nombre').value
    console.log('Ejemplo querySelector.value: ',nombre2)

    // Realizamos las validaciones sobre el password
    // - Nombre y password obligatorios
    // - Nombre no puede ser igual a password
    const password=document.querySelector('.password').value
   
    console.log('Nombre: ',nombre2, ' - Password: ',password)
    if(nombre2 === '' || password=== ''){
        console.log('Error, todos los campos son obligatorios')
    }else if(nombre2 === password){
        console.log('Error, usuario y contraseña identicos')
    }else{
        console.log('Todo bien, enviando... ')
    }
    console.log('Enviaste el formulario')
})

