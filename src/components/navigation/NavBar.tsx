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
import { useThemeStore } from '../../store/themeStore/themeStore';

const pages = [
  { text: 'phones', link: '' },
  { text: 'tablets', link: '' },
  { text: 'accesories', link: '' },
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const changeTheme = useThemeStore((state) => state.toggleTheme);
  const cartItemCount = useCartStore((state) => state.itemCount);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleItemClick = (link: string) => {
    navigate(link);
  };

  const handleThemeChange = () => {
    changeTheme();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ marginBottom: '0.7rem' }}>
        <Toolbar disableGutters>
          <IconButton
            onClick={() => handleItemClick('/')}
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
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              {pages.map((page) => (
                <MenuItem
                  key={page.text}
                  onClick={() => handleItemClick(page.link)}
                >
                  <Typography textAlign="center">
                    {t(`navbar.${page.text}`)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={() => handleItemClick(page.link)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t(`navbar.${page.text}`)}
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
