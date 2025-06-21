// In how many subarrays of Length N will the Kth index element be present

let arr = [3, -2, 4, -1, 2, 6]
let k = 3 // Note k is index so arr[k] = arr[3] = -1

/* 
Approach is to break the N elem array into right and left and multiply to get the total
arr = [3, -2, 4, -1, 2, 6]
k = 3

left    = 0 -> 3    == [3, -2, 4, -1]   count = 4 (k + 1)
right   = 3 -> N-1  == [-1, 2, 6]       count = 3 (N - k)

*/

function getTotalSubarraysWithElementK(arr, k) {
    let N = arr.length;

    let left_elem_count = k + 1;
    let right_elemt_count = N - k;

    let total_occurance = left_elem_count * right_elemt_count;

    return total_occurance;
}

console.log(getTotalSubarraysWithElementK(arr, k))