const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

const makeGalleryImg = ({url, alt}) => `<li><img src="${url}" alt="${alt}"></li>`;

const makeGallery = images.map(makeGalleryImg).join('');

gallery.insertAdjacentHTML('beforeend', makeGallery);


// 2 variant

// const makeGalleryEl = (arr) => {
//   return arr.map(({ url, alt }) => {
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     img.src = url;
//     img.alt = alt;
//     img.width = l60;
//     li.append(img);
//     return li;
//   });
// };

// const galleryMarkup = makeGalleryEl(images);
// console.log(galleryMarkup);

// gallery.append(...galleryMarkup);




