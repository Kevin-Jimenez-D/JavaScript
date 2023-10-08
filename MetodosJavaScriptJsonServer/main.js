/*
//Obtener los datos con el método GET INICIO
const obtener = async()=>{
    let res = await (await fetch ("http://localhost:3000/metodo")).json();
    //console.log(res);  y por fuera obtener();
    return res;
}

console.log(await (obtener()) );
//Obtener los datos con el método GET FIN
*/





/*
//Publicar los datos nuevos con el método POST INICIO
const enviar = async()=>{
    let config =
    {
        method:"POST",
        headers : {"Content-Type":"application/json"},
        body:JSON.stringify(
            {
                titulo:"Publicar los datos nuevos con el método POST",
                fecha:"2023",
                autor:"Kevin JJ"
            }
            )
    }

    let res= await (await fetch ("http://localhost:3000/metodo", config)).json();
    console.log(res);
}
enviar();
//Publicar los datos nuevos con el método POST FIN
*/




/*
//Actualizar los datos con el método PUT INICIO
const actualizar = async(id)=>{
    let config =
    {
        method : "PUT",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(
            {
                titulo:"Actualizar los datos con el método PUT",
                fecha:"2023",
                autor:"Kevin JJ"
            }
        )
    }
    let res= await (await fetch (`http://localhost:3000/metodo/${id}`, config)).json();
    console.log(res);
}

actualizar(2);
//Actualizar los datos con el método PUT FIN
*/



/*
//Eliminar los datos con el método DELETE INICIO
const eliminar = async(id)=>{
    let config = 
    {
        method: "DELETE",
    }
    let res= await (await fetch (`http://localhost:3000/metodo/${id}`, config)).json();
    console.log(res);
}
eliminar(2);
//Eliminar los datos con el método DELETE FIN
*/