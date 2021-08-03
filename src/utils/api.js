import axios from 'axios';
import url from '../assets/api-endpoints';

export const getAllArticles = async () => {
  const response = await axios.get(url.articlesUrl);
  return response;
};
