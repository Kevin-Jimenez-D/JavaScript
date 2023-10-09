//Acceder a valores de un objeto
var miAuto ={
    marca : "Toyota",
    modelo : "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);   //Con this se accede en la misma creación del objeto
    }
};

console.log(miAuto.marca);; //Acceder al valor de la llave indicada con el punto
miAuto.detalleDelAuto();;   //Acceder a una función de un objeto



//Función constructora de objetos
function auto (marca,modelo,annio){
    this.marca = marca;              //Apunta al atributo marca lo que sea que llegue a la función, lo mismo con modelo y annio
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Toyota","Corolla",2020); //Se crea con los nuevos datos y se muestra en consola
console.log(autoNuevo);


//Fechas
var a = new Date();
console.log(a);

var b = new Date(2018,11,24,12,33,30,0);
console.log(b);

var c = new Date("Septiembre 19, 2018 12:13:00");
console.log(c);



//Manejo de cadenas
var cadena = 'Desarrollo Web';
cadena= cadena.toLowerCase(); //Todo a minuscula
console.log(cadena);

cadena=cadena.toUpperCase(); //Todo a mayuscula
console.log(cadena);

cadena=cadena.replace('WEB','en Java'); //Reemplazar una subcadena con otra subcadena
console.log(cadena);

cadena= cadena.slice(0,3);  //Extraer subcadena sin incluir el ultimo numero o el 3
console.log(cadena);

console.log(cadena.startsWith('A'));   //Devuelve si empieza con ese caracter
console.log(cadena.endsWith('S'));     //Devuelve si termina con ese caracter



//Manipulacion de objetos en JavaScript
