// DOM Elements

const starclanButton = document.getElementById('starclan');
const ivyclanButton = document.getElementById('ivyclan');
const wildclanButton = document.getElementById('wildclan');
const rushclanButton = document.getElementById('rushclan');
const jaggedclanButton = document.getElementById('jaggedclan');
const outsidersButton = document.getElementById('outsiders');
const darkforestButton = document.getElementById('darkforest');
const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}

// Button Event Handlers

starclanButton.onclick = () => {
  if  (body.classList.contains('ivyclan')) {
  body.classList.remove('ivyclan');
  body.classList.add('starclan');
  localStorage.setItem('theme', 'starclan');
  } else if (body.classList.contains('wildclan')) {
  body.classList.remove('wildclan');
  body.classList.add('starclan');
  localStorage.setItem('theme', 'starclan');
  } else if (body.classList.contains('rushclan')) {
  body.classList.remove('rushclan');
  body.classList.add('starclan');
  localStorage.setItem('theme', 'starclan');
  } else if (body.classList.contains('jaggedclan')) {
  body.classList.remove('jaggedclan');
  body.classList.add('starclan');
  localStorage.setItem('theme', 'starclan');
  } else if (body.classList.contains('outsiders')) {
  body.classList.remove('outsiders');
  body.classList.add('starclan');
  localStorage.setItem('theme', 'starclan');
  } else {
  body.classList.remove('darkforest');
  body.classList.add('starclan');
  localStorage.setItem('theme', 'starclan');
}
}

ivyclanButton.onclick = () => {
  if (body.classList.contains('starclan')) {
  body.classList.remove('starclan');
  body.classList.add('ivyclan');
  localStorage.setItem('theme', 'ivyclan');
  oneko.innerHTML="NekoType=\"socks\"";
  } else if (body.classList.contains('wildclan')) {
  body.classList.remove('wildclan');
  body.classList.add('ivyclan');
  localStorage.setItem('theme', 'ivyclan');
  } else if (body.classList.contains('rushclan')) {
  body.classList.remove('rushclan');
  body.classList.add('ivyclan');
  localStorage.setItem('theme', 'ivyclan');
  } else if (body.classList.contains('jaggedclan')) {
  body.classList.remove('jaggedclan');
  body.classList.add('ivyclan');
  localStorage.setItem('theme', 'ivyclan');
  } else if (body.classList.contains('outsiders')) {
  body.classList.remove('outsiders');
  body.classList.add('ivyclan');
  localStorage.setItem('theme', 'ivyclan');
  } else {
  body.classList.remove('darkforest');
  body.classList.add('ivyclan');
  localStorage.setItem('theme', 'ivyclan');
}
}

wildclanButton.onclick = () => {
  if (body.classList.contains('starclan')) {
  body.classList.remove('starclan');
  body.classList.add('wildclan');
  localStorage.setItem('theme', 'wildclan');
  } else if (body.classList.contains('ivyclan')) {
  body.classList.remove('ivyclan');
  body.classList.add('wildclan');
  localStorage.setItem('theme', 'wildclan');
  } else if (body.classList.contains('rushclan')) {
  body.classList.remove('rushclan');
  body.classList.add('wildclan');
  localStorage.setItem('theme', 'wildclan');
  } else if (body.classList.contains('jaggedclan')) {
  body.classList.remove('jaggedclan');
  body.classList.add('wildclan');
  localStorage.setItem('theme', 'wildclan');
  } else if (body.classList.contains('outsiders')) {
  body.classList.remove('outsiders');
  body.classList.add('wildclan');
  localStorage.setItem('theme', 'wildclan');
  } else {
  body.classList.remove('darkforest');
  body.classList.add('wildclan');
  localStorage.setItem('theme', 'wildclan');
}
}

