/*
Problem statement

Input Format: N = 3
Result: 
1    1
12  21
123321

Input Format: N = 6
Result:   
1          1
12        21
12       321
1234    4321
12345  54321
123456654321

*/

/*
1    1
12  21
123321
= 
1  
12 
123
+ 
  _ _ _ _ 
    _ _
+
    1
  2 1
3 2 1

*/

function printPattern(num) {
  let i = 1;
  for (let row = 1; row <= num; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += `${col} `;
    }
    
    for (let col = 1; col <= (num - row)* 2; col++) {
      line += `_ `;
    }
    let k = row;
    for (let col = row; col >= 1; col--) {
      line += `${col} `;
    }

    console.log(line);
  }
}



printPattern(6);