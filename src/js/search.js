import debounce from 'lodash.debounce';
import { search } from './api';
import { renderList, renderTrending, getType} from './filmList';
import { renderPaginator } from './pagination';
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
  const type = getType();
  loader.classList.toggle('visually-hidden');
  if(page>500){
   showQueryError();
  };
  const { total_pages, results } = await search({ query, page, type });
  if (results.length === 0) { 
    renderTrending();
    showQueryError();
  } else {
    paginator.dataset.pages = total_pages;
    renderList({list:results, type} );
    renderPaginator(page, total_pages);
    loader.classList.toggle('visually-hidden');
  }
}
function showQueryError(){
  searchForm.firstElementChild.focus();
  loader.classList.toggle('visually-hidden');
  if (error.classList.contains('visually-hidden')) error.classList.remove('visually-hidden');
  return;
}