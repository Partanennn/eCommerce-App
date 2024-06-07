import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../../api/products/getProduct';
import { useCartStore } from '../../store/cartStore/cartStore';

interface IAddToCartButtonProps {
  product: IProduct;
}

export const AddToCartButton = ({ product }: IAddToCartButtonProps) => {
  const { t } = useTranslation();
  const addToCart = useCartStore((set) => set.addItem);

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      {t('product-info.add-to-cart')}
    </Button>
  );
};
