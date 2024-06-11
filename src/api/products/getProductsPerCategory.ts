import axios from 'axios';
import { IProduct } from './getProduct';

export const getProductsPerCategory = (category: string) =>
  axios
    .get<IProduct[]>(
      `${process.env.REACT_APP_API_BASE_PATH}/products/${category}`
    )
    .then((res) => res.data);
