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

export const fetchDetails = async (id,type) => {
try {
  const {data} = await instanse.get(`${type}/${id}`)
  // console.log(data);
  return data;
} catch (err) {
  console.log(err.message);
}
};

export const search = async ({query,page=1})=>{
  if(!query)return;
  try {
    const {data} = await instanse.get(`search/movie`,{params:{
      page,
      query
    }})
    return data;
  } catch (err) {
    console.log(err.message)
  }
}