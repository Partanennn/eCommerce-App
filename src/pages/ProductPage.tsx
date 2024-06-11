import { Box, Grid, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getProduct } from '../api/products/getProduct';
import { ProductInfo } from '../components/product/ProductInfo';

export const ProductPage = () => {
  const { productId } = useParams();

  const theme = useTheme();

  const { data } = useQuery({
    queryKey: ['product', parseInt(productId!)],
    queryFn: () => getProduct(productId),
  });

  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.background.light,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          component="img"
          src={data?.image}
          sx={{
            width: { xs: '20rem', sm: '25rem', md: '30rem' },
            height: { xs: '20rem', sm: '25rem', md: '30rem' },
            objectFit: 'contain',
            padding: {
              xs: '4rem',
              sm: '6rem',
            },
          }}
        />
        {/** Image selection here */}
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: { xs: '1.5rem', md: '0' },
        }}
      >
        {data !== undefined ? <ProductInfo product={data} /> : ''}
      </Grid>
    </Grid>
  );
};
