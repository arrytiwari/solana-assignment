import { Pool } from '@/types/pool'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
interface PoolsTableProps {
  pools: Pool[]
}

export function PoolsTable({ pools }: PoolsTableProps) {
  const formatUSD = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(4)}%`
  }

  return (
    <div className="rounded-md border border-border/40 overflow-hidden text-white">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50 sticky ">
            <TableRow>
              <TableHead className="w-[200px] sticky left-0 bg-muted/50 z-20 text-black">Pool</TableHead>
              <TableHead className='text-black'>Balance</TableHead>
              <TableHead className='text-black'>Pending Yield</TableHead>
              <TableHead className='text-black'>Est. Yield (24H)</TableHead>
              <TableHead className='text-black'>Price Range</TableHead>
              <TableHead className='text-black'>Current Price</TableHead>
              <TableHead className='text-black'>Token A</TableHead>
              <TableHead className='text-black'>Token B</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pools.map((pool) => (
              <TableRow key={pool.name}>
                <TableCell className="font-medium sticky left-0 bg-background z-10">
                <div className="flex items-center space-x-3 text-black">
                        <div className="flex -space-x-2">
                          <div className="relative h-8 w-8">
                            <Image
                              src={`/solana-token.png`}
                              alt={`${pool.tokenA.symbol} icon`}
                              width={32}
                              height={32}
                              className="rounded-full border-2 border-background"
                            />
                          </div>
                          <div className="relative h-8 w-8">
                            <Image
                              src={`/orca-token.png`}
                              alt={`${pool.tokenB.symbol} icon`}
                              width={32}
                              height={32}
                              className="rounded-full border-2 border-background"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">{pool.name}</span>
                          <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                            {pool.percentage}
                          </span>
                        </div>
                      </div>
                </TableCell>
                <TableCell>{formatUSD(pool.balance)}</TableCell>
                <TableCell>{formatUSD(pool.pendingYield)}</TableCell>
                <TableCell className="text-green-400 hover:text-green-800"> 
                  {formatPercentage(pool.estYield)}
                </TableCell>
                <TableCell className='text-green-400 hover:text-green-800'>
                  <span className=" ">
                    {pool.priceRange.min.toFixed(4)} – {pool.priceRange.max.toFixed(4)}
                  </span>
                </TableCell>
                <TableCell> 
                  {pool.currentPrice.value.toFixed(4)} {pool.currentPrice.tokenA} per{' '}
                  {pool.currentPrice.tokenB}
                </TableCell>
                <TableCell>
                  {pool.tokenA.amount.toLocaleString()} {pool.tokenA.symbol}
                </TableCell>
                <TableCell>
                  {pool.tokenB.amount.toLocaleString()} {pool.tokenB.symbol}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

