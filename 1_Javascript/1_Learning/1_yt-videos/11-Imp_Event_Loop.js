console.log("11 - EVENT LOOP in JS ");

/*

Things learned:
1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
5. Micro task is given priority over callback tasks.
6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute).

*/

/*

1. When does the event loop actually start? - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ❤️
2.  Are only asynchronous web API callbacks are registered in the web API environment? - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
No, there are trust issues with setTimeout() 😅. The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.

*/


/*

📘 JavaScript: Event Loop, Call Stack, Microtask Queue, and Callback Queue

JavaScript is single-threaded and uses an asynchronous model powered by the event loop to handle tasks efficiently without blocking the main thread.

1. Call Stack
	•	The Call Stack is a data structure that keeps track of the function execution context.
	•	It follows LIFO (Last In, First Out) principle.
	•	When a function is called, it’s pushed onto the stack. When it finishes executing, it’s popped off the stack.

2. Callback Queue (aka Task Queue or Macrotask Queue)
	•	Stores callbacks from asynchronous operations like:
	•	setTimeout, setInterval
	•	DOM events
	•	HTTP requests (e.g., fetch)
	•	Tasks in this queue are added after the asynchronous operation completes.

 3. Event Loop
	•	The Event Loop constantly monitors the Call Stack and the queues.
	•	If the Call Stack is empty, the Event Loop:
	1.	First checks the Microtask Queue.
	2.	If that’s empty, it checks the Callback Queue.
	•	It then moves the first task from the queue to the stack for execution.

 4. Microtask Queue
	•	The Microtask Queue holds tasks that are scheduled to run after the current task finishes and before the next task in the callback queue.
	•	Higher priority than the callback queue.
	•	Includes:
	•	Promise.then, Promise.catch, Promise.finally
	•	queueMicrotask()
	•	MutationObserver

How It All Works Together
	1.	JS encounters an asynchronous task (like setTimeout or a fetch()).
	2.	The callback is sent to the callback queue (or microtask queue, if it’s a promise).
	3.	Once the call stack is empty, the event loop:
	•	First processes all microtasks (from the microtask queue).
	•	Then moves to the callback queue.


📝 Summary Table:
Component	Priority	Examples
Call Stack	Top	Regular function calls
Microtask Queue	High	Promise.then, queueMicrotask()
Callback Queue	Lower	setTimeout, setInterval, fetch
Event Loop	Scheduler	Manages queues & call 

✅ TL;DR:
	•	Call Stack: Runs your code synchronously.
	•	Microtask Queue: Higher priority async tasks (e.g., Promises).
	•	Callback Queue: Lower priority async tasks (e.g., setTimeout).
	•	Event Loop: Moves tasks from queues to the call stack when it’s empty.
*/