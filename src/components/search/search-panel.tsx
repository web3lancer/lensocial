'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search, TrendingUp, Users, Hash } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const trendingTopics = [
  { tag: 'AI', posts: 15234, growth: 12.5 },
  { tag: 'Web3', posts: 12089, growth: 8.3 },
  { tag: 'Design', posts: 9876, growth: 5.2 },
  { tag: 'Photography', posts: 8765, growth: 15.7 },
  { tag: 'Blockchain', posts: 7654, growth: 10.1 },
];

const trendingUsers = [
  { name: 'Sarah Chen', handle: '@sarahchen', followers: 45000, verified: true },
  { name: 'Mike Johnson', handle: '@mikej', followers: 38000, verified: true },
  { name: 'Lisa Park', handle: '@lisapark', followers: 32000, verified: false },
];

export function SearchPanel() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search posts, people, topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Trending Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Trending
          </CardTitle>
          <CardDescription>Popular topics and people right now</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="topics">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="topics">
                <Hash className="h-4 w-4 mr-2" />
                Topics
              </TabsTrigger>
              <TabsTrigger value="people">
                <Users className="h-4 w-4 mr-2" />
                People
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="topics" className="space-y-3 mt-4">
              {trendingTopics.map((topic) => (
                <div key={topic.tag} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">#{topic.tag}</Badge>
                      <span className="text-xs text-green-500">
                        +{topic.growth}%
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {topic.posts.toLocaleString()} posts
                    </p>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="people" className="space-y-3 mt-4">
              {trendingUsers.map((user) => (
                <div key={user.handle} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{user.name}</p>
                      {user.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{user.handle}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {user.followers.toLocaleString()} followers
                    </p>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
