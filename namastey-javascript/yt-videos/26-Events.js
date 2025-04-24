console.log("26 - Events in Js");

// What to study
/*
type - keyboard events, mouse events
timestamp - Date and time related
defaultPrevented - stopping default behavior
target, toElement, srcElement, currentTarget

Interview -
position related - clientX, clientY, screenX, screenY
altkey, ctrlkey, shiftkey, keyCode
*/

// Also not a good approach as the functionalities using this are limited
// document.getElementById('img_Events').onclick() 

// Best approach is to use Event Listeners

/*      ---------------       Event Listeners and Event Propogation       ---------------       */

// Inner image element
document.getElementById('img_Events').addEventListener("click", (e) => {
    console.log("Img clicked... " );
    e.stopPropagation();
}, false);

// outer div, wrapping the image
document.getElementById('outer_div').addEventListener("click", (e) => {
    console.log("Outer div clicked... ");
}, false)

document.querySelector('#anchor_Events').addEventListener("click", (e) => {
    console.log("Anchore loaded");
    e.preventDefault();
    e.stopPropagation();
    console.log(e.defaultPrevented);
})

// Event Propogation
// 3rd parameter is a boolean value -> which is by default false; 


/*      ---------------       Event Bubbling   [B -> T]     ---------------       */

// Event Bubbling - It is a default feature of event listener. In event bubbling the event occur from child to parent and if we want that the parent event will not occur if child event is occurring then we use stoPropagation() function .
// Event will propogate from bottom towards top (like a bubble), i.e. inner elements first then outer elements are clicked

// e.preventDefault(); will stop the default behaviour of any tag / element


/*      ---------------       Event Capturing   [T -> B]       ---------------       */

// Event Capturing defines the order of event from parent to child. It can be achieved by passing the third argument inside the addEventListener() "true".
