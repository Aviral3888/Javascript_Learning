console.log("23 - Prototypes and prototypal inheritance in Js");

/*
        Studied from -
        https://youtu.be/eDxrLEQbLv0?si=SpfzO9rrRCGy1xNU - Code with Harry
        and 
        Chat Gpt
*/

/*
        -----------------       What is a Prototype in JavaScript?      ----------------------

In JavaScript, every object has a hidden internal property called [[Prototype]], which refers to another object. This forms a chain (called the prototype chain) and is used to inherit properties and methods.
*/

// Eg: 1
/*
let person = {
    name: "Aviral",
    greet: function () {
        console.log(`${this.name}, welcomes you!`);
    }
}
person.greet();


// -----------------       Accessing prototypes      ----------------------

console.log(Object.getPrototypeOf(person));
console.log(person.__proto__);
*/

// { __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, … } constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()



// -----------------       Setting prototypes      ----------------------

// ----------   Eg: 2 - Object.setPrototypeOf(obj, proto)

/*
let animal = {
    makeSound: function () {
        console.log(`Sound is: ${this.sound}`);
    }
};

let dog = {
    breed: "Labrador",
    sound: "bark"
}
// dog.makeSound(); // Error: Uncaught TypeError: dog.makeSound is not a function;

// Now, inherit animal object as a prototype
Object.setPrototypeOf(dog, animal);
dog.makeSound(); // Sound is bark
*/

// ----------   Eg: 3 - Object.create(proto)
/*
let animal = {
    makeSound: function () {
        console.log(`Sound is: ${this.sound}`);
    }
};

let dog = Object.create(animal);
dog.sound = "Bark";
dog.makeSound();
*/

// ----------   Eg: 4 - Constructor Function
/*

function Person (name) {
    this.name = name;
};
// console.log(typeof Person);

Person.prototype.greet = function () {
    console.log(`${this.name}, greets you!`);
}

const P1 = new Person("Amit");
console.log(P1);
P1.greet(); // Amit, greets you!

*/

/*

| Term                  | Meaning                                                                 |
|-----------------------|-------------------------------------------------------------------------|
| Prototype             | An object that another object can inherit properties from              |
| `__proto__`           | Reference to an object’s prototype                                     |
| Prototypal Inheritance| Mechanism by which one object inherits from another                    |
| `Object.create()`     | Creates a new object with specified prototype                          |
| `new` keyword         | Creates object and links it to a constructor’s prototype               |
| Prototype Chain       | Chain of objects linked via `[[Prototype]]`                            |

*/