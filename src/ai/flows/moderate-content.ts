'use server';

/**
 * @fileOverview AI-powered content moderation flow
 * Analyzes content for spam, toxicity, hate speech, and other violations
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ModerateContentInputSchema = z.object({
  content: z.string().describe('The content to moderate (post text, comment, etc.)'),
  author: z.string().describe('Information about the author (username, account age, trust score)'),
  context: z.string().optional().describe('Optional context like previous posts or comments'),
});
export type ModerateContentInput = z.infer<typeof ModerateContentInputSchema>;

const ModerateContentOutputSchema = z.object({
  safe: z.boolean().describe('Whether the content is safe to publish'),
  categories: z.object({
    spam: z.number().min(0).max(1).describe('Spam score (0-1)'),
    harassment: z.number().min(0).max(1).describe('Harassment score (0-1)'),
    hateSpeech: z.number().min(0).max(1).describe('Hate speech score (0-1)'),
    adultContent: z.number().min(0).max(1).describe('Adult content score (0-1)'),
    violence: z.number().min(0).max(1).describe('Violence score (0-1)'),
    misinformation: z.number().min(0).max(1).describe('Misinformation score (0-1)'),
  }).describe('Category-specific scores'),
  overallToxicity: z.number().min(0).max(1).describe('Overall toxicity score (0-1)'),
  confidence: z.number().min(0).max(1).describe('Confidence in the assessment'),
  recommendation: z.enum(['approve', 'review', 'reject', 'flag']).describe('Moderation recommendation'),
  reason: z.string().optional().describe('Explanation if content is flagged'),
});
export type ModerateContentOutput = z.infer<typeof ModerateContentOutputSchema>;

export async function moderateContent(input: ModerateContentInput): Promise<ModerateContentOutput> {
  return moderateContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'moderateContentPrompt',
  input: {
    schema: ModerateContentInputSchema,
  },
  output: {
    schema: ModerateContentOutputSchema,
  },
  prompt: `You are an AI content moderator for a social media platform. Analyze the following content for potential violations of community guidelines.

Content: {{{content}}}
Author Info: {{{author}}}
${'{{{#if context}}}'}Context: {{{context}}}${'{{{/if}}}'}

Analyze the content for:
1. Spam (promotional content, repetitive messages, scams)
2. Harassment (targeted attacks, bullying, threats)
3. Hate speech (discrimination, slurs, extremist content)
4. Adult content (explicit sexual content, nudity)
5. Violence (graphic violence, glorification of violence)
6. Misinformation (false health claims, conspiracy theories)

Provide scores (0-1) for each category where:
- 0.0-0.3: Low concern
- 0.3-0.6: Medium concern (review)
- 0.6-1.0: High concern (likely violation)

Return your assessment as a JSON object with:
- safe: boolean (true if content can be published immediately)
- categories: object with scores for each category
- overallToxicity: number (0-1)
- confidence: number (0-1) for your assessment
- recommendation: 'approve' | 'review' | 'reject' | 'flag'
- reason: optional explanation if flagged

Be context-aware: satire, news reporting, and educational content may discuss sensitive topics appropriately.
`,
});

const moderateContentFlow = ai.defineFlow(
  {
    name: 'moderateContentFlow',
    inputSchema: ModerateContentInputSchema,
    outputSchema: ModerateContentOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
