// src/ai/flows/suggest-connections.ts
'use server';

/**
 * @fileOverview Suggests connections to the user, including other professionals
 * and topic-based communities, based on their profile and activity.
 *
 * - suggestConnections - A function that suggests connections.
 * - SuggestConnectionsInput - The input type for the suggestConnections function.
 * - SuggestConnectionsOutput - The return type for the suggestConnections function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestConnectionsInputSchema = z.object({
  userProfile: z.string().describe('The user profile, including bio, portfolio, and achievements.'),
  userActivity: z.string().describe('The user activity on the platform, such as posts, likes, and comments.'),
});
export type SuggestConnectionsInput = z.infer<typeof SuggestConnectionsInputSchema>;

const SuggestedConnectionTypeSchema = z.object({
  name: z.string().describe('The name of the suggested connection (user or community).'),
  description: z.string().describe('A brief description of the suggested connection.'),
  type: z.enum(['user', 'community']).describe('The type of suggested connection.'),
  reason: z.string().describe('The reason why this connection is suggested.'),
});

const SuggestConnectionsOutputSchema = z.object({
  suggestions: z.array(SuggestedConnectionTypeSchema).describe('A list of suggested connections.'),
});
export type SuggestConnectionsOutput = z.infer<typeof SuggestConnectionsOutputSchema>;

export async function suggestConnections(input: SuggestConnectionsInput): Promise<SuggestConnectionsOutput> {
  return suggestConnectionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestConnectionsPrompt',
  input: {
    schema: SuggestConnectionsInputSchema,
  },
  output: {
    schema: SuggestConnectionsOutputSchema,
  },
  prompt: `You are a social networking expert. Based on the user's profile and activity, suggest connections to other professionals and topic-based communities.

User Profile: {{{userProfile}}}
User Activity: {{{userActivity}}}

Suggest connections that would be valuable and relevant to the user. Explain why you are suggesting each connection.

Format your response as a JSON object with a "suggestions" array. Each object in the array should have name, description, type ('user' or 'community'), and reason fields.
`,
});

const suggestConnectionsFlow = ai.defineFlow(
  {
    name: 'suggestConnectionsFlow',
    inputSchema: SuggestConnectionsInputSchema,
    outputSchema: SuggestConnectionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
