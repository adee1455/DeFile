'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '5d16e2c0f85cdb58d7408b89cd47bf24'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com',
  
}
const testnet = {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'SepoliaETH',
    explorerUrl: 'https://sepolia.etherscan.io/',
    rpcUrl: 'https://eth-sepolia.g.alchemy.com/v2/UEi3OlYcSdlnavJoB9mQWf6f2VQGAeBf',
    
  }

// 3. Create a metadata object
const metadata = {
  name: 'DeFile',
  description: 'Decentralized File Locker',
  url: 'https://defile.vercel.app', // origin must match your domain & subdomain
  icons: ['https://drive.google.com/file/d/15E-Th6oVxc5iqNBNfHnkCCAy_6V858Tl/view?usp=sharing']
}

// 4. Create Ethers config
// const ethersConfig = defaultConfig({
//   metadata,
//   auth: {
//     email: true, // default to true
//     socials: ['google', 'x', 'github', 'discord', 'apple'],
//     showWallets: true, // default to true
//     walletFeatures: true // default to true
//   },
//   enableEIP6963: true, // true by default
//   enableInjected: true, // true by default
//   enableCoinbase: true, // true by default
//   rpcUrl: '...', // used for the Coinbase SDK
//   defaultChainId: 1 // used for the Coinbase SDK
// })

// 5. Create a Web3Modal instance
// createWeb3Modal({
//   ethersConfig,
//   chains: [testnet],
//   projectId,
//   enableOnramp: true,
//   enableAnalytics: true // Optional - defaults to your Cloud configuration
// })
createWeb3Modal({
    ethersConfig: defaultConfig({
        metadata,
        auth: {
            email: true, // default to true
            socials: ['google', 'x', 'github', 'discord', 'apple'],
            showWallets: false, // default to true
            walletFeatures: true // default to true
        },
        enableEIP6963: true, // true by default
        enableInjected: true, // true by default
        enableCoinbase: true, // true by default
        rpcUrl: '...', // used for the Coinbase SDK
        defaultChainId: 1 // used for the Coinbase SDK
    }),
    projectId,
    chains: [testnet],
    enableOnramp: true,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
})
export function Web3Modal({ children }) {
  return children
}