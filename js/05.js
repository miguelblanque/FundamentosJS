/** Objetos - Manipulacion
 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/05.js"></script>
*/
  const producto={
    nombre : "Tablet",
     precio: 300,
      disponible: true
    }

    //freeze - Bloquear el objeto para que no se pueda modificar
    Object.freeze(producto)
   //seal - Modificar propiedades existentes, pero no se puede añadir
    Object.seal(producto)
    
    //Reescribir un valor
    producto.nombre="Monitor Curvo"
    //añador propiedad
    producto.imagen="Imagen.jpg"
   

    //eliminar 

    delete producto.disponible

    console.table(producto)

