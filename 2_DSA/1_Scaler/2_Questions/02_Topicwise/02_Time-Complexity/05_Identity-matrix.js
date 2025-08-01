/*
Q6. Is It Identity Matrix?

Problem Description
You are given a N X N square integer matrix A. You have to tell whether A is an identity matrix or not.
Identity matrix is a special square matrix whose main diagonal elements are equal to 1 and all other elements are 0.

Problem Constraints
2 <= N <= 103

A[i][j] equals 0 or 1.

Input Format
The first argument is a 2D integer array denoting the matrix A

Output Format
Return 1 if A is an identity matrix, else return 0.

Example Input
Input 1:
[[1, 0], [0, 1]]
Input 2:
[[0, 0, 1], [0, 1, 0], [1, 0, 0]]

Example Output
Output 1:
 1 
Output 2:
 0 

Example Explanation
Explanation 1:
 All the main diagonal elements in A are 1, all other elements are 0.
 So, A is an identity matrix.
Explanation 2:
 All the main diagonal elements in A are not 1, also all other elements are not equal to 0.
 So, A is not an identity matrix.
*/

let a = [[0, 0, 1], [0, 1, 0], [1, 0, 0]];

function checkIdentityMatrix(mat) {
    let r = mat.length;
    let c = mat[0].length;

    if (r !== c) return 0
    for (let i=0; i<r; i++) {
        for (let j=0; j<c; j++) {
            if ((i == j)) {
                if (!(mat[i][j] == 1)) {
                    return 0
                }
            }
            else {
                if (!(mat[i][j] == 0)) {
                    return 0
                }
            }
        }
    }
    return 1;
}

console.log(checkIdentityMatrix(a))