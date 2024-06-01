import { Grid, useTheme } from '@mui/material';
import { ReactElement } from 'react';

interface ContentContainerProps {
  children?: ReactElement;
}

export const ContentContainer = ({ children }: ContentContainerProps) => {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={2}
        sx={{ backgroundColor: theme.palette.background.paper }}
      />
      <Grid
        item
        xs={8}
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        {children}
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ backgroundColor: theme.palette.background.paper }}
      />
    </Grid>
  );
};
