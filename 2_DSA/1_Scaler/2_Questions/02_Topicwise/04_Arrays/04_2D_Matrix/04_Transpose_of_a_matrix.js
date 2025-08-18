// Given a square matrix, print the transpose.

let mat = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

function transpose1(mat) {
    // using Lower Triangular Matrix
    let N = mat.length;
    // let M = mat[0].length;

    for (let i = 1; i < N; i++) {
        for (let j = 0; j < i; j++) {
            // swap mat[i][j] and mat[j][i]
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp
        }
    }

    return mat;
}

// console.log(transpose1(mat));

function transpose2(mat) {
    // using Upper Triangular Matrix

    let N = mat.length;
    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            // swap mat[i][j] and mat[j][i]
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp
        }
    }
    return mat;
}
console.log(transpose1(mat));
