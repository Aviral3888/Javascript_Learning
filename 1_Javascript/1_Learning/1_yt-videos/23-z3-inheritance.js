console.log("23 - OOPs - Inheritance");

/*      ------------        Inheritance in classes         -------------       */

// Eg: 1 
/* */
class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    };

    run() {
        console.log(this.name, "is running");
    }
    shout() {
        console.log(this.name, "is shouting");
    }
}

class Monkey extends Animal{
    eatBanana() {
        console.log(this.name, "is eating banana");
    }
};

let Dubby = new Monkey("Dubby", "brown");
Dubby.eatBanana();
Dubby.run(); 