/*
Problem statement

Example:

Input Format: N = 6

Result:
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6

*/

function printPattern(num) {
    for (let row = 1; row <= num; row++) {
        let line = "";
        for (let col = 1; col <= row; col++) {
            line+= `${row} `;
        }
        console.log(line);
    }
}

printPattern(6)