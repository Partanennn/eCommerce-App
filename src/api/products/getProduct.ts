import axios from 'axios';

export interface IProduct {
  category: string;
  description: string;
  discountPercent?: number;
  id: number;
  image: string;
  options?: string[];
  price: number;
  rating: IRating;
  stock?: number;
  title: string;
}

export interface IRating {
  rate: number;
  count: number;
}

export const getProduct = (productId?: string) =>
  axios
    .get<IProduct>(
      `${process.env.REACT_APP_API_BASE_PATH}/products/${productId || 0}`
    )
    .then((res) => res.data);
