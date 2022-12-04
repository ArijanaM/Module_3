'use strict';

source.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.querySelector('input[name="firstname"]').value;
  const surname = document.querySelector('input[name="lastname"]').value;
  target.innerHTML = `Your name is ${name} ${surname}`;

});