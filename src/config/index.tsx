import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

// import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Get projectId from https://cloud.walletconnect.com
export const projectId = '5d16e2c0f85cdb58d7408b89cd47bf24';

if (!projectId) throw new Error('Project ID is not defined')

export const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, sepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  auth: {
    email: true, // default to true
    socials: ['google', 'x', 'github', 'discord'],
    showWallets: false, // default to true
    walletFeatures: true // default to true
  }
})