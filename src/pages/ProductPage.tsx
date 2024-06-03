import { Box, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { getProduct } from '../api/products/getProduct';

export const ProductPage = () => {
  const { productId } = useParams();

  const { t } = useTranslation();

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', parseInt(productId!)],
    queryFn: () => getProduct(productId),
  });
  console.log({ data, isLoading });
  return (
    <Grid
      container
      sx={{
        backgroundColor: '#F6F9FC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0.3rem',
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
            width: 'auto',
            height: 'auto',
            maxHeight: '30rem',
            padding: {
              xs: '4rem',
              sm: '6rem',
            },
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        dsa
      </Grid>
    </Grid>
  );
};
