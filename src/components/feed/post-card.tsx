'use client';

import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import type { Post } from '@/lib/types';
import { 
  Card as MuiCard, 
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  Avatar as MuiAvatar,
  IconButton,
  Typography,
  Chip,
  Box,
  Divider,
} from '@mui/material';
import { 
  Favorite, 
  FavoriteBorder,
  ChatBubbleOutline, 
  Share, 
  BookmarkBorder,
  Bookmark,
  MoreVert,
  Verified as VerifiedIcon,
} from '@mui/icons-material';
import { useState } from 'react';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const timeAgo = formatDistanceToNow(post.timestamp, { addSuffix: true });
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };
  
  return (
    <MuiCard 
      sx={{ 
        position: 'relative',
        overflow: 'visible',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #7C3AED 0%, #6366F1 50%, #7C3AED 100%)',
          opacity: 0,
          transition: 'opacity 0.3s',
        },
        '&:hover::before': {
          opacity: 1,
        },
      }}
    >
      <MuiCardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <MuiAvatar
            src={post.author.avatar.url}
            alt={post.author.name}
            sx={{ 
              width: 48, 
              height: 48,
              mr: 2,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            {post.author.name.charAt(0)}
          </MuiAvatar>
          
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                {post.author.name}
              </Typography>
              {post.author.name.includes('Jane') && (
                <Chip
                  icon={<VerifiedIcon sx={{ fontSize: 16 }} />}
                  label="Verified"
                  size="small"
                  sx={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    height: 24,
                    '& .MuiChip-icon': {
                      color: 'white',
                    },
                  }}
                />
              )}
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {post.author.handle} · <span suppressHydrationWarning>{timeAgo}</span>
            </Typography>
          </Box>
          
          <IconButton 
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'primary.main',
                background: 'rgba(124, 58, 237, 0.1)',
              },
            }}
          >
            <MoreVert />
          </IconButton>
        </Box>

        {/* Content */}
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 2, 
            whiteSpace: 'pre-wrap',
            color: 'text.primary',
            lineHeight: 1.6,
          }}
        >
          {post.content}
        </Typography>

        {/* Image */}
        {post.image && (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%', // 16:9 aspect ratio
              borderRadius: 3,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
              mb: 2,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Image 
              src={post.image.url}
              alt="Post image"
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint={post.image.hint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Box>
        )}
      </MuiCardContent>

      <Divider sx={{ borderColor: 'rgba(124, 58, 237, 0.1)' }} />

      {/* Actions */}
      <MuiCardActions sx={{ px: 2, py: 1.5, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            size="small"
            onClick={handleLike}
            sx={{
              color: isLiked ? '#EF4444' : 'text.secondary',
              transition: 'all 0.2s',
              '&:hover': {
                color: '#EF4444',
                transform: 'scale(1.2)',
              },
            }}
          >
            {isLiked ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              mr: 2,
              fontWeight: 600,
            }}
          >
            {likes}
          </Typography>

          <IconButton
            size="small"
            sx={{
              color: 'text.secondary',
              transition: 'all 0.2s',
              '&:hover': {
                color: '#3B82F6',
                transform: 'scale(1.2)',
              },
            }}
          >
            <ChatBubbleOutline />
          </IconButton>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              mr: 2,
              fontWeight: 600,
            }}
          >
            {post.comments}
          </Typography>

          <IconButton
            size="small"
            sx={{
              color: 'text.secondary',
              transition: 'all 0.2s',
              '&:hover': {
                color: '#10B981',
                transform: 'scale(1.2)',
              },
            }}
          >
            <Share />
          </IconButton>
        </Box>

        <IconButton
          size="small"
          onClick={() => setIsSaved(!isSaved)}
          sx={{
            color: isSaved ? '#F59E0B' : 'text.secondary',
            transition: 'all 0.2s',
            '&:hover': {
              color: '#F59E0B',
              transform: 'scale(1.2)',
            },
          }}
        >
          {isSaved ? <Bookmark /> : <BookmarkBorder />}
        </IconButton>
      </MuiCardActions>
    </MuiCard>
  );
}
