/*
Problem statement

Input Format: N = 3
Result: 
*    *
**  **
******
**  **
*    *


Input Format: N = 6
Result:   
*          *
**        **
***      ***
****    ****
*****  *****
************
*****  *****
****    ****
***      ***
**        **
*          *

*/



function printPatternUpperVoid(num) {
  for (let row = 2; row <= num; row++) {
    let line = "";

    for (let col = 1; col <= (num - row) +1; col++) {
      line += "* ";
    }

    for (let col = 1; col <= (row-1)*2; col++) {
      line += "  ";
    }

    for (let col = 1; col <= (num - row) +1; col++) {
      line += "* ";
    }

    console.log(line);
  }
}
function printPatternLowerVoid(num) {
  for (let row = 1; row <= num; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
      line += "* ";
    }

    for (let col = 1; col <= (num - row)*2; col++) {
      line += "  ";
    }

    for (let col = 1; col <= row; col++) {
      line += "* ";
    }

    console.log(line);
  }
}

function printPattern(num) {
  printPatternLowerVoid(num);
  printPatternUpperVoid(num);
}

printPattern(3);
