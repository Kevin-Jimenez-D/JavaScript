var dulces = ["Chicle", "Barrilete", "Chocolatina", "Nucita"];

console.log(dulces.length);                     //Longitud del array
console.log(dulces[0]);                         //Acceder a un elemento, en este caso el primero

dulces.push("Frunas");                          //Agregar un elemento al final
console.log(dulces);        

dulces.pop();                                   //Eliminar el ultimo elemento
console.log(dulces);                    

dulces.unshift("Colombina");                    //Agregar un elemento al inicio
console.log(dulces);   

dulces.shift();                                 //Eliminar el primer elemento
console.log(dulces);       

console.log( dulces.indexOf("Chocolatina") );   //Saber el index de un elemento, devuelve -1 sino lo encuentra