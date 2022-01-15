import { fetchDetails } from './api';
import { genreLengthController } from './filmList';
import { storageOperation,storageContains } from './localStorage';
console.log(storageContains("524434","movie","watched"));
const body = document.querySelector('body');
const filmList = document.querySelector('.film-list');
const backdrop = document.querySelector('.backdrop');

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

filmList.addEventListener('click', async ({ target }) => {
  if (target.nodeName !== 'IMG') return;
  body.style.overflow = 'hidden';
  await renderModal(target.dataset.id,target.dataset.type);
  backdrop.classList.toggle('visually-hidden');
  const closeButton = document.querySelector('.close-button');
  closeButton?.addEventListener('click', () => {
    if (!backdrop.classList.contains('visually-hidden')) closeModal();
  });
const storageButtons = document.querySelector(".modal__buttons")
storageButtons.addEventListener("click",storageOperation)
});

document.addEventListener('keydown', ({ key }) => {
  if (key !== 'Escape') return;
  if (!backdrop.classList.contains('visually-hidden')) closeModal();
});
backdrop.addEventListener('click', ({ target }) => {
  if (!target.classList.contains('backdrop')) return;
  if (!backdrop.classList.contains('visually-hidden')) closeModal();
});

function closeModal() {
  body.style.overflow = 'unset';
  backdrop.classList.add('visually-hidden');
  backdrop.innerHTML = '';
}
async function renderModal(id,type) {
  try {
    const movieDetails = await fetchDetails(id,type);
    console.log(movieDetails);
    const markup = createModalMarkup({...movieDetails,type:type});
    backdrop.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err);
  }
}

function createModalMarkup({
  id,
  type,
  poster_path,
  genres,
  original_title,
  title,
  vote_average,
  vote_count,
  popularity,
  overview,
}) {
  const isInWatched = storageContains(String(id),type,"watched");
  const isInQueue=storageContains(String(id),type,"queue");
  return `<div class="modal">
    <button class="close-button">
      <svg class="close-icon">
        <use href="./symbol-defs.4fba6ab5.svg#closeIcon"></use>
      </svg>
    </button>
    <div class="poster-container">
      <img
        src=${poster_path? `${IMG_URL}${poster_path}`:`${IMG_URL}/wjYOUKIIOEklJJ4xbbQVRN6PRly.jpg`}
        alt="poster"
        class="modal-poster"
      />
    </div>
    <div class="modal-info">
      <h2 class="modal-title">${title}</h2>
      <div class="specifications">
        <ul class="keys">
          <li class="key">Vote / Votes</li>
          <li class="key">Popularity</li>
          <li class="key">Original title</li>
          <li class="key">Genres</li>
        </ul>
        <ul class="values">
          <li class="value">
            <span class="movie-rate modal--rate">${vote_average.toFixed(1)}</span> / <span class="modal-votes">${vote_count}</span>
          </li>
          <li class="value">${popularity.toFixed(1)}</li>
          <li class="value title">${original_title}</li>
          <li class="value">${genreLengthController(genres.map(item => item.name),26)}</li>
        </ul>
      </div>
      <h3 class="about-title">ABOUT</h3>
      <p class="movie-description">
      ${overview}
      </p>
      <div class="modal__buttons" data-id=${id} data-type=${type}>
        <button class="modal-button watched ${isInWatched&&"selected"}" >${isInWatched?"remove from watched":"add to watched"}</button>
        <button class="modal-button queue ${isInQueue&&"selected"}">${isInQueue?"remove from queue":"add to queue"}</button>
      </div>
    </div>
  </div>`;
}
