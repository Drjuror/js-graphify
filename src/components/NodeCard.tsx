
import React from 'react';
import { Handle, Position } from '@xyflow/react';

interface Section {
  title: string;
  icon: string;
  subtitle: string;
}

interface NodeCardProps {
  data: {
    title: string;
    color: string;
    items?: string[];
    sections?: Section[];
  };
  isConnectable?: boolean;
}

const NodeCard: React.FC<NodeCardProps> = ({ data, isConnectable }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <div 
        className="py-2 px-4 text-white font-semibold" 
        style={{ backgroundColor: data.color }}
      >
        <div className="flex items-center justify-center">
          <div className="h-0.5 bg-white flex-grow mr-2 opacity-50"></div>
          <span className="text-lg whitespace-nowrap">{data.title}</span>
          <div className="h-0.5 bg-white flex-grow ml-2 opacity-50"></div>
        </div>
      </div>

      <div className="p-4">
        {data.items && (
          <ul className="text-sm space-y-2">
            {data.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {data.sections && (
          <div className="grid grid-cols-2 gap-4">
            {data.sections.map((section, index) => (
              <div key={index} className="bg-indigo-50 p-2 rounded-md border border-indigo-100">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xl">{section.icon}</span>
                  <span className="font-medium text-indigo-700">{section.title}</span>
                </div>
                <div className="text-xs text-indigo-500 ml-6">{section.subtitle}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="w-3 h-3 bg-indigo-500 border-2 border-white"
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="w-3 h-3 bg-indigo-500 border-2 border-white"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="top"
        className="w-3 h-3 bg-indigo-500 border-2 border-white"
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom"
        className="w-3 h-3 bg-indigo-500 border-2 border-white"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default NodeCard;
