/**
 * funciones - Function Declaration
 * 
 * El hoisting es una forma de expresarse a como se ejecuta JavaScript(específicamente
 * las fases de creación y ejecución). 
 *
 * Por lo tanto JS, registra primeros los Funciones, y en una segunda vuelta las ejecuta, con las variables no pasa esoo} numero
 *  
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/12.js"></script>
*
 */

 //se peude llamar varias veces y antes o despues de la declaracion
 console.log('Ejemplo multillamada: ')
sumar()

function sumar(){
    console.log(2+2)
}

sumar()
sumar()


// Se le pueden pasar parametros separados por comas
console.log('Ejemplo llamada con parametros: ')
 sumar2(10,20)

// // si se asigna a 0 se toma por defecto si no tiene valor, si no ida NaN
function sumar2(numero,numero2=0){
  console.log(numero +numero2)
}

sumar2(100,200)
sumar2(100,) //devuelve NaN
sumar2()


//21-  funciones  - retornar valores 
console.log('Ejemplo uso return: ')
// todo el return debe ir con corchetes
function sumar3(numero = 0,numero2 = 0){
  return [numero + numero2 , 'Hola Mundo']

}
const [resultado , holaMundo]=sumar3(20, 30)
console.log(resultado)
console.log(holaMundo)

// Si el return esta con llaves devuelve un objeto
console.log('Ejemplo return objeto: ')
function sumar4(numero = 0, numero2 = 0) {
  return {
    resultado2: numero + numero2,
    mensaje: 'Hola Mundo'
  }

}

const { resultado2, mensaje } = sumar4(20, 30)
console.log(resultado2)
console.log(mensaje)

//Con Hooks veremos este uso
//const [resultado3, setResultado] = useSta(0)


