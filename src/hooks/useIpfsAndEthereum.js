
import { useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';

const useIpfsAndEthereum = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = web3Provider.getSigner();
        setProvider(web3Provider);
        setSigner(signer);
  
        const contractAddress = process.env.NEXT_PUBLIC_EXAM_PAPER_MANAGEMENT_CONTRACT_ADDRESS;
        const contractABI = JSON.parse(process.env.NEXT_PUBLIC_EXAM_PAPER_MANAGEMENT_CONTRACT_ABI);
        if (!contractAddress || !contractABI) {
          throw new Error('Contract address or ABI not provided in environment variables.');
        }
  
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        console.log('Contract initialized:', contract);
        setContract(contract);
      } else {
        alert('Please install MetaMask or another Ethereum wallet provider to use this feature');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet. See console for details.');
    }
  };
  

  const uploadFileToIPFS = async (file) => {
    try {
      const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(url, formData, {
        maxContentLength: 'Infinity',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'pinata_api_key': process.env.NEXT_PUBLIC_PINATA_API_KEY,
          'pinata_secret_api_key': process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
        },
      });

      console.log(response.data.IpfsHash);
      return response.data.IpfsHash;
    } catch (error) {
      console.error('Error uploading file to IPFS:', error);
      alert('Failed to upload file to IPFS');
      return null;
    }
  };

  const createPaper = async (paperId, ipfsHash, unlockTime, authorizedUsers) => {
    try {
      if (!contract) {
        alert('Click on the submit button again to Confirm');
        return;
      }

      const transaction = await contract.createPaper(paperId, ipfsHash, unlockTime, authorizedUsers);
      await transaction.wait();
      alert('Paper created successfully!');
    } catch (error) {
      console.error('Error creating paper:', error);
      alert('Failed to create paper');
    }
  };

  return { connectWallet, uploadFileToIPFS, createPaper };
};

export default useIpfsAndEthereum;
