# Curso de Closures y Scope en Javascript

- Valoración: ⭐⭐⭐⭐
- Estado: Terminado
- Fecha de inicio: April 28, 2022 4:31 PM
- Fecha de termino: May 19, 2022
- Página: Platzi

# 1. Introducción.

Dentro de este curso vamos a aprender:

- Entender Scope y closure de javascript.
- Alcancce de variables, bloques de código y funciones dentro de nuestras aplicaciones.
- Hoisting que nos permitirá elevar declaraciones dentro de nuestro código.

# 2. Scope

## 2.1. Qué es el Scope y cómo funciona el Global Scope.

Scope: Es el alcance que va a tener una variable dentro del código. En otras palabras, el Scope se encargará de decidir a que bloques de código va a acceder una variable.

**Global Scope** : No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.

- Con var podemos re-asignar una variable pero es una mala práctica.
- Con let y const no podemos, aparecerá un error.
- Es una mala práctica crear una variable sin las palabras reservadas: var, let y const.Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
- La doble asignación de una variable también es una mala práctica.

Ejemplo:

```jsx
var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';

/**
 * Podemos acceder a nuestras variables dentro de la función, 
 * esto es el Scope global
 */
const aontherFuncion = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

aontherFuncion();

// Output
Hello
Hello World
Hello World!
```

## 2.2. Local Scope.

Lexical Scope / Ámbito Léxico: El intérprete de JavaScript funciona desde el ámbito de ejecución actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en ningún ámbito, se genera una excepción.

Este tipo de búsqueda se llama ámbito léxico. El alcance de una variable se define por su ubicación dentro del código fuente, y las funciones anidadas tienen acceso a las variables declaradas en su alcance externo. No importa de dónde se llame una función, o incluso cómo se llama, su alcance léxico depende solo de dónde se declaró la función.

```jsx
var scope = 'I am Global Scope';

const functionScope = () => {
	var scope = ' I am just a local';
	const func = () => {
		return scope;
	}
	console.log(func());
};

functionScope();
console.log(scope);

// OUTPUT
' I am just a local'
'I am Global Scope'
```

## 2.3. Functions scope.

- Las variables escritas con la palabra clave **var** pueden ser redeclaradas, pero esto a futuro puede darnos problemas, así que es mejor no usarla.
- Las variables escritas con la palabra clave **let** no pueden ser redeclaradas, si lo haces mostrara un ***“error: esta variable ya ha sido declarada”*** , pero su valor puede ser reasignado:

```jsx
let fruit = "apple";
fruit = "banana";

console.log(fruit); // banana
```

- Las variables escritas con la palabra clave **const** no pueden ser redeclaradas o reasignadas, ya que const quiere decir que su valor será constante, es decir que no va a cambiar.

# 3. Closure.

## 3.1. ¿Qué es un clousure?.

Un **closure** es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función *recuerda* el ámbito en el que se creó. La mejor forma de entender un closure es por medio de un ejemplo práctico.

Ejemplo.

```jsx
var myVar = 'hi';
function myFunction() {
	console.log(myVar);
}
myFuntion(); // hi
```

Los closures son basicamente cuando aprovechamos la habilidad de Javascript de usar las variables que están en el scope padre de nuestro bloque de código, por eso el global scope es un closure grandote; el bloque myFunction puede usar TODAS las variables que están disponibles en el bloque inmediato anterior.

Usando el ejemplo del profesor:

Si tu declaras la variable saveCoins en el global scope, estarías usando el mismo principio que si usas la segunda función que escribe el profesor porque estás usando las variables que están en el scope padre.

```jsx
var saveCoins = 0;

const moneyBox = (coins) => {
    saveCoins += coins;
    console.log(saveCoins);
}

moneyBox(5); //5
moneyBox(10); //15
```

Pero está mal visto modificar variables globales, por eso es que quieres crear variables dentro de un scope cerrado y que interactuen entre ellas, entonces declaras las variables que vas a usar dentro del scope padre del bloque que las va a modificar para que siempre pueda acceder a ellas. Para eso creas un nuevo “global scope” ficticio que va a conservar todas las variables que tú quieras monitorear:

Ahora mira las similitudes entre el codigo de arriba y el que está justo abajo de aquí.

