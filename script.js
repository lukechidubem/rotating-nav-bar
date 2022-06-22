'use strict';

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', function () {
  container.classList.add('show-menu');
});

close.addEventListener('click', function () {
  container.classList.remove('show-menu');
});

// Appearance (Light and Dark mode)
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

moon.addEventListener('click', function () {
  container.classList.add('dark');
  moon.style.display = 'none';
  sun.style.display = 'block';
});

sun.addEventListener('click', function () {
  container.style.transition = '0.5s ease-in';
  container.classList.remove('dark');
  moon.style.display = 'block';
  sun.style.display = 'none';
});
