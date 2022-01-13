/** selectores del DOM - (D-Documento , O-Objeto, M- Modelo)
*
* Es un estandar W3C para acceder a los documentos.
* Que se puede hacer:
*    -JavaScript puede cambiar todos los elementos HTML en la página
*    -JavaScript puede cambiar todos los atributos HTML en la página
*    -JavaScript puede cambiar todos los estilos CSS en la página
*    -JavaScript puede eliminar elementos y atributos HTML existentes
*    -JavaScript puede agregar nuevos elementos y atributos HTML
*    -JavaScript puede reaccionar a todos los eventos HTML existentes en la página
*    -JavaScript puede crear nuevos eventos HTML en la página
*
*  El estandar W3C se divide en 3 partes:
*     - Core DOM: modelo estándar para todos los tipos de documentos
*     - XML DOM - modelo estándar para documentos XML
*     - HTML DOM - modelo estándar para documentos HTML
*
*            El HTML DOM es un modelo de objeto estándar y una interfaz de programación para HTML. Se define:
*            
*            Los elementos HTML como objetos
*            Las propiedades de todos los elementos HTML
*            Los métodos para acceder a todos los elementos HTML
*            Los eventos para todos los elementos HTML
*            
*            
* - document.querySelector - obtiene un elemento
* - document.querySelectorAll - obtiene todos los  elementos
*  se pueden seleccionar .class, #id, etiquetas h1,h2...
*
 *  Para probar incluir en el alchivo DOM.html el script -> <script src="js/22.js"></script>
*/

//- document.querySelector
console.log('Probando document.querySelector: ')
const heading = document.querySelector('h2')
console.log(heading)
const heading2 = document.querySelector('.DOM h2')
console.log(heading2)
 const heading3 = document.querySelector('#heading')
 console.log(heading3)
 const heading4 = document.querySelector('.heading')
 console.log(heading4)
console.log(heading4.textContent)
console.log(heading4.tagName)
console.log(heading4.className)



const heading5 = document.querySelector('.navegacion a')
console.log(heading5)

//- document.querySelectorAll
console.log('Probando document.querySelectorAll: ')
const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)

// para acceder al cada elemento tenemos que iterar sobre los lementos
const arrayEnlaces=enlaces.forEach((enlace,index) => {
    console.log('Iteracion: ',index)
    console.log(enlace)
});

//si no existe no da error
const enlacesNoExiste = document.querySelectorAll('.navegacion a')
console.log(enlacesNoExiste)