rushclanButton.onclick = () => {
  if (body.classList.contains('starclan')) {
  body.classList.remove('starclan');
  body.classList.add('rushclan');
  localStorage.setItem('theme', 'rushclan');
  } else if (body.classList.contains('ivyclan')) {
  body.classList.remove('ivyclan');
  body.classList.add('rushclan');
  localStorage.setItem('theme', 'rushclan');
  } else if (body.classList.contains('wildclan')) {
  body.classList.remove('wildclan');
  body.classList.add('rushclan');
  localStorage.setItem('theme', 'rushclan');
  } else if (body.classList.contains('jaggedclan')) {
  body.classList.remove('jaggedclan');
  body.classList.add('rushclan');
  localStorage.setItem('theme', 'rushclan');
  } else if (body.classList.contains('outsiders')) {
  body.classList.remove('outsiders');
  body.classList.add('rushclan');
  localStorage.setItem('theme', 'rushclan');
  } else if (body.classList.contains('darkforest')) {
  body.classList.remove('darkforest');
  body.classList.add('rushclan');
  localStorage.setItem('theme', 'rushclan');
}
}

jaggedclanButton.onclick = () => {
  if (body.classList.contains('starclan')) {
  body.classList.remove('starclan');
  body.classList.add('jaggedclan');
  localStorage.setItem('theme', 'jaggedclan');
  } else if (body.classList.contains('ivyclan')) {
  body.classList.remove('ivyclan');
  body.classList.add('jaggedclan');
  localStorage.setItem('theme', 'jaggedclan');
  } else if (body.classList.contains('wildclan')) {
  body.classList.remove('wildclan');
  body.classList.add('jaggedclan');
  localStorage.setItem('theme', 'jaggedclan');
  } else if (body.classList.contains('rushclan')) {
  body.classList.remove('rushclan');
  body.classList.add('jaggedclan');
  localStorage.setItem('theme', 'jaggedclan');
  } else if (body.classList.contains('outsiders')) {
  body.classList.remove('outsiders');
  body.classList.add('jaggedclan');
  localStorage.setItem('theme', 'jaggedclan');
  } else {
  body.classList.remove('darkforest');
  body.classList.add('jaggedclan');
  localStorage.setItem('theme', 'jaggedclan');
}
}

outsidersButton.onclick = () => {
  if (body.classList.contains('starclan')) {
  body.classList.remove('starclan');
  body.classList.add('outsiders');
  localStorage.setItem('theme', 'outsiders');
  } else if (body.classList.contains('ivyclan')) {
  body.classList.remove('ivyclan');
  body.classList.add('outsiders');
  localStorage.setItem('theme', 'outsiders');
  } else if (body.classList.contains('wildclan')) {
  body.classList.remove('wildclan');
  body.classList.add('outsiders');
  localStorage.setItem('theme', 'outsiders');
  } else if (body.classList.contains('rushclan')) {
  body.classList.remove('rushclan');
  body.classList.add('outsiders');
  localStorage.setItem('theme', 'outsiders');
  } else if (body.classList.contains('jaggedclan')) {
  body.classList.remove('jaggedclan');
  body.classList.add('outsiders');
  localStorage.setItem('theme', 'outsiders');
  } else {
  body.classList.remove('darkforest');
  body.classList.add('outsiders');
  localStorage.setItem('theme', 'outsiders');
}
}

darkforestButton.onclick = () => {
  if (body.classList.contains('starclan')) {
  body.classList.remove('starclan');
  body.classList.add('darkforest');
  localStorage.setItem('theme', 'darkforest');
  } else if (body.classList.contains('ivyclan')) {
  body.classList.remove('ivyclan');
  body.classList.add('darkforest');
  localStorage.setItem('theme', 'darkforest');
  } else if (body.classList.contains('wildclan')) {
  body.classList.remove('wildclan');
  body.classList.add('darkforest');
  localStorage.setItem('theme', 'darkforest');
  } else if (body.classList.contains('rushclan')) {
  body.classList.remove('rushclan');
  body.classList.add('darkforest');
  localStorage.setItem('theme', 'darkforest');
  } else if (body.classList.contains('jaggedclan')) {
  body.classList.remove('jaggedclan');
  body.classList.add('darkforest');
  localStorage.setItem('theme', 'darkforest');
  } else {
  body.classList.remove('outsiders');
  body.classList.add('darkforest');
  localStorage.setItem('theme', 'darkforest');
}
}
