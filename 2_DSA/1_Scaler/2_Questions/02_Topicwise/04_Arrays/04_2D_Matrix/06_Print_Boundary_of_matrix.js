// Given a M x N matrix, print the boundary

let mat = [
    [3, -1, 7, 4, 2],
    [6, 0, -5, 8, 9],
    [1, 2, 3, -6, 5],
    [-4, 7, 0, 3, -2]
];

function printBoundary(mat) {

    if (!Array.isArray(mat) || mat.length == 0) {
        return -1;
    }

    let N = mat.length;
    let M = mat[0].length;

    for (let row of mat) {
        console.log(JSON.stringify(row));  // For Verification
        if (!Array.isArray(row) || row.length !== M) {
            return -1
        }
    }

    // In case matrix consists of only 1 row or 1 column print it as it is
    if (N == 1 || M == 1) {
        return mat
    };

    // Print Boundary
    let boundaryArray = [];

    // Print: FIRST ROW :: i = 0; j = 0
    for (let j = 0; j < M - 1; j++) {
        boundaryArray.push(mat[0][j]);
    }

    // Print: LAST COLUMN :: i = 0; j = M - 1
    for (let i = 0; i < N - 1; i++) {
        boundaryArray.push(mat[i][M-1]);
    }

    // Print: LAST ROW :: i = N - 1; j = M - 1
    for (let j = M - 1; j > 0; j--) {
        boundaryArray.push(mat[N-1][j]);
    }

    // Print: FIRST COLUMN :: i = N - 1; j = 0
    for (let i = N - 1; i > 0; i--) {
        boundaryArray.push(mat[i][0]);
    }

    // i = 0; j = 0 

    return boundaryArray;
}

console.log(printBoundary(mat));