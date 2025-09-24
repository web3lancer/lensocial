import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Plus } from 'lucide-react';

export default function ConnectionsPage() {
    return (
        <div className="container mx-auto py-6">
            <h1 className="mb-2 text-4xl font-bold tracking-tighter">Expand Your Network</h1>
            <p className="mb-8 text-lg text-muted-foreground">This feature is coming soon!</p>
            <Card>
                <CardHeader>
                    <CardTitle>Connections</CardTitle>
                    <CardDescription>Connect with other professionals in your field.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center h-48">
                        <Users className="h-16 w-16 text-muted-foreground" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}