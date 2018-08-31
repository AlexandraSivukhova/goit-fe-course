'use strict';

let userInput = '';
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите любое число');
    if ( !isNaN(userInput)
    && parseInt(Number(userInput)) == userInput
    && !isNaN(parseInt(userInput, 10)) ) {
    numbers.push(Number(userInput)); 
    } 
} while (userInput !== null);

console.log(numbers);

for (let sum of numbers) {
  total += sum;
}
alert(`Cумма: ${total}`);
