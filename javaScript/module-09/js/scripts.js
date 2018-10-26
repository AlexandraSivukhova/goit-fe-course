'use strict';

const timeFace = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const lapBtn = document.querySelector(".js-take-lap");
const resetBtn = document.querySelector(".js-reset");
const list = document.querySelector(".js-laps");

const timer = {
  startTime: null,
  deltaTime: 0,
  id: null,

startClick() {
    if(startBtn.textContent === 'start') {
        this.start();
        startBtn.textContent = 'pause';
    } else if (startBtn.textContent === 'pause') {
        startBtn.textContent = 'continue';
        this.pause();
    } else if (startBtn.textContent === 'continue') {
        startBtn.textContent = 'pause';
        this.continue();
    }
},
start() {
        this.startTime = Date.now();
        this.tick();
},
continue () {
    this.startTime = Date.now() - this.deltaTime;
    this.tick();
},
pause () {
    clearInterval(this.id);
    this.startTime = Date.now();
    this.pauseTime = this.startTime - this.deltaTime;
    return this.pauseTime;
},

lap() {
    if (startBtn.textContent === 'pause') {
    const currentTime = Date.now();
    const timeList = getFormattedTime(currentTime - this.startTime);
    list.insertAdjacentHTML('afterbegin', `<li>${timeList}</li>`);
    }
},
reset() {
    clearInterval(this.id);
    timeFace.textContent = '00:00.0';
    startBtn.textContent = 'start';
    list.innerHTML = "";
},

tick() {
    this.id = setInterval(() => {
    const currentTime = Date.now();

    this.deltaTime = currentTime - this.startTime;

    const time = new Date(this.deltaTime);

    timeFace.textContent = getFormattedTime(time);
    }, 100);
  }
}


startBtn.addEventListener('click', timer.startClick.bind(timer));
resetBtn.addEventListener('click', timer.reset.bind(timer));
lapBtn.addEventListener('click', timer.lap.bind(timer));

 
  function getFormattedTime(time) {
  const timeCounter = new Date(time);
  
  let minutes = timeCounter.getMinutes();
  let seconds = timeCounter.getSeconds();
  let milliseconds = Number.parseInt(timeCounter.getMilliseconds() / 100);
  
    if (minutes < 10) {
    minutes = '0' + minutes;
    };
     if (seconds < 10) {
    seconds = '0' + seconds;
    };
  
  return `${minutes}:${seconds}.${milliseconds}`;
};

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/
