


export const storageOperation = e => {
  const { target } = e;
  const { id, type } = target.parentNode.dataset;
  if (!target.classList.contains('modal-button')) return;
  if (target.classList.contains('watched') && target.classList.contains('selected')) {
    target.innerHTML = "add to watched";
    removeFromStorage(id,"watched");
  } else if (target.classList.contains('watched')) {
    target.innerHTML = "remove from watched"
    addToStorage({ id, type }, 'watched');
  }
  if (target.classList.contains('queue') && target.classList.contains('selected')) {
    target.innerHTML = "add to queue";
    removeFromStorage(id,"queue");

  } else if (target.classList.contains('queue')) {
    target.innerHTML = "remove from queue"
    addToStorage({ id, type }, 'queue');
  }
  target.classList.toggle('selected');
};

export function storageContains(id, type, arrName) {
  if (arrName === 'watched') {
    const watchedArr = JSON.parse(localStorage.getItem('watched'));
    console.log(
      'watched:',
      watchedArr.find(obj => (obj.type === type && obj.id === id)),
    );
    return Boolean(watchedArr.find(obj => obj.type === type && obj.id === id));
  }
  if (arrName === 'queue') {
    const queueArr = JSON.parse(localStorage.getItem('queue'));
    console.log(
      'queue:',
      queueArr.find(obj => obj.type === type && obj.id === id),
    );
    return Boolean(queueArr.find(obj => obj.type === type && obj.id === id));
  }
}
function addToStorage(item, arrName) {
  if (arrName === 'watched') {
    const watchedArr = JSON.parse(localStorage.getItem('watched'));
    localStorage.setItem('watched', JSON.stringify([...watchedArr, item]));
  } else if (arrName === 'queue') {
    const queueArr = JSON.parse(localStorage.getItem('queue'));
    localStorage.setItem('queue', JSON.stringify([...queueArr, item]));
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
