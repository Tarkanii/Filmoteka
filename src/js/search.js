import debounce from 'lodash.debounce';
import { search } from './api';
import {renderList, renderTrending} from "./filmList"
const error = document.querySelector('.error');
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener("submit",(e)=>{
  e.preventDefault();
})
searchForm.addEventListener(
  'input',
  debounce(async e => {
    const query = e.target.value;
    if(!query ){
    renderTrending({});
      return
    };
    renderSearch({query});
  }, 500)
);

export async function renderSearch({query,page=1}){
  const { total_pages, results } = await search({query,page});
  if (results.length === 0) {
    error.classList.toggle('visually-hidden');
    setTimeout(() => {
      error.classList.toggle('visually-hidden');
    },3000);
  }else{
    renderList({list:results});
  }
}