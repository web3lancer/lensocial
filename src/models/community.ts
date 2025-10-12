// Community/topic-based groups
export interface Community {
  id: string;
  name: string;
  description: string;
  coverImage?: string;
  avatar?: string;
  createdBy: string;
  moderators: string[]; // User IDs
  memberCount: number;
  tags: string[];
  isPrivate: boolean;
  createdAt: Date;
  rules?: string[];
}

export interface CommunityMembership {
  id: string;
  userId: string;
  communityId: string;
  role: 'member' | 'moderator' | 'admin';
  joinedAt: Date;
  notificationsEnabled: boolean;
}

// Feed marketplace - custom feed algorithms
export interface CustomFeed {
  id: string;
  name: string;
  description: string;
  creatorId: string;
  algorithm: 'latest' | 'trending' | 'personalized' | 'custom';
  filters?: {
    tags?: string[];
    communities?: string[];
    minQualityScore?: number;
    contentTypes?: ('text' | 'image' | 'video')[];
  };
  isPublic: boolean;
  subscriberCount: number;
  createdAt: Date;
}
