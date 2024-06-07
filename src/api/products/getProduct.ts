import axios from 'axios';

export interface IProduct {
  category: string;
  description: string;
  discountPercent?: number;
  id: number;
  image: string;
  rating: IRating;
  title: string;
  price: number;
  stock?: number;
}

export interface IRating {
  rate: number;
  count: number;
}

export const getProduct = async (productId?: string) => {
  return axios
    .get<IProduct>(
      `${process.env.REACT_APP_API_BASE_PATH}/products/${productId || 0}`
    )
    .then((res) => res.data);
};
