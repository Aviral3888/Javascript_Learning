// Given an Array of N elements, which contains elements from 1 to N+1, Find the missing element

let arr = [5, 2, 4, 1, 6];

// APPROACH 1: USING       N * (N + 1) / 2      Math Formulae
// T.C. = O(N)
// S.C. = O(1)

function findMissingElement(arr) {
    let N = arr.length;
    totalSum = ((N + 2) * (N + 1)) / 2;

    let arrSum = 0;
    for (let i = 0; i < N; i++) {
        arrSum += arr[i];
    }

    return totalSum - arrSum;
}
// console.log(findMissingElement(arr));


// APPROACH 2: USING  XOR  (Bitwise operator) :: Slightly Better approach in case of high number of elements.
// T.C. = O(N)
// S.C. = O(1)

function findMissingElementXor(arr) {
    let N = arr.length;

    let a = 0;
    let b = 0;
    for (let i = 0; i < N; i++) {
        a = a ^ arr[i];
        b = b ^ (i + 1)
    }
    b = b ^ N + 1;

    let missing = a ^ b;
    return missing;
}
console.log(findMissingElementXor(arr));