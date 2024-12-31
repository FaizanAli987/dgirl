import React from 'react';
import WalletButton from './WalletButton';
import { useWallet } from '@solana/wallet-adapter-react';

const DisasterTradesModal = ({ isOpen, onClose }) => {
  const { connected } = useWallet();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Disaster Trades</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Track Your Disaster Trades</h3>
          <p className="text-gray-600 mb-4">
            Connect your Solana wallet to analyze your trades and discover your disaster score.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">What we'll analyze:</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Trades made during 2024</li>
              <li>Losses from sold tokens</li>
              <li>Current losses from held tokens</li>
              <li>Dead token detection (rugs)</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <WalletButton />
          
          {connected && (
            <button
              onClick={() => {
                console.log('Starting analysis...');
                // TODO: Connect to your backend service here
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 shadow-lg"
            >
              Analyze My Trades
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisasterTradesModal; 