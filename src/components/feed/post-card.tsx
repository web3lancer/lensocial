import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import type { Post } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Heart, MessageCircle, MoreHorizontal, Share2, Bookmark, Flag, TrendingUp, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const timeAgo = formatDistanceToNow(post.timestamp, { addSuffix: true });
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src={post.author.avatar.url} data-ai-hint={post.author.avatar.hint} alt={post.author.name} />
          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-semibold">{post.author.name}</p>
            {post.author.name.includes('Jane') && (
              <Badge variant="secondary" className="text-xs">
                <Sparkles className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {post.author.handle} &middot; <span suppressHydrationWarning>{timeAgo}</span>
          </p>
        </div>
        <Button variant="ghost" size="icon" aria-label="More options">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <p className="mb-4 whitespace-pre-wrap">{post.content}</p>
        {post.image && (
          <div className="relative aspect-video overflow-hidden rounded-lg border">
            <Image 
              src={post.image.url}
              alt="Post image"
              fill
              className="object-cover"
              data-ai-hint={post.image.hint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t p-2 px-4">
        <Button variant="ghost" className="text-muted-foreground hover:text-red-500 transition-colors">
          <Heart className="mr-2 h-5 w-5" /> {post.likes}
        </Button>
        <Button variant="ghost" className="text-muted-foreground hover:text-blue-500 transition-colors">
          <MessageCircle className="mr-2 h-5 w-5" /> {post.comments}
        </Button>
        <Button variant="ghost" className="text-muted-foreground hover:text-green-500 transition-colors">
          <Share2 className="mr-2 h-5 w-5" /> Share
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-yellow-500 transition-colors" aria-label="Save post">
          <Bookmark className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
