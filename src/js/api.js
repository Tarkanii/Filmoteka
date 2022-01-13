import axios from 'axios';
const instanse = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '122ff25a5fbe369b9dc701b94b06cdc8',
  },
});

export const fetchTrending = async ({ page = 1, period = 'week', type = 'movie' }) => {
  try {
    const { data } = await instanse.get(`trending/${type}/${period}`, {
      params: {
        page,
      },
    });
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchGenres = async (type) => { 
  try {
    const { data } = await instanse.get(`genre/${type}/list`);
    // console.log(data.genres);
    return data.genres;
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchMovieDetails = async (id) => {
try {
  const {data} = await instanse.get(`movie/${id}`)
  // console.log(data);
  return data;
} catch (err) {
  console.log(err.message);
}
};

export const search = async (query)=>{
  if(!query)return;
  try {
    const res = await instanse.get(`search/movie`,{params:{
      query
    }})
    // console.log(res);
  } catch (err) {
    console.log(err.message)
  }
}