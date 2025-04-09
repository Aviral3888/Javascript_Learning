console.log("10 - Callback functions in Js - Important");

/*

Things learned:
1. Function that is passed on as argument to another function is called callback function.
2. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.
3. Event listeners can also invoke closures with scope.
4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

*/

// Callback function in Js
// Eg: 1
// function x(y) {
//     console.log("x is called");
//     y();
// }
// x(function y() {
//     console.log("y is called");
// }) 



// How callbacks are used in async tasks
// Eg: 2

// setTimeout(function () {
//     console.log("setTimeout > anonymous functions");
// }, 2000)

// function x(y) {
//     console.log("x is called");
//     y();
// }
// x(function y() {
//     console.log("y is called");
// }) 



// Event Listeners in JS
const btn = document.getElementById('clickMe');

btn.addEventListener("click", function () {
    console.log("Button Clicked");
})

