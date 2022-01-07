const watchedBtn = document.querySelector('.watched');
const queueBtn = document.querySelector('.queue');

const toggleBtn = e => {
  e.target.disabled = true;
  watchedBtn.classList.toggle('current');
  queueBtn.classList.toggle('current');
};

watchedBtn.addEventListener('click', e => {
  queueBtn.disabled = false;
  toggleBtn(e);
});
queueBtn.addEventListener('click', e => {
  watchedBtn.disabled = false;
  toggleBtn(e);
});