```jsx
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(saveCoins);
    }
    return countCoins;
}

let myMoneyBox = moneyBox()
myMoneyBox(4) // 4
myMoneyBox(10) // 14
myMoneyBox(6) // 20
```

Si remueves " const moneyBox = () => {} " serían exactamente las mismas lineas de código!

```jsx
//const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(saveCoins);
    }
   // return countCoins; 
//}
```

Lo que estás haciendo es simplemente bajar un nivel tu scope. Quieres que la funcion moneyBox regrese una funcion que estuvo declarada dentro de sí misma porque esa función tiene acceso a ese Scope que ya no va a existir para que alguien más lo use, solamente lo podrá usar la función countCoins. Al guardar el resultado de moneyBox (countCoins) en otra variable estás creando el ámbito léxico que menciona el profesor, necesario para no dejar morir ese scope.

## 3.2. Ámbito léxico en clousure.

Los closures son muy utilizados en JavaScript, solo hay que saber reconocerlos dentro del código y las implicaciones de funcionalidad que este tiene.

Los closures están disponibles gracias a que el lenguaje implementa [lambdas](https://yeisondaza.com/calculo-lambda-en-javascript) y [funciones de alto orden](https://yeisondaza.com/funciones-de-alto-orden-en-javascript) y son una consecuencia directa de escribir código usando [lexical scopes](https://yeisondaza.com/entendiendo-scopes-de-variables-en-javascript).

veamos esto en código:

```jsx
function say() {
  var name = 'yeison';
  
  function sayName() {
    console.log(name);
  }
  
  // se retrona la definición de la función sayName
  return sayName;
}

// se asigna la ejecución de say a sayYeison
var sayYeison = say();

sayYeison();
```

Se tiene una función, que tiene una variable interna, que utiliza la variable *name* y retorna la definición de la función *sayName.*

Pero al ejecutar la función *say*, cuando se asigna a la variable *sayYeison*, su variable interna, no debería ser borrada por el _Garbage Collector, _ya que no está en uso, ¿no?

Esto no es así, ya que al ejecutar la función, se retorna la definición de la función interna que tiene una referencia a este scope, por este motivo la variable no va desaparecer.

> *El scope interno todavía está en uso, usado por la función que se retorna*
> 

Lo fundamental para poder entender el concepto de closure, es que contamos con una contexto y una función que hace uso de este, permitiéndonos acceder al scope de tal contexto.

Veamos en otro ejemplo.

```jsx
function makeCounter(counter, step) {
  
  function next() {
    return counter += step;
  }
  
  return next;
}

var counter2 = makeCounter(10,2);
counter2(); // sumamos dos, 12
console.log(counter2()); // sumamos dos, 14

var counter10 = makeCounter(50, 10);
counter10(); // sumamos 10, 60
console.log(counter10()); // sumamos 10, 70
```

## 3.3. Cómo crear variables privadas con clousure.

Javascript por su naturaleza no fomenta el uso de datos privados pero por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.

ejemplo

```jsx
var person = () => {
	var saveName = 'Oscar';
	return {
		getName: () => {
			return saveName;
		}
		setName: (name) => {
			saveName = name;
		}
	}
}

const newPerson = person();
console.log(newPerson.getName()); // Oscar
newPerson.setName('Eduardo');
console.log(newPerson.getName()); // Eduardo
```

# 4. Hoisting.

## 4.1. ¿Qué es el hoisting?

Hoisting: Eleva las declaraciones, esto pasa en el momento en que se compila nuestro código antes de ser interpretado por el navegador.

De esta forma podemos asignar nuestros valores o acceder a un valor que previamente no ha sido declarado dentro de esta estructura.

las declaraciones que se elevan:

- Var, solo la delcaración
- functions: la función completa se eleva.
- imports (estaticos): los imports staticos se elevan.

Ejemplo

```jsx
// Mi codigo.

saludar('Oscar');

const saludar = (nombre) => {
	var saludo = `Hola ${nombre}`;
	return saludo;
}

import saludos from './utils';
```

```jsx
// Hoisting js
import saludos from './utils';

const saludar = (nombre) => {
	var saludo;
	saludo = `Hola ${nombre}`;
	return saludo;
}

saludar('Oscar');
```