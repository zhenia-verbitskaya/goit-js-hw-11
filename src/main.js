import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createMarkup from "./js/render-functions";
import getPictures from "./js/pixabay-api";

const formSearch = document.querySelector(".search");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

loader.style.display = "none";
formSearch.addEventListener("submit", onSearch);

function onSearch(event) {
  event.preventDefault();
  gallery.innerHTML = "";
  loader.style.display = "block";

  const inputValue = event.target.elements.search.value;

  getPictures(inputValue)
    .then(data => {
      loader.style.display = "none";

      if (!data.hits.length) {
        iziToast.error({
          title: "Error",
          message: "Sorry, there are no images matching your search query. Please try again!",
        });
      }

      gallery.innerHTML = ("beforeend", createMarkup(data.hits));

      const refreshPage = new SimpleLightbox(".gallery a", {
        captions: true,
        captionsData: "alt",
        captionDelay: 250,
      });
      refreshPage.refresh();

      formSearch.reset();
    })
    .catch((err) => {
      loader.style.display = "none";
      console.log(err);
    });
}
