import React, { useEffect } from 'react';
import * as Tone from 'tone';
import { Transport } from './components/Transport';
import { TrackList } from './components/TrackList';

function App() {
  useEffect(() => {
    // Initialize Tone.js
    Tone.start();
    Tone.Transport.bpm.value = 120;
  }, []);

  const handleClick = async () => {
    await Tone.start();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white" onClick={handleClick}>
      <div className="container mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">React DAW</h1>
        </header>
        
        <main className="space-y-6">
          <Transport />
          <TrackList />
        </main>
      </div>
    </div>
  );
}

export default App;