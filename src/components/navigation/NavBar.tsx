import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CartIcon from '@mui/icons-material/ShoppingCart';

import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useCartStore } from '../../store/cartStore/cartStore';
import { categoriesStore } from '../../store/categoriesStore/categoriesStore';
import { useThemeStore } from '../../store/themeStore/themeStore';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const changeTheme = useThemeStore((state) => state.toggleTheme);
  const cartItemCount = useCartStore((state) => state.itemCount);
  const categories = categoriesStore((set) => set.categories);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (link: string) => {
    navigate(link);
  };

  const handleThemeChange = () => {
    changeTheme();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            onClick={() => handleNavClick('/')}
            sx={{ color: 'white' }}
          >
            <Typography
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </IconButton>
          {/* Hamburger menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {categories.map((category) => (
                <MenuItem
                  key={category}
                  onClick={() => handleNavClick(category)}
                >
                  <Typography textAlign="center">
                    {t(`categories.${category}`)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            onClick={() => handleNavClick('/')}
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          {/* Navbar menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleNavClick(category)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t(`categories.${category}`)}
              </Button>
            ))}
          </Box>
          <IconButton onClick={handleThemeChange}>
            <DarkModeIcon sx={{ color: '#fff' }} />
          </IconButton>
          <Badge badgeContent={cartItemCount}>
            <IconButton sx={{ p: 0 }}>
              <CartIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Badge>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
