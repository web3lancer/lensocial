import { Suspense } from 'react';
import { getPersonalizedFeed } from '@/lib/actions';
import { CreatePost } from '@/components/feed/create-post';
import { FeedView } from '@/components/feed/feed-view';
import { Skeleton } from '@/components/ui/skeleton';

function FeedSkeleton() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Skeleton className="h-40 w-full rounded-lg" />
      <div className="space-y-4">
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-56 w-full rounded-lg" />
      </div>
    </div>
  );
}

async function FeedData() {
  const initialPosts = await getPersonalizedFeed();
  return <FeedView initialPosts={initialPosts} />;
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <CreatePost />
      <Suspense fallback={<FeedSkeleton />}>
        <FeedData />
      </Suspense>
    </div>
  );
}
