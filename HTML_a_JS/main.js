//Esto es la etiqueta que se actualiza en el HTML
const valorVariableElement = document.getElementById('valorVariable');

const incrementarButton = document.getElementById('incrementar');
const disminuirButton = document.getElementById('disminuir');

//Se inicializa en cero
let valor = 0;

//Actualizar el valor y enviarlo al HTML de acuerdo a una función
function actualizarValor() {
    valorVariableElement.textContent = valor;
}

//Detecta click, aumenta el valor y lo actualiza con la función
incrementarButton.addEventListener('click', function () {
    valor++;
    actualizarValor();
});

//Detecta click, disminuye el valor y lo actualiza con la función
disminuirButton.addEventListener('click', function () {
    valor--;
    actualizarValor();
});

//Se llama a la función a lo último
actualizarValor();





//BUSCARV
let searchForm = document.querySelector("#searchForm"); // selecciona el formulario de búsqueda donde se evidenciará los resultados al colocar el ID
let searchTableBody = document.querySelector("#search"); // selecciona el tbody de búsqueda donde se evidenciara en el HTML la ID buscada
//BUSCARV

//BUSCARV Hace la busqueda al colocar la ID, y darle en buscar ID, en caso de que no exista, dice que no existe y se ve en el HTML
//searchForm con el id #searchForm es la tabla donde se buscaran las IDs, si se le da submit, buscara el evento en ese formulario
searchForm.addEventListener("submit", async (e) =>{
    e.preventDefault();

    //En este caso, está buscando un elemento <input> que tenga un atributo name igual a "ID", que esta en el HTML de la tabla para buscar
    //Ese dato, que es el que ingresa el usuario, es el que comparara con el array
    const idToSearch = document.querySelector("input[name='ID']").value;
    console.log(idToSearch);
})