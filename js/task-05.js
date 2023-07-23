// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const inputValue = (event) => {
    if (inputEl.value !== '') {
        outputEl.textContent = event.currentTarget.value;
    } else {
        outputEl.textContent = 'Anonymous'
    }
}

inputEl.addEventListener("input", inputValue);



// variant 2
// const inputEl = document.querySelector('#name-input');
// const outputEl = document.querySelector('#name-output');

// const inputValue = (event) => {
//     inputEl.value !== '' ?
//         outputEl.textContent = event.currentTarget.value
//         : outputEl.textContent = 'Anonymous';
// }

// inputEl.addEventListener("input", inputValue);