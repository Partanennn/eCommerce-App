import { Grid, Typography } from '@mui/material';
import { useCartStore } from '../../store/cartStore/cartStore';

const HomePage = () => {
  const itemCount = useCartStore((state) => state.itemCount);

  return (
    <Grid height={'100vh'}>
      <Typography variant="body1">{itemCount}</Typography>
    </Grid>
  );
};

export default HomePage;
