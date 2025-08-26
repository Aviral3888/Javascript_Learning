// Given an array find the count of special indices in the array
// An index is said to be special if after removing the element, the sum of even indices is equal to sum of all odd indices.

let arr = [4, 3, 2, 7, 6, -2];

// SELF - THIS works 
function specialIndex(arr) {

    let N = arr.length;
    let PF_E = [arr[0]];
    let PF_O = [0];

    for (let i = 1; i < N; i++) {
        if (i % 2 === 0) {
            PF_E[i] = PF_E[i - 1] + arr[i];
            PF_O[i] = PF_O[i - 1]
        }
        else {
            PF_E[i] = PF_E[i - 1]
            PF_O[i] = PF_O[i - 1] + arr[i];
        }
    }

    let specialIndexCount = 0;


    for (let i = 0; i < N; i++) {

        let evenSum = 0;
        let oddSum = 0;

        if (i == 0) {
            evenSum = PF_O[N - 1] - PF_O[i];
            oddSum = PF_E[N - 1] - PF_E[i];
        }
        else if (i == N - 1) {
            evenSum = PF_E[i - 1];
            oddSum = PF_O[i - 1];
        }
        else {
            evenSum = PF_E[i - 1] + PF_O[N - 1] - PF_O[i];
            oddSum = PF_O[i - 1] + PF_E[N - 1] - PF_E[i];
        }

        if (evenSum == oddSum) {
            console.log(i, arr[i]);
            specialIndexCount++;
        }
    }

    return specialIndexCount;
}

console.log(specialIndex(arr));
