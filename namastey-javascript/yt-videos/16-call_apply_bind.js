console.log("16 - call(), apply(), bind() method in javascript");

/*
        Studied from -
        https://youtu.be/SaWTn1ZNTpo?si=Botgrb35qB_9a3Ow - Technical Suneja
        and
        https://dev.to/jeetvora331/master-call-apply-and-bind-in-javascript-and-ace-your-interview-3nnh
*/


/*
                        --------------          CALL()         --------------  

The call method is used to call a function with a given this value and arguments as comma-separated values.

The call method is useful when you want to execute a function with a different this value and a fixed number of arguments. You can also use the call method to borrow methods from other objects or classes.

*/

/*

// Eg: 1 = function() present in an object

let userDetails = {
    name: "Amit",
    age: 24,
    printDetails: function () {
        console.log(this.name, ", ", this.age);
    }
};
userDetails.printDetails();

let userDetails2 = {
    name: "Sumit",
    age: 35
};
userDetails.printDetails(userDetails2); // This will print Amit, 24

// So we use :: call()
userDetails.printDetails.call(userDetails2); // This will print Sumit, 35
// This is also called Function Borrowing

*/

// Basically what we did is, we passed this refernce to the method, and call() will call the userDetails.printDetails() but, now, this. will point to userDetails2

/*
// Eg: 2 = function() is generic and not present in any object.

let person1 = {
    firstName: "Amit",
    lastName: "Kumar"
};

let person2 = {
    firstName: "Kunal",
    lastName: "Arora"
};

function printName(greeting) {
    console.log(greeting + ", " + this.firstName + " " + this.lastName);
}

printName.call(person1, "Hello");
printName.call(person2, "Namastey");
*/

// Here, the first argument is the new this reference and the next are the parameters provided to the method 





/*
                        --------------          APPLY()         --------------  

The apply method is very similar to the call method, except that it takes arguments as an array (or an array-like object) instead of comma-separated values.

*/

/*

// Eg: 3
let person1 = {
    firstName: 'Karan',
    lastName: 'Sharma'
};

let person2 = {
    firstName: 'Rakesh',
    lastName: 'Verma'
};

function sayHello(greeting, state, country) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName + ' ' + state + ' ' + country);
}

sayHello.apply(person1, ['Hello', 'UP', 'India']); // Hello Karan Sharma UP India
sayHello.apply(person2, ['Namastey', "Goa", 'India']); // Namastey Rakesh Verma Goa India

*/



/*
                        --------------          BIND()         --------------  

The bind method is different from the call and apply methods in that it does not execute the function immediately, but returns a new function with a given thisvalue and arguments. For example:

By using bind(), you can create new functions with pre-defined contexts, which can then be invoked with the desired arguments.

*/

/*

// Eg: 4
let person1 = {
    firstName: 'Karan',
    lastName: 'Sharma'
};

let person2 = {
    firstName: 'Rakesh',
    lastName: 'Verma'
};

function sayHello(greeting) {
    console.log(this);
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

let sayHelloToPerson1 = sayHello.bind(person1);
let sayHelloToPerson2 = sayHello.bind(person2);

console.log(sayHelloToPerson1); 
// ƒ sayHello(greeting) {
//     console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
// }

sayHelloToPerson1('Hello'); // Hello Karan Sharma
sayHelloToPerson2('Hello'); // Hello Rakesh Verma

*/