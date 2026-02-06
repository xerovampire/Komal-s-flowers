import React, { useState } from 'react';
import { Screen } from './types';
import Background from './components/Background';
import ProposalScreen from './components/ProposalScreen';
import GiftFlowers from './components/GiftFlowers';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.PROPOSAL);

  const handleNext = () => {
    // Navigate directly to the flower gift as Menu is removed
    setCurrentScreen(Screen.GIFT_FLOWER);
  };

  const handleBack = () => {
    // Navigate back to the proposal
    setCurrentScreen(Screen.PROPOSAL);
  };

  return (
    <div className="fixed inset-0 bg-val-pink overflow-hidden">
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
  );
};

export default App;
