'use client';

import { createTheme } from '@mui/material/styles';

// Create a vibrant Material UI theme with purple/indigo gradients
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C3AED', // Vibrant purple
      light: '#A78BFA',
      dark: '#5B21B6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6366F1', // Vibrant indigo
      light: '#818CF8',
      dark: '#4338CA',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#1A1A1D', // Muted ash dark
      paper: '#25252A', // Slightly lighter ash
    },
    text: {
      primary: '#F3F4F6',
      secondary: '#9CA3AF',
    },
    divider: 'rgba(156, 163, 175, 0.12)',
    action: {
      hover: 'rgba(124, 58, 237, 0.08)',
      selected: 'rgba(124, 58, 237, 0.16)',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.2)',
    '0px 4px 8px rgba(0, 0, 0, 0.25)',
    '0px 6px 12px rgba(0, 0, 0, 0.3)',
    '0px 8px 16px rgba(0, 0, 0, 0.35)',
    '0px 10px 20px rgba(0, 0, 0, 0.4)',
    '0px 12px 24px rgba(0, 0, 0, 0.45)',
    '0px 14px 28px rgba(0, 0, 0, 0.5)',
    '0px 16px 32px rgba(0, 0, 0, 0.55)',
    '0px 18px 36px rgba(0, 0, 0, 0.6)',
    '0px 20px 40px rgba(0, 0, 0, 0.65)',
    '0px 22px 44px rgba(0, 0, 0, 0.7)',
    '0px 24px 48px rgba(0, 0, 0, 0.75)',
    '0px 26px 52px rgba(0, 0, 0, 0.8)',
    '0px 28px 56px rgba(0, 0, 0, 0.85)',
    '0px 30px 60px rgba(0, 0, 0, 0.9)',
    '0px 32px 64px rgba(124, 58, 237, 0.3)',
    '0px 34px 68px rgba(124, 58, 237, 0.35)',
    '0px 36px 72px rgba(124, 58, 237, 0.4)',
    '0px 38px 76px rgba(124, 58, 237, 0.45)',
    '0px 40px 80px rgba(124, 58, 237, 0.5)',
    '0px 42px 84px rgba(124, 58, 237, 0.55)',
    '0px 44px 88px rgba(124, 58, 237, 0.6)',
    '0px 46px 92px rgba(124, 58, 237, 0.65)',
    '0px 48px 96px rgba(124, 58, 237, 0.7)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontWeight: 600,
          fontSize: '0.9375rem',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 8px 24px rgba(124, 58, 237, 0.4)',
          },
          '&:active': {
            transform: 'translateY(0px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: '#7C3AED',
          '&:hover': {
            borderWidth: 2,
            borderColor: '#8B5CF6',
            background: 'rgba(124, 58, 237, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #2A2A30 0%, #25252A 100%)',
          borderRadius: 16,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(124, 58, 237, 0.15)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 16px 48px rgba(124, 58, 237, 0.3)',
            borderColor: 'rgba(124, 58, 237, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          background: 'linear-gradient(145deg, #2A2A30 0%, #25252A 100%)',
          borderRadius: 12,
        },
        elevation1: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        },
        elevation2: {
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.35)',
        },
        elevation3: {
          boxShadow: '0px 12px 36px rgba(0, 0, 0, 0.4)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: 'rgba(26, 26, 29, 0.6)',
            borderRadius: 12,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background: 'rgba(26, 26, 29, 0.8)',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#7C3AED',
              },
            },
            '&.Mui-focused': {
              background: 'rgba(26, 26, 29, 0.9)',
              boxShadow: '0px 0px 0px 4px rgba(124, 58, 237, 0.15)',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#7C3AED',
                borderWidth: 2,
              },
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'rgba(124, 58, 237, 0.12)',
            transform: 'scale(1.1)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
        filled: {
          background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
          boxShadow: '0px 2px 8px rgba(124, 58, 237, 0.3)',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: '2px solid rgba(124, 58, 237, 0.3)',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(180deg, #2A2A30 0%, #1A1A1D 100%)',
          borderRight: '1px solid rgba(124, 58, 237, 0.2)',
        },
      },
    },
  },
});
