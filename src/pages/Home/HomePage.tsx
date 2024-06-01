import { Grid, Typography } from '@mui/material';
import { useItemStore } from '../../state/itemState';

const HomePage = () => {
  const itemCount = useItemStore((state) => state.itemCount);

  return (
    // Remove height when not needed anymore
    <Grid height={'100vh'}>
      <Typography>{itemCount}</Typography>
    </Grid>
  );
};

export default HomePage;
