const homeBtn = document.querySelector('.home');
const libraryBtn = document.querySelector('.library');
const body = document.querySelector('body');
const libraryBtns = document.querySelector('.library-buttons');
const heroForm = document.querySelector('.form-box');
const heroContainer = document.querySelector(".hero")
Array.from(document.querySelectorAll('button.current')).map(item => (item.disabled = true));

const chooseHeroType = () => {
  if (body.classList.contains('library-page')) {
    heroContainer.classList.toggle("library");
    heroForm.classList.toggle('visually-hidden');
    libraryBtns.classList.toggle('visually-hidden');
  } else if (body.classList.contains('home-page')) {
    if (
      libraryBtns.classList.contains('visually-hidden') ||
      !heroForm.classList.contains('visually-hidden')
    )
      return;
    heroContainer.classList.toggle("library");
    heroForm.classList.toggle('visually-hidden');
    libraryBtns.classList.toggle('visually-hidden');
  }
};
const toggleBody = () => {
  if (body.classList.contains('home-page')) {
    body.classList.remove('home-page');
    body.classList.add('library-page');
  } else if (body.classList.contains('library-page')) {
    body.classList.remove('library-page');
    body.classList.add('home-page');
  }
};

const toggleBtn = e => {
  e.target.disabled = true;
  toggleBody();
  chooseHeroType();
  homeBtn.classList.toggle('current');
  libraryBtn.classList.toggle('current');
};

homeBtn.addEventListener('click', e => {
  libraryBtn.disabled = false;
  toggleBtn(e);
});

libraryBtn.addEventListener('click', e => {
  homeBtn.disabled = false;
  toggleBtn(e);
});
