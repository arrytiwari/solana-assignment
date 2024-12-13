// import { fetchPositionsForOwner, setWhirlpoolsConfig } from '@orca-so/whirlpools';
// import { createSolanaRpc, devnet, address, mainnet } from '@solana/web3.js';

// const handleWalletSubmit = async (walletAddress: string) => {
//   setLoading(true);
//   try {
//     // Set Whirlpools configuration
//     await setWhirlpoolsConfig('solanaDevnet');

//     // Create Solana RPC client
//     const devnetRpc = createSolanaRpc(mainnet('https://api.mainnet-beta.solana.com'));

//     // Convert wallet address to Solana Address
//     const owner = address(walletAddress);

//     // Fetch positions
//     const positions = await fetchPositionsForOwner(devnetRpc, owner);

//     // Map fetched positions to Pool type for rendering
//     const mappedPools = positions.map((pos) => ({
//       name: `${pos.data.discriminator.}`, // Adjust based on actual position data
//       percentage: `${pos.percent}`, // Replace with actual data
//       balance: pos.balance,
//       pendingYield: pos.pendingYield || 0,
//       estYield: pos.estimatedYield || 0,
//       priceRange: {
//         min: pos.priceLower,
//         max: pos.priceUpper,
//       },
//       currentPrice: {
//         value: pos.currentPrice,
//         tokenA: pos.tokenA.symbol,
//         tokenB: pos.tokenB.symbol,
//       },
//       tokenA: {
//         amount: pos.tokenA.amount,
//         symbol: pos.tokenA.symbol,
//       },
//       tokenB: {
//         amount: pos.tokenB.amount,
//         symbol: pos.tokenB.symbol,
//       },
//     }));

//     setPools(mappedPools);
//     setVisiblePools(10);
//   } catch (error) {
//     console.error('Error fetching positions:', error);
//   } finally {
//     setLoading(false);
//   }
// };

