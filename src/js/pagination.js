import { renderTrending } from './filmList';
import { renderSearch } from './search';

const paginator = document.querySelector('.paginator');
window.addEventListener('resize', e => {
  const viewportWidth = e.target.innerWidth;
  if (viewportWidth < 768) {
    if (paginator.classList.contains('mobile')) return;
    paginator.classList.toggle('mobile');
    const currentPage = Number(paginator.querySelector('.current').innerHTML);
    const totalPages = Number(paginator.dataset.pages);
    renderPaginator(currentPage, totalPages);
  }
  if (viewportWidth > 768 && paginator.classList.contains('mobile')) {
    paginator.classList.toggle('mobile');
    const currentPage = Number(paginator.querySelector('.current').innerHTML);
    const totalPages = Number(paginator.dataset.pages);
    renderPaginator(currentPage, totalPages);
  }
});

paginator.addEventListener('click', e => {
  let target = '';
  if (e.target.nodeName === 'use') {
    target = e.target.parentNode.parentNode;
  } else if (e.target.nodeName === 'svg') {
    target = e.target.parentNode;
  } else if (e.target.nodeName === 'BUTTON') {
    target = e.target;
  }
  if (!target.classList.contains('paginator-button')) return;
  if (target.disabled) return;
  const header = document.querySelector('header');
  const searchInput = document.querySelector('.search-input');
  const currentPage = Number(paginator.querySelector('.current').innerHTML);
  if (target.classList.contains('previous')) {
    if (searchInput.value.length === 0) renderTrending({ page: currentPage - 1 });
    else renderSearch({ query: searchInput.value, page: currentPage - 1 });
  } else if (target.classList.contains('next')) {
    if (searchInput.value.length === 0) renderTrending({ page: currentPage + 1 });
    else renderSearch({ query: searchInput.value, page: currentPage + 1 });
  } else if (target.classList.contains('number')) {
    if (searchInput.value.length === 0) renderTrending({ page: Number(target.innerHTML) });
    else renderSearch({ query: searchInput.value, page: Number(target.innerHTML) });
  }
  header.scrollIntoView({ block: 'start', behavior: 'smooth' });
});

export function renderPaginator(current, totalPages) {
  if (totalPages === 1) {
    if (!paginator.classList.contains('visually-hidden'))
      paginator.classList.add('visually-hidden');
    paginator.innerHTML = '';
    return;
  }
  if (paginator.classList.contains('visually-hidden'))
    paginator.classList.remove('visually-hidden');
  let markup = '';
  if (paginator.classList.contains('mobile')) {
    markup = createMobilePaginator(current, totalPages);
  } else {
    if (totalPages <= 7) {
      markup = createMiddleSizePaginator(current, totalPages);
    } else if (totalPages > 7) {
      markup = createLargeSizePaginator(current, totalPages);
    }
  }
  paginator.innerHTML = '';
  paginator.insertAdjacentHTML('beforeend', markup);
}

function createMobilePaginator(curr, totalPages) {
  if (totalPages <= 5) {
    return createMiddleSizePaginator(curr, totalPages);
  } else if (1 + 1 >= curr && curr >= 1) {
    return createStartMobileButtons(curr, totalPages);
  } else if (totalPages - 2 <= curr && curr <= totalPages) {
    return createLastMobileButtons(curr, totalPages);
  } else if (curr - 1 > 1 && curr + 1 <= totalPages) {
    return `<ul class="paginator-buttons">
    <li class="paginator-item "><button class="paginator-button previous" ${
      curr === 1 ? 'disabled' : ''
    }><svg class="left-arrow"><use href="/symbol-defs.4fba6ab5.svg#icon-arrow-left" class="svg"></use></svg></button></li>
    <li class="paginator-item"><button class="paginator-button number ">${curr - 1}</button></li>
    <li class="paginator-item"><button class="paginator-button number current " disabled>${curr}</button></li>
    <li class="paginator-item"><button class="paginator-button number ">${curr + 1}</button></li>
    <li class="paginator-item"><button class="paginator-button next" ${
      curr === totalPages ? 'disabled' : ''
    }><svg class="right-arrow"><use href="/symbol-defs.4fba6ab5.svg#icon-arrow-left" class="svg"></use></svg></button></li>
    </ul>`;
  }
}

