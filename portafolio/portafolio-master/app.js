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

