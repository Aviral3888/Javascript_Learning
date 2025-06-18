// Print all subarray elements

let arr_1 = [3, -2, 6, 2, 4];

function printAllSubarrays(arr) {
    let sum = 0;
    for (let i = 0; i < arr_1.length; i++) {
        for (let j = i; j < arr_1.length; j++) {

            // print all subarray elements
            // for (let k = i; k<=j; k++) {
            //     console.log(arr[k]);
            // }

            // print sum of all subarray elements
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }
        }
    }

    console.log("SUM:", sum);
}

console.log(printAllSubarrays(arr_1));
