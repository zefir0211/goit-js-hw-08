// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const itemContainer = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}" onclick="return false;">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join("");
itemContainer.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });