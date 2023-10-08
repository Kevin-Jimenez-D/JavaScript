var matriz=[ [9,2,23] , [-4000,11,600] , [7,-108,9,15123] ];
var vector=[]                                                 //Para guardar el vector mientras se recorre la matriz para acceder a los elementos
elementoAnterior=matriz[0][0]                                 //Para analizar si es mayor, se empieza desde la primera posicion

elementoMenor=matriz[0][0]                                    //Para analizar si es menor, se empieza desde la primera posicion

//console.log(matriz[0][1])

for(var i=0 ; i<matriz.length ; i++){                         //Para recorrer toda la matriz
    //console.log(matriz[i]);                                 //cada uno de los vectores
    vector=matriz[i]                                          //Guarda cada vector de la matriz
    for(var j=0 ; j<vector.length ; j++){                     //Con esto empiezo a acceder a cada uno de los elementos
        //console.log(vector[j])                              //Cada uno de los elementos
        elementos=vector[j]                                   //Cada elemento se guarda en esta variable

        //Para saber el mayor
        if(elementos>elementoAnterior){                       //si el elemento analizado es mayor que el primer elemento original
            elementoAnterior=elementos;                       //ElementoAnterior se actualiza con el numero mayor
        }

        //Para saber el menor
        if(elementos<elementoMenor){                          //si el elemento analizado es menor que el primer elemento original
            elementoMenor=elementos;                          //ElementoMenor se actualiza con el elemento que en este caso es un numero menor
        }
    }

}
console.log("EL numero mayor es: ")
console.log(elementoAnterior)

console.log("EL numero menor es: ")
console.log(elementoMenor)