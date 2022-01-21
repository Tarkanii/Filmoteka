import debounce from 'lodash.debounce';
import { search } from './api';
import { renderList, renderTrending } from './filmList';
import { renderPaginator } from './pagination';
const error = document.querySelector('.error');
const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader-backdrop');
const paginator = document.querySelector(".paginator");
searchForm.addEventListener('submit', e => {
  e.preventDefault();
});
searchForm.addEventListener(
  'input',
  debounce(async e => {
    const query = e.target.value;
    if (!query) {
      renderTrending({});
      return;
    }
    renderSearch({ query });
  }, 500),
);

export async function renderSearch({ query, page = 1 }) {
  loader.classList.toggle('visually-hidden');
  const { total_pages, results } = await search({ query, page }); 
  if (results.length === 0) {
    error.classList.toggle('visually-hidden');
    loader.classList.toggle('visually-hidden');
    setTimeout(() => {
      error.classList.toggle('visually-hidden');
    }, 3000);
  } else {
    paginator.dataset.pages = total_pages;
    renderList({ list: results });
    renderPaginator(page, total_pages);
    loader.classList.toggle('visually-hidden');
  }
}
