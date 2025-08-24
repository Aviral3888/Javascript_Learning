// Given a N x M matrix with each element 0 or 1, and sorted rows, Find Max no of 1s in a row.

let mat = [
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1]
];

function findMax1sInRow(mat) {
    let N = mat.length;
    let M = mat[0].length;

    let i = 0;
    let j = M - 1;
    let count = 0;

    while (i < N && j >= 0) {
        if (mat[i][j] == 1) {
            console.log(i, j);
            count++;
            j--;
        }
        else {
            i++;
        }
    }
    return count;
}

console.log(findMax1sInRow(mat));