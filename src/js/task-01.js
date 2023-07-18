
const categoriesWithId = document.querySelector('#categories');
const categoriesLength = categoriesWithId.children.length;

console.log(`Number of categories: ${categoriesLength}`);


const categoriesItem = document.querySelectorAll('.item');
const categoryEl = categoriesItem.forEach(item => {
    console.log(`Catogry: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
