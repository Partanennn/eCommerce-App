import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface IOption {
  id: string;
  title: string;
}

interface IOptions {
  options: IOption[];
}

export const Options = ({ options }: IOptions) => {
  const [selected, setSelected] = useState<IOption>();
  const { t } = useTranslation();

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0]);
    }
  }, [options]);

  const handleClick = (option: IOption) => {
    setSelected(option);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box>
        <Typography variant="body1" fontWeight={'bold'}>
          {t('product-info.option')}
        </Typography>
      </Box>
      <Box>
        {options.map((option) => (
          <Button
            variant={selected?.id === option.id ? 'contained' : 'outlined'}
            onClick={() => handleClick(option)}
          >
            {option.title}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
