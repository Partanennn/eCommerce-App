import { Box, Rating, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../../api/products/getProduct';

interface IReview {
  product: IProduct;
}

export const Review = ({ product }: IReview) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant="body1">{t('product-info.rated')}:</Typography>
      <Rating readOnly value={product.rating.rate} />
      <Typography
        variant="body2"
        fontWeight={'bold'}
        marginLeft={1}
        alignContent={'center'}
      >
        ({product.rating.count})
      </Typography>
    </Box>
  );
};
