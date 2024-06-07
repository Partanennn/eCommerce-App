import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IPrice {
  price: number;
  stock: number;
}

export const Price = ({ price, stock }: IPrice) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h4"
        fontWeight={'bold'}
        color={theme.palette.text.action}
      >
        {price}€
      </Typography>
      <Typography variant="body1">
        {t('product-info.stock-available')}
      </Typography>
    </Box>
  );
};
