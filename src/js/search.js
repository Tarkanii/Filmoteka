import debounce from 'lodash.debounce';
import { search } from './api';
import { renderList, renderTrending, getType } from './filmList';
import { renderPaginator, getTotalPages } from './pagination';
const error = document.querySelector('.error');
const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader-backdrop');
const paginator = document.querySelector('.paginator');
searchForm.addEventListener('submit', e => {
  e.preventDefault();
});
searchForm.addEventListener('input', () => {
  if (!error.classList.contains('visually-hidden')) {
    error.classList.add('visually-hidden');
  }
});
searchForm.addEventListener(
  'input',
  debounce(async e => {
    const query = e.target.value;
    if (!query) {
      renderTrending();
      return;
    }
    renderSearch({ query });
  }, 500),
);

export async function renderSearch({ query, page = 1 }) {
  if (loader.classList.contains('visually-hidden')) loader.classList.remove('visually-hidden');
  if (!/[a-z0-9]/i.test(query)) {
    renderTrending();
    showQueryError();
    return;
  }
  const type = getType();
  try {
    const { total_pages, results } = await search({ query, page, type });
    loader.classList.toggle('visually-hidden');
    if (results.length === 0) {
      renderTrending();
      showQueryError();
    } else {
      paginator.dataset.pages = getTotalPages(total_pages);
      renderList({ list: results, type });
      renderPaginator(page, getTotalPages(total_pages));
    }
    if (!loader.classList.contains('visually-hidden')) loader.classList.add('visually-hidden');
  } catch (error) {
    if (!loader.classList.contains('visually-hidden')) loader.classList.add('visually-hidden');
    console.log(error.message);
  }
}
function showQueryError() {
  searchForm.firstElementChild.focus();
  if (!loader.classList.contains('visually-hidden')) loader.classList.add('visually-hidden');
  if (error.classList.contains('visually-hidden')) error.classList.remove('visually-hidden');
  return;
}
