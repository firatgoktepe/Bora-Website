const burger = document.getElementById('burger');
const ul = document.querySelector('ul.nav');

const x = document.querySelector('button.toggleX')

burger.addEventListener('click', () => {
  ul.classList.toggle('show');
});
burger.addEventListener('click', () => {
  x.classList.toggle('open');
  burger.classList.toggle('openclose');
})

x.addEventListener('click', () => {
  burger.classList.toggle('openclose')
  x.classList.toggle('open');
  ul.classList.toggle('show')
})
