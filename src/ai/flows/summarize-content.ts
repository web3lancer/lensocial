'use server';

/**
 * @fileOverview AI-powered content summarization
 * Creates concise summaries of long posts
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SummarizeContentInputSchema = z.object({
  content: z.string().describe('The content to summarize'),
  maxLength: z.number().optional().describe('Maximum length of summary in words (default: 50)'),
});
export type SummarizeContentInput = z.infer<typeof SummarizeContentInputSchema>;

const SummarizeContentOutputSchema = z.object({
  summary: z.string().describe('Concise summary of the content'),
  keyPoints: z.array(z.string()).describe('Key points extracted from the content'),
  topics: z.array(z.string()).describe('Main topics covered'),
  sentiment: z.enum(['positive', 'neutral', 'negative']).describe('Overall sentiment'),
});
export type SummarizeContentOutput = z.infer<typeof SummarizeContentOutputSchema>;

export async function summarizeContent(input: SummarizeContentInput): Promise<SummarizeContentOutput> {
  return summarizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeContentPrompt',
  input: {
    schema: SummarizeContentInputSchema,
  },
  output: {
    schema: SummarizeContentOutputSchema,
  },
  prompt: `You are an AI assistant that creates concise, accurate summaries of social media posts.

Content to summarize:
{{{content}}}

Create a summary that:
1. Captures the main message in approximately ${'{{{maxLength}}}' || 50} words
2. Extracts 3-5 key points
3. Identifies main topics (use hashtag-style keywords)
4. Determines the overall sentiment

Return your response as JSON with:
- summary: string (concise summary)
- keyPoints: array of strings (3-5 bullet points)
- topics: array of strings (main topics/keywords)
- sentiment: 'positive' | 'neutral' | 'negative'
`,
});

const summarizeContentFlow = ai.defineFlow(
  {
    name: 'summarizeContentFlow',
    inputSchema: SummarizeContentInputSchema,
    outputSchema: SummarizeContentOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
