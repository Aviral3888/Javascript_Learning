console.log("2 - async - promises");

/*
        ---------       Things To Remember      ----------

1. Promise can be created using a new Promise() constructor function.
2. This constructor function takes a callback function as argument. 
3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
4. We can only resolve or reject a promise. Nothing else can be done.
5. An error can also be created using new Error('error message').
6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
8. It can be useful in a way if we want to catch error for a particular portion of a chain.
9. We can have multiple catch based on requirement and then a general catch at the end.
10. Always remember to return a value in the promise chain for the next .then to use .
11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.
*/

const cart = ["laptop", "mobile", "trimmer"];

// Promise CONSUMER

createOrder(cart)
    .then(function (orderId) {
        console.log("Create Order:", orderId);
        return orderId;
    })
    .catch(function (err) {
        console.log("Error in promise create order:", err.message);
    })
    .then(function (orderId){
        return proceedToPayment(orderId);
    })
    .then(function (payment){
        console.log("payment:", payment);
        return showOrderSummary(payment);
    })
    .catch(function (err) {
        console.log("Error in promise:", err.message);
    })
    .then(function() {
        console.log("this .then will definitely be called");
    })


// Promise PRODUCER

function createOrder(cart) {

    const pr = new Promise(function (resolve, reject) {
        // Logic to handle this promise 
        // createOrder
        // validateCart
        // orderId

        if (!validateCart(cart)) {
            const err = new Error('Cart is NOT valid');
            reject(err);
        }

        let orderId = "22324" // received from API
        setTimeout(() => {
            resolve(orderId);
        }, 2000);
    });

    return pr;

}

function validateCart(cart) {
    if (cart) return true;
}

function proceedToPayment(id) {
    return new Promise(function (resolve, reject) {
        resolve("123");
    })
}

/* 
const pr = new Promise(function (resolve, reject) {});
This is a way to create a promise. 
Promise(fn()) is a Promise Constructor which takes a callback function which has resolve and reject
*/