function createStartMobileButtons(current, totalPages) {
  const arrOfMarkup = [];
  for (let i = 1; i <= 3; i++) {
    const buttonMarkup = `<li class="paginator-item"><button class="paginator-button number ${
      i === current ? 'current' : ''
    }"${
      i === current ? 'disabled' : ''
    }>${i}</button></li>`;
    arrOfMarkup.push(buttonMarkup);
  }
  const markup = `<ul class="paginator-buttons"><li class="paginator-item"><button class="paginator-button previous" ${
    current === 1 ? 'disabled' : ''
  }><svg class="left-arrow"><use href="/symbol-defs.4fba6ab5.svg#icon-arrow-left" class="svg"></use></svg></button></li>${arrOfMarkup.join(
    '',
  )}
  <li class="paginator-item"><button class="paginator-button next"  ${
    current === totalPages ? 'disabled' : ''
  }><svg class="right-arrow"><use href="/symbol-defs.4fba6ab5.svg#icon-arrow-left" class="svg"></use></svg></button></li></ul>`;
  return markup;
}
function createLastMobileButtons(current, totalPages) {
  const arrOfMarkup = [];
  for (let i = curr; i <= totalPages; i++) {
    const buttonMarkup = `<li class="paginator-item"><button class="paginator-button number ${
      i === current ? 'current' : ''
    }" ${
      i === current ? 'disabled' : ''
    }>${i}</button></li>`;
    arrOfMarkup.push(buttonMarkup);
  }
  const markup = `<ul class="paginator-buttons"><li class="paginator-item"><button class="paginator-button previous" ${
    current === 1 ? 'disabled' : ''
  }><svg class="left-arrow"><use href="/symbol-defs.4fba6ab5.svg#icon-arrow-left" class="svg"></use></svg></button></li>${arrOfMarkup.join(
    '',
  )}
  <li class="paginator-item"><button class="paginator-button next"  ${
    current === totalPages ? 'disabled' : ''
  }><svg class="right-arrow"><use href="/symbol-defs.4fba6ab5.svg#icon-arrow-left" class="svg"></use></svg></button></li></ul>`;
  return markup;
}

function createMiddleSizePaginator(current, totalPages) {
  const arrOfMarkup = [];
  for (let i = 1; i <= totalPages; i++) {
    const buttonMarkup = `<li class="paginator-item"><button class="paginator-button number ${
      i === current ? 'current' : ''
    }"${
      i === current ? 'disabled' : ''
    }>${i}</button></li>`;
    arrOfMarkup.push(buttonMarkup);
  }
  const markup = `<ul class="paginator-buttons"><li class="paginator-item"><button class="paginator-button previous" ${
    current === 1 ? 'disabled' : ''
  }><svg class="left-arrow"><use href="/symbol-defs.4fba6ab5.svg#icon-arrow-left" class="svg"></use></svg></button></li>${arrOfMarkup.join(
    '',
  )}
  <li class="paginator-item"><button class="paginator-button next"  ${
    current === totalPages ? 'disabled' : ''
  }><svg class="right-arrow"><use href="/symbol-defs.4fba6ab5.svg#icon-arrow-left" class="svg"></use></svg></button></li></ul>`;
  return markup;
}

function createLargeSizePaginator(current, totalPages) {
  return `<ul class="paginator-buttons">
<li class="paginator-item "><button class="paginator-button previous" ${
    current === 1 ? 'disabled' : ''
  }><svg class="left-arrow"><use href="/symbol-defs.4fba6ab5.svg#icon-arrow-left" class="svg"></use></svg></button></li>
<li class="paginator-item ${
    current === 1 ? 'visually-hidden' : ''
  }"><button class="paginator-button number ">1</button></li>
<li class="paginator-item first-decor ${
    current - 1 <= 3 ? 'visually-hidden' : ''
  }"><svg class="dots"><use href="/symbol-defs.4fba6ab5.svg#dots" class="svg"></use></svg></li>
<li class="paginator-item ${
    current - 2 <= 1 ? 'visually-hidden' : ''
  }"><button class="paginator-button number ">${current - 2}</button></li>
<li class="paginator-item ${
    current - 1 <= 1 ? 'visually-hidden' : ''
  }"><button class="paginator-button number ">${current - 1}</button></li>
<li class="paginator-item"><button class="paginator-button number current " disabled>${current}</button></li>
<li class="paginator-item ${
    current + 1 >= totalPages ? 'visually-hidden' : ''
  }"><button class="paginator-button number ">${current + 1}</button></li>
<li class="paginator-item ${
    current + 2 >= totalPages ? 'visually-hidden' : ''
  }"><button class="paginator-button number ">${current + 2}</button></li>
<li class="paginator-item second-decor ${
    totalPages - current <= 3 ? 'visually-hidden' : ''
  }"><svg class="dots"><use href="/symbol-defs.4fba6ab5.svg#dots" class="svg"></use></svg></li>
<li class="paginator-item ${
    current == totalPages ? 'visually-hidden' : ''
  }"><button class="paginator-button number ">${totalPages}</button></li>
<li class="paginator-item"><button class="paginator-button next" ${
    current === totalPages ? 'disabled' : ''
  }><svg class="right-arrow"><use href="/symbol-defs.4fba6ab5.svg#icon-arrow-left" class="svg"></use></svg></button></li>
</ul>`;
}
