'use client'

import { useState } from 'react'
import { Header } from './header'
import { PoolsTable } from './pools-table'
import { Pool } from '@/types/pool'
import { Button } from '@/components/ui/button'
import MOCK_POOLS from '../data/mock-pools.json'


export function Dashboard() {
  const [pools, setPools] = useState<Pool[]>([])
  const [loading, setLoading] = useState(false)
  const [visiblePools, setVisiblePools] = useState(10)

  const handleWalletSubmit = async (address: string) => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setPools(MOCK_POOLS as Pool[])
      setVisiblePools(10)
    } catch (error) {
      console.error('Error fetching pools:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLoadMore = () => {
    setVisiblePools(prev => Math.min(prev + 10, pools.length))
  }

  return (
    <div className="flex flex-col min-h-screen  bg-gradient-to-br from-blue-800  to-blue-300 ">
      <Header onWalletSubmit={handleWalletSubmit} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="max-w-full overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-[400px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : pools.length > 0 ? (
            <div className="space-y-4">
              <PoolsTable pools={pools.slice(0, visiblePools)} />
              {visiblePools < pools.length && (
                <div className="flex justify-center mt-6">
                  <Button onClick={handleLoadMore} variant="outline">
                    Load More
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[400px] font-bold text-black">
              Enter a wallet address to view liquidity pools
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

