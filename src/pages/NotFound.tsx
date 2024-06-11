import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
      }}
    >
      <Typography variant="h3">{t('not-found-page.title')}</Typography>
    </Box>
  );
};

export default NotFound;
