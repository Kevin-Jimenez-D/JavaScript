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

//Creacion de un nuevo objeto con la creación de nuevas propiedades
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
console.log(myCar);

//Acceder o establecer las propiedades de los objetos en JavaScript mediante la notación de corchetes
//Establecer elementos
myCar["make"] = "Jeep";
myCar["model"] = "Chevrolet";
myCar["year"] = 2000;

console.log(myCar["model"]);   //Acceder a un solo elemento
console.log(myCar);            //Acceder a todo el objeto en si


// Se crean y asignan cuatro variables de una sola vez,
// separadas por comas
//Si accedo a str en la consola saldra myString
//SI accedo a rand, en la consola saldrá un numero aleatorio
//SI accedo a obj, en la consola se vera ese nuevo objeto
var myObj = new Object(),
  str = "myString",
  rand = Math.random(),
  obj = new Object();

myObj.type = "Sintaxis de puntos";

//Crear un nuevo elemento con esa propiedad y con el respectivo valor
myObj["fecha de creación"] = "Cadena con espacios";

myObj[str] = "Valor de cadena";
myObj[rand] = "Número aleatorio";
myObj[obj] = "Object";

//Crear un nuevo elemento con cadena vacia con el elemento que se ve
myObj[""] = "Incluso una cadena vacía";

console.log(myObj);


//Acceder a las propiedades mediante el uso de un valor de cadena que se almacena en una variable:
var propertyName = "make";
myCar[propertyName] = "Ford";

propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar);



//ELiminar propiedades
//Crea un nuevo objeto, ok, con dos propiedades, a y b.
var ok = new Object();
ok.a = 5;
ok.b = 12;

// Elimina la propiedad a, dejando a ok solo con la propiedad b.
delete ok.a;
console.log("a" in ok); // muestra: "false"
console.log(ok);


//COmparar objetos
// Dos variables, un solo objeto
var fruit = { name: "apple" };
var fruitbear = fruit; // Asigna la referencia del objeto fruit a fruitbear

// Aquí fruit y fruitbear apuntan al mismo objeto
fruit == fruitbear; // devuelve true
fruit === fruitbear; // devuelve true

fruit.name = "grape";
console.log(fruitbear); // Produce: { name: "grape" }, en lugar de { name: "apple" }