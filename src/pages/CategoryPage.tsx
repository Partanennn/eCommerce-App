import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { getProductsPerCategory } from '../api/products/getProductsPerCategory';
import { AddToCartButton } from '../components/product/AddToCartButton';

const CategoryPage = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { data, isLoading, error } = useQuery({
    queryKey: ['productsPerCategory', pathname],
    queryFn: () => getProductsPerCategory(pathname),
  });

  const productElements =
    !error &&
    data &&
    data.map((product) => (
      <Card sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardHeader title={product.title} />
        <CardContent>
          <Typography variant="body2">Price: {product.price}</Typography>
        </CardContent>
        <CardMedia sx={{ height: '3em', width: '3em' }} image={product.image} />
        <CardActions>
          <AddToCartButton product={product} />
        </CardActions>
      </Card>
    ));

  if (isLoading) {
    return <p>{t('general.loading')}...</p>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '2em',
      }}
    >
      {productElements}
    </Box>
  );
};

export default CategoryPage;
