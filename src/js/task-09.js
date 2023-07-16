function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.body;

const changeColor = () => {
  widgetColor.textContent = getRandomHexColor();
  body.style.backgroundColor = widgetColor.textContent;
}

changeColorBtn.addEventListener('click', changeColor);