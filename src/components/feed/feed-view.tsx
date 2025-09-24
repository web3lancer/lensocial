'use client';
import { useState, useEffect } from 'react';
import type { Post } from '@/lib/types';
import { CreatePost } from './create-post';
import { PostCard } from './post-card';
import { mockPosts } from '@/lib/data';
import { AnimatePresence, motion } from 'framer-motion';

interface FeedViewProps {
  initialPosts: Post[];
}

export function FeedView({ initialPosts }: FeedViewProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      const newPost = {
        ...mockPosts[Math.floor(Math.random() * mockPosts.length)],
        id: new Date().getTime().toString(),
        timestamp: new Date(),
      };
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    }, 20000); // Add a new post every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <CreatePost />
      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
