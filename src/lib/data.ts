import { PlaceHolderImages } from './placeholder-images';
import type { Post, UserProfile } from './types';

function getImageUrl(id: string) {
  return PlaceHolderImages.find((img) => img.id === id)?.imageUrl ?? '';
}

function getImageHint(id: string) {
  return PlaceHolderImages.find((img) => img.id === id)?.imageHint ?? '';
}

export const mockUserProfile: UserProfile = {
  name: 'Alex Doe',
  handle: '@alexdoe',
  avatar: { url: getImageUrl('user-avatar'), hint: getImageHint('user-avatar') },
  bio: 'Creative Director & Photographer. Capturing moments that tell stories. Lover of clean design, strong coffee, and visual storytelling. Based in San Francisco.',
  portfolio: [
    { id: '1', url: getImageUrl('portfolio-1'), hint: getImageHint('portfolio-1'), description: 'Architectural lines' },
    { id: '2', url: getImageUrl('portfolio-2'), hint: getImageHint('portfolio-2'), description: 'Urban exploration' },
    { id: '3', url: getImageUrl('portfolio-3'), hint: getImageHint('portfolio-3'), description: 'Product shot' },
    { id: '4', url: getImageUrl('portfolio-4'), hint: getImageHint('portfolio-4'), description: 'Nature abstract' },
    { id: '5', url: getImageUrl('portfolio-5'), hint: getImageHint('portfolio-5'), description: 'City lights' },
    { id: '6', url: getImageUrl('portfolio-6'), hint: getImageHint('portfolio-6'), description: 'Minimalist interior' },
  ],
  achievements: [
    '2023 "Innovator in Design" Award',
    'Featured in "Design Weekly" Magazine',
    'Speaker at CreativeConf 2022',
    'Top 10 Photographers to Watch - Forbes',
  ],
};

export const mockPosts: Post[] = [
  {
    id: '1',
    author: { name: 'Jane Smith', handle: '@janesmith', avatar: { url: getImageUrl('post-author-1'), hint: getImageHint('post-author-1') }},
    content: 'Just wrapped up a surreal photoshoot in the desert. The landscape was both challenging and inspiring. Can\'t wait to share the final results! #photography #desert #creativity',
    image: { url: getImageUrl('post-image-1'), hint: getImageHint('post-image-1') },
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    likes: 128,
    comments: 12,
  },
  {
    id: '2',
    author: { name: 'Carlos Gomez', handle: '@carlosg', avatar: { url: getImageUrl('post-author-2'), hint: getImageHint('post-author-2') } },
    content: 'Exploring the power of generative AI in logo design. The possibilities are endless. Here are a few concepts I\'ve been playing with. What do you think?',
    image: { url: getImageUrl('post-image-2'), hint: getImageHint('post-image-2') },
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    likes: 256,
    comments: 45,
  },
  {
    id: '3',
    author: { name: 'Aisha Khan', handle: '@aishak', avatar: { url: getImageUrl('post-author-3'), hint: getImageHint('post-author-3') } },
    content: 'My thoughts on the future of remote work for creative professionals. It\'s not just about a home office; it\'s about building a culture of trust and autonomy. Link to my latest blog post in bio.',
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    likes: 98,
    comments: 22,
  }
];

export const availableContentForAI = mockPosts.map(p => `Post by ${p.author.name}: "${p.content}"`).join('\n');
export const userProfileForAI = `Name: ${mockUserProfile.name}, Bio: ${mockUserProfile.bio}`;
export const userActivityForAI = 'Liked posts about #photography and #design. Commented on a post about generative AI.';
