'use client';
import { useState } from 'react';
import { 
  Card as MuiCard, 
  CardContent as MuiCardContent,
  Avatar as MuiAvatar,
  TextField,
  IconButton,
  Button as MuiButton,
  Box,
  Tooltip,
} from '@mui/material';
import { 
  Image as ImageIcon, 
  Send, 
  Videocam,
  EmojiEmotions,
} from '@mui/icons-material';
import { mockUserProfile } from '@/lib/data';

export function CreatePost() {
  const [postContent, setPostContent] = useState('');

  return (
    <MuiCard 
      sx={{ 
        position: 'relative',
        overflow: 'visible',
        background: 'linear-gradient(145deg, #2A2A30 0%, #25252A 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #7C3AED 0%, #6366F1 50%, #7C3AED 100%)',
          opacity: 0.8,
        },
      }}
    >
      <MuiCardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <MuiAvatar
            src={mockUserProfile.avatar.url}
            alt={mockUserProfile.name}
            sx={{ 
              width: 48, 
              height: 48,
              border: '2px solid',
              borderColor: 'primary.main',
              boxShadow: '0px 4px 12px rgba(124, 58, 237, 0.3)',
            }}
          >
            {mockUserProfile.name.charAt(0)}
          </MuiAvatar>
          
          <Box sx={{ flex: 1 }}>
            <TextField
              multiline
              fullWidth
              minRows={3}
              placeholder={`What's on your mind, ${mockUserProfile.name.split(' ')[0]}?`}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              variant="outlined"
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(26, 26, 29, 0.6)',
                  borderRadius: 3,
                  '& fieldset': {
                    borderColor: 'rgba(124, 58, 237, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(124, 58, 237, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: 2,
                  },
                },
                '& .MuiInputBase-input': {
                  fontSize: '1rem',
                  color: 'text.primary',
                  '&::placeholder': {
                    color: 'text.secondary',
                    opacity: 0.7,
                  },
                },
              }}
            />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <Tooltip title="Add image" arrow>
                  <IconButton
                    size="medium"
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: 'primary.main',
                        background: 'rgba(124, 58, 237, 0.1)',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <ImageIcon />
                  </IconButton>
                </Tooltip>
                
                <Tooltip title="Add video" arrow>
                  <IconButton
                    size="medium"
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: 'primary.main',
                        background: 'rgba(124, 58, 237, 0.1)',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <Videocam />
                  </IconButton>
                </Tooltip>
                
                <Tooltip title="Add emoji" arrow>
                  <IconButton
                    size="medium"
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: 'primary.main',
                        background: 'rgba(124, 58, 237, 0.1)',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <EmojiEmotions />
                  </IconButton>
                </Tooltip>
              </Box>
              
              <MuiButton
                variant="contained"
                disabled={!postContent.trim()}
                startIcon={<Send />}
                sx={{
                  borderRadius: 3,
                  px: 3,
                  py: 1,
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  textTransform: 'none',
                  background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
                  boxShadow: '0px 4px 12px rgba(124, 58, 237, 0.4)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0px 8px 24px rgba(124, 58, 237, 0.5)',
                  },
                  '&:active': {
                    transform: 'translateY(0px)',
                  },
                  '&.Mui-disabled': {
                    background: 'rgba(124, 58, 237, 0.2)',
                    color: 'rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                Post
              </MuiButton>
            </Box>
          </Box>
        </Box>
      </MuiCardContent>
    </MuiCard>
  );
}
