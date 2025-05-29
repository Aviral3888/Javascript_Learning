console.log("02 - functions and variable env initiated at :", Date.now());

var x = 1;
a();
b();
console.log("global -> x:", x); 
function a() {
    var x = 10;
    console.log("a -> x:", x);
}

function b() {
    var x = 100;
    console.log("b -> x:", x);
}

/*
Output
10      - local scope of function a
100     - local scope of function b
1       - global scope of the main program
*/