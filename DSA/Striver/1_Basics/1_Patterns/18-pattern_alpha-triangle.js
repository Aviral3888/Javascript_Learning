/*
Problem statement

Input Format: N = 3
Result: 
C
B C
A B C

Input Format: N = 6
Result:   
F
E F
D E F
C D E F
B C D E F
A B C D E F

*/

/*
First try to solve this
Input Format: N = 3
Result: 
3
2 3
1 2 3
*/


function printPattern(num) {
  for (let row = 1; row <= num; row++) {
    let line = "";

    let char = "A".charCodeAt() + (num - 1);

    for (let col = 1; col <= row; col++) {
      line += `${String.fromCharCode((char - row) + col)} `;
    }
    console.log(line);
  }
}

printPattern(6);
