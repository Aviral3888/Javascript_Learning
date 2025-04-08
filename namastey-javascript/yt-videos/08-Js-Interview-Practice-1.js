console.log("Js - Interview practice 1");

/*
Question 1: Explain Closure with example
*/

// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// outer()();


/*
Question 2: What happens if we move var a= 10; before retuning inner;
*/

function outer() {

    function inner() {
        console.log(a);
    }
    var a = 10;
    return inner;
}

outer()();