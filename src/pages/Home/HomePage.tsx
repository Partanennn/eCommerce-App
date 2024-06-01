import { Grid, Typography } from '@mui/material';
import { useItemStore } from '../../state/itemState';

const HomePage = () => {
  const itemCount = useItemStore((state) => state.itemCount);

  return (
    <Grid height={'100vh'}>
      <Typography variant="body1">{itemCount}</Typography>
    </Grid>
  );
};

export default HomePage;
