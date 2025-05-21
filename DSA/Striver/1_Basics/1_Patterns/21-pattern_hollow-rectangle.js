/*
Problem statement

Input Format: N = 3
Result: 
***
* *
***

Input Format: N = 6
Result:   
******
*    *
*    *
*    *
*    *
******

*/



function printPattern(num) {
  for (let row = 1; row <= num; row++) {
    let line = "";

    for (let col = 1; col <= num; col++) {
      if (row == 1 || row == num || col == 1 || col == num) {
        line += "* ";
      }
      else {
        line += "  ";
      }
    }

    console.log(line);
  }
}

printPattern(6);
