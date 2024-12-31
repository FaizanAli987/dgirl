import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const WalletButton = () => {
  const { connected, publicKey } = useWallet();

  return (
    <div>
      <WalletMultiButton 
        className="!bg-red-500 hover:!bg-red-600 !text-white !font-bold !py-2 !px-4 !rounded-lg !transition-colors !duration-200 !shadow-lg !cursor-pointer !border-none" 
      />
      {connected && publicKey && (
        <div className="mt-4 text-sm text-gray-600">
          Connected: {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
        </div>
      )}
    </div>
  );
};

export default WalletButton; 