//Objetos - Destructuring con 2 o mas objetos

const producto={
    nombre : "Tablet",
     precio: 300,
      disponible: true
    }


    const cliente={
      nombre : "Miguel",
       premium: true
      }

     const {nombre, precio, disponible}= producto
// crear un alias
     const {nombre: nombreCliente, premium}= cliente
     
     console.log(nombre,precio,disponible)

     console.log(nombreCliente,premium)