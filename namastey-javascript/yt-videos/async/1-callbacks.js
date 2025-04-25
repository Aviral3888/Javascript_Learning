console.log("Asynchronous Programming - Callbacks");

/*      ---------------         Callback Functions          ---------------     */

// Good Part of callback functions

// Helps in achieving async approach to Js
const cart = ["laptop", "shoes", "phones"];

// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.orderSummary(function () {
//             api.updateWallet()
//         })
//     });
// });
// We needed to call proceedToPaymemt method only after createOrder method gets executed.So, we add api.proceedToPayment() the method call to a callback function and pass it in createOrder() as a callback



// Bad Parts of callback functions

// 1. Callback Hell : 
// When more than 1 APIs depend on each other to get call so then we pass the callback function inside callback function so it created nested callback function this makes our code less maintainable and readable this is callback hell. It also know as "Pyramid of Doom".

// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.orderSummary(function () {
//             api.updateWallet()
//         })
//     });
// });


// 2 - Inversion of control : 
// The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
// That process is called inversion of control. 