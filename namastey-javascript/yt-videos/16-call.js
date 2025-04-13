console.log("16 - call() method in javascript");

/*
        Studied from -

        https://youtu.be/-owpuf4lbyU?si=bN-E5-mF7OF5oBiD - Hitesh Chaudhary (chai aur code)
        and
        https://youtu.be/SaWTn1ZNTpo?si=Botgrb35qB_9a3Ow - Technical Suneja
*/

/*
// Eg: 1

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
// Eg: 2

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
