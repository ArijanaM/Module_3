'use strict';
const button = document.querySelector('button');

const buttonClicked = (event) => {
  alert('Button clicked');
}

button.addEventListener('click', buttonClicked)
