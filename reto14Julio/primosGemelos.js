var numeroRango=21

/*Confirmar si es un numero primo, si es un numero primo no imprime nada, si NO es numero primo este imprime algo*/
for(var i=2 ; i<=numeroRango-1 ; i++){  /*Empieza sin incluir el numero 1 y el mismo numero del rango dado*/
    if(numeroRango%i==0){               /*Si detecta una division exacta  */
        console.log(numeroRango);       /*La cantidad de veces que se 21 y "no es primo" es la cantidad de numeros divisibles para 21=3 y 7  */
        console.log("No es primo");     /*Dice que no es primo  */
    }
}

/*  */
var cont=0          /*Contador para saber cuantas divisiones exactas encuentra  */
var numPrimos=[]    /*Lista numeros primos  */
var numGemelos=[]   /*Lista numeros gemelos  */

for(var i=1 ; i<=numeroRango ; i++){   /*Primero debemos recorrer todos los numeros del rango del limite seleccionado uno por uno  */

    for(var j=1 ; j<=i ; j++){       /*Luego se mira uno por uno si es primo, j va a ir aumentando desde el uno hasta el mismo numero, el rango cambia cada vez que analiza  */   
        if(i%j==0){             /*Si el numero analizado con el contador detecta division exacta con el contador  */
            cont=cont+1         /*Aumenta un contador */
        }
    }                           /*Si hay mas de 2 divisiones exactas, no deberia agregar a la lista  */
    if(cont==2){
        numPrimos.push(i)       /*En caso de que detecte 2, significa que hallo un primo, 1 y el mismo numero  */
    }
    cont=0;                     /*Reiniciamos para dar paso al otro numero del for  */
}

console.log(numPrimos)    /*Imprime la lista de numeros primos desde un rango dado */


/*  */
/*Ahora de la lista de numeros primos obtenidos, se mirara cuales son gemelos, como se esta analizando una  */
for(var x=0 ; x<numPrimos.length -1 ; x++){  /*posicion y la siguiente, en el for se coloca -1 hasta la penultima posicion, para que cuando llegue a lo ultimo analice la penultima y la ultima y no haya errores de posiciones  */                 
    if( numPrimos[x+1] - numPrimos[x]==2){   /*Aca analiza el primero con el siguiente, los resta y mira si eso da 2  */
        console.log("Aca van las parejas de numeros gemelos") /*Si es asi  */
        console.log(numPrimos[x])                             /*Imprime el numero analizado y el siguiente  */
        console.log(numPrimos[x+1])
    }
}
