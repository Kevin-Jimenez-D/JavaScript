import {post as guardarLibro, getRelationships as ObtenerAllData} from './storage/libro.js';
import {getAll as getAllCat} from './storage/categoria.js';
import {getAll as getAllAut} from './storage/autor.js';

let myLibro = document.querySelector("#myLibro");
let myCategoria = document.querySelector("#myCategoria");
let myAutor = document.querySelector("#myAutor");
let myData = document.querySelector("#myData");

addEventListener("DOMContentLoaded", async(e)=>{
    let cat = await getAllCat();
    cat = cat.map(res=> `<option value="${res.id}">${res.nombre}</option>`);
    myCategoria.insertAdjacentHTML("beforeend", `${cat.join("")}`);

    let aut = await getAllAut();
    aut = aut.map(res=> `<option value="${res.id}">${res.nombre} ${res.apellido}</option>`);
    myAutor.insertAdjacentHTML("beforeend", `${aut.join("")}`);

    let relLibro = await ObtenerAllData();
    console.log(relLibro);
    relLibro = relLibro.map(res=>{
        return `
            <tr>
                <td>${res.id}</td>
                <td>${res.isbn}</td>
                <td><img src="${res.imagen}" style="width: 60px;height: 80px; object-fit: fill;"  /></td>
                <td>${res.titulo}</td>
                <td>${(res.categoriaId.nombre) ? res.categoriaId.nombre : res.categoriaId.message}</td>
                <td>${res.autorId.nombre}</td>
                <td>${res.editorialId}</td>
                <td>${res.numPaginacion}</td>
                <td>${res.fecha}</td>
                <td>${res.estadoId}</td>
            </tr>
        `;
    })
    myData.insertAdjacentHTML("beforeend", `${relLibro.join("")}`);
})


myLibro.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    const { autorId:aut, categoriaId:cat, editorialId:edi, numPaginacion:num, estadoId:est} = data;
    data.autorId = Number(aut);
    data.categoriaId = Number(cat);
    data.editorialId = Number(edi);  
    data.numPaginacion = Number(num);
    data.estadoId = Number(est);
    alert(JSON.stringify(await guardarLibro(data)));
})



/* Comentarios
Este código en JavaScript se ocupa de interactuar con una interfaz web que permite la administración de libros. A continuación, se describe su lógica y funcionalidad:

Importación de funciones: El código importa varias funciones desde módulos relacionados con la administración de libros, categorías y autores. Estas funciones incluyen la capacidad de guardar libros en el almacenamiento, obtener relaciones entre los datos y obtener todas las categorías y autores disponibles.

Selección de elementos HTML: El código selecciona varios elementos del DOM utilizando el método querySelector. Estos elementos corresponden a formularios, listas desplegables y áreas donde se mostrarán los datos.

Evento de "DOMContentLoaded": El código agrega un "escuchador de eventos" que espera a que el contenido del DOM esté completamente cargado (cuando se dispara el evento "DOMContentLoaded"). Una vez que se carga la página, se ejecuta una función asíncrona. Dentro de esta función:

Se obtienen todas las categorías y autores disponibles y se generan opciones de selección para las listas desplegables myCategoria y myAutor.
Se obtienen datos relacionados de libros utilizando la función ObtenerAllData(). Estos datos se formatean y se insertan en la tabla myData.
Evento de envío del formulario: El código agrega un "escuchador de eventos" al formulario myLibro que escucha el evento de envío. Cuando se envía el formulario (por ejemplo, al hacer clic en el botón "Send"), se ejecuta una función asíncrona. Dentro de esta función:

Se evita el comportamiento predeterminado del formulario (recargar la página).
Se recopilan los datos del formulario utilizando Object.fromEntries y se convierten en un objeto data.
Se extraen ciertos valores del objeto data (como autorId, categoriaId, etc.) y se convierten en números.
Los datos se envían para ser guardados utilizando la función guardarLibro(data) y se muestra una alerta con la respuesta.
En resumen, este código maneja la interfaz de usuario de una aplicación web para administrar libros. Al cargar la página, obtiene datos de categorías, autores y relaciones de libros para mostrarlos en la página. También permite al usuario enviar un formulario para guardar un nuevo libro. Las funciones utilizadas para obtener y guardar datos se importan de otros módulos relacionados con la administración de libros.





Las relaciones en el código que proporcionaste se refieren a cómo se establecen y utilizan las conexiones entre los datos de diferentes entidades o tablas en una base de datos. En este caso, las relaciones se utilizan para enlazar y mostrar datos relacionados de libros, categorías y autores en la interfaz de usuario. A continuación, te explicaré más sobre cómo se manejan estas relaciones en el código:

Obtener todas las categorías y autores:

Al principio del código, se utilizan las funciones getAllCat() y getAllAut() para obtener todos los registros de categorías y autores respectivamente.
Estos registros se almacenan en las variables cat y aut, que son arreglos de objetos que representan las categorías y autores disponibles.
Obtener relaciones de libros:

La función ObtenerAllData() se utiliza para obtener datos relacionados de libros. Estos datos pueden incluir información sobre el libro, su categoría, autor, y otros detalles.
Los datos obtenidos se almacenan en la variable relLibro, que es un arreglo de objetos.
Formateo de datos relacionados:

Después de obtener los datos relacionados de libros, el código entra en un bucle que recorre cada objeto en relLibro.
Cada objeto representa un libro con sus relaciones, como su categoría y autor.
Se formatean estos datos relacionados y se crean filas de una tabla HTML con la información correspondiente. Por ejemplo, se crea una fila de la tabla que muestra el ID del libro, su ISBN, título, nombre de la categoría, nombre del autor, y otros detalles.
Cualquier valor faltante en las relaciones se maneja adecuadamente; por ejemplo, si una categoría no tiene nombre (valor undefined), se muestra un mensaje indicando que la categoría no existe.
En resumen, las relaciones en el código permiten que se muestren datos completos y relacionados en la interfaz de usuario. Esto facilita la visualización de información detallada sobre los libros, incluyendo sus categorías y autores asociados. Las relaciones son fundamentales para comprender cómo los datos se conectan y se muestran en el contexto de una aplicación de administración de libros

*/