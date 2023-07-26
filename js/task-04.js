// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

//  1 variant

// const counter = {
//     counterValue: 0,
//     increment() {
//         this.counterValue += 1;
//     },
//     decrement() {
//         this.counterValue -= 1;
//     },
// };

// const incrementBtn = document.querySelector('[data-action="increment"]');
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const valueEl = document.querySelector('#value');


// incrementBtn.addEventListener('click', function () {
//     counter.increment();
//     valueEl.textContent = counter.counterValue;
// });

// decrementBtn.addEventListener('click', function () {
//     counter.decrement();
//     valueEl.textContent = counter.counterValue;
// });



// 2 variant

let counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

const onIncrementBtnClick = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};
    
const onDecrementBtnClick = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click',onDecrementBtnClick);


