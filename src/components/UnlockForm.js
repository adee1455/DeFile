"use client";
import React, { useState } from 'react';
import Web3 from 'web3';

const UnlockForm = () => {
    const [paperId, setPaperId] = useState('');
    const [fileUrl, setFileUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [fileContent, setFileContent] = useState(null); // State to store file content

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const web3 = new Web3(Web3.givenProvider);
            const accounts = await web3.eth.requestAccounts();
            const contract = new web3.eth.Contract(
                JSON.parse(process.env.NEXT_PUBLIC_EXAM_PAPER_MANAGEMENT_CONTRACT_ABI),
                process.env.NEXT_PUBLIC_EXAM_PAPER_MANAGEMENT_CONTRACT_ADDRESS
            );

            await contract.methods.unlockPaper(paperId).send({ from: accounts[0] });

            const ipfsHash = await contract.methods.getIpfsHash(paperId).call({ from: accounts[0] });
            const fileUrl = `https://ipfs.io/ipfs/${ipfsHash}`;
            setFileUrl(fileUrl);

            // Fetch file content from IPFS
            const response = await fetch(fileUrl);
            const data = await response.blob();
            setFileContent(data);

            alert('Paper unlocked successfully');
        } catch (error) {
            console.error('Error unlocking paper:', error);
            alert('Error unlocking paper');
        } finally {
            setLoading(false);
        }
    };

    // Function to handle file download
    const handleDownload = () => {
        if (fileContent) {
            const url = URL.createObjectURL(fileContent);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `paper_${paperId}.pdf`; // Example: You can modify the file name here
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }
    };

    return (
        <div className="container">
            <h2>Unlock Exam Paper</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Paper ID"
                    value={paperId}
                    onChange={(e) => setPaperId(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>{loading ? 'Unlocking...' : 'Unlock'}</button>
            </form>
            {fileUrl && (
                <div>
                    <a href={fileUrl} target="_blank" rel="noopener noreferrer">View Paper</a> {/* Link to view paper */}
                    <button onClick={handleDownload}>Download Paper</button> {/* Button to download paper */}
                </div>
            )}
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                }
                input, button {
                    padding: 10px;
                    margin: 5px;
                }
            `}</style>
        </div>
    );
};

export default UnlockForm;
