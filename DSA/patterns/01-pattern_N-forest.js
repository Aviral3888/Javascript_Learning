/*
Problem statement
Sam is making a forest visualizer. An N-dimensional forest is represented by the pattern of size NxN filled with ‘*’.

For every value of ‘N’, help sam to print the corresponding N-dimensional forest.

Example:
Input: ‘N’ = 3

Output: 
* * *
* * *
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