import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Modal } from '../context/web3modal'
import { headers } from 'next/headers'

import { cookieToInitialState } from 'wagmi'

import { config } from '@/config'
import Web3ModalProvider from '@/context'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DeFile",
  description: "Decentralized File Locker",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider initialState={initialState}>{children}</Web3ModalProvider>
      </body>
    </html>
  )
}