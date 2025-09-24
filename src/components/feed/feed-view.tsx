'use client';
'use client';
import { useState } from 'react';
import type { Post } from '@/lib/types';
import { CreatePost } from './create-post';
import { PostCard } from './post-card';
import { AnimatePresence, motion } from 'framer-motion';

interface FeedViewProps {
  initialPosts: Post[];
}

export function FeedView({ initialPosts }: FeedViewProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

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
