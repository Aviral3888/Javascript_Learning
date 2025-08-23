// Given a M x N matrix, print the spiral boundary

// let mat = [
//     [3, -1, 7, 4, 2, 1],
//     [6, 0, -5, 8, 9, 2],
//     [-7, 4, 2, 1, 0, 3],
//     [1, 2, 3, -6, 5, 4],
//     [4, -3, 5, 9, 7, 1]
// ];

// 1 Row case
// let mat = [
//     [3, -1, 7, 4, 2]
// ];

// 1 Col case
// let mat = [
//     [3], [-7], [1], [4], [2]
// ];

// 2 x 2  case
// let mat = [
//     [3, 4],
//     [1, 2]
// ];

// Single element case
// let mat = [
//     [3]
// ];

let mat = [
    [3, -1, 7, 4, 2, 1],
    [6, 0, -5, 8, 9, 2],
    [-7, 4, 2, 1, 0, 3]
];

for (let row of mat) {
    console.log(row);
}

function spiralBoundary(mat) {
    if (!Array.isArray(mat) || mat.length === 0) { return -1 }
    let N = mat.length;
    let M = mat[0].length;

    for (let row of mat) {
        if (!Array.isArray(row) || row.length !== M) { return -1 }
    }

    let boundaryArray = [];

    let i = 0;
    let j = 0;

    while (N > 0 && M > 0) {

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

        N = N - 2;
        M = M - 2;
        i++;
        j++;
    }
    return boundaryArray;
}

console.log(spiralBoundary(mat));


/*
function spiralBoundary(mat) {
    let N = mat.length;
    let M = mat[0].length;

    // Print Boundary
    let boundaryArray = [];

    let i = 0; j = 0;

    while (N > 0 && M > 0) {

        if (M === 1) {
            for (let k = 0; k < N; k++) {
                boundaryArray.push(mat[k][0]);
            }
            break;
        }
        if (N === 1) {
            for (let k = 0; k < M; k++) {
                boundaryArray.push(mat[0][k]);
            }
            break;
        }


        for (let k = 0; k < M - 1; k++) {
            boundaryArray.push(mat[i][j]);
            j++;
        }

        for (let k = 0; k < N - 1; k++) {
            boundaryArray.push(mat[i][j]);
            i++;
        }

        for (let k = M - 1; k >= 1; k--) {
            boundaryArray.push(mat[i][j]);
            j--;
        }

        for (let k = N - 1; k >= 1; k--) {
            boundaryArray.push(mat[i][j]);
            i--;
        }


        N = N - 2;
        M = M - 2;
        i++;
        j++;
    }

    return boundaryArray;
}

*/