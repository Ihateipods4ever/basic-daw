import { PluginType, PluginParameter } from '../types';

export const pluginParameters: Record<PluginType, Record<string, PluginParameter>> = {
  [PluginType.EQ]: {
    low: {
      name: 'Low',
      min: -60,
      max: 12,
      default: 0,
      step: 1,
      unit: 'dB'
    },
    mid: {
      name: 'Mid',
      min: -60,
      max: 12,
      default: 0,
      step: 1,
      unit: 'dB'
    },
    high: {
      name: 'High',
      min: -60,
      max: 12,
      default: 0,
      step: 1,
      unit: 'dB'
    }
  },
  [PluginType.Compressor]: {
    threshold: {
      name: 'Threshold',
      min: -60,
      max: 0,
      default: -24,
      step: 1,
      unit: 'dB'
    },
    ratio: {
      name: 'Ratio',
      min: 1,
      max: 20,
      default: 4,
      step: 0.5
    },
    attack: {
      name: 'Attack',
      min: 0,
      max: 1000,
      default: 50,
      step: 1,
      unit: 'ms'
    },
    release: {
      name: 'Release',
      min: 0,
      max: 1000,
      default: 250,
      step: 1,
      unit: 'ms'
    }
  },
  [PluginType.Reverb]: {
    decay: {
      name: 'Decay',
      min: 0.1,
      max: 10,
      default: 1.5,
      step: 0.1,
      unit: 's'
    },
    mix: {
      name: 'Mix',
      min: 0,
      max: 1,
      default: 0.5,
      step: 0.01
    }
  },
  [PluginType.Delay]: {
    time: {
      name: 'Time',
      min: 0,
      max: 1,
      default: 0.25,
      step: 0.01,
      unit: 's'
    },
    feedback: {
      name: 'Feedback',
      min: 0,
      max: 1,
      default: 0.5,
      step: 0.01
    },
    mix: {
      name: 'Mix',
      min: 0,
      max: 1,
      default: 0.3,
      step: 0.01
    }
  }
};