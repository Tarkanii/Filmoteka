import { fetchDetails } from './api';
import { createCardMarkup, getType } from './filmList';

export const storageOperation = e => {
  const { target } = e;
  const { id, type } = target.parentNode.dataset;
  if (!target.classList.contains('modal-button')) return;
  if (target.classList.contains('watched') && target.classList.contains('selected')) {
    target.innerHTML = 'add to watched';
    removeFromStorage(id, 'watched');
  } else if (target.classList.contains('watched')) {
    target.innerHTML = 'remove from watched';
    addToStorage({ id, type }, 'watched');
  }
  if (target.classList.contains('queue') && target.classList.contains('selected')) {
    target.innerHTML = 'add to queue';
    removeFromStorage(id, 'queue');
  } else if (target.classList.contains('queue')) {
    target.innerHTML = 'remove from queue';
    addToStorage({ id, type }, 'queue');
  }
  target.classList.toggle('selected');
};

export function storageContains(id, type, arrName) {
  if (arrName === 'watched') {
    const watchedArr = JSON.parse(localStorage.getItem('watched'));
    return Boolean(watchedArr.find(obj => obj.type === type && obj.id === id));
  }
  if (arrName === 'queue') {
    const queueArr = JSON.parse(localStorage.getItem('queue'));
    return Boolean(queueArr.find(obj => obj.type === type && obj.id === id));
  }
}
function addToStorage(item, arrName) {
  if (arrName === 'watched') {
    const watchedArr = JSON.parse(localStorage.getItem('watched'));
    localStorage.setItem('watched', JSON.stringify([item, ...watchedArr]));
  } else if (arrName === 'queue') {
    const queueArr = JSON.parse(localStorage.getItem('queue'));
    localStorage.setItem('queue', JSON.stringify([item, ...queueArr]));
  }
}
function removeFromStorage(id, arrName) {
  if (arrName === 'watched') {
    const watchedArr = JSON.parse(localStorage.getItem('watched'));
    const index = watchedArr.findIndex(item => item.id === id);
    watchedArr.splice(index, 1);
    localStorage.setItem('watched', JSON.stringify([...watchedArr]));
  } else if (arrName === 'queue') {
    const queueArr = JSON.parse(localStorage.getItem('queue'));
    const index = queueArr.findIndex(item => item.id === id);
    queueArr.splice(index, 1);
    localStorage.setItem('queue', JSON.stringify([...queueArr]));
  }
}

export const chooseCurrentButton = () => {
  const watchedArr = JSON.parse(localStorage.getItem('watched'));
  const queueArr = JSON.parse(localStorage.getItem('queue'));
  const queueBtn = document.querySelector('.hero-queue');
  const watchedBtn = document.querySelector('.hero-watched');
  if (queueBtn.classList.contains('current')) {
    queueBtn.classList.remove('current');
    queueBtn.disabled = false;
  }
  if (watchedBtn.classList.contains('current')) {
    watchedBtn.classList.remove('current');
    watchedBtn.disabled = false;
  }
if(watchedArr.length && queueArr.length === 0) {
    watchedBtn.classList.add('current');
    watchedBtn.disabled = true;
  } else if (watchedArr.length === 0 && queueArr.length) {
    queueBtn.classList.add('current');
    queueBtn.disabled = true;
  }else{
    watchedBtn.classList.add('current');
    watchedBtn.disabled = true;
  }
};

export const storageRender =async ()=> {
  const type = getType();
  const filmList = document.querySelector('.film-list');
  const buttons = document.querySelector('.library-buttons');
  const watchedBtn = buttons.firstElementChild;
  const queueBtn = buttons.lastElementChild;
  let arr = [];
  if (buttons.classList.contains('visually-hidden'))return;
  else {
    if (watchedBtn.classList.contains('current')) {
      arr = [...JSON.parse(localStorage.getItem('watched'))];
    } else if (queueBtn.classList.contains('current')) {
      arr = [...JSON.parse(localStorage.getItem('queue'))];
    }
  }
  filmList.innerHTML = '';
  const filtredArr = arr?.filter(item => item.type === type);
 if (filtredArr.length === 0) {
    document.querySelector('.nothing-added').classList.remove('visually-hidden');
    return;
  }
  const markup = await createStorageMarkup(filtredArr);  
  filmList.insertAdjacentHTML('beforeend', markup);
};

async function createStorageMarkup(arr) {
 if (!document.querySelector('.nothing-added').classList.contains('visually-hidden')){
    document.querySelector('.nothing-added').classList.add('visually-hidden');
  }
  const type = getType();
  const arrayOfPromises = arr.map(async item => {
    const data = await fetchDetails(item.id, type);
    const genres = data.genres.map(item => item.name);
    const info = { ...data, genres, pageType: 'library', media_type: type };
    return createCardMarkup(info);
  });
  const markup = (await Promise.all(arrayOfPromises)).join(' ');
  return markup;
}
