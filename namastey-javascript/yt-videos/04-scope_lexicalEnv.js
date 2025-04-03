console.log("04- Understanding Scope, Scope Chain and Lexical Environment");

// Eg 1

// function a() {
//     console.log(b);
// }
// var b = 10;
// a();

// OUTPUT :: 10

// Eg 2

// function a() {
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// var b = 10;
// a();

//OUTPUT :: 10

//Eg 3

// function a () {
//     var b = 10;
//     c();
//     function c() {
//         console.log("Inside c:", b); // 10
//     }
// }
// a();
// console.log("outside a:", b); // not defined error

// Eg 4

// function a() {
//   c();
//   console.log("inside a:", b);

//   function c() {
//     var b = 10;
//     console.log("inside c:", b);
//     d();
//     function d() {
//       console.log("inside d:", b);
//     }
//   }
// }

// // console.log("outside a:", b);
// a();

// OUTPUT :: inside c : 10 \n inside d: 10 \n not defined error

// Eg - Scope Chain and Lexical Environment

function a() {
  var a1 = 10;
  console.log("Inside a:", a1);
  b();
  function b() {
    var b1 = 100;
    console.log("Inside b:", b1, "a1: ", a1);
    c();
    function c() {
      var c1 = 1000;
      console.log("Inside c:", c1, "b1:", b1, "c1:", c1);
      this.b1 = 200;
      console.log("Inside c:", c1, "b1:", b1, "c1:", c1, "this.b1:", this.b1); // this b1 gets added in the Global Execution Context :: can also be accessed using window.b1
      d();
      function d() {
        var d1 = 10000;
        console.log("Inside d:", d1, "c1:", c1, "b1:", b1, "c1:", c1);
      }
    }
  }
}

var g1 = 1;
console.log("Inside Global EC:", g1);

a();

// OUTPUT
/*

04- Understanding Scope, Scope Chain and Lexical Environment
Inside Global EC: 1
Inside a: 10
Inside b: 100 a1:  10
Inside c: 1000 b1: 100 c1: 1000
Inside c: 1000 b1: 100 c1: 1000 this.b1: 200
Inside d: 10000 c1: 1000 b1: 100 c1: 1000

*/
