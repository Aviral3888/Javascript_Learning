/*
Problem statement

Input Format: N = 3
Result: 
*  
**
***  
**
*   
Input Format: N = 6
Result:   
*
**
*** 
****
*****
******  
*****
****
***    
**
*
*/


/*
*  
**
***  
**
*   
can be splitted into 
*  
**
***  
and   
**
* 

*/

function printPattern_1(num) {
  for (let row = 1; row <= num; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += "* ";
    }
    console.log(line);
  }
}

function printPattern_2(num) {
  for (let row = 1; row < num; row++) {
    let line = "";
    for (let col = 0; col < (num - row); col++) {
      line += "* ";
    }
    console.log(line);
  }
}

function printPattern(num) {
  printPattern_1(num);
  printPattern_2(num);  
}

printPattern(3);