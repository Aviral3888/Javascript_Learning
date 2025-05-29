/*
Problem statement

Input Format: N = 3
Result: 
  *  
 *** 
*****  

Input Format: N = 6

     *     
    ***    
   *****   
  *******  
 ********* 
***********
* * *

*/

function printPattern(num) {
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

printPattern(6)

/*
  *  
 *** 
*****  

_ _
_

+ 

    *
  * *
* * *

+

_ 
*
* * 

*/