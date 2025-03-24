export interface Track {
  id: string;
  name: string;
  volume: number;
  muted: boolean;
  soloed: boolean;
  clips: Clip[];
}

export interface Clip {
  id: string;
  startTime: number;
  duration: number;
  notes: Note[];
}

export interface Note {
  pitch: string;
  time: number;
  duration: number;
  velocity: number;
}