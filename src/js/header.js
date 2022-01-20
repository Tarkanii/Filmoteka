import { chooseCurrentButton, storageRender } from './localstorage';
import { renderTrending } from './filmList';
import { renderSearch } from './search';

const homeBtn = document.querySelector('.home');
const libraryBtn = document.querySelector('.library');
const body = document.querySelector('body');
const libraryBtns = document.querySelector('.library-buttons');
const heroForm = document.querySelector('.form-box');
const heroContainer = document.querySelector('.hero');
const nothingAdded = document.querySelector('.nothing-added');
const searchInput = document.querySelector('.search-input');
const paginator = document.querySelector(".paginator");

homeBtn.addEventListener('click', e => {
  libraryBtn.disabled = false;
  toggleBtn(e);  
  if (!nothingAdded.classList.contains('visually-hidden'))
    nothingAdded.classList.add('visually-hidden');
    const query = searchInput.value;
if(query.length===0)renderTrending({});
else if(query.length>0)renderSearch({query});

});

libraryBtn.addEventListener('click', e => {
  homeBtn.disabled = false;
  toggleBtn(e);
  chooseCurrentButton();
storageRender("movie");
paginator.innerHTML="";
if (!paginator.classList.contains('visually-hidden'))paginator.classList.add("visually-hidden");
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
