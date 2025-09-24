'use server';
import { prisma } from '@/lib/prisma';
import type { Post } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';

export async function getPersonalizedFeed(): Promise<Post[]> {
    const posts = await prisma.post.findMany({
        include: {
            author: true,
        },
        orderBy: {
            timestamp: 'desc',
        },
    });

    return posts.map(post => ({
        id: post.id,
        author: {
            name: post.author.name,
            handle: post.author.handle,
            avatar: {
                url: post.author.avatarUrl ?? '',
                hint: 'User avatar'
            }
        },
        content: post.content,
        image: post.imageUrl ? { url: post.imageUrl, hint: 'Post image' } : undefined,
        timestamp: post.timestamp,
        likes: post.likes,
        comments: post.comments,
    }));
}

function getImageUrl(id: string) {
    const image = PlaceHolderImages.find((img) => img.id === id);
    return image?.imageUrl ?? '';
}

function getImageHint(id: string) {
    const image = PlaceHolderImages.find((img) => img.id === id);
    return image?.imageHint ?? '';
}