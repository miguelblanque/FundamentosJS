// Objetos

const producto={
    nombre : "Tablet",
     precio: 300,
      disponible: true
    }

      console.log(producto)
      console.table(producto)

      console.log(producto.nombre)
      console.log(producto.precio)
      console.log(producto.disponible)

      //Destructuracion, extraer valores del objeto

      const { nombre, precio, disponible}= producto

      console.log(nombre)

      //Object Literal enhacement

      const authenticado=true
      const usuario= "Miguel"
// Si se llaman igual se puede omitir la asignacion, si es diferente falla
      const nuevoObjeto={
          authenticado ,
          usuario: usuario
      }

      console.table(nuevoObjeto)