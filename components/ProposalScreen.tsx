import React, { useState } from 'react';

interface ProposalScreenProps {
  onNext: () => void;
}

const ProposalScreen: React.FC<ProposalScreenProps> = ({ onNext }) => {
  // Image handling: Use hosted URL, fallback to GIF if it fails
  const [imgSrc, setImgSrc] = useState('https://i.ibb.co/FLLW1fQh/valentine-s-day-rabbits-couple-hand-drawn-23-2148385504-removebg-preview.png');
  const handleImgError = () => {
    setImgSrc('https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      
      {/* Cute Main Image */}
      <div className="mb-8 relative">
        <img 
          src={imgSrc} 
          onError={handleImgError}
          alt="Cute Valentine" 
          className="w-64 h-64 object-contain drop-shadow-xl transition-all duration-300"
        />
        <div className="absolute -top-6 -right-6 text-5xl animate-bounce">
          💌
        </div>
      </div>

      {/* Title & Message */}
      <div className="max-w-2xl mx-auto px-4 mb-12">
        <h1 className="text-6xl font-bold text-val-dark mb-6 tracking-wide font-hand leading-tight">
          Happy Rose Day 🌹
        </h1>
      </div>

      {/* Button */}
      <button
        onClick={onNext}
        className="bg-val-pink border-2 border-val-dark text-val-dark px-10 py-4 rounded-full font-bold text-2xl shadow-[4px_4px_0px_0px_rgba(192,74,98,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(192,74,98,1)] transition-all active:translate-y-2 active:shadow-none"
      >
        click here
      </button>

      <div className="mt-12 opacity-50 text-sm font-hand">
        (don't forget to smile hehe)
      </div>
    </div>
  );
};

export default ProposalScreen;