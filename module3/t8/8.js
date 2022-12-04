'use strict';
const start = document.getElementById('start');
let result = document.getElementById('result');

const calculate = () => {
  let inputOne = Number(document.getElementById('num1').value);
  let inputTwo = Number(document.getElementById('num2').value);
  let operation = document.getElementById('operation').value;

  operation === 'add' ?
      result.innerHTML = inputOne + inputTwo :
      operation === 'sub' ?
          result.innerHTML = inputOne - inputTwo : operation === 'multi' ?
              result.innerHTML = inputOne * inputTwo :
              result.innerHTML = inputOne / inputTwo;
};
start.addEventListener('click', calculate);
