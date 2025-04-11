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