import React from 'react';
import { Settings, Power } from 'lucide-react';
import { Plugin, PluginType } from '../types';
import { pluginParameters } from '../plugins/pluginParameters';
import { useStore } from '../store/useStore';

interface PluginRackProps {
  trackId: string;
  plugins: Plugin[];
}

export const PluginRack: React.FC<PluginRackProps> = ({ trackId, plugins }) => {
  const { addPlugin, updatePlugin, removePlugin } = useStore();

  return (
    <div className="bg-gray-800 p-4 rounded-lg space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Plugins</h3>
        <div className="flex space-x-2">
          {Object.values(PluginType).map((type) => (
            <button
              key={type}
              onClick={() => addPlugin(trackId, type)}
              className="px-3 py-1 bg-blue-600 text-sm rounded hover:bg-blue-700"
            >
              Add {type}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {plugins.map((plugin) => (
          <div key={plugin.id} className="bg-gray-700 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-3">
                <Settings className="w-4 h-4 text-gray-400" />
                <span className="font-medium">{plugin.type}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updatePlugin(trackId, plugin.id, { bypass: !plugin.bypass })}
                  className={`p-1 rounded ${plugin.bypass ? 'text-gray-500' : 'text-blue-500'}`}
                >
                  <Power className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removePlugin(trackId, plugin.id)}
                  className="text-red-500 hover:text-red-400"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(pluginParameters[plugin.type]).map(([key, param]) => (
                <div key={key} className="space-y-1">
                  <label className="text-sm text-gray-400">
                    {param.name}
                    {param.unit && <span className="text-gray-500 ml-1">({param.unit})</span>}
                  </label>
                  <input
                    type="range"
                    min={param.min}
                    max={param.max}
                    step={param.step}
                    value={plugin.parameters[key] ?? param.default}
                    onChange={(e) =>
                      updatePlugin(trackId, plugin.id, {
                        parameters: {
                          ...plugin.parameters,
                          [key]: Number(e.target.value)
                        }
                      })
                    }
                    className="w-full"
                  />
                  <div className="text-sm text-right">
                    {(plugin.parameters[key] ?? param.default).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};