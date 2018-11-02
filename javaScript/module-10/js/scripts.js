'use strict';

const getBtn = document.querySelector(".js-get");
const getBtnId = document.querySelector(".search-form .js-get");
const postBtn = document.querySelector(".post-form .js-post");
const deleteBtn = document.querySelector(".js-delete");
const updateBtn = document.querySelector(".js-update");

const inputGet = document.querySelector('.search-form input');

const formPost = document.querySelector('.post-form');
const inputPostName = formPost.querySelector('input[name="name"]');
const inputPostAge = formPost.querySelector('input[name="age"]');

const formDelete =  document.querySelector('.delete-form');
const inputDelete = formDelete.querySelector('input[name="id"]');

const formUpdate = document.querySelector('.update-form');
const inputUpdateId = formUpdate.querySelector('input[name="id"]');
const inputUpdateName = formUpdate.querySelector('input[name="name"]');
const inputUpdateAge = formUpdate.querySelector('input[name="age"]');

const result = document.querySelector(".js-result");

const urlApi = "https://test-users-api.herokuapp.com/users/";

getBtn.addEventListener("click", getAllUsers);
getBtnId.addEventListener("click", getUserById);
postBtn.addEventListener("click", addUser);
deleteBtn.addEventListener("click", removeUser);
updateBtn.addEventListener("click", updateUser);



function getAllUsers(e) {
    e.preventDefault();

  return fetch(urlApi)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(res => {
       return res.data.map(el => 
     `<ul>
        <li>ID: ${el.id}</li>
        <li>Name: ${el.name}</li>
        <li>Age: ${Number(el.age)}</li>
    </ul>`)
         .join("")
    })
   .then(str => {
      result.innerHTML = "";
      result.insertAdjacentHTML("afterbegin", str);
    })
    .catch(err => {
      console.error("Error: ", err);
    });
}

function getUserById(e) {
    e.preventDefault();
    const userInput = `${urlApi}${inputGet.value}`;
    inputGet.value ='';

    return fetch(userInput)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(res => {
        console.log(res.data)
        result.innerHTML = "";
        result.insertAdjacentHTML('afterbegin', 
        `<ul>
            <li>ID: ${res.data.id}</li>
            <li>Name: ${res.data.name}</li>
            <li>Age: ${Number(res.data.age)}</li>
        </ul>`)
    })
    .catch(err => {
        console.error("Error: ", err);
    });
}

function addUser(e) {
    e.preventDefault();

    fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify({
            name: inputPostName.value,
            age: inputPostAge.value
        }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
  .then(response => {
    if (response.ok) return response.json();
    throw new Error(response.statusText);
  })
  .catch(error => console.log('ERROR' + error));

  formPost.reset();
}

function removeUser(e) {
    e.preventDefault();
    const deleteUrl = urlApi + inputDelete.value;

    fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }})
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .catch(err => console.log(err));

    formDelete.reset();
}

function updateUser(e) {
    e.preventDefault();
    const updateUrl = urlApi + inputUpdateId.value;
  
    fetch(updateUrl, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          name: inputUpdateName.value,
          age: inputUpdateAge.value
        })
    })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .catch(err => console.log(err));

    formUpdate.reset();
  }

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.

  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/