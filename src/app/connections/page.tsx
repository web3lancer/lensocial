import { Suspense } from 'react';
import { getSuggestedConnections } from '@/lib/actions';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Users, Plus } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

function ConnectionCardSkeleton() {
    return (
        <Card>
            <CardHeader className="flex flex-col items-center gap-4 text-center">
                <Skeleton className="h-20 w-20 rounded-full" />
                <div className="w-full space-y-2">
                    <Skeleton className="h-5 w-3/4 mx-auto" />
                    <Skeleton className="h-4 w-1/2 mx-auto" />
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-10 w-full mt-2" />
            </CardContent>
        </Card>
    )
}

function ConnectionsSkeleton() {
    return (
        <div className="space-y-8">
            <div>
                <Skeleton className="h-8 w-1/4 mb-4" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <ConnectionCardSkeleton />
                    <ConnectionCardSkeleton />
                    <ConnectionCardSkeleton />
                </div>
            </div>
            <div>
                <Skeleton className="h-8 w-1/4 mb-4" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <ConnectionCardSkeleton />
                    <ConnectionCardSkeleton />
                </div>
            </div>
        </div>
    );
}


async function SuggestedConnections() {
  const suggestions = await getSuggestedConnections();
  const users = suggestions.filter((s) => s.type === 'user');
  const communities = suggestions.filter((s) => s.type === 'community');

  return (
    <div className="space-y-12">
      {users.length > 0 && (
        <div>
            <h2 className="mb-4 text-2xl font-bold">Suggested Professionals</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {users.map((s, i) => (
                <Card key={`user-${i}`}>
                <CardHeader className="flex flex-col items-center gap-4 text-center">
                    <Avatar className="h-20 w-20 border-2 border-primary">
                    <AvatarImage src={s.avatar.url} data-ai-hint={s.avatar.hint} alt={s.name} />
                    <AvatarFallback>{s.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                    <CardTitle>{s.name}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="mb-4 text-sm text-muted-foreground italic">&quot;{s.reason}&quot;</p>
                    <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Connect
                    </Button>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      )}

      {communities.length > 0 && (
        <div>
            <h2 className="mb-4 text-2xl font-bold">Suggested Communities</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communities.map((s, i) => (
                <Card key={`comm-${i}`}>
                <CardHeader className="flex flex-col items-center gap-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                        <Users className="h-10 w-10 text-secondary-foreground" />
                    </div>
                    <div>
                    <CardTitle>{s.name}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="mb-4 text-sm text-muted-foreground italic">&quot;{s.reason}&quot;</p>
                    <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Join
                    </Button>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      )}
    </div>
  );
}

export default function ConnectionsPage() {
    return (
        <div className="container mx-auto py-6">
            <h1 className="mb-2 text-4xl font-bold tracking-tighter">Expand Your Network</h1>
            <p className="mb-8 text-lg text-muted-foreground">AI-powered suggestions to help you connect with relevant people and communities.</p>
            <Suspense fallback={<ConnectionsSkeleton />}>
                <SuggestedConnections />
            </Suspense>
        </div>
    )
}
