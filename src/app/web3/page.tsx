import { WalletConnect } from '@/components/web3/wallet-connect';
import { CommunitiesPanel } from '@/components/community/communities-panel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Zap, Shield, Globe, Sparkles } from 'lucide-react';

export default function Web3Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Web3 & Decentralized Features</h1>
        <p className="text-muted-foreground">
          Connect your wallet and explore decentralized social features
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Wallet Connection */}
        <div>
          <WalletConnect />
        </div>

        {/* Web3 Features Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Web3 Integration</CardTitle>
            <CardDescription>Blockchain-powered social features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Decentralized Identity</h4>
                <p className="text-sm text-muted-foreground">
                  Own your identity with wallet-based authentication
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">NFT Profiles & Content</h4>
                <p className="text-sm text-muted-foreground">
                  Use NFTs as profile pictures or mint your posts
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Cross-Platform Identity</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with Lens, Farcaster, and other Web3 socials
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Content Ownership</h4>
                <p className="text-sm text-muted-foreground">
                  True ownership of your content on-chain
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Communities */}
      <CommunitiesPanel />

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42,345</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Communities</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+8</span> new this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">NFTs Minted</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,289</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+234</span> this month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
