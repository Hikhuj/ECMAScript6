/* styling */
require('styles/main.scss');

/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
import { resolve } from 'bluebird';

/* EJEMPLOS DE IMPORTS */

/******
    Importe por Modulos con NombreCustom (Name Export)
******/
/*
    Para importar todo, como ya se conoce, se usa el *
    seguido de --> as NombreDeClaseAUsarParaImport from '/Path/De/Archivos'
    Importando de Modulos (Name Export)
    # import * as Math from './Math';
*/

/******
    Importe Directo (Default Export)
******/
/*
    Para importar especifico
    Importado directo (Default Export)
    # import { add, divide } from './Math';
*/

/******
    Importe de Clase Custom
******/
/*
    Importe de clase animal por medio de clase custom
    y con valor de retorno predeterminado
    # import Animal from './Animal';
*/

logTitle('Practica de ECMAScript 6');



/* EJEMPLOS DE CODIGO */
/******
    Importe de Clase Custom
******/
/*
    Para mostrar codigo en algun lado dentro de este 
    podemos llamar un modulo e importar metodos;
    # log(Math.add(2, 2));
    # log(Math.divide(2, 2));
    # log(Math.subtract(2, 2));
    # log(Math.multiply(2, 2));
    # log(Math.PI);
*/


/******
    Importe Directo (Default Export)
******/
/*
    # log(add(2, 2));
    $ log(divide(2, 2));
*/


/******
    Importe de Clase Custom
******/
/*
    // Crear una variable que ejecute el Valor Predeterminado
    # var animal = new Animal();
    // Ejecutar el valor en consola
    # log(animal.getClassType());
*/


/******
    Palabra Reservada: let
******/
/*
    Permite variables que solo sean locales
    Un ejemplo puede ser un ciclo y que no se pueda acceder
    a la variable que este en este ciclo por fuera
    # for(let i = 0; i < 10; i++){
    #   log(i);
    # }
    Con esto, la variable "i" no se ve afecta o bien usada en siguientes lineas de codigo
    por lo que la hace "local" en la sentencia en la que se encuentre.
*/


/******
    Palabra Reservada: const
******/
/*
    Reasignacion de variables no es posible, palabra reservada para evitar que una variable sea constante. Para Variables
    Objetos o Funciones, ejemplo:
    # const person = {};
    # person['name'] = 'Maria';
    # log(person.name);
*/


/******
    Template Literals
******/
/*
    Concatenar o imprimir variables juntas. Pero Template Literals permite una syntax mas embellecida para hacer esto.

    const name = 'Anna';
    const country = 'Canada';
    const age = 33;

    // Ejemplo SIN TL
    log("Name: " + name + " Country" + country + " age" + age);
    // Ejemplo CON TL
    log(`Name: ${name} Country ${country} Age ${age}`);
    // En el caso de que quiera hacer logica por funciones, se puede hacer
    log(`Name: ${name.length} Country ${country} Age ${age}`);
*/


/******
    Spread Operator with Arrays
******/
/*
    Se usa tres puntos "...nombreDeArray", por lo que puedo expandir los elementos de un arreglo en otro arreglo,
    pero para este segundo debo utilizar el indicador ya mencionado de tres puntos "..."
*/
// Arreglos de ejemplo
/*
const arregloUno = ['Uno', 'Dos', 'Tres'];
const arregloDos = ['Cuatro', 'Cinco', 'Seis'];
// Arreglo que concatenara varios arreglos
const concatArreglo = [...arregloUno, ...arregloDos];
*/
// Operacion sencillas para imprimir nombres de todos los arreglos como si fueran uno
// En este ejemplo con la funcion reservada de Name obtenemos todos los elemtos de los arreglos
// y en este caso los imprimos en consola
/*
concatArreglo.forEach(function(name) {
    log(name);
});

// Otro ejemplo SOA puede ser tomar una variable y manipularla como arreglo para obtener cada una de sus letras.
const nombre = 'Marian';
const nombreAArreglo = [...nombre];
nombreAArreglo.forEach(function(letter) {
    log(letter);
});

// Funcion para sumar varios numeros y retornar el valor
const agregarNumeros = function(n1, n2, n3) {
    return n1 + n2 + n3;
}

const numeros = [1, 5, 9];
const suma = agregarNumeros(...numeros);
log(suma);
*/


