import React, { useState } from 'react';

interface GiftFlowersProps {
  onBack: () => void;
}

const GiftFlowers: React.FC<GiftFlowersProps> = ({ onBack }) => {
  // Image handling: Use hosted URL, fallback to Unsplash if it fails
  const [imgSrc, setImgSrc] = useState('https://i.ibb.co/YrBZbY7/file-0000000092a87230b0a314ee7679d9a3.png');
  const handleImgError = () => {
    setImgSrc('https://images.unsplash.com/photo-1563241527-30058e5f2259?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80');
  };

  return (
    <div className="flex flex-col items-center h-full p-4 pt-10 relative">
      <h1 className="text-5xl font-hand font-bold text-val-red mb-12 text-center px-6">
        Your Rose Bouquet 🌹
      </h1>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl gap-4 relative">
        
        {/* Center Image */}
        <div className="relative flex justify-center z-10">
            <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl transform scale-75"></div>
            
            {/* Bouquet Illustration with Theme Border */}
            <div className="transform rotate-1 hover:scale-105 transition-transform duration-500 bg-white p-3 rounded-[2rem] border-4 border-val-pink shadow-lg">
                 <img 
                    src={imgSrc}
                    onError={handleImgError}
                    alt="Rose Bouquet"
                    className="w-80 object-contain rounded-2xl"
                 />
            </div>
        </div>

        {/* Big Paragraph Underneath - Moved upward with negative margin and reduced gap */}
        <div className="max-w-xl mx-auto px-6 py-4 bg-white/40 rounded-2xl border-2 border-val-pink/50 backdrop-blur-sm transform -rotate-1 shadow-sm -mt-16 z-20">
          <p className="text-3xl font-hand leading-relaxed text-val-dark text-center">
            Happy Rose Day 🌹, my baby 🎀! I wish I could give you this in person, but please adjust to this for now. I love you so much ❤️💗
          </p>
        </div>

      </div>

      <button 
        onClick={onBack}
        className="absolute bottom-8 right-8 text-val-dark font-hand font-bold text-xl hover:scale-110 transition-transform flex items-center gap-2"
      >
        <span>click me to go back</span>
        <span className="text-2xl">↩</span>
      </button>
    </div>
  );
};

export default GiftFlowers;
