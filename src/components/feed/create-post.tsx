'use client';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Image as ImageIcon, Send, Video } from 'lucide-react';
import { mockUserProfile } from '@/lib/data';

export function CreatePost() {
  const [postContent, setPostContent] = useState('');

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src={mockUserProfile.avatar.url} data-ai-hint={mockUserProfile.avatar.hint} />
            <AvatarFallback>{mockUserProfile.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder={`What's on your mind, ${mockUserProfile.name.split(' ')[0]}?`}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="mb-2 min-h-[80px] resize-none border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-1 text-muted-foreground">
                <Button variant="ghost" size="icon" aria-label="Add image">
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Add video">
                  <Video className="h-5 w-5" />
                </Button>
              </div>
              <Button disabled={!postContent.trim()}>
                <Send className="mr-2 h-4 w-4" />
                Post
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
