console.log("15 - reduce use cases");

// [].reduce() is used at a place where only a single value is expected, but provided an array of inputs

// reduce method has 2 params
// 1st param =  function (acc, curr) {} , where acc is the accumulator (stores the result after each calculation)
// 2nd param = initial value of acculumator

const arr = [5, 1, 99, 3, 6, 2];
console.log(arr);

// Eg:
// Find sum

// General Way
// function findSum(arr) {
//     let sum = 0;
//     arr.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }
// console.log(findSum(arr));

// Reduce method
// const output = arr.reduce(function (acc, curr) {
//     acc+=curr;
//     return acc
// }, 0);
// console.log(arr.reduce((acc, curr) => acc += curr, 0));


// Find Maximum
function max(arr) {
    let maxVal = 0;
    arr.forEach(element => {
        if (element > maxVal) maxVal = element;
    });
    return maxVal;
};
console.log(max(arr));

const output = arr.reduce( (acc, curr) => {
    if (curr > acc) acc = curr;
    return acc; 
}, 0);
console.log(output);