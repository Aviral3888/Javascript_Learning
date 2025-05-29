
console.log("18 - Throttling in Js");

/*
        Studied from -
        https://dev.to/jeetvora331/throttling-in-javascript-easiest-explanation-1081 - Tech Article
        and
        https://youtu.be/3o47TTtF2u0?si=L7PZ9zntNgdDtF03 - Piyush Garg
        https://youtu.be/Zo-6_qx8uxg?si=21huft-2M61W4s60 - Akshay Saini 
*/

// Normal 
let input = document.getElementById('throttleChatBox');

const sendChatMessage = (event) => {
    console.log("Fetching results for:", event);
}

// Throttle Implementation

function throttle(sendChatMessage, delay) {
    let lastCall = 0;
    let allowCall = true;

    return function(...args) {
        if (allowCall) {
            allowCall = false;
            setTimeout(() => {
                sendChatMessage(...args);
                allowCall = true;
            }, delay);
        }
    }
}

const sendChatWithThrottle = throttle(sendChatMessage, 2000);

input.addEventListener('keyup', (e) => {
    // Throttled version of sendChatMessage
    sendChatWithThrottle(e.target.value);
})

/*

How this throttling logic works:
	•	allowCall is initially true.
	•	On the first keyup, sendChatMessage runs and allowCall is set to false.
	•	For the next 2 seconds, all further calls are ignored.
	•	After 2 seconds, allowCall becomes true again, allowing the next call.

🔎 Summary
Concept	        What it does
throttle	    Limits the execution rate of a function to once per time interval
allowCall	    Prevents re-invoking until the timeout completes
...args	        Collects arguments and passes them to sendChatMessage
Use case	    Prevents spamming the function call — ideal for input, scroll, or resize
*/