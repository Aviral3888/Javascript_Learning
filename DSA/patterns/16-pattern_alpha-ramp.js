/*
Problem statement

Input Format: N = 3
Result: 
A
B B
C C C

Input Format: N = 6
Result:   
A 
B B
C C C
D D D D
E E E E E
F F F F F F

*/


function printPattern(num) {
  for (let row = 0; row < num; row++) {
    let line = "";
    for (let col = 0; col <= row; col++) {
      line += `${String.fromCharCode(65+row)} `;
    }
    console.log(line);
  }
}

printPattern(6);