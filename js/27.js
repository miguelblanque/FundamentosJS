/** Generando codigo HTML con Javascript
 * *
 *   Reutilizamos el codigo del archivo 26.js de validacion del formulario y  
 *  añadiremos una alerta y la mostraremos en pantalla
 * 
 *  Para probar incluir en el alchivo DOM.html el script -> <script src="js/27.js"></script>
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
   // console.log('Ejemplo nombre.value: ',nombre.value)
  
    //otra opcion es utilizar el .value en el querySelector y asi podemos usar directamente la variable
    const nombre2=document.querySelector('.nombre').value
   // console.log('Ejemplo querySelector.value: ',nombre2)

    // Realizamos las validaciones sobre el password
    // - Nombre y password obligatorios
    // - Nombre no puede ser igual a password
    const password=document.querySelector('.password').value
   
    // ->>>>Generamos el codigo html desde Javascript  con createElement <<<--
    // los elementos generados se escriben en mayusculas
    // antes de crear el elemento DIV consultamos si existe para eliminarlo, Si no lo hacemos se mostraran todas las alertas en la pantalla
    const alertaPrevia=formulario.querySelector('.alerta')
    if(alertaPrevia){
        alertaPrevia.remove()
    }
// creamos el elemento DIV
    const alerta=document.createElement('DIV')
    //podemos modificar el id del elemento creado
    alerta.id='alerta'
    //podemos añadir una clase o varias separadas por comas
    alerta.classList.add('alerta')
   

    console.log('Nombre: ',nombre2, ' - Password: ',password)

    if(nombre2 === '' || password=== ''){
        //añadimos el contenido de la alerta y la clase error al elemento alerta
        alerta.textContent='Error, todos los campos son obligatorios'
        alerta.classList.add('error')

        console.log('Error, todos los campos son obligatorios')
       
    }else if(nombre2 === password){
        //añadimos el contenido de la alerta y la clase error al elemento alerta
        alerta.textContent='Error, usuario y contraseña identicos'
        alerta.classList.add('error')

        console.log('Error, usuario y contraseña identicos')
    }else{
        //añadimos el contenido de la alerta y la clase exito al elemento alerta
        alerta.textContent='Todo bien, enviando...'
        alerta.classList.add('exito')

        console.log('Todo bien, enviando... ')
    }
    console.log('Enviaste el formulario')
    console.log(alerta)

    //añadimos el mensaje de alerta al HTML con appendChild
    formulario.appendChild(alerta)

})
