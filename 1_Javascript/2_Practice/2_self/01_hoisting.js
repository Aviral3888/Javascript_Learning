let x;
a();
b();

console.log(x);

function a() {
  x = 10;
  console.log("A:", x);
}

function b() {
//   let x = 100;
  console.log("B:", x);
  function ba() {
    console.log("BA:", x);
  }
  ba();
}