/******
    Spread Operator with Objects
******/
// Dictionario de Direccion
/*
const direccion = {
    city: 'LA',
    country: 'USA',
    postCode: 'LA44'
};
// Dictionario de una Persona
const nombre = {
    firstName: 'Roger',
    lastName: 'Ulate'
};
// Propagamos dos arreglos en uno:
const persona = {...direccion, ...nombre };
// Imprimimos el resultado de una persona.
log(JSON.stringify(persona, null, 2));
*/


/******
    Arrow Functions: Usado mucho para funciones simples o que solo poseen un solo RETURN
******/
// Los Arrow Funtion se representan de la siguiente forma: () =>
// Funcion: Retorna Hola
/*
    const hello = function() {
        const es6 = 'ES6';
        return `Hello ${es6}`;
    };
*/
/*
const hello = () => {
    const es6 = 'ES6';
    return `Hello ${es6}`;
};

// Funcion Retorna potencia, como es una funcion, podemos remover los Curly Brackets ya que no son necesarios
// Se puede comprimir mas ya que solo tiene un RETURN
/*
    const powers = [1, 2, 3, 4, 5].map(function(number, index) {
        return Math.pow(number, index);
    });
*/
/*
const powers = [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index));

// Funcion: Retorna suma
const add = (n1, n2) => n1 + n2;
*/

// Funcion: Retorna conversion de Millas a Kilometros
// En este caso como so es un paramentro, puedo incluso quitar los parentesis de MILES
/*
    const milesToKm = function(miles) {
        return miles * 1.60934;
    };

const milesToKm = miles => miles * 1.60934;

log(hello());
log(powers);
log(add(100, 100));
log(milesToKm(100)); 
*/


/******
    Lexical this
******/
//
/*
const persona = {
    nombre: 'Roger',
    cars: ['Ferrari', 'Lamborgini'],
    toString: function() {
        // log(`${this.name} has ${this.cars}`)
        this.cars.forEach(car => {
            log(`${this.nombre} has ${car}`);
        });
    }
}

persona.toString();
*/


/******
    Mejora de Propiedad de Objetos (Enhanced Object Properties)
******/
// Una funcion simple que devuelve algo
/*
const calculator = name => {
    // Retornar algo, en este caso un nombre
    return {
        name: name
        // o bien otro ejemplo
        add function(n1, n2){
            return n1 + n2;
        }
    }
}

// Declara e instancia variable que almacena lo que se va a almacenar
const calc = calculator('casio');

// Imprimir en consola
log(calc.name);
*/

// Funcion para calcular algo
// Para aplicar la Mejora de Propiedad de Objetos es posible cuando el argumento que se pasa tiene el mismo nombre
// que el nombre de la propiedad, se puede remover el propertyName y sus dos puntos (:)
/*
const calculator = name => {
    // Retornar un objeto
    return {
        name,
        add(n1, n2) {
            return n1 + n2;
        }
    }
}

const calc = calculator('casio');

log(calc.name);
log(calc.add(10, 20));
*/


/******
    Array Descrutruring
******/
// Una funcion simple que devuelve algo
/*

/******
    Object Descrutruring Assignment
******/
// Funcion simple que devuelve algo
/*
const getUser = () => {
    return {
        name: 'John',
        surname: 'Doe',
        gender: 'male',
        address: {
            country: 'United States',
            city: 'California',
            postCode: 'CA',
            fullAddress: {
                doorNumber: 22,
                street: 'LA st'
            }
        },
        age: 29
    }
};

// Variable que almacena un valor retornado.
const user = getUser();

const name = user.name;
const age = user.age;
const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;

log(name);
log(age);
log(country);
log(doorNumber);
*/


