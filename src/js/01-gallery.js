// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery")

const markup = createImgMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onGalleryImgClick)

function createImgMarkup(galleryItems) { 

    return galleryItems.reduce((acc, { preview, original, description } ) => {return acc + `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
 </a> ` }, '')


}

var lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
       
    } );

function onGalleryImgClick(e) { 
    e.preventDefault();
    
}