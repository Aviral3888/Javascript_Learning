// Given a M x N matrix, print the boundary

// let mat = [
//     [3, -1, 7, 4, 2],
//     [6, 0, -5, 8, 9],
//     [1, 2, 3, -6, 5],
//     [-4, 7, 0, 3, -2]
// ];

// 1 Row case
// let mat = [
//     [3, -1, 7, 4, 2]
// ];

// 1 Col case
// let mat = [
//     [3], [-7], [1], [4], [2]
// ];

// Single element case
// let mat = [
//     [3]
// ];

// 2 x 2  case
let mat = [
    [3, 4],
    [1, 2]
];


function printBoundary(mat) {
    if (!Array.isArray(mat) || mat.length === 0) { return -1 }
    let N = mat.length;
    let M = mat[0].length;

    for (let row of mat) {
        if (!Array.isArray(row) || row.length !== M) { return -1 }
    }

    let boundaryArray = [];

    let i = 0;
    let j = 0;

    if (N === 1 || M === 1) {
        if (N === 1) {
            for (let k = 1; k <= M; k++) {
                boundaryArray.push(mat[i][j])
                j++;
            }
        }
        else {
            for (let k = 1; k <= N; k++) {
                boundaryArray.push(mat[i][j])
                i++;
            }
        }
        return boundaryArray;
    }

    for (let k = 1; k <= M - 1; k++) {
        boundaryArray.push(mat[i][j]);
        j++;
    }

    for (let k = 1; k <= N - 1; k++) {
        boundaryArray.push(mat[i][j]);
        i++;
    }

    for (let k = 1; k <= M - 1; k++) {
        boundaryArray.push(mat[i][j]);
        j--;
    }

    for (let k = 1; k <= N - 1; k++) {
        boundaryArray.push(mat[i][j]);
        i--;
    }

    return boundaryArray;
}

console.log(printBoundary(mat));



/*
    let boundaryArray = [];

    let i = 0;
    let j = 0;

    if (N > 1 && M > 1) {

        for (let k = 1; k <= M - 1; k++) {
            boundaryArray.push(mat[i][j]);
            j++;
        }
        // i = 0; j= M-1

        for (let k = 1; k <= N - 1; k++) {
            boundaryArray.push(mat[i][j]);
            i++;
        }
        // i = N-1; j = M-1

        for (let k = 1; k <= M - 1; k++) {
            boundaryArray.push(mat[i][j]);
            j--;
        }
        // i = N-1; j = 0

        for (let k = 1; k <= N - 1; k++) {
            boundaryArray.push(mat[i][j]);
            i--;
        }
        // i = 0; j = 0
    }
    if (N == 1 || M == 1) {
        if (N > 1) {
            for (let k = 1; k <= N; k++) {
                boundaryArray.push(mat[i][j]);
                i++;
            }
        }
        else {
            for (let k = 1; k <= M; k++) {
                boundaryArray.push(mat[i][j]);
                j++;
            }
        }
    }
*/

/*

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


*/

/*

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

    // Print Boundary
    let boundaryArray = [];
    
    // In case matrix consists of only 1 row or 1 column print it as it is
    if (N == 1 || M == 1) {
        if (N > 1) {
            for (let i = 0; i < N; i++) {
                boundaryArray.push(mat[i][0]);
            }
        }
        if (M > 1) {
            for (let j = 0; j < M; j++) {
                boundaryArray.push(mat[0][j]);
            }
        }
    }
    else {
        // i = 0; j = 0 
        let i = 0; j = 0;

        for (j = 0; j < M - 1; j++) {
            boundaryArray.push(mat[i][j]);
        }

        // i = 0; j = M-1;
        for (i = 0; i < N - 1; i++) {
            boundaryArray.push(mat[i][j]);
        }

        // i = N-1; j = M-1;
        for (j = M - 1; j >= 1; j--) {
            boundaryArray.push(mat[i][j]);
        }

        // i = N-1; j = 0
        for (i = N - 1; i >= 1; i--) {
            boundaryArray.push(mat[i][j]);
        }
        // i = 0; j= 0;
    }


    return boundaryArray;
}

*/