/** Funciones - Arrow functions =>
 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/14.js"></script>
*/
console.log('Ejemplo sumarfunction: ')
    const sumar1=function(numero=0,numero2=0 ){
    console.log(numero+numero2)
    }
   sumar1(2,2)

   console.log('Ejemplo sumarArrow: ')
   const sumar=(numero=0,numero2 =0)=>{
    console.log(numero+numero2)
   }

   sumar(2+2)

// La ventaja de los arrow funtions son los return
      const sumar3=(numero=0,numero2 =0)=>{
        return numero+numero2
       }
       sumar3(2+2)

// Una caracteristica de los arrow function es que si solo cuentan con una linea, dan por implicito el return
//Se pueden simplificar quitando llaves y return si solo devuelve una linea, con mas lineas hay que agregar llaves
console.log('Ejemplo sumarArrow sin llaves: ')
const sumar4=(numero=0,numero2 =0)=> numero+numero2
    
   
   const resultado=    sumar4(2+2)
   console.log(resultado)

// Con un parametro no es necesario los parentesis
console.log('Ejemplo sumarArrow simplificado: ')
   const sumarArrow=()=> 2+2
    
   const resultado2=    sumarArrow()
   console.log(resultado2)