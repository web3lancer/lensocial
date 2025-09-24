'use server';
import { generatePersonalizedFeed } from '@/ai/flows/personalized-feed';
import { suggestConnections } from '@/ai/flows/suggest-connections';
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
