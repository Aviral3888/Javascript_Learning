/*
Problem statement

Input Format: N = 3
Result: 
  *  
 ***
***** 
*****  
 ***
  *   

Input Format: N = 6
Result:   
     *
    ***
   ***** 
  *******
 *********
***********  
***********
 *********
  *******
   ***** 
    ***    
     *

*/

/*
For this one we can actually combine Pattern 7 and Pattern 8 
which is :

Pattern 7:
Input Format: N = 3
Result: 
  *  
 *** 
*****
and 
Pattern 8:
Input Format: N = 3
Result: 
*****  
 ***
  *


To give
  *  
 *** 
*****
*****  
 ***
  *

*/

function printPattern_7(num) {
  for (let row = 1; row <= num; row++) {
    let line = "";
    for (let col = 0; col < (num - row); col++) {
      line += "  ";
    }
    for (let col = 0; col < (row * 2 - 1); col++) {
      line += "* ";
    }
    console.log(line);
  }
}

function printPattern_8(num) {
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

function printPattern(num) {
  printPattern_7(num);
  printPattern_8(num);  
}

printPattern(3);