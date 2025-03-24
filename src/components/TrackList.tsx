import React from 'react';
import { Volume2, Mic2, Plus } from 'lucide-react';
import { useStore } from '../store/useStore';

export const TrackList: React.FC = () => {
  const { tracks, addTrack, updateTrack, removeTrack } = useStore();

  return (
    <div className="flex-1 bg-gray-900 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-white font-bold">Tracks</h2>
        <button
          onClick={addTrack}
          className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Track</span>
        </button>
      </div>
      
      <div className="space-y-2">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg"
          >
            <Mic2 className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={track.name}
              onChange={(e) => updateTrack(track.id, { name: e.target.value })}
              className="bg-transparent text-white focus:outline-none"
            />
            
            <div className="flex items-center space-x-2 ml-auto">
              <Volume2 className="w-5 h-5 text-gray-400" />
              <input
                type="range"
                min="-60"
                max="0"
                value={track.volume}
                onChange={(e) => updateTrack(track.id, { volume: Number(e.target.value) })}
                className="w-24"
              />
              
              <button
                onClick={() => updateTrack(track.id, { muted: !track.muted })}
                className={`px-2 py-1 rounded ${
                  track.muted ? 'bg-red-600' : 'bg-gray-700'
                }`}
              >
                M
              </button>
              
              <button
                onClick={() => updateTrack(track.id, { soloed: !track.soloed })}
                className={`px-2 py-1 rounded ${
                  track.soloed ? 'bg-green-600' : 'bg-gray-700'
                }`}
              >
                S
              </button>
              
              <button
                onClick={() => removeTrack(track.id)}
                className="px-2 py-1 text-red-500 hover:text-red-400"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};