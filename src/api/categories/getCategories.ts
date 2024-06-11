import axios from 'axios';

export const getCategories = () =>
  axios
    .get<string[]>(`${process.env.REACT_APP_API_BASE_PATH}/products/categories`)
    .then((res) => res.data);
