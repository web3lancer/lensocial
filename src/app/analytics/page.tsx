import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark,
  BarChart3,
  Activity
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Track your content performance and audience engagement
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+20.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+2.3%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+180</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quality Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+5 points</span> this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Your content performance over the last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="engagement">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="reach">Reach</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>

            <TabsContent value="engagement" className="space-y-4 mt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="font-semibold">Likes</p>
                      <p className="text-sm text-muted-foreground">Total reactions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">12,456</p>
                    <p className="text-xs text-green-500">+15.2%</p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-semibold">Comments</p>
                      <p className="text-sm text-muted-foreground">Total discussions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">3,421</p>
                    <p className="text-xs text-green-500">+8.7%</p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-3">
                    <Share2 className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-semibold">Shares</p>
                      <p className="text-sm text-muted-foreground">Content shared</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">1,834</p>
                    <p className="text-xs text-green-500">+12.4%</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bookmark className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-semibold">Saves</p>
                      <p className="text-sm text-muted-foreground">Bookmarked posts</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">892</p>
                    <p className="text-xs text-green-500">+18.9%</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reach" className="space-y-4 mt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="font-semibold">Impressions</p>
                    <p className="text-sm text-muted-foreground">Times your content was displayed</p>
                  </div>
                  <p className="text-2xl font-bold">78,932</p>
                </div>
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="font-semibold">Unique Viewers</p>
                    <p className="text-sm text-muted-foreground">Individual users reached</p>
                  </div>
                  <p className="text-2xl font-bold">45,231</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Avg. Dwell Time</p>
                    <p className="text-sm text-muted-foreground">Average time spent on posts</p>
                  </div>
                  <p className="text-2xl font-bold">2:34</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="content" className="space-y-4 mt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="font-semibold">Posts Published</p>
                    <p className="text-sm text-muted-foreground">Total content created</p>
                  </div>
                  <p className="text-2xl font-bold">47</p>
                </div>
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="font-semibold">Avg. Quality Score</p>
                    <p className="text-sm text-muted-foreground">Weighted quality metrics</p>
                  </div>
                  <p className="text-2xl font-bold">87/100</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Top Performing Topic</p>
                    <p className="text-sm text-muted-foreground">Most engaged category</p>
                  </div>
                  <Badge>#AI</Badge>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Top Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Posts</CardTitle>
          <CardDescription>Your best content this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-start justify-between border-b pb-4 last:border-0">
                <div className="flex-1">
                  <p className="font-semibold">Post title or excerpt would go here...</p>
                  <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" /> {(5000 - i * 500).toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" /> {(850 - i * 100).toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" /> {(125 - i * 20).toLocaleString()}
                    </span>
                  </div>
                </div>
                <Badge variant="secondary">Quality: {95 - i * 2}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
