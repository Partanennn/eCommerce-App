import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../../api/products/getProduct';
import { AddToCartButton } from './AddToCartButton';
import { IOption, Options } from './Options';
import { Price } from './Price';
import { Review } from './Review';

interface IProductInfo {
  product: IProduct;
}

const mockOptions: IOption[] = [
  { id: '1', title: 'Option 1' },
  { id: '2', title: 'Option 2' },
  { id: '3', title: 'Option 3' },
  { id: '4', title: 'Option 4' },
];

export const ProductInfo = ({ product }: IProductInfo) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box>
        <Typography variant="h5" fontWeight={'bold'}>
          {product.title}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="body1">{t('product-info.brand')}:</Typography>
          <Typography variant="body1" fontWeight={'bold'}>
            Apple
          </Typography>
        </Box>
        <Review product={product} />
      </Box>
      {product.options && (
        <Box marginTop={'1.2rem'}>
          <Options options={mockOptions} />
        </Box>
      )}
      <Box marginTop={'1.2rem'}>
        <Price price={product.price} stock={product.stock || 0} />
      </Box>
      <Box marginTop={'1.4rem'}>
        <AddToCartButton product={product} />
      </Box>
      <Box></Box>
    </Box>
  );
};
