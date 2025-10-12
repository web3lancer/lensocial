'use server';
import { generatePersonalizedFeed } from '@/ai/flows/personalized-feed';
import { suggestConnections } from '@/ai/flows/suggest-connections';
import { moderateContent } from '@/ai/flows/moderate-content';
import { summarizeContent } from '@/ai/flows/summarize-content';
import { generateAltText } from '@/ai/flows/generate-alt-text';
import { mockPosts, availableContentForAI, userProfileForAI, userActivityForAI } from '@/lib/data';
import type { Post } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';

export async function getPersonalizedFeed(): Promise<Post[]> {
  try {
    const personalizedFeed = await generatePersonalizedFeed({
      userProfile: userProfileForAI,
      recentActivity: userActivityForAI,
      availableContent: availableContentForAI,
    });
    
    // For this demo, we'll map the AI-suggested content back to our mock posts.
    // In a real app, you'd fetch posts by ID from a database.
    const feed = personalizedFeed.feedItems
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .map(item => {
        const matchingPost = mockPosts.find(p => item.content.includes(p.content.substring(0, 50)));
        return matchingPost;
      })
      .filter((p): p is Post => !!p);

    return feed.length > 0 ? feed : mockPosts;
  } catch (error) {
    console.error('Error generating personalized feed:', error);
    // Fallback to default posts on error
    return mockPosts;
  }
}

function getImageUrl(id: string) {
    const image = PlaceHolderImages.find((img) => img.id === id);
    return image?.imageUrl ?? '';
}

function getImageHint(id: string) {
    const image = PlaceHolderImages.find((img) => img.id === id);
    return image?.imageHint ?? '';
}

export async function getSuggestedConnections() {
  try {
    const connections = await suggestConnections({
      userProfile: userProfileForAI,
      userActivity: userActivityForAI,
    });
    // In a real app, you might fetch full profiles for these suggestions.
    // Here we add placeholder avatars.
    return connections.suggestions.map((suggestion, index) => ({
      ...suggestion,
      avatar: {
          url: getImageUrl(`post-author-${(index % 3) + 1}`),
          hint: getImageHint(`post-author-${(index % 3) + 1}`)
      }
    }));
  } catch (error) {
    console.error('Error suggesting connections:', error);
    return [];
  }
}

// AI-powered content moderation
export async function moderatePostContent(content: string, authorInfo: string) {
  try {
    const result = await moderateContent({
      content,
      author: authorInfo,
    });
    return result;
  } catch (error) {
    console.error('Error moderating content:', error);
    // Default to safe if AI fails
    return {
      safe: true,
      categories: {
        spam: 0,
        harassment: 0,
        hateSpeech: 0,
        adultContent: 0,
        violence: 0,
        misinformation: 0,
      },
      overallToxicity: 0,
      confidence: 0,
      recommendation: 'approve' as const,
    };
  }
}

// AI-powered content summarization
export async function getSummary(content: string, maxLength: number = 50) {
  try {
    const result = await summarizeContent({
      content,
      maxLength,
    });
    return result;
  } catch (error) {
    console.error('Error summarizing content:', error);
    return null;
  }
}

// AI-powered alt text generation
export async function getAltText(imageDescription: string, postContext?: string) {
  try {
    const result = await generateAltText({
      imageDescription,
      postContext,
    });
    return result;
  } catch (error) {
    console.error('Error generating alt text:', error);
    return null;
  }
}

// Post interaction handlers
export async function likePost(postId: string, userId: string) {
  // In real app, update database
  console.log(`User ${userId} liked post ${postId}`);
  return { success: true };
}

export async function savePost(postId: string, userId: string) {
  // In real app, update database
  console.log(`User ${userId} saved post ${postId}`);
  return { success: true };
}

export async function sharePost(postId: string, userId: string) {
  // In real app, update database
  console.log(`User ${userId} shared post ${postId}`);
  return { success: true };
}

// Report content
export async function reportContent(
  contentId: string,
  contentType: 'post' | 'comment' | 'user',
  reason: string,
  description?: string
) {
  // In real app, create report in database and flag for review
  console.log(`Content ${contentId} reported for: ${reason}`);
  return { success: true, reportId: Math.random().toString(36) };
}

// Web3 actions
export async function connectUserWallet(address: string, signature: string) {
  // In real app, verify signature and link wallet to user account
  console.log(`Wallet ${address} connected`);
  return { success: true, verified: true };
}

export async function mintPostAsNFT(postId: string, chain: string = 'polygon') {
  // In real app, interact with smart contract to mint NFT
  console.log(`Minting post ${postId} as NFT on ${chain}`);
  return { 
    success: true, 
    contractAddress: '0x' + Math.random().toString(16).substr(2, 40),
    tokenId: Math.floor(Math.random() * 10000).toString(),
  };
}

