'use server';

/**
 * @fileOverview Personalized feed generation flow.
 *
 * - generatePersonalizedFeed - A function that generates a personalized feed for a user.
 * - GeneratePersonalizedFeedInput - The input type for the generatePersonalizedFeed function.
 * - GeneratePersonalizedFeedOutput - The return type for the generatePersonalizedFeed function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedFeedInputSchema = z.object({
  userProfile: z
    .string()
    .describe('A description of the user profile, including interests, skills, and professional background.'),
  recentActivity: z
    .string()
    .describe('A summary of the user recent activity on the platform, including posts, likes, and connections.'),
  availableContent: z
    .string()
    .describe('A description of the available content, including recent posts from other users and communities.'),
});
export type GeneratePersonalizedFeedInput = z.infer<typeof GeneratePersonalizedFeedInputSchema>;

const GeneratePersonalizedFeedOutputSchema = z.object({
  feedItems: z.array(
    z.object({
      content: z.string().describe('The content of the feed item.'),
      relevanceScore: z.number().describe('A score indicating the relevance of the item to the user.'),
    })
  ).describe('A list of feed items personalized for the user.'),
});
export type GeneratePersonalizedFeedOutput = z.infer<typeof GeneratePersonalizedFeedOutputSchema>;

export async function generatePersonalizedFeed(input: GeneratePersonalizedFeedInput): Promise<GeneratePersonalizedFeedOutput> {
  return generatePersonalizedFeedFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedFeedPrompt',
  input: {schema: GeneratePersonalizedFeedInputSchema},
  output: {schema: GeneratePersonalizedFeedOutputSchema},
  prompt: `You are an AI assistant designed to create personalized social media feeds.

  Based on the user's profile, recent activity, and available content, create a feed that is relevant and engaging.

  User Profile: {{{userProfile}}}
  Recent Activity: {{{recentActivity}}}
  Available Content: {{{availableContent}}}

  Create a feed with items that are most likely to be of interest to the user. Each item should have a content and a relevance score.
  The relevance score represents the likelihood the user will find the item interesting, it should be between 0 and 1.
  `,
});

const generatePersonalizedFeedFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedFeedFlow',
    inputSchema: GeneratePersonalizedFeedInputSchema,
    outputSchema: GeneratePersonalizedFeedOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
