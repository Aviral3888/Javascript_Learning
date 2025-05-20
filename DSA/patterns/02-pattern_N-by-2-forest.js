/*
Problem statement
Sam is making a forest visualizer. An N-dimensional forest is represented by the pattern of size NxN filled with ‘*’.
An N/2-dimensional forest is represented by the lower triangle of the pattern filled with ‘*’.
For every value of ‘N’, help sam to print the corresponding N/2-dimensional forest.

Example:

Input Format: N = 5

Result:
* 
* * 
* * *
* * * *
* * * * *

*/

function printPattern(num) {
    for (let row = 1; row <= num; row++) {
        let line = "";
        for (let col = 1; col <= row; col++) {
            line+= "* ";
        }
        console.log(line);
    }
}

printPattern(5)