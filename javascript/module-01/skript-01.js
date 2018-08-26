'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const welcomeUser = 'Добро пожаловать!';
const cancelUser = 'Отменено пользователем!';
const banUser = 'Доступ запрещен!';

let userLogin = prompt('Введите Ваш логин:');

console.log( userLogin );

if ( userLogin === adminLogin ) {
    let userPassword = prompt('Ваш пароль:');
    if ( userPassword === adminPassword ) {
      alert(welcomeUser); 
  } else if ( userPassword === null ) {
    alert(cancelUser);
  } else {
    alert(banUser);
  }
} else if ( userLogin === null ) {
  alert(cancelUser);
} else {
  alert(banUser);
} 


