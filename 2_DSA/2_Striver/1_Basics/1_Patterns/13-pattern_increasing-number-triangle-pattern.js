/*
Problem statement

Examples:

Input Format: N = 3
Result: 
1
2 3
4 5 6

Input Format: N = 6
Result:   
1
2  3
4  5  6
7  8  9  10
11  12  13  14  15
16  17  18  19  20  21

*/



function printPattern(num) {
  let i = 1;
  for (let row = 1; row <= num; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += `${i++} `;
    }

    console.log(line);
  }
}



printPattern(4);