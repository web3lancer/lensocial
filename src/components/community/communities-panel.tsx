'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Lock, Globe } from 'lucide-react';

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
    <Card>
      <CardHeader>
        <CardTitle>Communities</CardTitle>
        <CardDescription>Join communities that match your interests</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockCommunities.map((community) => (
          <div key={community.id} className="border-b pb-4 last:border-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{community.name}</h4>
                  {community.isPrivate ? (
                    <Lock className="h-3 w-3 text-muted-foreground" />
                  ) : (
                    <Globe className="h-3 w-3 text-muted-foreground" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {community.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {community.memberCount.toLocaleString()} members
                </span>
              </div>
              <Button size="sm" variant="outline">
                Join
              </Button>
            </div>
            <div className="flex gap-2 mt-2">
              {community.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
