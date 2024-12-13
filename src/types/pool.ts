export interface Pool {
    name: string
    percentage: string
    balance: number
    pendingYield: number
    estYield: number
    priceRange: {
      min: number
      max: number
    }
    currentPrice: {
      value: number
      tokenA: string
      tokenB: string
    }
    tokenA: {
      amount: number
      symbol: string
    }
    tokenB: {
      amount: number
      symbol: string
    }
  }
  
  