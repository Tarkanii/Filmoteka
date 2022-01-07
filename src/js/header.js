const homeBtn = document.querySelector('.home');
const libraryBtn = document.querySelector('.library');
const body = document.querySelector('body');

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
