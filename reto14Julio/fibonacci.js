var rango=12     //Empieza minimo en el 3
primerNumero=0   
segundoNumero=1
suma=0           //Inicializar en cero

//Fibonacci 0 1 1 2 3 5 8 
if(rango==1){   //Para respetar los primeros n numeros, si el usuario coloca 1 debe salir 0
    console.log(primerNumero);
}else if(rango==2){  //Si el usuario coloca 2 debe salir 1
    console.log(primerNumero);
    console.log(segundoNumero);
}else if(rango>2){   //Si el usuario coloca mas de 2, ya respeta lo del for 
    console.log(primerNumero);
    console.log(segundoNumero);
    for(var i=2 ; i<rango ; i++){  //obviamente empieza desde 2 por las condiciones anteriores, y llega hasta rango sin incluir para respetar los primeros n numeros
        suma=primerNumero+segundoNumero; //hace la suma del primer y segundo numero
        console.log(suma);               //la imprime
        primerNumero=segundoNumero;      //Actualiza que el primer numero de la siguiente suma sea el segundo termino de la suma anterior
        segundoNumero=suma;              //Actualiza que el segundo numero de la siguiente suma es es la variable suma de la anterior suma

    }                                    //1er   2do   suma
                                         //0      1      1   
                                         //       1er   2do
}
else{
    console.log("Digita un numero valido")  //Si se digita otra cosa, sale mensaje de error
}