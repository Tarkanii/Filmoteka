import { storageRender } from "./localstorage";
const watchedBtn = document.querySelector('.library-watched');
const queueBtn = document.querySelector('.library-queue');

const toggleBtn = e => {
  e.target.disabled = true;
  watchedBtn.classList.toggle('current');
  queueBtn.classList.toggle('current');
};

watchedBtn.addEventListener('click', e => {
  queueBtn.disabled = false;
  toggleBtn(e);
  storageRender();
});
queueBtn.addEventListener('click', e => {
  watchedBtn.disabled = false;
  toggleBtn(e);
  storageRender();
});
