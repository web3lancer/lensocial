import { PlaceHolderImages } from './placeholder-images';
import type { UserProfile } from './types';

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