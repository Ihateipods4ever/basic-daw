import React from 'react';
import { Play, Pause, Square, Settings } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Transport: React.FC = () => {
  const { isPlaying, bpm, setIsPlaying, setBpm } = useStore();

  return (
    <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="p-2 rounded-full hover:bg-gray-700 transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-white" />
        ) : (
          <Play className="w-6 h-6 text-white" />
        )}
      </button>
      
      <button
        onClick={() => setIsPlaying(false)}
        className="p-2 rounded-full hover:bg-gray-700 transition-colors"
      >
        <Square className="w-6 h-6 text-white" />
      </button>
      
      <div className="flex items-center space-x-2">
        <Settings className="w-5 h-5 text-gray-400" />
        <input
          type="number"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
          className="w-16 bg-gray-700 text-white rounded px-2 py-1"
          min="20"
          max="300"
        />
        <span className="text-gray-400">BPM</span>
      </div>
    </div>
  );
};