/******
    Function Default Parameters
******/
/*
logTitle('\n');
logTitle('Function Default Parameters');

// Funcion que calcula el pago a una persona
// donde se aplica valoes por default si no se envian o bien
// si se envian

// Variable que contiene una funcion
const calcularPago = (salarioAnual, bono = {
    bonoDeEquipo: 0,
    bonoDeEmpleado: 0
}) => {
    return salarioAnual + bono.bonoDeEquipo + bono.bonoDeEquipo;
}

// Imprimir resultado
log(calcularPago(22000, { bonoDeEquipo: 10000, bonoDeEmpleado: 6000 }));
*/


/******
    Trabajando con clases
******/
/*
// Crear una clase
class Animal {
    // Crear un constructor, recibira parametros
    constructor(name, age) {
            // Imprimir algo
            log(`${name} is an animal an was created`);
            // Definimos las propiedades de la clase
            this.name = name;
            this.age = age;
        }
        // Comportamientos o metodos
    eat() {
        // Imprimir algo en consola
        log(`${this.name} is eating.`);
    }

    sleep() {
        // Imprimir algo en consola
        log(`${this.name} is sleeping.`);
    }

    wakeUp() {
        // Imprimir algo en consola
        log(`${this.name} is waking up.`);
    }

    logAge() {
        // Imprimir algo en consola
        log(`${this.name} is ${this.age} year old`);
    }
}

// Instanciar la clase anterior definida como Animal almacenando la instancia en
// una variable de tipo CONST = CONSTANTE
// Los CONSTRUCTORES solo se invoca una vez. Cuando creamos la instancia literalmente.
const bobby = new Animal("bobby", 2);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.sleep();
bobby.wakeUp();
bobby.logAge();

log('-------------');

const marshall = new Animal("marshall", 3);
marshall.eat();
marshall.sleep();
marshall.wakeUp();
marshall.sleep();
marshall.wakeUp();
marshall.logAge();
*/


/******
    Herencia con las clases
******/
/*
// CLASE de ejemplo
class Animal {
    // CONSTRUCTOR, para HERENCIA, puede considerarse un SUPER CONSTRUCTOR
    constructor(name, age) {
            // Imprimir algo
            log(`${name} is an animal an was created`);
            // Definimos las propiedades de la clase
            this.name = name;
            this.age = age;
        }
        // Comportamientos o metodos

    // Metodo STATIC
    static iAmAStaticMethod() {
        log('I am a static method inside of an Animal class');
    }

    eat() {
        // Imprimir algo en consola
        log(`${this.name} is eating.`);
    }

    sleep() {
        // Imprimir algo en consola
        log(`${this.name} is sleeping.`);
    }

    wakeUp() {
        // Imprimir algo en consola
        log(`${this.name} is waking up.`);
    }

    logAge() {
        // Imprimir algo en consola
        log(`${this.name} is ${this.age} year old`);
    }
}

// Clase de tipo PERRO con HERENCIA de ANIMAL
class Dog extends Animal {
    constructor(name, age, breed) {
        // SUPER como en JAVA, es el llamado al CONSTRUCTOR SUPERIOR
        super(name, age)
        this.breed = breed;
    }

    logBreed() {
        log(`${this.name} is a ${this.breed}`);
    }

    logAgeFromDog() {
        super.logAge();
    }

}

// Clase de tipo PERRO con HERENCIA de ANIMAL
class Cat extends Animal {
    constructor(name, age) {
        // SUPER como en JAVA, es el llamado al CONSTRUCTOR SUPERIOR
        super(name, age)
    }

    logAgeFromCat() {
        super.logAge();
    }

}

const mike = new Dog('Mike', 4, 'Bulldog');

mike.logBreed();
mike.logAgeFromDog();

const josh = new Cat('Josh', 1);
josh.logAgeFromCat();
josh.eat();
josh.sleep();
josh.wakeUp();
josh.logAge();
*/

