/* Scope de variables - es el alcance de la variable 
 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/21.js"></script>
*
*/

const precio=300

function unaFuncion(){
     const precio=600
     console.log(precio)
}

if(true){
    console.log(precio)
}
console.log(precio)

unaFuncion()
