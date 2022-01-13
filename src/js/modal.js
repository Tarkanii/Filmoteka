import { fetchMovieDetails } from './api';
const filmList = document.querySelector('.film-list');
const backdrop = document.querySelector('.backdrop');
filmList.addEventListener('click', async ({ target }) => {
  if (target.nodeName !== 'IMG') return;
   
  backdrop.classList.toggle('visually-hidden');
  console.log(target.dataset.id);
  try {
    const movieDetails = await fetchMovieDetails(target.dataset.id);
    console.log(movieDetails);
  } catch (err) {
    console.log(err);
  }
});
document.addEventListener('keydown', ({ key }) => {
  if (key !== 'Escape') return;
  if (!backdrop.classList.contains('visually-hidden')) backdrop.classList.add('visually-hidden');
});
backdrop.addEventListener('click', ({ target }) => {
  if (!target.classList.contains("backdrop")) return;
  if (!backdrop.classList.contains('visually-hidden')) backdrop.classList.add('visually-hidden');
});