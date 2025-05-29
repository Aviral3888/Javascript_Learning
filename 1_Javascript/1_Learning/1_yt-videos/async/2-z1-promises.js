console.log("02 - async - Promises.js");

/*
        ---------       Things To Remember      ----------
        
1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

*/


// Prior to promises we used to use callbacks to achieve asynchronous programming.

// Eg: 1

// let cart = ["a", "b", "c"];
// createOrder(cart, function(orderId) {
//     proceedToPayment(orderId);
// })
// But using this, the issue of Inversion of Control [IOC] arises,  

// To solve this issue, PROMISES were introduced


/*      ---------------         Promises          ---------------     */

// let cart = ["a", "b", "c"];

// const promise = createOrder(cart);
// {data: undefined};

// Whenever Js will execute [ const promise = createOrder(cart); ], the createOrder api will return a promise(an empty object) and the program will go on executing and after a certain time, this promise object will fill this data automatically. And we will have order data after the async time it will take. This is the basis of Promises.

// Attach a callback to this promise object:

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });

// this, .then method will automatically be called, once the promise data is returned after the createOrder execution is completed in async time adn NOT before that.

/* NOTE:

In callbacks we used to "PASS" the callback function ...
whereas
In promises we "ATTACH" the callback function ...

(in promises, we do not lose the IOC (Inversion of Control))

BENEFIT:
Once the data is received in promise object after the asynchronous operation, 
.then () method will "DEFINITELY" be executed and only "ONCE".
And we will also have "CONTROL" of our program.
*/




/*      ---------------         Promises example         ---------------     */


// fetch() - browser api which returns a promise 

// Eg: 2 -> Promise example using real apis
/*
const GET_API = "https://fake-json-api.mock.beeceptor.com/users";

const userData = fetch(GET_API);
console.log(userData);

userData.then(function(data) {
    console.log("data:", data);
})
*/



/*      ---------------         Promise Chaining         ---------------     */

// A substitute -> to resolve callback hell
/*
let cart = ["a", "b", "c"];

createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (orderSummary) {
        updateWallet(orderSummary);
    })

*/