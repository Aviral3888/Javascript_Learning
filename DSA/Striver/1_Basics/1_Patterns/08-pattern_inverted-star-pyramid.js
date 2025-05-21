/*
Problem statement

Input Format: N = 3
Result: 
*****  
 ***
  *
   
Input Format: N = 6
Result:     
***********
 *********
  *******
   ***** 
    ***    
     *

*/

function printPattern(num) {
  for (let row = 1; row <= num; row++) {
    let line = "";
    for (let col = 0; col < (row - 1); col++) {
      line += "  ";
    }
    for (let col = 0; col < (num * 2 - (row * 2 - 1)); col++) {
      line += "* ";
    }
    console.log(line);
  }
}

printPattern(3)

/*

*****  
 ***
  *
=

_ 
_ _ 
+
* pattern
*/