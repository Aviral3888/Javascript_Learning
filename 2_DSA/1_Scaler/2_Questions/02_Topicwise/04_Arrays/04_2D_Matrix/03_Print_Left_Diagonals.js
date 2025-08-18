// Print all the left diagonals in M*N matrix 

let mat = [
    [3, -1, 7, 4, 2],
    [6, 0, -5, 8, 9],
    [1, 2, 3, -6, 5],
];

function printRightDiagonals(mat) {

    if (!Array.isArray(mat) || mat.length === 0) {
        return -1;
    }

    let N = mat.length // rows
    let M = mat[0].length // columns

    for (let row of mat) {
        if (!Array.isArray(row) || row.length != M) {
            return -1;
        }
    }

    // Printing Diagonals starting from 1st row - Row value remains 0, column value changes from 0 to M-1
    for (let j = 0; j < M; j++) {
        let row = 0;
        let col = j;
        let diagonalArray = [];
        while (row < N && col < M) {
            diagonalArray.push(mat[row][col]);
            row++;
            col++;
        }
        console.log(JSON.stringify(diagonalArray));
    }

    // Printing Diagonals starting from Last Col [M-1] - Row value changes 1 - N-1, column values remain same
    for (let i = 1; i < N; i++) {
        let row = i;
        let col = 0;
        let diagonalArray = [];
        while (row < N && col < M) {
            diagonalArray.push(mat[row][col]);
            row++;
            col++;
        }
        console.log(JSON.stringify(diagonalArray));
    }

}

console.log(printRightDiagonals(mat));