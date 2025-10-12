// Web3 wallet and blockchain integration types

export interface WalletConnection {
  address: string;
  chainId: number;
  provider: 'metamask' | 'walletconnect' | 'coinbase' | 'other';
  connected: boolean;
  balance?: string;
}

export interface NFT {
  contractAddress: string;
  tokenId: string;
  name: string;
  description?: string;
  image: string;
  metadata?: Record<string, unknown>;
  chain: 'ethereum' | 'polygon' | 'base' | 'optimism' | 'arbitrum';
  standard: 'ERC721' | 'ERC1155';
  owner: string;
}

// Post minted as NFT
export interface PostNFT {
  postId: string;
  contractAddress: string;
  tokenId: string;
  chain: string;
  mintedBy: string;
  mintedAt: Date;
  transactionHash: string;
  metadata: {
    content: string;
    image?: string;
    author: string;
    timestamp: number;
  };
}

// Content ownership and rights
export interface ContentOwnership {
  contentId: string;
  ownerId: string;
  ownershipType: 'creator' | 'collector' | 'licensed';
  licenseType?: 'cc0' | 'cc-by' | 'cc-by-sa' | 'exclusive' | 'non-exclusive';
  onChain: boolean;
  contractAddress?: string;
  tokenId?: string;
  acquiredAt: Date;
  price?: {
    amount: string;
    currency: string;
  };
}

// Decentralized Identity (DID)
export interface DecentralizedIdentity {
  did: string; // Decentralized Identifier
  userId: string;
  verifications: {
    wallets: string[];
    email?: boolean;
    phone?: boolean;
    social?: {
      platform: string;
      verified: boolean;
    }[];
  };
  credentials: {
    id: string;
    type: string;
    issuer: string;
    issuedAt: Date;
    expiresAt?: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

// Web3 social graph
export interface Web3Connection {
  userId: string;
  connectedAddress: string;
  platform?: 'lens' | 'farcaster' | 'cyberconnect' | 'other';
  followsOnChain: boolean;
  nftShared?: string[]; // Shared NFT collections
  daoMemberships?: string[]; // Common DAO memberships
}
