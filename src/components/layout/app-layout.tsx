'use client';

import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Avatar as MuiAvatar,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material';
import {
  Home,
  Search,
  People,
  AutoAwesome,
  BarChart,
  Person,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { mockUserProfile } from '@/lib/data';

const drawerWidth = 260;

const navItems = [
  { label: 'Feed', icon: <Home />, href: '/' },
  { label: 'Search', icon: <Search />, href: '/search' },
  { label: 'Connections', icon: <People />, href: '/connections' },
  { label: 'Web3', icon: <AutoAwesome />, href: '/web3' },
  { label: 'Analytics', icon: <BarChart />, href: '/analytics' },
  { label: 'Profile', icon: <Person />, href: '/profile' },
];

const Logo = () => (
  <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 32, height: 32, color: '#7C3AED' }}
    >
      <path d="M17.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
      <path d="M6.5 17.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" transform="translate(15 0)" />
      <path d="M7 13.5h10" />
    </svg>
    <Typography 
      variant="h5" 
      sx={{ 
        fontWeight: 800,
        background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.5px',
      }}
    >
      Lensocial
    </Typography>
  </Link>
);

export function AppLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #2A2A30 0%, #1A1A1D 100%)',
        borderRight: '1px solid rgba(124, 58, 237, 0.2)',
      }}
    >
      <Box sx={{ p: 3, pb: 2 }}>
        <Logo />
      </Box>

      <List sx={{ flex: 1, px: 2 }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <ListItem key={item.href} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={isMobile ? handleDrawerToggle : undefined}
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  px: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  ...(isActive ? {
                    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 4,
                      height: '60%',
                      background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
                      borderRadius: '0 4px 4px 0',
                    },
                  } : {
                    '&:hover': {
                      background: 'rgba(124, 58, 237, 0.1)',
                      transform: 'translateX(8px)',
                    },
                  }),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                    color: isActive ? 'primary.main' : 'text.secondary',
                    transition: 'color 0.2s',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'text.primary' : 'text.secondary',
                    fontSize: '0.9375rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* App Bar for mobile */}
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            background: 'linear-gradient(145deg, #2A2A30 0%, #25252A 100%)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(124, 58, 237, 0.2)',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flex: 1 }} />
            <MuiAvatar
              src={mockUserProfile.avatar.url}
              alt={mockUserProfile.name}
              sx={{
                width: 36,
                height: 36,
                border: '2px solid',
                borderColor: 'primary.main',
              }}
            >
              {mockUserProfile.name.charAt(0)}
            </MuiAvatar>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ 
          width: { md: drawerWidth }, 
          flexShrink: { md: 0 } 
        }}
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #1A1A1D 0%, #0F0F12 100%)',
        }}
      >
        {isMobile && <Toolbar />}
        
        {/* Top Bar for desktop */}
        {!isMobile && (
          <Box
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              background: 'rgba(26, 26, 29, 0.8)',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid rgba(124, 58, 237, 0.15)',
              px: 3,
              py: 2,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <MuiAvatar
              src={mockUserProfile.avatar.url}
              alt={mockUserProfile.name}
              sx={{
                width: 40,
                height: 40,
                border: '2px solid',
                borderColor: 'primary.main',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              {mockUserProfile.name.charAt(0)}
            </MuiAvatar>
          </Box>
        )}

        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
