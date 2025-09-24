import Image from 'next/image';
import { mockUserProfile } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Briefcase, MapPin } from 'lucide-react';

export default function ProfilePage() {
  const user = mockUserProfile;

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <div className="h-36 bg-gradient-to-r from-primary via-purple-500 to-accent sm:h-48" />
        <CardContent className="p-4 sm:p-6">
          <div className="relative -mt-16 flex sm:-mt-20">
            <Avatar className="h-28 w-28 border-4 border-background sm:h-32 sm:w-32">
              <AvatarImage src={user.avatar.url} data-ai-hint={user.avatar.hint} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{user.name}</h1>
            <p className="text-muted-foreground">{user.handle}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">{user.bio}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4" />
                    Creative Director
                </div>
                 <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    San Francisco
                </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {user.portfolio.map((item) => (
                        <div key={item.id} className="group relative aspect-square overflow-hidden rounded-lg">
                            <Image
                                src={item.url}
                                alt={item.description}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={item.hint}
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-xs font-semibold text-white">{item.description}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Award className="h-5 w-5 text-accent" /> Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                    {user.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                            <span className="flex-1 text-sm">{achievement}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
