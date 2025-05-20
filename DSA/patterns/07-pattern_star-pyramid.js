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
    for (let row = 0; row < num; row++) {
        let line = "";
        for (let col = 0; col < num; col++) {
            line+= "* ";
        }
        console.log(line);
    }
}

printPattern(5)