/******
    La palabra RESERVADA = STATIC
******/
/*
// CLASE de ejemplo
class Animal {
    // CONSTRUCTOR, para HERENCIA, puede considerarse un SUPER CONSTRUCTOR
    constructor(name, age) {
            // Imprimir algo
            log(`${name} is an animal an was created`);
            // Definimos las propiedades de la clase
            this.name = name;
            this.age = age;
        }
        // Comportamientos o metodos

    // Metodo STATIC
    static iAmAStaticMethod() {
        log('I am a static method inside of an Animal class');
    }

    eat() {
        // Imprimir algo en consola
        log(`${this.name} is eating.`);
    }

    sleep() {
        // Imprimir algo en consola
        log(`${this.name} is sleeping.`);
    }

    wakeUp() {
        // Imprimir algo en consola
        log(`${this.name} is waking up.`);
    }

    logAge() {
        // Imprimir algo en consola
        log(`${this.name} is ${this.age} year old`);
    }
}

Animal.iAmAStaticMethod();
*/

/******
    PROMISE OBJECT
******/
/*
    Promesas .then
*/
// Son objetos para hacer asincronizaciones computacionales
// Valor representado que puede estar disponible AHORA, en el FUTURO o NUNCA.
// Existen 3 estados
// PENDING: estado inicial, no procesada o rechazada. --> si es PENDING se usa el metodo .then
// FULFILLED: significa operacion completada.
// REJECTED: significa que la operacion falló. --> si es PENDING se usa el metodo .catch
/*
logTitle('\n: Promesas')

// Creando ejemplo de promesa. Promesas .then
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data back from the server");
    }, 3000);
    // ^^^ 3000 milisegundos se activa segundo por el tiempo

    setTimeout(() => {
        reject("no data back from the server, there was an error");
    }, 3000);
    // ^^^ 3000 milisegundos se activa primero por el tiempo
});

// => Recordar que son funciones de flecha o Arrow Functions
promise.then(response => {
    log(response);
}).catch(error => {
    log(error);
})
*/

/******
    PROMISE OBJECT
******/
/*
    Promesas .all
*/
/*
logTitle('\n: Promesas')

const namesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Anna', 'Jones', 'Ali', 'Jake']);
    }, 3000);

    setTimeout(() => {
        reject("no data back from the server, there was an error");
    }, 5000);
});

const surnamesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Williams', 'Bravo', 'Mohammado', 'Smith']);
    }, 3000);

    setTimeout(() => {
        reject("no data back from the server, there was an error");
    }, 5000);
});

Promise.all([namesPromise, surnamesPromise]).then(data => {
    // log(data);
    // Deconstruccion
    // Obtener los datos
    const [names, surnames] = data;
    // recorrer para unir todos los datos en unos solos
    for (var i = 0; i < names.length; i++) {
        const name = names[i];
        const surname = surnames[i];
        log(`${name} ${surname}`);
    }
}).catch(error => {
    log(error);
});
*/

/******
    PROMISE OBJECT
******/
// Usando FETCH
logTitle('Promises & Fetch API');

// En este caso N numeros de usos que vamos a solicitar
const getRandomUsers = n => {
    // fetch es una FUNCION que va a estar disponible
    // que lo que hace es obtener los datos que ocupamos
    // en este caso.
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
    fetchRandomUsers.then(data => {
        data.json().then(randomUsers => {
            // Con esto obtenemos la cantidad de records
            // que solicitamos
            log(JSON.stringify(randomUsers));
            // Con esto obtenemos la cantidad literal de records
            // que solicitamos
            log(JSON.stringify(randomUsers.results.length));
            // este siguiente ejemplo lo que hara es obtener los resultados
            // de genero y correo electronico
            // En este caso tenemos el formato:
            // nombreDeFuncion.results.forEach(que en este caso es recorrer los registros)
            // en donde guardamos en user
            randomUsers.results.forEach(user => {
                // El GENDER y EMAIL vendran de USER
                const { gender, email } = user;
                // Imprimimos los datos de GENDER y EMAIL
                log(`${gender} - ${email}`);
            })
        })
    });
}

getRandomUsers(10);