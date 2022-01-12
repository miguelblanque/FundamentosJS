// funciones - Function Declaration

//Hoisting, se peude llamar antes de declarar
// sumar()

// function sumar(){
//     console.log(2+2)
// }
// se peude llamar varias veces
// sumar()
// sumar()


// sumar(10,20)

// // si se asigna a 0 se toma por defecto si no tiene valor, si no ida NaN
// function sumar(numero,numero2=0){
//   console.log(numero +numero2)
  
// }

// sumar(100,200)
// sumar(100,) //devuelve NaN
// sumar()

//21-  funciones retornar valores
// el return con corchetes
// function sumar(numero = 0,numero2 = 0){
//   return [numero + numero2 , 'Hola Mundo']
  
// }
// const [resultado , holaMundo]=sumar(20, 30)
// console.log(resultado)
// console.log(holaMundo)
//con llaves devuelve un objeto
function sumar(numero = 0,numero2 = 0){
    return {
        resultado: numero + numero2 , 
        mensaje: 'Hola Mundo'
    }
    
  }

const {resultado , mensaje}=sumar(20, 30)
console.log(resultado)
console.log(mensaje)

//Con Hooks veremos este uso
const[resultado,setResultado]=useState(0)