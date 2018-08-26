'use strict';

const sharmPoint = 15;
const hurgadaPoint = 25;
const tabaPoint = 6;
let userConfirm = false;
let userPoint = prompt('Пожалуйста, введите число необходимых мест:');

console.log( userPoint );

if ( parseInt(userPoint)
&& parseInt(Number(userPoint)) == userPoint
&& !isNaN(parseInt(userPoint, 10)) ) {
    if ( userPoint > sharmPoint && userPoint > hurgadaPoint && userPoint > tabaPoint ) {
        alert('Извините, столько мест нет ни в одной группе!');
    } else { 
        if ( userPoint <= sharmPoint && userConfirm == false ) {
            let userConfirm = confirm('Есть доступные места в группе Sharm. Вы согласны?');
            if ( userConfirm == true ) {
                alert('Приятного путешествия в группе Sharm');
            }   
        }

        if ( userPoint <= hurgadaPoint && userConfirm == false ) {
            let userConfirm = confirm('Есть доступные места в группе Hurgada. Вы согласны?');
            if ( userConfirm == true ) {
                alert('Приятного путешествия в группе Hurgada');
            }
        }

        if ( userPoint <= tabaPoint && userConfirm == false ) {
            let userConfirm = confirm('Есть доступные места в группе Taba. Вы согласны?');
            if ( userConfirm == true ) {
                alert('Приятного путешествия в группе Taba');
            }
        }    

        if ( userConfirm == false ) {
            alert('Нам очень жаль, приходите еще!');
        }
    }
} else {
  alert('Ошибка ввода!');
}

// let userResult = userPoint;
// if ( userResult <= sharmPoint ) {
//     confirm(`Есть ${userResult} в группе по направлению ${sharmPoint}.`) 
//         if (userResult = true) {
//             alert('Приятного путешествия в группе ${sharmPoint}!');
//         }
//         else {
//             alert('Нам очень жаль, приходите еще!');
//         }
// } else if ( userResult <= hurgadaPoint ) {
//     confirm(`Есть ${userResult} в группе по направлению ${hurgadaPoint}.`);
//         if (userResult = true) {
//             alert('Приятного путешествия в группе ${hurgadaPoint}!');
//         }
//         else {
//             alert('Нам очень жаль, приходите еще!');
//         }
// } else if ( userResult <= tabaPoint ) {
//     confirm(`Есть ${userResult} в группе по направлению ${tabaPoint}.`);
//         if (userResult = true) {
//             alert('Приятного путешествия в группе ${tabaPoint}!');
//         }
//         else {
//             alert('Нам очень жаль, приходите еще!');
//         }
// }




