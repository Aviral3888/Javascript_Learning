/*
Problem statement

Examples:

Input Format: N = 3
Result: 
A
A B
A B C

Input Format: N = 6
Result:   
A
A B
A B C
A B C D
A B C D E
A B C D E F

*/



function printPattern(num) {
  let i = 1;
  for (let row = 1; row <= num; row++) {
    let line = "";
    let char = "A".charCodeAt();
    for (let col = 0; col < row; col++) {
      line += `${String.fromCharCode(char + col)} `;
    }

    console.log(line);
  }
}



printPattern(6);