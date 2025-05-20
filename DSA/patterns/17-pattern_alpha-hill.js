/*
Problem statement

Input Format: N = 3
Result: 
  A  
 ABA 
ABCBA


Input Format: N = 6
Result:   
     A     
    ABA    
   ABCBA   
  ABCDCBA  
 ABCDEDCBA 
ABCDEFEDCBA

*/


function printPattern(num) {
  for (let row = 1; row <= num; row++) {
    let line = "";

    for (let col = (num - row); col > 0; col--) {
      line += `  `;
    }

    let char = "A".charCodeAt();
    for (let col = 1; col <= row; col++) {
      line += `${String.fromCharCode(char++)} `;
    }
    for (let col = 1; col < row; col++) {
      line += `${String.fromCharCode(char - col - 1)} `
    }
    console.log(line);
  }
}

printPattern(6);