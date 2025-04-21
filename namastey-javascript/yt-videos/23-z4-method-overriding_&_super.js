console.log("23 - Method Overriding");

class Employee {
    constructor() {
        console.log("Employee Constructor called") ;
        this.name = name;
    }

    login() {
        console.log(`Employee has logged in`);
    }

    logout() {
        console.log(`Employee has logged out`);
    }

    requestLeaves(leavesCount) {
        console.log(`Employee has requested for ${leavesCount} leaves - Auto Approved`);
    }
}

class Programmer extends Employee {

    // If there is no constructor in child class, it is created automatically
    // constructor(...args) {
    //     super(...args)
    // }

    constructor(name) {
        super(name);
        this.name = name;
    }

    requestCoffee(coffeeCount) {
        console.log(`Programmer ${this.name} has request for ${coffeeCount} coffees`);
    }

    requestLeaves(leavesCount) {
        // console.log(`Employee has requested for ${leavesCount + 1} leaves, (one extra)`);

        super.requestLeaves(leavesCount);
        console.log("One extra leave granted");
    }

};

let e = new Programmer("Aviral");
e.login();
e.requestLeaves(3);
e.requestCoffee(2);
