'use strict';

let userInput = '';
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите любое число');
 if ( !isNaN(userInput)) {
  numbers.push(+userInput); 
 }
} while (userInput !== null);

if (numbers.length > 0) {
 for (let i of numbers) {
  total += i;
  }
  alert(`Cумма: ${total}`);
}