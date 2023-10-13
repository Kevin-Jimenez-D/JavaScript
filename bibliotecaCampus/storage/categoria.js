import {env} from "../config.js";

const uri = `${env.ssl + env.hotsName}:${env.port}`;
const config = {method: undefined, headers: {"Content-Type": "application/json"}};


const validarExtructura = (data={})=>{
    if(data.constructor.name !== "Object" || Object.keys(data).length==0) return {status: 400, message: `Usuario envie los datos`};
    const {
        nombre=null
    } = data;
    if(typeof nombre !== 'string') return {status: 400, message: `El nombre '${nombre}' no cumple con el formato`};
    return data;
}
export const getOne = async(id)=>{
    config.method = "GET";
    // config.body = "";
    let res = await (await fetch(`${uri}/categoria/${id}`, config)).json();
    return (Object.keys(res).length>0) ? res : {status: 401, message: "La categoria no existe", id};
}
export const getAll = async()=>{
    config.method = "GET";
    // config.body = "";
    let res = await (await fetch(`${uri}/categoria`, config)).json();
    return res;
}
export const post = async(obj={})=>{
    obj = validarExtructura(obj);
    if(obj.status) return obj;
    
    config.method = "POST";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/categoria`, config)).json();
    return res;
}


/* Comentarios
Este código en JavaScript es un módulo que se relaciona con operaciones de una API web para administrar categorías. A continuación, te explico la lógica y funcionalidad de este módulo:

Importación de variables de configuración: El código importa una variable llamada env desde un archivo "config.js". Esta variable puede contener configuraciones de la aplicación, como la URL del servidor.

Definición de constantes: Se define una constante llamada uri, que combina el protocolo (https o http), el nombre del host y el puerto, utilizando la información de la variable env. Esto establece la dirección base para las solicitudes a la API.

Configuración de las solicitudes: Se crea un objeto config que contiene información sobre las solicitudes HTTP. Inicialmente, el método se establece como undefined, y se especifica que el tipo de contenido es JSON. Este objeto se utilizará en todas las solicitudes realizadas por este módulo.

Función de validación: El código define una función de validación llamada validarEstructura, que verifica si un objeto pasado como argumento cumple con una serie de requisitos específicos. Si encuentra un error en los datos, devuelve un objeto con un código de estado y un mensaje de error. De lo contrario, devuelve el objeto de datos original.

Exportación de funciones: El módulo exporta tres funciones que se utilizan para interactuar con la API web relacionada con la administración de categorías:

getOne: Realiza una solicitud GET para obtener una categoría específica según su ID. Si la categoría no existe (según el objeto de respuesta), se devuelve un objeto con un código de estado 401 y un mensaje de error.

getAll: Realiza una solicitud GET para obtener todas las categorías.

post: Realiza una solicitud POST para crear una nueva categoría. Antes de enviar la solicitud, se validan los datos utilizando la función validarEstructura.

En resumen, este módulo proporciona una interfaz para interactuar con una API web relacionada con la administración de categorías. Realiza solicitudes HTTP, valida los datos de entrada y exporta funciones que se utilizan para realizar operaciones de Crear y Leer (CRUD) en categorías. Las funciones son similares a las del módulo anterior, pero se aplican específicamente a la entidad "categoría".
*/
// console.log(post({nombre:"Drama"}));
// console.log(post({nombre:"Romance"}));
// console.log(post({nombre:"Terror"}));

