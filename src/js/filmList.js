import { fetchTrending, fetchGenres } from './api';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

document.addEventListener('DOMContentLoaded', async () => {
  if(localStorage.getItem("watched")===null)localStorage.setItem("watched",JSON.stringify([]));
  if(localStorage.getItem("queue")===null)localStorage.setItem("queue",JSON.stringify([]));
  renderTrending({});
});

export async function renderTrending({ page = 1, type = 'movie' }){
  try {
    const list = (await fetchTrending({ page, type })).results;
    renderList({ list, type });
  } catch (err) {
    console.log(err.message);
  }
};

export async function renderList ({ list, type = 'movie' }){
  const filmList = document.querySelector('.film-list');
  try {
    const arrOfPromises = list.map(async item => {
      const genres = await getGenreNames(item.genre_ids, type);
      const markup = createCardMarkup({ ...item, genres,media_type:type});
      return markup;
    });
    const markup = (await Promise.all(arrOfPromises)).join('');
    filmList.innerHTML = '';
    filmList.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err.message);
  }
};

export function createCardMarkup ({
  pageType = 'home',
  genres,
  id,
  media_type,
  poster_path,
  title,
  release_date,
  name,
  first_air_date,
  vote_average = 0,
}){
  return `<li class="movie-card" >
  <img
    src=${poster_path? `${IMG_URL}${poster_path}`:`${IMG_URL}/wjYOUKIIOEklJJ4xbbQVRN6PRly.jpg`}
    width=280px
    height=400px
    alt="poster" id=${id} data-type=${media_type}
    class="movie-poster"
  />
  <p class="movie-name">${title || name}</p>
  <div class="movie-thumb">
    ${genres?.length ? `<p class="movie-genres">${genreLengthController(genres,31)}</p>` : ''}
    ${
        `<p class="movie-date">${release_date|| first_air_date?release_date?.slice(0, 4) || first_air_date?.slice(0, 4):""}</p>`
    }
    ${pageType === 'library' ? `<span class="movie-rate">${vote_average.toFixed(1)}</span>` : ''}
  </div>
</li>`;
};


async function getGenreNames  (idArr, type){
  try {
    const genres = await fetchGenres(type);
    const newArr = idArr.map(id => {
      const genre = genres.find(item => item.id === id);
      if (!genre) return null;
      return genre.name;
    });
    return newArr;
  } catch (error) {
    console.log(error.message);
  }
};

export function genreLengthController (genres,limit) {
  const sliceCount = 3;
  let string = genres.join(', ');
  for (let i = 0; string.length > limit; i++) {
    string = genres.slice(0, sliceCount - i).join(', ');
  }
  return string;
};