/*
Problem statement

Example:

Input Format: N = 6
Result:
* * * * * *
* * * * * 
* * * * 
* * * 
* * 
*

*/

function printPattern(num) {
    for (let row = 0; row <= num; row++) {
        let line = "";
        for (let col = 1; col <= (num - row); col ++) {
            line += "* "
        }
        console.log(line);
    }
}

printPattern(6)