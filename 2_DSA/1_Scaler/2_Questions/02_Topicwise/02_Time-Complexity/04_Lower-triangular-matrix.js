/*
Problem Description

You are given a N X N integer matrix A.You have to tell whether it is a lower triangular matrix or not.
A square matrix is called lower triangular if all the entries above the main diagonal are zero.For any matrix P if elements P[i, j] = 0(where j > i(1 - based)).

Problem Constraints
2 <= N <= 103
- 1000 <= A[i][j] <= 1000

Input Format
First and only argument is a 2D integer matrix A.

Output Format
Return 1 if A is a lower triangular matrix, else return 0.

Example Input
Input 1:
A = [[1, 0, 0],
[0, 0, 0],
[-7, -8, 9]]

Input 2:
A = [[0, 2],
[0, 0]]

Example Output
Output 1:
1 
Output 2:
0 
*/

let A = [[1, 0, 0],
[0, 0, 0],
[-7, -8, 9]];

function isLowerTriangularMatrix(A) {
    let r = A.length;
    let c = A[0].length;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if ((j > i) && (A[i][j] !== 0)) {
                return 0
            }
        }
    }
    return 1
}

console.log(isLowerTriangularMatrix(A));


// solve : function(A){
//         let r = A.length;
//         let c = A[0].length;

//         let i=0; j=1;
//          while(i<c-1){
//             while(j<r){
//                 if(A[i][j] !== 0){
//                     return 0;
//                 }
//                 j++;
//             }
//             i=i+1;
//             j=i+1;
//         }
//         return 1;
// 	}