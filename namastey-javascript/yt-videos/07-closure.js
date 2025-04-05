console.log("07 - closures");

// Eg: 1

// function x() {
//     var a = 10;
//     function y () {
//         console.log(a);
//     }
//     y();
// }
// x();

// Here a closure will be formed: function y() is bundled with its lexical scope and hence the variable a value is used.

// Eg: 2

// function x() {
//     var a = 10;
//     function y () {
//         console.log(a);
//     }
//     y();
// }

// x();
// console.log(a); // Reference Error : not defined

/* 
    -------    IMPORTANT EG for CLOSURES    ------
*/

// Eg: 3

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// console.log(z);
// z();

// Here z will still return the value of a as 10; even though the function x and its scope is finished.
// This is because when we initialized z with x(), it not only returned the function y(), but it returned the function y() along with its lexical scope.

/* 
    -------    IMPORTANT EG for CLOSURES - CORNER    ------
*/

// Eg: 4

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   var a = 100;
//   return y;
// }

// var z = x();
// console.log(z);
// z();

// Here z() will print 100; and not 10; as the returned function will point to the reference of a and not the value of a.

// Eg: 5

// function z() {
//     var b = 25;
//     function x() {
//         var a = 10;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// Output: 10 25; Because 2 closures will be formed, one of (x) and one of (z) for y(); 