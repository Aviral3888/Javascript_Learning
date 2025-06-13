/*
You are given an integer array A having N integers.

You have to construct and return an array containing all the adjacent / consecutive element differences (A[i + 1] - A[i]) in the same order.

Example Input

Input 1:

 A = [6, 2, 4, 4, 3]
Input 2:

 A = [2]


Example Output

Output 1:

 [-4, 2, 0, -1]
Output 2:

 []
*/


function getAdjacentDifferencesArray(A) {
    if (A.length <= 1) {
        return []
    }
    let a = [];
    for (let i = 0; i < A.length -1; i++) {
        a[i] = A[i + 1] - A[i];
    }

    return a;
}

console.log(getAdjacentDifferencesArray([6, 2, 4, 4, 3]));
