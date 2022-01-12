import { fetchTrending, fetchGenres } from './api';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const getGenreNames = async (idArr, type) => {
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

const createCardMarkup = ({
  pageType = 'library',
  genres,
  id,
  poster_path,
  title,
  release_date,
  name,
  first_air_date,
  vote_average = 0,
}) => {
  const genreLengthController = genres => {
    const sliceCount = 3;
    let string = genres.join(', ');
    for (let i = 0; string.length > 32; i++) {
      string = genres.slice(0, sliceCount - i).join(', ');
    }
    return string;
  };
  return `  <li class="movie-card" data-id=${id}>
  <img
    src=${poster_path? `${IMG_URL}${poster_path}`:`${IMG_URL}/wjYOUKIIOEklJJ4xbbQVRN6PRly.jpg`}
    width=280 px
    alt="poster"
    class="movie-poster"
  />
  <p class="movie-name">${title || name}</p>
  <div class="movie-thumb">
    ${genres && genres.length ? `<p class="movie-genres">${genreLengthController(genres)}</p>` : ''}
    ${
        `<p class="movie-date">${release_date|| first_air_date?release_date?.slice(0, 4) || first_air_date?.slice(0, 4):""}</p>`
    }
    ${pageType === 'library' ? `<span class="movie-rate">${vote_average.toFixed(1)}</span>` : ''}
  </div>
</li>`;
};

const renderList = async ({ list, type = 'movie', pageType = 'home' }) => {
  const filmList = document.querySelector('.film-list');
  try {
    const arrOfPromises = list.map(async item => {
      console.log(item);
      const genres = await getGenreNames(item.genre_ids, type);
      const markup = createCardMarkup({ ...item, genres, pageType });
      return markup;
    });
    const markup = (await Promise.all(arrOfPromises)).join('');
    filmList.innerHTML = '';
    filmList.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err.message);
  }
};

const renderTrending = async ({ page = 1, type = 'movie' }) => {
  try {
    const list = (await fetchTrending({ page, type })).results;
    renderList({ list, type });
  } catch (err) {
    console.log(err.message);
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  renderTrending({});
});
