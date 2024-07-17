import React, { useState } from 'react';
import useIpfsAndEthereum from '../hooks/useIpfsAndEthereum';
import { ethers } from 'ethers';

const UploadForm = () => {
  const { connectWallet, uploadFileToIPFS, createPaper } = useIpfsAndEthereum();
  const [file, setFile] = useState(null);
  const [unlockTime, setUnlockTime] = useState('');
  const [authorizedUsers, setAuthorizedUsers] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await connectWallet();
      const ipfsHash = await uploadFileToIPFS(file);

      const paperId = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(ipfsHash));
      const unlockTimestamp = new Date(unlockTime).getTime() / 1000;
      const authorizedAddresses = authorizedUsers.split(',').map(addr => addr.trim());
    console.log("PaperId: " + paperId);
      await createPaper(paperId, ipfsHash, unlockTimestamp, authorizedAddresses);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload Exam Paper</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <input type="datetime-local" value={unlockTime} onChange={(e) => setUnlockTime(e.target.value)} required />
        <input type="text" placeholder="Authorized Users (comma separated addresses)" value={authorizedUsers} onChange={(e) => setAuthorizedUsers(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? 'Uploading...' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default UploadForm;
