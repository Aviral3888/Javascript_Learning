console.log("23 - OOPs - getters and setters in js");

class Employee {
    constructor(name) {
        this._name = name;
    }

    getInfo() {
        console.log(`Employee ${this._name} is working`);
    }

    get name() {
        return this._name
    };

    set name(newName) {
        this._name = newName
    };
}

const ab = new Employee("Ajay");

ab.getInfo();

console.log(ab.name);
ab.name = "Ajay Pandey";
console.log(ab.name);

ab.getInfo(); 
