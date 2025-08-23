// Given a M x N matrix, print the spiral boundary

let mat = [
    [3, -1, 7, 4, 2],
    [6, 0, -5, 8, 9],
    [-7, 4, 2, 1, 0],
    [1, 2, 3, -6, 5],
    [-4, 7, 0, 3, -2]
];

for (let row of mat) {
    console.log(row);
}

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

console.log(spiralBoundary(mat));