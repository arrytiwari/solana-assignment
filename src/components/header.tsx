'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  onWalletSubmit: (address: string) => void
}

export function Header({ onWalletSubmit }: HeaderProps) {
  const [walletAddress, setWalletAddress] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (walletAddress) {
      onWalletSubmit(walletAddress)
    }
  }

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 sm:h-16">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold text-primary">Solana LP Dashboard</h2>
          </div>
          <div className="mt-4 sm:mt-0 w-full sm:w-auto">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <Input
                type="text"
                placeholder="Enter Solana wallet address..."
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="h-9 bg-muted w-full sm:w-64 md:w-80"
              />
              <Button type="submit" size="sm" className="h-9">
                <Search className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Search</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}

