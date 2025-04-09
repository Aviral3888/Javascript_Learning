console.log("10 - JS Interview Practice 2");

// Problem Statement: Create a Button and on click of it, print the counter.

// 2 Approach
// 1. Using global variable: inefficient

// 2. Using Closures

function attachEventListeners() {
    let count = 0;
    const button = document.getElementById('clickMe');
    button.addEventListener("click", function xyz() {
        console.log("Button Clicked:", ++count);
    });
};

attachEventListeners();

