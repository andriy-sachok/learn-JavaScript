import { user } from "./sayHi.js";
const userName = 'John';

<<<<<<< HEAD
document.body.innerHTML = user(userName);
=======
function addEventLogger(elt, type, action) {
  const capture = type === 'capture';
  elt.addEventListener('click',
    logEvent(elt.tagName, type, action === 'cancel',
      action === 'stop', action === 'stop!'), capture);
}

const body = document.querySelector('body');
const div = document.querySelector(`div`);
const button = document.querySelector(`button`);

addEventLogger(body, 'capture');
addEventLogger(body, 'bubble');
addEventLogger(div, 'capture', 'cancel');
addEventLogger(div, 'bubble');
addEventLogger(button, 'capture', 'stop');
addEventLogger(button, 'bubble');
>>>>>>> 6bb3ab56458a9f42accdf0294733ebbd46b477c6
