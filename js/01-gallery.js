import { galleryItems } from "./gallery-items.js";
// Change code below this line
//

// -------------------------- ПЕРВЫЙ СПОСОБ

// const galleryEl = document.querySelector(".gallery");
// const imageCardsMarkup = createImageCardsMarkup(galleryItems);

// galleryEl.insertAdjacentHTML("beforeend", imageCardsMarkup);
// galleryEl.addEventListener("click", onImageClick);

// function createImageCardsMarkup(images) {
//   return images
//     .map(
//       ({ preview, original, description }) =>
//         `<div class="gallery__item">
//           <a class="gallery__link" href=${original}>
//             <img
//               class="gallery__image"
//               src=${preview}
//               data-source=${original}
//               alt=${description}
//             />
//           </a>
//         </div>`
//     )
//     .join("");
// }

// function onImageClick(evt) {
//   evt.preventDefault();

//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }

//   const dataSource = evt.target.getAttribute("data-source");
//   const description = evt.target.getAttribute("alt");
//   const instance = basicLightbox.create(
//     `<img src="${dataSource}" alt ="${description}">`
//   );

//   instance.show();

//   document.addEventListener("keydown", onEscKeyPress);

//   function onEscKeyPress(evt) {
//     if (instance.show && evt.code === "Escape") {
//       instance.close();
//       window.removeEventListener("keydown", onEscKeyPress);
//     }
//   }
// }

// -------------------------- ВТОРОЙ СПОСОБ

const galleryEl = document.querySelector(".gallery");
const imageCardsMarkup = createImageCardsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", imageCardsMarkup);
galleryEl.addEventListener("click", onImageClick);

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

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const dataSource = evt.target.getAttribute("data-source");
  const description = evt.target.getAttribute("alt");

  const instance = basicLightbox.create(
    `<img src="${dataSource}" alt ="${description}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  function onEscKeyPress(evt) {
    console.log(evt.code);
    if (evt.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
