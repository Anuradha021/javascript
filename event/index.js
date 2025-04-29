//events are just announcements which are done by the browser .
//in general html elements are evenet target like button etc.
//in evenet listener it is written that what action should be performed when event button  is clicked.
//or what action should be performed when a event come on event target.



function changeText() {
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Anuradha";
}

let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);
//fpara.removeEventListener('click', changeText);



//----------------------------PHASE OF EVENT---------------------------------------------------

/**
 * Capturing Phase (Trickling Down):

The event starts from the window and goes down the DOM tree to the target element.

Rarely used, but you can listen during this phase.

Target Phase:

The event reaches the actual element that was interacted with.

Bubbling Phase:

After hitting the target, the event bubbles up the DOM tree back to the window.

This is the most commonly used phase (default behavior when using addEventListener).


add eventlistener is applyied in the bubbling phase byDefault
 * 
 */