console.log("22 - Objects in Js");

/*      -------------       Object Creation     ------------         */

/*

// Using Object Literal
let person = {
    name: "Amit",
    age: 13,
    city: "Kashipur"
};
console.log(person);


// Using Object() Constructor 
let person1 = new Object();
person1.name = "Virat";
person1.age = 36;
person1.city = "Delhi";
console.log(person1);


// Using Object.create()
const car_proto = {
    brand: "",
    model: "",
    giveSpeed: function () {
        console.log(`Speed is ${this.speed}`);
    }
};

const swift = Object.create(car_proto);
swift.speed = 110;
swift.giveSpeed();


// Using Classes
class Car {
    brand;
    model;
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    };
    giveSpeed(speed) {
        this.speed = speed;
        console.log(`Speed is ${this.speed}`);
    }
    giveCarDetails() {
        console.log(`Car belongs to ${this.brand} and model is ${this.model}`);
    }
};

const desire = new Car('maruti', 'dezire');
desire.giveSpeed(120);
desire.giveCarDetails();

*/

/*      -------------       Object Properties and Attributes     ------------         */

// Every Object property is a key-value pair.

// Attributes - controls behavior 
// 4 - value, writable, enumerable, configurable

/*
const person = {
    name: "Amit",
    age: 20
};

// Accessing Attributes:

// Single Property
console.log(Object.getOwnPropertyDescriptor(person, "name"));

// Output: 
// {
//     "value": "Amit",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
// }


// All Properties in an object
console.log("Person before defining custom properties: ", Object.getOwnPropertyDescriptors(person));

// Output: 
// {
//     "name": {
//         "value": "Amit",
//         "writable": true,
//         "enumerable": true,
//         "configurable": true
//     },
//     "age": {
//         "value": 20,
//         "writable": true,
//         "enumerable": true,
//         "configurable": true
//     }
// }


// Defining custom properties 

Object.defineProperties(person, {
    name: {
        value: "Jatin",
        writable: false,
        enumerable: false,
        configurable: false
    },
    age: {
        value: 31,
        writable: true,
        enumerable: false
    }
});

console.log("Person after defining custom properties: ", Object.getOwnPropertyDescriptors(person));

person.name = "A";
person.age = 44;
console.log(person.name); // Wont change the name property
console.log(person.age); // age will get changed

*/


/*      -------------       Object Properties     ------------         */
/*
const user = {
    name: "Amit",
    age: 30,
    address: {
        houseNo: "99",
        locality: "Near Mandir",
        city: "Indirapuram",
        state: "UttarPradesh"
    },
    getAddress () {
        return this.address;
    }
};
console.log(user);

// Object.keys()
console.log(Object.keys(user)); // ['name', 'age', 'address', 'getAddress']

// Object.values()
console.log(Object.values(user));
// [
//     "Amit",
//     30,
//     {
//         "houseNo": "99",
//         "locality": "Near Mandir",
//         "city": "Indirapuram",
//         "state": "UttarPradesh"
//     },
//     null
// ]

// Object.entries
console.log(Object.entries(user)); // output is entries array used below
let entries =[
    [
        "name",
        "Amit"
    ],
    [
        "age",
        30
    ],
    [
        "address",
        {
            "houseNo": "99",
            "locality": "Near Mandir",
            "city": "Indirapuram",
            "state": "UttarPradesh"
        }
    ],
    [
        "getAddress",
        null
    ]
]

// Object.fromEntries()
console.log(Object.fromEntries(entries)); // function got
// {
//     "name": "Amit",
//     "age": 30,
//     "address": {
//         "houseNo": "99",
//         "locality": "Near Mandir",
//         "city": "Indirapuram",
//         "state": "UttarPradesh"
//     },
//     "getAddress": null
// }

// Object.assign()
const newUser = {}
Object.assign(newUser, user, {
    address: {
        ...user.address,
        country: "India"
    }
});
console.log(newUser);
// {
//     "name": "Amit",
//     "age": 30,
//     "address": {
//         "houseNo": "99",
//         "locality": "Near Mandir",
//         "city": "Indirapuram",
//         "state": "UttarPradesh",
//         "country": "India"
//     }
// }

Object.seal(newUser);
newUser.occupation = "Engineer" // new properties cannot be added
newUser.name = "Mohit" // name will change
console.log(newUser);
// {
//     "name": "Mohit",
//     "age": 30,
//     "address": {
//         "houseNo": "99",
//         "locality": "Near Mandir",
//         "city": "Indirapuram",
//         "state": "UttarPradesh",
//         "country": "India"
//     }
// }

Object.freeze(newUser);
newUser.name = "Sam" // old properties also cannot be changed 
*/

