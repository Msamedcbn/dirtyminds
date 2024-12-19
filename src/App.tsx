import React, { useState } from 'react';
import { GameContainer } from './components/GameContainer';
import { SplashScreen } from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {showSplash ? (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        ) : (
          <GameContainer />
        )}
      </main>
      
      <footer className="text-center py-4 text-gray-600 text-sm">
        All rights reserved by Holypredator © 2024
      </footer>
    </div>
  );
}

export default App;