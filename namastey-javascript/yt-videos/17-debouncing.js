console.log("17 - debouncing in Js");

/*
        Studied from -
        https://dev.to/jeetvora331/javascript-debounce-easiest-explanation--29hc - Tech Article
        and
        https://youtu.be/Zo-6_qx8uxg?si=21huft-2M61W4s60 - Akshay Saini 
*/

// Normal 
let input = document.getElementById('debounceText');

const getSearchResults = (event) => {
    console.log("Fetching results for:", event);
}

// With this the function will be called each time a keyup event takes place.
// input.addEventListener('keyup', (e) => {
//     getSearchResults(e.target.value);
// })


/*
Implementing Debouncing

1- There will be a main method, which will get the user details / call the apis at a regular interval  [getSearchResults]
2- This method will be passed to the debounce method implementation. [debounce]
3- Debounce method will be called along with the function as an argument and that method will be called at event trigger.

*/


/*
What should this debounce method do:

1. It should reset any previous calls, if done before the delay time.
2. It should call / execute the method after the delay is received.
3. return the function
*/

function debounce(getSearchResults, delay) {
    let timerId;

    return function(...args) {
        clearTimeout(timerId); // cancel the last call
        timerId = setTimeout(() => {
            getSearchResults(...args); 
        }, delay);
    }
}

const getUserDataWithDebounce = debounce(getSearchResults, 1000); // It returns a function in which debouncing is enabled. 

input.addEventListener('keyup', (e) => {
    getUserDataWithDebounce(e.target.value);
})

// The main logic is 
// We want to wrap the original function (getSearchResults) inside a new function that adds debouncing behavior.
// debounce(getSearchResults, 1000); returns a debounced version of the original function

/*

📌 Summary:

Concept	                    Explanation
debounce()	                Wraps a function to delay its execution until a pause in calls.
return function(...args)	This is the wrapped version of your function with debounce behavior.
clearTimeout(timerId)	    Cancels the previous scheduled call if new input comes in before the delay.
Why define getUserDataWithDebounce outside addEventListener	            To reuse the same debounce instance with the same timer, so that clearTimeout works as intended.


*/