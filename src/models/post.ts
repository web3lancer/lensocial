import { User } from './user';

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  video?: string;
  createdAt: Date;
  likes?: number;
  comments?: number;
  shares?: number;
  saves?: number;
  views?: number;
  edited?: boolean;
  editedAt?: Date;
  isNFT?: boolean; // If the post is minted as NFT
  contractAddress?: string;
  tokenId?: string;
  tags?: string[];
  contentWarning?: string; // For moderation
  moderationStatus?: 'approved' | 'pending' | 'flagged' | 'removed';
  aiSummary?: string; // AI-generated summary for long posts
}
