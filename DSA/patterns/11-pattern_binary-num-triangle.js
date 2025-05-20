/*
Problem statement

Input Format: N = 3
Result: 
1
01
101

Input Format: N = 6
Result:   
1
01
101
0101
10101
010101

*/

function printPattern(num) {
  let i = 1;
  for (let row = 1; row <= num; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += `${(row - col + 1) % 2}`
    }
    console.log(line);
  }
}



printPattern(6);