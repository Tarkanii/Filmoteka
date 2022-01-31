import { chooseCurrentButton, storageRender } from './localstorage';
import { renderTrending } from './filmList';
import { renderSearch } from './search';

const homeBtn = document.querySelector('.home');
const libraryBtn = document.querySelector('.library');
const header = document.querySelector('header');
const libraryBtns = document.querySelector('.library-buttons');
const searchForm = document.querySelector('.form-box');
const headerFeatures = document.querySelector('.header-features');
const nothingAdded = document.querySelector('.nothing-added');
const searchInput = document.querySelector('.search-input');
const paginator = document.querySelector('.paginator');

homeBtn.addEventListener('click', e => {
  document.querySelector("head>title").innerHTML = "Home";
  libraryBtn.disabled = false;
  toggleBtn(e);
  if (!nothingAdded.classList.contains('visually-hidden'))
    nothingAdded.classList.add('visually-hidden');
  const query = searchInput.value;
  if (query.length === 0) renderTrending();
  else if (query.length > 0) renderSearch({ query });
});

libraryBtn.addEventListener('click', e => {
  document.querySelector("head>title").innerHTML = "Library";
  homeBtn.disabled = false;
  toggleBtn(e);
  chooseCurrentButton();
  storageRender('movie');
  paginator.innerHTML = '';
  if (!paginator.classList.contains('visually-hidden')) paginator.classList.add('visually-hidden');
});

function toggleBtn(e) {
  e.target.disabled = true;
  toggleHeader();
  chooseHeaderType();
  homeBtn.classList.toggle('current');
  libraryBtn.classList.toggle('current');
}

function toggleHeader() {
  if (header.classList.contains('home-page')) {
    header.classList.remove('home-page');
    header.classList.add('library-page');
  } else if (header.classList.contains('library-page')) {
    header.classList.remove('library-page');
    header.classList.add('home-page');
  }
}

function chooseHeaderType() {
  if (header.classList.contains('library-page')) {
    headerFeatures.classList.toggle('library');
    searchForm.classList.toggle('visually-hidden');
    libraryBtns.classList.toggle('visually-hidden');
  } else if (header.classList.contains('home-page')) {
    if (
      libraryBtns.classList.contains('visually-hidden') ||
      !searchForm.classList.contains('visually-hidden')
    )
      return;
    headerFeatures.classList.toggle('library');
    searchForm.classList.toggle('visually-hidden');
    libraryBtns.classList.toggle('visually-hidden');
  }
}
