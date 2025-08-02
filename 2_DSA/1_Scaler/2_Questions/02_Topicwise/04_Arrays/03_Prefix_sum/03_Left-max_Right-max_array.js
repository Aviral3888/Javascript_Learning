/* Problem:
Given an arr[N], construct Left Max Array and Right Max Array
*/

let arr = [2, 6, 4, 3, 8, -1, 3, 2, 0];

function getLeftMax_RightMaxArray(arr) {
    let N = arr.length;

    let leftMax = [];
    let rightMax = [];

    leftMax[0] = arr[0];
    for (let i = 1; i < N; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
    }

    rightMax[N - 1] = arr[N - 1];
    for (let i = N - 2; i >= 0; i--) {
        rightMax[i] = Math.max(arr[i], rightMax[i + 1])
    }

    return { leftMax, rightMax }
}

console.log(getLeftMax_RightMaxArray(arr));

// T.C. = O(N)
// S.C = O(N)