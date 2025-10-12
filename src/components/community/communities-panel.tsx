'use client';

import { 
  Card as MuiCard, 
  CardContent as MuiCardContent,
  Typography,
  Box,
  Button as MuiButton,
  Chip,
  Divider,
} from '@mui/material';
import { 
  People, 
  Lock, 
  Public,
} from '@mui/icons-material';

interface Community {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  isPrivate: boolean;
  tags: string[];
}

const mockCommunities: Community[] = [
  {
    id: '1',
    name: 'AI & Machine Learning',
    description: 'Discuss the latest in AI, ML, and deep learning',
    memberCount: 15234,
    isPrivate: false,
    tags: ['ai', 'ml', 'tech'],
  },
  {
    id: '2',
    name: 'Web3 Developers',
    description: 'Smart contracts, DApps, and blockchain development',
    memberCount: 8456,
    isPrivate: false,
    tags: ['web3', 'blockchain', 'dev'],
  },
  {
    id: '3',
    name: 'Digital Artists',
    description: 'Share and discuss digital art and NFT creations',
    memberCount: 12098,
    isPrivate: false,
    tags: ['art', 'nft', 'design'],
  },
  {
    id: '4',
    name: 'Future of Work',
    description: 'Remote work, productivity, and career growth',
    memberCount: 6789,
    isPrivate: false,
    tags: ['career', 'productivity'],
  },
];

export function CommunitiesPanel() {
  return (
    <MuiCard
      sx={{
        background: 'linear-gradient(145deg, #2A2A30 0%, #25252A 100%)',
        border: '1px solid rgba(124, 58, 237, 0.2)',
      }}
    >
      <MuiCardContent sx={{ p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
            Communities
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Join communities that match your interests
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {mockCommunities.map((community, index) => (
            <Box key={community.id}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  background: 'rgba(124, 58, 237, 0.05)',
                  border: '1px solid rgba(124, 58, 237, 0.1)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    background: 'rgba(124, 58, 237, 0.1)',
                    border: '1px solid rgba(124, 58, 237, 0.2)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0px 8px 24px rgba(124, 58, 237, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {community.name}
                      </Typography>
                      {community.isPrivate ? (
                        <Lock sx={{ fontSize: 16, color: 'text.secondary' }} />
                      ) : (
                        <Public sx={{ fontSize: 16, color: 'text.secondary' }} />
                      )}
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {community.description}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <People sx={{ fontSize: 18, color: 'text.secondary' }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      {community.memberCount.toLocaleString()} members
                    </Typography>
                  </Box>
                  <MuiButton
                    variant="contained"
                    size="small"
                    sx={{
                      px: 2.5,
                      py: 0.75,
                      fontSize: '0.875rem',
                      fontWeight: 700,
                    }}
                  >
                    Join
                  </MuiButton>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {community.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={`#${tag}`}
                      size="small"
                      sx={{
                        background: 'rgba(124, 58, 237, 0.15)',
                        color: 'primary.main',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        '&:hover': {
                          background: 'rgba(124, 58, 237, 0.25)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
              {index < mockCommunities.length - 1 && (
                <Divider sx={{ my: 0, borderColor: 'rgba(124, 58, 237, 0.1)' }} />
              )}
            </Box>
          ))}
        </Box>
      </MuiCardContent>
    </MuiCard>
  );
}
