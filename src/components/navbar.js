"use client";
import React from 'react';
import useIpfsAndEthereum from '@/hooks/useIpfsAndEthereum';
const Navbar = () => {
  const { connectWallet, account, loading } = useIpfsAndEthereum();

  const handleConnectWallet = async () => {
    console.log("Button clicked");
   connectWallet();
  };

  return (
    <div>
        <nav className="bg-white  dark:bg-white fixed w-full h-[73px]  z-20 top-0 start-0 ">
  <div className ="max-w-screen-xl flex flex-wrap items-center dark:text-blue-600 text-blue-600  justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/logo2.png" class="sm:h-12 h-8" alt=" Logo"/>
      <span className="self-center font-mono md:text-3xl text-xl  font-semibold whitespace-nowrap ">DeFile</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      {/* <button type="button" class="text-white  hover:bg-white hover:text-black dark:hover:text-black border-black bg-black dark:hover:border dark:border focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-black  dark:hover:white ">Get started</button> */}
      <button 
        className="relative md:inline-flex sm:hidden hidden h-12   overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        onClick={handleConnectWallet}
        disabled={loading}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-500 md:px-7 px-4 py-1 text-sm font-semibold text-white backdrop-blur-3xl">
          {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
        </span>
      </button>

<button onClick={() => document.getElementById('dropdown').classList.toggle('hidden')} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="dropdown" aria-expanded="false" aria-hidden="true">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="dropdown">
    <ul className="flex flex-col text-black p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
    <li>
        <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100   dark:hover:bg-gray-700 dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100   dark:hover:bg-gray-700 dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100   dark:hover:bg-gray-700 dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700">App</a>
      </li>
     
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
