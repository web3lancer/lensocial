'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet, CheckCircle } from 'lucide-react';

interface WalletConnectProps {
  onConnect?: (address: string) => void;
  onDisconnect?: () => void;
}

export function WalletConnect({ onConnect, onDisconnect }: WalletConnectProps) {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
      setAddress(mockAddress);
      setConnected(true);
      onConnect?.(mockAddress);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = () => {
    setAddress(null);
    setConnected(false);
    onDisconnect?.();
  };

  if (connected && address) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Wallet Connected
          </CardTitle>
          <CardDescription>
            {address.slice(0, 6)}...{address.slice(-4)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleDisconnect} variant="outline" className="w-full">
            Disconnect
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect Your Wallet</CardTitle>
        <CardDescription>
          Connect your Web3 wallet to access decentralized features
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={handleConnect} 
          disabled={loading}
          className="w-full"
        >
          <Wallet className="mr-2 h-4 w-4" />
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </Button>
      </CardContent>
    </Card>
  );
}
