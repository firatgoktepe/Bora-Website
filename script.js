const burger = document.getElementById('burger');
const ul = document.querySelector('ul.nav');

burger.addEventListener('click', () => {
  ul.classList.toggle('show');

});