// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  controlsRef: document.querySelector('#controls'),
  inputValueEl: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  box: document.querySelector('#boxes'),
};

ref.box.style.display = 'flex';
ref.box.style.flexWrap = 'wrap';
ref.box.style.alignItems = 'center';
ref.box.style.marginTop = '30px';


ref.btnCreate.addEventListener('click', () => {
  createBoxes(ref.inputValueEl.value);
});



function createBoxes(amount) {
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    
    const div = document.createElement('div');
    
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.marginRight = '25px';
    div.style.marginBottom = '25px';
    div.style.backgroundColor = `${getRandomHexColor()}`;
    
    boxesArr.push(div);
    console.log(div);
    console.log(boxesArr.join(''));
  }
  ref.box.append(...boxesArr);
};


ref.btnDestroy.addEventListener('click', destroyBoxes);


function destroyBoxes() {
  ref.box.innerHTML = '';
};




// Variant 2 функції створення div

// function createBoxes(amount) {
//   const boxesArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     const div = `<div style = " width: ${30 + 10 * i}px; 
//      height: ${ 30 + 10 * i } px;
//      background - color: ${ getRandomHexColor() };
//      margin - right: 30px;
//      margin - bottom: 30px; "></div>`;

//     boxesArr.push(div);
//   }
//  console.log(boxesArr);
//   ref.box.insertAdjacentHTML('beforeend', boxesArr.join(''));
//   console.log(boxesArr.join(''));
// };







