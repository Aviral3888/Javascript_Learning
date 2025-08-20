/*
Q5.Row to Column Zero

Problem Description
You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, make entire ith row and jth column zero.

Problem Constraints
1 <= A.size() <= 103
1 <= A[i].size() <= 103
0 <= A[i][j] <= 103

Input Format
First argument is a 2D integer matrix A.

Output Format
Return a 2D matrix after doing required operations.

Example Input
Input 1:
[1, 2, 3, 4]
[5, 6, 7, 0]
[9, 2, 0, 4]

Example Output
Output 1:
[1, 2, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]

Example Explanation
Explanation 1:
A[2][4] = A[3][3] = 0, so make 2nd row, 3rd row, 3rd column and 4th column zero.
*/

// module.exports = { 
//  //param A : array of array of integers
//  //return a array of array of integers
// 	solve : function(A){
//         let R = A.length;
//         let C = A[0].length;
//         let zeroesRowSet = new Set();
//         let zeroesColumnSet = new Set();

//         for(let i=0; i<R; i++){    
//             for(let j=0; j<C; j++){
//                 if(A[i][j] === 0){
//                     zeroesRowSet.add(i);
//                     zeroesColumnSet.add(j);
//                 }
//             }
//         }

//         for(let i=0; i<R; i++){  
//             if(zeroesRowSet.has(i)){
//                 for(let j=0; j<C; j++){
//                     A[i][j] = 0;
//                 }
//             } 
//         }

//         for(let i=0; i<C; i++){  
//             if(zeroesColumnSet.has(i)){
//                 for(let j=0; j<R; j++){
//                     A[j][i] = 0;
//                 }
//             } 
//         }
//         return A;
// 	}
// };

let mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 0],
    [9, 2, 0, 4]
]


function rowColumnZero(A) {
    if (!Array.isArray(A) || A.length == 0) return -1;

    let N = A.length;
    let M = A[0].length;

    let firstRowZero = false;
    let firstColumnZero = false;

    for (let j = 0; j < M; j++) {
        if (A[0][j] == 0) firstRowZero = true;
    }
    for (let i = 0; i < N; i++) {
        if (A[i][0] == 0) firstColumnZero = true;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (A[i][j] == 0) {
                A[0][j] = 0;
                A[i][0] = 0;
            }
        }
    }
    console.log(JSON.stringify(A));

    for (let i = 1; i < N; i++) {
        for (let j = 1; j < M; j++) {
            if (A[0][j] === 0 || A[i][0] == 0) {
                A[i][j] = 0;
            }
        }
    }
    console.log(JSON.stringify(A));

    if (firstColumnZero) {
        for (let i = 0; i < N; i++) {
            A[i][0] = 0;
        }
    }
    if (firstRowZero) {
        for (let j = 0; j < M; j++) {
            A[0][j] = 0;
        }
    }

    return A;
}

console.log(rowColumnZero(mat));