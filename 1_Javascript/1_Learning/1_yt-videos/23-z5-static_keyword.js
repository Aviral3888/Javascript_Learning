console.log("25 - OOPs - static keyword in js");

class Employee {
    constructor(name) {
        this.name = Employee.capitalize(name);
    }

    getInfo() {
        console.log(`Employee ${this.name} is working.`);
    }

    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
};

let ab = new Employee("amit"); // "amit" will be printed with small A, but I want the name to be always capital -> so lets create a static method
ab.getInfo();

/* 
    NOTE:

1. static capitalize() can only be accessed with ClassName.methodName() like Employee.capitalize() sinces it a property of the class 
2. we cannot use capitalize() inside Child class or subclasses.  

*/