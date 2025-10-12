'use client';

import { WalletConnect } from '@/components/web3/wallet-connect';
import { CommunitiesPanel } from '@/components/community/communities-panel';
import { 
  Card as MuiCard, 
  CardContent as MuiCardContent,
  Typography,
  Box,
  Grid,
  Chip,
} from '@mui/material';
import { 
  TrendingUp, 
  People, 
  FlashOn, 
  Shield, 
  Public, 
  AutoAwesome,
} from '@mui/icons-material';

export default function Web3Page() {
  const stats = [
    { 
      title: 'Total Users', 
      value: '42,345', 
      change: '+12.5% from last month',
      icon: <People />,
      color: '#7C3AED',
    },
    { 
      title: 'Active Communities', 
      value: '156', 
      change: '+8 new this week',
      icon: <TrendingUp />,
      color: '#6366F1',
    },
    { 
      title: 'NFTs Minted', 
      value: '3,289', 
      change: '+234 this month',
      icon: <AutoAwesome />,
      color: '#8B5CF6',
    },
  ];

  const features = [
    {
      icon: <Shield sx={{ fontSize: 32 }} />,
      title: 'Decentralized Identity',
      description: 'Own your identity with wallet-based authentication',
    },
    {
      icon: <AutoAwesome sx={{ fontSize: 32 }} />,
      title: 'NFT Profiles & Content',
      description: 'Use NFTs as profile pictures or mint your posts',
    },
    {
      icon: <Public sx={{ fontSize: 32 }} />,
      title: 'Cross-Platform Identity',
      description: 'Connect with Lens, Farcaster, and other Web3 socials',
    },
    {
      icon: <FlashOn sx={{ fontSize: 32 }} />,
      title: 'Content Ownership',
      description: 'True ownership of your content on-chain',
    },
  ];

  return (
    <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 800,
            mb: 1,
            background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Web3 & Decentralized Features
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Connect your wallet and explore decentralized social features
        </Typography>
      </Box>

      {/* Wallet & Features Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <WalletConnect />
        </Grid>

        <Grid item xs={12} md={6}>
          <MuiCard
            sx={{
              height: '100%',
              background: 'linear-gradient(145deg, #2A2A30 0%, #25252A 100%)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
            }}
          >
            <MuiCardContent sx={{ p: 3 }}>
              <Box sx={{ mb: 3 }}>
                <Chip
                  label="Web3 Integration"
                  sx={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    mb: 1,
                  }}
                />
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                  Blockchain-powered social features
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {features.map((feature, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      display: 'flex', 
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      background: 'rgba(124, 58, 237, 0.05)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        background: 'rgba(124, 58, 237, 0.1)',
                        transform: 'translateX(8px)',
                      },
                    }}
                  >
                    <Box sx={{ color: 'primary.main' }}>
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </MuiCardContent>
          </MuiCard>
        </Grid>
      </Grid>

      {/* Communities */}
      <Box sx={{ mb: 4 }}>
        <CommunitiesPanel />
      </Box>

      {/* Stats */}
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MuiCard
              sx={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, #2A2A30 0%, #25252A 100%)',
                border: '1px solid rgba(124, 58, 237, 0.2)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${stat.color} 0%, ${stat.color}dd 100%)`,
                },
              }}
            >
              <MuiCardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    {stat.title}
                  </Typography>
                  <Box 
                    sx={{ 
                      color: stat.color,
                      opacity: 0.5,
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 800, 
                    mb: 1,
                    background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}cc 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  <Box component="span" sx={{ color: '#10B981', fontWeight: 700 }}>
                    {stat.change.split(' ')[0]}
                  </Box>
                  {' ' + stat.change.split(' ').slice(1).join(' ')}
                </Typography>
              </MuiCardContent>
            </MuiCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
