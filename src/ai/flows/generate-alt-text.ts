'use server';

/**
 * @fileOverview AI-powered alt text generation for images
 * Helps with accessibility by auto-generating image descriptions
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateAltTextInputSchema = z.object({
  imageDescription: z.string().describe('Description or context of the image to generate alt text for'),
  postContext: z.string().optional().describe('The post text that accompanies the image'),
});
export type GenerateAltTextInput = z.infer<typeof GenerateAltTextInputSchema>;

const GenerateAltTextOutputSchema = z.object({
  altText: z.string().describe('Concise, descriptive alt text for the image'),
  detailedDescription: z.string().describe('More detailed description for screen readers'),
  suggestedTags: z.array(z.string()).describe('Relevant tags based on image content'),
});
export type GenerateAltTextOutput = z.infer<typeof GenerateAltTextOutputSchema>;

export async function generateAltText(input: GenerateAltTextInput): Promise<GenerateAltTextOutput> {
  return generateAltTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAltTextPrompt',
  input: {
    schema: GenerateAltTextInputSchema,
  },
  output: {
    schema: GenerateAltTextOutputSchema,
  },
  prompt: `You are an accessibility expert helping create alt text for images on social media.

Image Context: {{{imageDescription}}}
${'{{{#if postContext}}}'}Post Context: {{{postContext}}}${'{{{/if}}}'}

Create:
1. Concise alt text (under 125 characters) - describe what's in the image
2. Detailed description (1-2 sentences) for screen readers
3. 3-5 relevant tags based on the image content

Alt text guidelines:
- Start with what the image is (photo, illustration, screenshot, etc.)
- Describe the main subject and action
- Include relevant details like colors, composition, mood
- Avoid "image of" or "picture of"
- Be objective and factual

Return JSON with:
- altText: string (concise, under 125 chars)
- detailedDescription: string (1-2 sentences)
- suggestedTags: array of strings (3-5 tags)
`,
});

const generateAltTextFlow = ai.defineFlow(
  {
    name: 'generateAltTextFlow',
    inputSchema: GenerateAltTextInputSchema,
    outputSchema: GenerateAltTextOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
