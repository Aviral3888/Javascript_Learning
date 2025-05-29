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


/* -------------          Q3        ----------- */ 
/*
Create an array to store companies = "Meta", "Apple", "Adobe", "Netflix", "Google"
a) Remove the first company from the array 
b) Remove Adobe and add Microsoft in its place
c) Add Uber at the end
*/

// let companies = ["Meta", "Apple", "Adobe", "Netflix", "Google"];
// console.log("initial:", companies);

// // a)
// companies.shift();
// console.log("after a:", companies);

// // b)
// companies.splice(1, 1, "Microsoft");
// console.log("after b:", companies);

// // c)
// // companies.push("Uber");
// companies.splice(companies.length, 0, "Uber");
// console.log("after c:", companies);
