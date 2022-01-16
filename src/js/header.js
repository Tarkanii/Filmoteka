import { chooseCurrentButton, storageRender } from './localstorage';
import { renderTrending } from './filmList';
const homeBtn = document.querySelector('.home');
const libraryBtn = document.querySelector('.library');
const body = document.querySelector('body');
const libraryBtns = document.querySelector('.library-buttons');
const heroForm = document.querySelector('.form-box');
const heroContainer = document.querySelector('.hero');
const nothingAdded = document.querySelector('.nothing-added');

homeBtn.addEventListener('click', e => {
  libraryBtn.disabled = false;
  toggleBtn(e);
  renderTrending({});
  if (!nothingAdded.classList.contains('visaully-hidden'))
    nothingAdded.classList.add('visually-hidden');
});

libraryBtn.addEventListener('click', e => {
  homeBtn.disabled = false;
  toggleBtn(e);
  chooseCurrentButton();
storageRender("movie");
});

function toggleBtn(e) {
  e.target.disabled = true;
  toggleBody();
  chooseHeroType();
  homeBtn.classList.toggle('current');
  libraryBtn.classList.toggle('current');
}

function toggleBody() {
  if (body.classList.contains('home-page')) {
    body.classList.remove('home-page');
    body.classList.add('library-page');
  } else if (body.classList.contains('library-page')) {
    body.classList.remove('library-page');
    body.classList.add('home-page');
  }
}

function chooseHeroType() {
  if (body.classList.contains('library-page')) {
    heroContainer.classList.toggle('library');
    heroForm.classList.toggle('visually-hidden');
    libraryBtns.classList.toggle('visually-hidden');
  } else if (body.classList.contains('home-page')) {
    if (
      libraryBtns.classList.contains('visually-hidden') ||
      !heroForm.classList.contains('visually-hidden')
    )
      return;
    heroContainer.classList.toggle('library');
    heroForm.classList.toggle('visually-hidden');
    libraryBtns.classList.toggle('visually-hidden');
  }
}
