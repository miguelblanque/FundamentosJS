/**Objetos - unir dos objetos
 * 
*  Para probar incluir en el alchivo indext.html el script -> <script src="js/07.js"></script>
*/
    const producto={
     nombre : "Tablet",
     precio: 300,
     disponible: true
    }


    const cliente={
      nombre : "Miguel",
      premium: true
    }

     //   const nuevoObjeto=Object.assign(producto,cliente)//No
      //const nuevoObjeto2={...producto,...cliente} // No
      
      // Crea dos objetos sin modificar los originales
      const nuevoObjeto2={
      producto:{...producto},
      cliente: {...cliente}
      }
      console.log(nuevoObjeto2)
      console.log(cliente)
      console.log(producto)