// Given a 2D Matrix every row and column in sorted, find the element k;

let mat = [
    [-1, 2, 4, 5, 9, 11],
    [1, 4, 7, 8, 10, 14],
    [3, 7, 9, 10, 13, 17],
    [6, 10, 12, 14, 16, 20],
    [7, 13, 16, 19, 22, 24],
    [11, 15, 19, 21, 24, 27],
    [14, 20, 25, 29, 31, 34],
    [18, 24, 29, 32, 34, 42]
];
let k = 30;

function searchMatrix(mat, k) {
    let N = mat.length;
    let M = mat[0].length;

    let i = 0;
    let j = M-1;

    while (i < N && j >= 0) {
        console.log(i, j);
        if (mat[i][j] == k) {
            return 1;
        }
        else if (mat[i][j] < k){
            i++;
        }
        else {
            j--;
        }
    }
    return 0;
}

console.log(searchMatrix(mat, k));