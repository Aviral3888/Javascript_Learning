console.log("15 - filter use cases");

// [].filter() is used to filter an array on the basis of some conditions;

const arr = [5, 1, 3, 6, 2];
console.log(arr);

// Eg:
// Even
const isEven = function (num) {
    return (num%2 == 0)
}
console.log(arr.filter(isEven));

// Greater than 3
const greaterThan3 = num => num >  3;
// console.log(arr.filter(greaterThan3));
console.log(arr.filter(num => num > 3)); 
