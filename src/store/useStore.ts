import { create } from 'zustand';
import { Track } from '../types';
import * as Tone from 'tone';

interface DAWState {
  isPlaying: boolean;
  bpm: number;
  tracks: Track[];
  currentTime: number;
  setIsPlaying: (isPlaying: boolean) => void;
  setBpm: (bpm: number) => void;
  addTrack: () => void;
  removeTrack: (id: string) => void;
  updateTrack: (id: string, updates: Partial<Track>) => void;
}

export const useStore = create<DAWState>((set) => ({
  isPlaying: false,
  bpm: 120,
  tracks: [],
  currentTime: 0,
  
  setIsPlaying: (isPlaying) => {
    if (isPlaying) {
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
    }
    set({ isPlaying });
  },
  
  setBpm: (bpm) => {
    Tone.Transport.bpm.value = bpm;
    set({ bpm });
  },
  
  addTrack: () => {
    set((state) => ({
      tracks: [
        ...state.tracks,
        {
          id: crypto.randomUUID(),
          name: `Track ${state.tracks.length + 1}`,
          volume: 0,
          muted: false,
          soloed: false,
          clips: [],
        },
      ],
    }));
  },
  
  removeTrack: (id) => {
    set((state) => ({
      tracks: state.tracks.filter((track) => track.id !== id),
    }));
  },
  
  updateTrack: (id, updates) => {
    set((state) => ({
      tracks: state.tracks.map((track) =>
        track.id === id ? { ...track, ...updates } : track
      ),
    }));
  },
}));