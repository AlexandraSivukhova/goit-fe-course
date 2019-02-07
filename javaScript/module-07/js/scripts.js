'use strict';
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

  let container__post = document.querySelector('.container__post');

  function createPostCard({img, title, text, link}) {
    
    const post = document.createElement('div');
    post.classList.add('post');

    const post__image = document.createElement("img");
    post__image.classList.add('post__image');
    post__image.setAttribute('src', img);
    post__image.setAttribute('alt', 'post image');

    const post__title = document.createElement("h2");
    post__title.classList.add('post__title');
    post__title.textContent = title;

    const post__text = document.createElement("p");
    post__text.classList.add('post__text');
    post__text.textContent = text;

    const button = document.createElement("a");
    button.setAttribute('href', "#");
    button.classList.add('button');
    button.textContent = link;
   
    post.append(post__image);
    post.append(post__title);
    post.append(post__text);
    post.append(button);
  
  return post;
};

function createCards(arr) {
  return arr.reduce((acc, el) => acc.concat(createPostCard(el)), []);
}

const result = createCards(posts);

container__post.append(...result);