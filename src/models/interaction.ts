// User interactions with content
export interface Interaction {
  id: string;
  userId: string;
  postId: string;
  type: 'like' | 'save' | 'share' | 'view' | 'dwell';
  createdAt: Date;
  dwellTimeSeconds?: number; // For dwell interactions
  metadata?: Record<string, unknown>;
}

// Analytics for weighted quality score (WQS)
export interface PostAnalytics {
  postId: string;
  likes: number;
  saves: number;
  shares: number;
  views: number;
  comments: number;
  avgDwellTime: number;
  qualityScore: number; // Calculated WQS
  updatedAt: Date;
}

// User engagement metrics
export interface UserEngagementMetrics {
  userId: string;
  postsCreated: number;
  avgPostQuality: number;
  engagementRate: number;
  responsiveness: number; // How quickly they respond to comments
  trustScore: number;
  period: 'day' | 'week' | 'month' | 'all';
  updatedAt: Date;
}
