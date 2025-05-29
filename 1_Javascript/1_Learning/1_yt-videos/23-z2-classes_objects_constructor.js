console.log("23 - OOPs - Classes and Objects in Js");


/*      ------------        Classes and Objects         -------------       */

// Eg: 1 
/*
class RailwayForm {
    
    submit() {
        console.log(this.name + ": Form Submitted " + `for Train: ${this.trainNumber}`);
    }
    cancel() {
        console.log(this.name + ": Form Cancelled " + `for Train: ${this.trainNumber}`);
    }
    setDetails(userName, trainNo = 10001) {
        this.name = userName;
        this.trainNumber = trainNo;
    }
};

let harry = new RailwayForm("Harry", 12312);
harry.setDetails("Harry", 12312);

let rohan = new RailwayForm();
rohan.setDetails("Rohan", 12990);

harry.submit();
rohan.submit();
rohan.cancel();
*/

/*      ------------        Constructors in classes         -------------       */

// Eg: 2 
/*
class RailwayForm {

    constructor(userName, trainNo, address) {
        console.log("CONSTRUCTOR called for", userName);
        this.name = userName;
        this.trainNumber = trainNo;
        this.address = address
    }
    submit() {
        console.log(`Form Submitted for Train: ${this.trainNumber} -> By ${this.name} living in ${this.address}`);
    }
    cancel() {
        console.log(`Form Cancelled for Train: ${this.trainNumber} -> By ${this.name}`);
    }
};

let harryForm = new RailwayForm("Harry", 12312, "Ghaziabad");
let rohanForm = new RailwayForm("Rohan", 12009, "Noida");

harryForm.submit();
rohanForm.submit();
rohanForm.cancel();
*/

