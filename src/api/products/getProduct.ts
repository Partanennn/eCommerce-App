import axios from 'axios';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export const getProduct = async (productId?: string) => {
  return axios
    .get<IProduct>(
      `${process.env.REACT_APP_API_BASE_PATH}/products/${productId || 0}`
    )
    .then((res) => res.data);
};
