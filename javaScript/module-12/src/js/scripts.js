'use strict';

/* 
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 
  
  Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
    
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.
      
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.
          
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
      на кнопку происходит удаление.
      
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
    
  🔔 Оформление интерфейса произвольное. */

let link = getLocalStorage();
const form = document.querySelector('.form');
const input = form.querySelector('.input');
const button = form.querySelector('.button');
const list = document.querySelector('.list__content');
const btnDelete = document.querySelector('.delete');
const source = document.querySelector('#list').innerHTML.trim();
const template = Handlebars.compile(source);
const grid = document.querySelector('#grid');

function setLocalStorage(value) {
    localStorage.setItem('saved_url', JSON.stringify(value));
}
  
function getLocalStorage() {
    const data = localStorage.getItem('saved_url');

    return data ? JSON.parse(data) : [];
}

function onAddUrlList(e) {
    e.preventDefault();

    const url = input.value;
    const validUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;

    if (url === '') {
        return alert('Добавьте URL');
    } else if (link.find(item => item.url === url)) {
        return alert('Такая закладка уже существует!');
    } else if (!validUrl.test(url)) {
        return alert('Введите, пожалуйста, правильный URL.');
    } else {
        form.reset();
        link.push({url});
        getRender(link);
        setLocalStorage(link);
    }
}

function getRender(links) {
    let markup = '';
    
    links.reverse().forEach((item, index) => {
        item['position'] = index;
        markup += template(item);
    });
    
    grid.innerHTML = markup; 
}

function onDeleteUrl(event) {
  if (event.target.nodeName.toLowerCase() === 'button') {
    let i = event.target.dataset.position;
    link = link.filter(num => num.position != i);
    setLocalStorage(link);
    getRender(link);
  }
}

button.addEventListener("click", onAddUrlList);
grid.addEventListener("click", onDeleteUrl);

window.onload = getRender(link);