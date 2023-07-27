// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  body: document.querySelector('body'),
  textColor: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color')
};

elements.btnChangeColor.addEventListener('click', handlerChangeColor);

function handlerChangeColor() {
  elements.body.style.backgroundColor = getRandomHexColor();
  elements.textColor.textContent = `${getRandomHexColor()}`;
}
