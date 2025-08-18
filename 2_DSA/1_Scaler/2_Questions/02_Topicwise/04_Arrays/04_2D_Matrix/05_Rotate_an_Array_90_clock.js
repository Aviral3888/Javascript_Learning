// Given a square matrix, rotate by 90deg in clockwise. 
let mat = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

function rotateArray(mat) {
    if (!Array.isArray(mat) || mat.length == 0) {
        return -1
    };

    let N = mat.length;
    for (let row of mat) {
        if (!Array.isArray(row) || row.length !== N) {
            return -1
        }
    };

    // First Find Transpose of the matrix
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < i; j++) {
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }

    // Reverse each row of the matrix
    for (let i = 0; i < N; i++) {
        let k = N - 1;
        for (let j = 0; j < Math.floor(N / 2); j++) {
            let temp = mat[i][j];
            mat[i][j] = mat[i][k];
            mat[i][k] = temp;
            k--;
        }
    }

    return mat;
}

console.log(rotateArray(mat));