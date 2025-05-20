/*
Problem statement

Examples:

Input Format: N = 3
Result: 
A B C
A B
A

Input Format: N = 6
Result:   
A B C D E F
A B C D E 
A B C D
A B C
A B
A

*/



function printPattern(num) {
  let i = 1;
  for (let row = 1; row <= num; row++) {
    let line = "";
    let char = "A".charCodeAt();
    for (let col = 1; col <= (num - row + 1); col++) {
      line += `${String.fromCharCode(char++)} `;
    }

    console.log(line);
  }
}



printPattern(6);