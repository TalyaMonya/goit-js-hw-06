const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
let listEl = document.createElement('li');
listEl.classList.add('item');
listEl.textContent = option;

return listEl;
})

listIngredients.append(...elements);








