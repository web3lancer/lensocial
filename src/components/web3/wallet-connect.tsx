'use client';

import { useState } from 'react';
import { 
  Card as MuiCard, 
  CardContent as MuiCardContent,
  Button as MuiButton,
  Typography,
  Box,
  CircularProgress,
  Chip,
} from '@mui/material';
import { 
  AccountBalanceWallet, 
  CheckCircle,
} from '@mui/icons-material';

interface WalletConnectProps {
  onConnect?: (address: string) => void;
  onDisconnect?: () => void;
}

export function WalletConnect({ onConnect, onDisconnect }: WalletConnectProps) {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
      setAddress(mockAddress);
      setConnected(true);
      onConnect?.(mockAddress);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = () => {
    setAddress(null);
    setConnected(false);
    onDisconnect?.();
  };

  if (connected && address) {
    return (
      <MuiCard
        sx={{
          background: 'linear-gradient(145deg, #2A2A30 0%, #25252A 100%)',
          border: '2px solid',
          borderColor: 'success.main',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, success.main 0%, success.dark 100%)',
          },
        }}
      >
        <MuiCardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <CheckCircle sx={{ color: 'success.main', fontSize: 32 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                Wallet Connected
              </Typography>
              <Chip
                label={`${address.slice(0, 6)}...${address.slice(-4)}`}
                size="small"
                sx={{
                  mt: 0.5,
                  background: (theme) => `rgba(${parseInt(theme.palette.success.main.slice(1, 3), 16)}, ${parseInt(theme.palette.success.main.slice(3, 5), 16)}, ${parseInt(theme.palette.success.main.slice(5, 7), 16)}, 0.15)`,
                  color: 'success.main',
                  fontWeight: 600,
                  fontFamily: 'monospace',
                }}
              />
            </Box>
          </Box>
          <MuiButton
            onClick={handleDisconnect}
            variant="outlined"
            fullWidth
            sx={{
              borderWidth: 2,
              borderColor: 'rgba(124, 58, 237, 0.3)',
              color: 'text.primary',
              '&:hover': {
                borderWidth: 2,
                borderColor: 'primary.main',
                background: 'rgba(124, 58, 237, 0.1)',
              },
            }}
          >
            Disconnect
          </MuiButton>
        </MuiCardContent>
      </MuiCard>
    );
  }

  return (
    <MuiCard
      sx={{
        background: 'linear-gradient(145deg, #2A2A30 0%, #25252A 100%)',
        border: '1px solid rgba(124, 58, 237, 0.2)',
        height: '100%',
      }}
    >
      <MuiCardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Connect Your Wallet
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Connect your Web3 wallet to access decentralized features
          </Typography>
        </Box>
        
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box 
            sx={{ 
              width: 100, 
              height: 100, 
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
            }}
          >
            <AccountBalanceWallet sx={{ fontSize: 48, color: 'primary.main' }} />
          </Box>
        </Box>

        <MuiButton
          onClick={handleConnect}
          disabled={loading}
          variant="contained"
          fullWidth
          startIcon={loading ? <CircularProgress size={20} /> : <AccountBalanceWallet />}
          sx={{
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 700,
          }}
        >
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </MuiButton>
      </MuiCardContent>
    </MuiCard>
  );
}
