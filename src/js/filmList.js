import { fetchTrending, fetchGenres} from './api';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const getGenreNames = async idArr => {
  try {
    const genres = await fetchGenres();
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
  type = 'home',
  genres,
  id,
  poster_path,
  original_title,
  release_date,
  vote_average = 0,
}) => {
  return `  <li class="movie-card" data-id=${id}>
  <img
    src=${IMG_URL}${poster_path}
    alt="poster"
    class="movie-poster"
  />
  <p class="movie-name">${original_title}</p>
  <div class="movie-thumb">
    ${
     (genres && genres.length) ?
      `<p class="movie-genres">${genres.join(", ")}</p>`:""
    }
    ${
      release_date&&`<p class="movie-date">${release_date.slice(0, 4)}</p>`
    }
    ${
      type==="library"?`<span class="movie-date">${vote_average}</span>`:""
    }
  </div>
</li>`;
};

const renderList =async ({list,type="library"})=> {
  const filmList = document.querySelector(".film-list");
  try {
    const arrOfPromises = list.map(async item => {
      const genres = await getGenreNames(item.genre_ids);
      const markup = createCardMarkup({...item,genres,type});
      console.log(markup);
      return markup;
    });
    const markup = (await Promise.all(arrOfPromises)).join("");
    filmList.innerHTML="";
    filmList.insertAdjacentHTML("beforeend",markup);
  } catch (err) {
    console.log(err.message);
  }

};
 document.addEventListener("DOMContentLoaded",async()=>{
   try {
     const list = (await fetchTrending({})).results;
     renderList({list})
   } catch (err) {
     console.log(err.message);
   }
 });
