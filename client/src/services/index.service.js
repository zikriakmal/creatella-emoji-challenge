import axios from 'axios';


export const getEmoji = (page,sortby)=>{
  return axios.get(`http://localhost:3000/api/products?_page=${page}&_limit=16&_sort=${sortby}`) 
}