import { PrismaClient } from '@prisma/client';
import { PlaceHolderImages } from '../src/lib/placeholder-images';

const prisma = new PrismaClient();

function getImageUrl(id: string) {
    return PlaceHolderImages.find((img) => img.id === id)?.imageUrl ?? '';
}

async function main() {
  console.log('Start seeding ...');

  const user1 = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      handle: '@janesmith',
      avatarUrl: getImageUrl('post-author-1'),
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Carlos Gomez',
      handle: '@carlosg',
      avatarUrl: getImageUrl('post-author-2'),
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: 'Aisha Khan',
      handle: '@aishak',
      avatarUrl: getImageUrl('post-author-3'),
    },
  });

  await prisma.post.create({
    data: {
      authorId: user1.id,
      content: 'Just wrapped up a surreal photoshoot in the desert. The landscape was both challenging and inspiring. Can\'t wait to share the final results! #photography #desert #creativity',
      imageUrl: getImageUrl('post-image-1'),
    },
  });

  await prisma.post.create({
    data: {
      authorId: user2.id,
      content: 'Exploring the power of generative AI in logo design. The possibilities are endless. Here are a few concepts I\'ve been playing with. What do you think?',
      imageUrl: getImageUrl('post-image-2'),
    },
  });

  await prisma.post.create({
    data: {
      authorId: user3.id,
      content: 'My thoughts on the future of remote work for creative professionals. It\'s not just about a home office; it\'s about building a culture of trust and autonomy. Link to my latest blog post in bio.',
    },
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });