// Problem 1 - Given a mat[3][4] print all elements

/*
let rows = 3, cols = 4;
let matrix1 = Array.from({length: rows}, () => Array(cols).fill(0));

for (let i = 0; i< rows; i++) {
    for (let j = 0; j < cols; j++ ) {
        console.log(matrix1[i][j]);
    }
}
*/


let matrix2 = [
    [3, -1, 2, 6, 1],
    [3, 2, 1, 7, -3],
    [6, -3, 4, -3, -2],
    [10, 2, 3, -7, 3]
];

// Problem 2 - Print the sum Row wise

/*
let N = matrix2.length;
let M = matrix2[0].length;

for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < M; j++) {
        sum = sum + matrix2[i][j];
    }
    console.log(`Row ${i + 1}:${sum}`);
}
*/

// Problem 3 - Print the sum column wise

/*
// Approach 2 - a little confusing, yet optimal.
for (let j = 0; j < M; j++) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += matrix2[i][j]
    }
    console.log(`Column ${j + 1}:${sum}`);
}
*/

/*
// Approach 1 - Works but not optimal
let colArr = Array(M).fill(0);
// [22,  0,  10,  3,  -1]
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        colArr[j] = colArr[j] + matrix2[i][j]
    }
}
for (let i = 0; i < M; i++) {
    console.log(`Column ${i + 1}:${colArr[i]}`);
}
*/




// Problem 4 - Add 2 Matrices

let mat1 = [
    [2, 5, -1],
    [7, 0, 3],
    [-4, 6, 8],
    [9, -2, 1]
];

let mat2 = [
    [3, -7, 4],
    [-1, 8, 2],
    [5, 0, -6],
    [-3, 7, 9, 4]
];
/**/
function isValidMatrix(mat) {
    if (!Array.isArray(mat) || mat.length == 0) { return false }
    let cols = mat[0].length;
    for (let row of mat) {
        if (!Array.isArray(row) || row.length !== cols) { return false }
    }
    return true
}

function addMatrices(mat1, mat2) {

    if (!isValidMatrix(mat1) || !isValidMatrix(mat2)) {
        console.log("Invalid Individual Matrix");
        return false;
    }

    let N1 = mat1.length;
    let M1 = mat1[0].length;

    let N2 = mat2.length;
    let M2 = mat2[0].length;

    if (N1 !== N2 || M1 !== M2) {
        console.log("Valid Matrix but Invalid Operation");
        return false;
    }

    let mat3 = Array.from({ length: N1 }, () => Array(M1).fill(0));

    for (let i = 0; i < N1; i++) {
        for (let j = 0; j < M1; j++) {
            mat3[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return mat3;
}

// console.log(addMatrices(mat1, mat2));




// Problem 5 - Print Diagonal

let mat3 = [
    [2, 5, -1],
    [7, 0, 3],
    [-4, 6, 8]
];

function printDiagonal(mat) {
    if (!Array.isArray(mat) || mat.length == 0) {
        return 0;
    }

    let row = mat.length;
    let col = mat[0].length;

    if (row !== col) {
        return 0
    }

    for (let i = 0; i < row; i++) {
        console.log("L-R:", mat[i][i]);
    }

    /*
    let j = row - 1;
    for (let i = 0; i < row; i++) {
        
        console.log("R-L:", mat[i][j]);
        j--;
    }
    */

    /* 
    Can also be done using Single variable, i.e. only i;
    so basically, 
    i + j = N - 1;
    j = N - 1 - i;
    */
    for (let i = 0; i < row; i++) {
        console.log(mat[i][row - 1 - i]);
    }


    return true
}

console.log(printDiagonal(mat3));