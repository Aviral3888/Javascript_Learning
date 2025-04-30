/* -------------          Q1        ----------- */ 
// For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of entire class

// const marks = [85, 97, 44, 37, 76, 60];
// let avg = 0;
// let sum = 0;
// for (let mark of marks) {
//     sum+=mark;
// }
// avg = sum/marks.length;
// console.log("Average:", avg);


/* -------------          Q2        ----------- */ 
// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% on them. Change the array to store final price after applying the offer.

// Using For Loop
// let prices = [250, 645, 300, 900, 50];
// for (let i = 0; i< prices.length; i++) {
//     prices[i] -= prices[i]/10 
// };
// console.log(prices); 

// Using For - of loop
// let index = 0;
// for (let price of prices) {
//     prices[index] -= prices[index] / 10
//     index++;
// }
// console.log(prices);