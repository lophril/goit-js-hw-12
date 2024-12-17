import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from './js/pixibay';
import { createMarkup } from './js/render-functions';

const formSearch = document.querySelector('.js-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.btn-load');

let currentPage = 1;
let inputValue = '';
let totalHits = 0;

loader.style.display = 'none';
loadMoreBtn.style.display = 'none';

formSearch.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();
  listImages.innerHTML = '';
  currentPage = 1;
  loader.style.display = 'block';
  loadMoreBtn.style.display = 'none';

  inputValue = event.target.elements.search.value.trim();
  if (!inputValue) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid search query.',
    });
    loader.style.display = 'none';
    return;
  }

  try {
    const data = await fetchImages(inputValue, currentPage);
    totalHits = data.totalHits;

    if (!data.hits.length) {
      iziToast.error({
        title: 'Error',
        message: 'No images match your query. Try again!'
      });
    } else {
      renderImages(data.hits);
      loadMoreBtn.style.display = "block";
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
    });
  } finally {
    loader.style.display = 'none';
  }
}

async function onLoadMore() {
  loader.style.display = 'block';
  currentPage += 1;

  try {
    const data = await fetchImages(inputValue, currentPage);
    renderImages(data.hits);

    if (currentPage * 15 >= totalHits) {
      loadMoreBtn.style.display = 'none';
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results."
      });
    }

    smoothScroll();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
    });
  } finally {
    loader.style.display = 'none';
  }
}

function renderImages(images) {
  listImages.insertAdjacentHTML('beforeend', createMarkup(images));

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

function smoothScroll() {
  const { height: cardHeight } = listImages.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}