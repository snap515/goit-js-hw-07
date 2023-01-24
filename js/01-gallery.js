import { galleryItems } from "./gallery-items.js";
// Change code below this line
//
const galleryEl = document.querySelector(".gallery");
const imageCardsMarkup = createImageCardsMarkup(galleryItems);

function createImageCardsMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href=${original}>
            <img
              class="gallery__image"
              src=${preview}
              data-source=${original}
              alt=${description}
            />
          </a>
        </div>`
    )
    .join("");
}

galleryEl.insertAdjacentHTML("beforeend", imageCardsMarkup);

galleryEl.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  const dataSource = evt.target.getAttribute("data-source");
  const description = evt.target.getAttribute("alt");
  const instance = basicLightbox.create(
    `<img src="${dataSource}" alt ="${description}">`
  );

  instance.show();

  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(evt) {
    if (instance.show && evt.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscKeyPress);
    }
  }
}
