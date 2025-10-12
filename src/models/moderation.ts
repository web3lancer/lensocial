// Content moderation and safety
export interface ContentReport {
  id: string;
  reporterId: string;
  contentId: string;
  contentType: 'post' | 'comment' | 'user';
  reason: 'spam' | 'harassment' | 'hate_speech' | 'misinformation' | 'adult_content' | 'copyright' | 'other';
  description?: string;
  status: 'pending' | 'reviewing' | 'resolved' | 'dismissed';
  createdAt: Date;
  resolvedAt?: Date;
  resolvedBy?: string;
  action?: ModeratorAction;
}

export interface ModeratorAction {
  id: string;
  moderatorId: string;
  contentId: string;
  action: 'remove' | 'warn' | 'restrict' | 'ban' | 'approve';
  reason: string;
  duration?: number; // In days for temporary actions
  timestamp: Date;
  appealable: boolean;
}

// AI moderation results
export interface AIModeration {
  contentId: string;
  contentType: 'post' | 'comment';
  toxicityScore: number; // 0-1
  categories: {
    spam: number;
    harassment: number;
    hateSpeech: number;
    adultContent: number;
    violence: number;
  };
  flagged: boolean;
  confidence: number;
  timestamp: Date;
}

// User trust and safety score
export interface TrustScore {
  userId: string;
  score: number; // 0-100
  accountAge: number; // Days
  verifiedStatus: boolean;
  reportCount: number;
  positiveInteractions: number;
  postQualityAvg: number;
  status: 'good' | 'probation' | 'restricted';
  restrictions?: {
    maxPostsPerDay?: number;
    cannotComment?: boolean;
    shadowBanned?: boolean;
  };
  updatedAt: Date;
}
