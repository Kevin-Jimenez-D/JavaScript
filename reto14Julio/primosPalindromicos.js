var cadena="Hola"
var palabraAlDerecho=[]
var palabraAlReves=[]
var palindromico=true

/*Colocar el string al derecho    */ 
for(var letras of cadena){
    palabraAlDerecho.push(letras)    
}

/*Probar que funciona             */
console.log(palabraAlDerecho)   

/*Colocar el string al reves      */ 
for(var letras of cadena){
    palabraAlReves.unshift(letras)
}

/*Probar que funciona              */
console.log(palabraAlReves)    

palabraAlDerecho=[]
palabraAlReves=[]



/*  */
var numeroRango=131
var cont=0          /*Contador para saber cuantas divisiones exactas encuentra  */
var numPrimos=[]    /*Lista numeros primos  */

for(var i=1 ; i<=numeroRango ; i++){   /*Primero debemos recorrer todos los numeros del rango del limite seleccionado uno por uno  */

    for(var j=1 ; j<=i ; j++){       /*Luego se mira uno por uno si es primo, j va a ir aumentando desde el uno hasta el mismo numero, el rango cambia cada vez que analiza  */   
        if(i%j==0){             /*Si el numero analizado con el contador detecta division exacta con el contador  */
            cont=cont+1         /*Aumenta un contador */
        }
    }                           /*Si hay mas de 2 divisiones exactas, no deberia agregar a la lista  */
    if(cont==2){
        numPrimos.push(i)       /*En caso de que detecte 2, significa que hallo un primo, 1 y el mismo numero  */
        if(i>9){                /*que sea mayor a 9, porque sino el codigo correria los primos hasta el 9  */

            cadena=String(i)    /*Convertir a cadena a ver si es palindromico  */
            /*Colocar el string al derecho    */ 
            for(var letras of cadena){
                palabraAlDerecho.push(letras)    
            }

            /*Colocar el string al reves      */ 
            for(var letras of cadena){
                palabraAlReves.unshift(letras)
            }

            /*console.log(palabraAlDerecho)  */
            /*console.log(palabraAlReves)    */



            /*   Pense que funcionaria
            if(palabraAlDerecho==palabraAlReves){
                console.log("A continuacion numeros palindromicos")
                console.log(i)
            }
            */
            
            console.log("A continuacion numeros palindromicos")
            for(var x=0 ; x<palabraAlDerecho.length ; x++){         /*Analiza la pos del arreglo de la palabra al derecho contra la palabra al reves  */
                if(palabraAlDerecho[x]!=palabraAlReves[x]){         /*Con que uno sea diferente, ya se sabe que no es palindromico  */
                    palindromico=false
                }
            }

            /*Si es palindromico, lo imprime  */
            if(palindromico==true){
                console.log(i)
            }

            /*Resetea todo para que vuelva a seguir analizando numeros  */
            palindromico=true
            palabraAlDerecho=[]
            palabraAlReves=[]
        }
    }
    cont=0;                     /*Reiniciamos para dar paso al otro numero del for  */
}