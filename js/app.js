// rectangle

const rectangle = document.querySelector('.rectangle');
const hdncross = document.querySelector('.hdn-cross');
const black = document.querySelector('.black');
const feedinput = document.querySelector('.feed-input');

feedinput.addEventListener('click', () => {
  rectangle.classList.add('active');
  hdncross.classList.add('active');
  black.classList.add('active');
})
hdncross.addEventListener('click', () => {
  rectangle.classList.remove('active');
  hdncross.classList.remove('active');
  black.classList.remove('active');
})

const headerphoto = document.querySelector('.header-photo');
const rectanglebox = document.querySelector('.rectangle-box');

headerphoto.addEventListener('click', () => {
  rectanglebox.classList.toggle('active');
})

