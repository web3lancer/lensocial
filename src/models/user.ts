export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
  walletAddress?: string; // Web3 wallet address
  bio?: string;
  portfolio?: PortfolioItem[];
  achievements?: string[];
  interests?: string[];
  verified?: boolean;
  isNFTAvatar?: boolean; // Whether profile picture is an NFT
  followersCount?: number;
  followingCount?: number;
  createdAt?: Date;
  trustScore?: number; // For moderation (0-100)
}

export interface PortfolioItem {
  id: string;
  url: string;
  hint: string;
  description: string;
  isNFT?: boolean; // If the portfolio item is an NFT
  contractAddress?: string;
  tokenId?: string;
}
