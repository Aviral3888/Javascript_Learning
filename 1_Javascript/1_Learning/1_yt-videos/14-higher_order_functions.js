console.log("14 - Higher Order Functions ");

// A function which takes another function or returns a function is an Higher Order Function

// Eg: 1 Basic Example

// function x() {
//     console.log("x() is Callback Function");
// }

// function y(x) {
//     x();
//     console.log("y() is Higher Order Function");
// }

// y(x);


// ------------------------------------------------------------------

// How to approach problems in interview  


// Question 1: Given an array of radius, calculate Area

// My Approach : 1

// const radius = [3, 1, 2, 4];
// function area(side) {
//     return (3.14 * side * side);
// }
// function calculateArea(radius) {
//     let circleArea = [];
//     for (let i = 0; i < radius.length; i++) {
//         circleArea.push(area(radius[i]));
//     }
//     return circleArea;
// }
// console.log("Area: ", calculateArea(radius));


// My Approach : 2

// const radius = [3, 1, 2, 4];
// function circleArea(side) {
//     return (Math.PI * side * side);
// }
// function circleCircumference(side) {
//     return (2 * Math.PI * side);
// }

// function calculateArea(circleArea) {
//     const area = radius.map(rad => {
//         return circleArea(rad);
//     })
//     const circum = radius.map(rad => {
//         return circleCircumference(rad);
//     })
//     return [area, circum]; 
// }
// console.log("Data: ", calculateArea(circleArea));


// Namastey Js Approach
/*

const radius = [3, 1, 2, 4];

const circleArea = function (radius) {
    return (Math.PI * radius * radius);
};

const circleCircumference = function (radius) {
    return (Math.PI * 2 * radius);
}

const circleDiameter = function (radius) {
    return (2 * radius);
}

const calculate = function (radius, circleArea, circleCircumference, circleDiameter) {
    let areaResult = [];
    let circumferenceResult = [];
    let diameterResult = [];

    // radius.forEach(rad => {
    //     areaResult.push(circleArea(rad));
    //     circumferenceResult.push(circleCircumference(rad));
    //     diameterResult.push(circleDiameter(rad));
    // });

    // OR
    
    areaResult = radius.map(circleArea);
    circumferenceResult = radius.map(circleCircumference);
    diameterResult = radius.map(circleDiameter);

    return [areaResult, circumferenceResult, diameterResult];
};

console.log("Circle Data: ", calculate(radius, circleArea, circleCircumference, circleDiameter));

*/



// Create a function similar to js map()

// ORIGINAL METHODS
/*
const radius = [3, 1, 2, 4];

const circleArea = function (radius) {
    return (Math.PI * radius * radius);
};

const calculate = function(arr, logic) {
    const output = [];
    arr.forEach(element => {
        output.push(logic(element));
    });

    return output;
}

console.log(calculate(radius, circleArea));

console.log(radius.map(circleArea));

*/

const radius = [3, 1, 2, 4];

const circleArea = function (radius) {
    return (Math.PI * radius * radius);
};

// This is a polyfill for map ?? 
Array.prototype.calculate = function(logic) {
    const output = [];
    this.forEach(element => {
        output.push(logic(element));
    });

    return output;
}
// NOTE: Here, this points to the array the calculate function is called upon, hence this refers to the radius array

// console.log(calculate(radius, circleArea));
console.log(radius.calculate(circleArea));

console.log(radius.map(circleArea));


