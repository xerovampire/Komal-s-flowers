import React, { useState, useEffect } from 'react';
import { Screen } from './types';
import Background from './components/Background';
import ProposalScreen from './components/ProposalScreen';
import GiftFlowers from './components/GiftFlowers';

const TARGET_WIDTH = 1024;
const TARGET_HEIGHT = 768;

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.PROPOSAL);
  const [dimensions, setDimensions] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1024, 
    height: typeof window !== 'undefined' ? window.innerHeight : 768 
  });

  // Handle scaling logic
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    // Initial calculation
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the scale to fit the target aspect ratio into the current window
  const scale = Math.min(
    dimensions.width / TARGET_WIDTH, 
    dimensions.height / TARGET_HEIGHT
  );

  const handleNext = () => {
    // Navigate directly to the flower gift as Menu is removed
    setCurrentScreen(Screen.GIFT_FLOWER);
  };

  const handleBack = () => {
    // Navigate back to the proposal
    setCurrentScreen(Screen.PROPOSAL);
  };

  return (
    // Outer viewport: darker background for the letterbox effect
    <div className="fixed inset-0 bg-neutral-900 overflow-hidden">
      
      {/* Scaled Container: The "Tablet" view */}
      <div 
        style={{
          width: `${TARGET_WIDTH}px`,
          height: `${TARGET_HEIGHT}px`,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center',
        }}
        className="relative shadow-2xl overflow-hidden bg-val-pink"
      >
        <Background>
          {/* Keyed wrapper triggers animation when currentScreen changes */}
          <div key={currentScreen} className="w-full h-full animate-pop-in">
            {currentScreen === Screen.PROPOSAL && (
              <ProposalScreen onNext={handleNext} />
            )}
            
            {currentScreen === Screen.GIFT_FLOWER && (
              <GiftFlowers onBack={handleBack} />
            )}
          </div>
        </Background>
      </div>
    </div>
  );
};

export default App;