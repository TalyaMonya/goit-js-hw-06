// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");


function onBlurBorderInput(event) {
const inputDataLength = Number(input.getAttribute('data-length'));
const inputLength = event.currentTarget.value.length;
    
    if (inputLength === inputDataLength) {
        console.log(inputDataLength);
        console.log(inputLength);
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        console.log(inputDataLength);
        console.log(inputLength);
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
};


input.addEventListener('blur', onBlurBorderInput);