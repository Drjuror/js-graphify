
import React, { useRef, useEffect, useState } from 'react';
import { 
  ReactFlow, 
  Node, 
  Edge, 
  Background, 
  Controls, 
  MiniMap, 
  MarkerType,
  useNodesState,
  useEdgesState,
  NodeTypes
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import NodeCard from './NodeCard';

const nodeTypes: NodeTypes = {
  card: NodeCard
};

const AgentFramework: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  useEffect(() => {
    // Define the nodes for our visualization
    const initialNodes: Node[] = [
      // Center LLM node
      {
        id: 'llm',
        type: 'default',
        position: { x: 450, y: 250 },
        data: { 
          label: (
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">LLMs</div>
              <div className="w-16 h-16 mt-2 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
                  <path d="M10 17v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3" />
                  <path d="M8 14.5c-2 0-3-1-3-3" />
                  <path d="M16 14.5c2 0 3-1 3-3" />
                </svg>
                <span className="absolute right-2 bottom-2 text-xl">AI</span>
              </div>
            </div>
          ) 
        },
        style: {
          width: 100,
          height: 100,
          borderRadius: '50%',
          border: '2px solid #6366f1',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10
        }
      },
      
      // Role Pool Card
      {
        id: 'role-pool',
        type: 'card',
        position: { x: 100, y: 150 },
        data: { 
          title: '角色池',
          color: '#818cf8',
          items: [
            '开发：前端、后端、测试...',
            '数据分析：数仓工程师、BI 分析师、DS 科学家...',
            '游戏 NPC：普通人物、剧情...',
            '行政角色：关系管理、日程安排...'
          ]
        },
        style: { width: 320 }
      },
      
      // Tool Pool Card
      {
        id: 'tool-pool',
        type: 'card',
        position: { x: 100, y: 350 },
        data: { 
          title: '工具池',
          color: '#818cf8',
          items: [
            'Calculator ()',
            'Search ()',
            'Calendar()',
            'CodeInterpreter()',
            'And more...'
          ]
        },
        style: { width: 320 }
      },
      
      // Perception Card
      {
        id: 'perception',
        type: 'card',
        position: { x: 450, y: 450 },
        data: { 
          title: '感知',
          color: '#818cf8',
          items: [
            '虚拟环境：网页、PDF、表格',
            '多模态：文本、视频、图片'
          ]
        },
        style: { width: 300 }
      },
      
      // Memory Card
      {
        id: 'memory',
        type: 'card',
        position: { x: 800, y: 250 },
        data: { 
          title: '长期记忆',
          color: '#818cf8',
          sections: [
            { title: '工作记忆', icon: '📝', subtitle: 'context' },
            { title: '事件记忆', icon: '📅', subtitle: 'record' },
            { title: '语义记忆', icon: '🧠', subtitle: 'knowledge' },
            { title: '源程记忆', icon: '💻', subtitle: 'code' }
          ]
        },
        style: { width: 340 }
      }
    ];

    // Define the edges for our visualization
    const initialEdges: Edge[] = [
      // Role-play connection
      {
        id: 'role-to-llm',
        source: 'role-pool',
        target: 'llm',
        label: '职责扮演',
        labelBgStyle: { fill: 'white' },
        labelStyle: { fontSize: 12 },
        type: 'smoothstep',
        style: { stroke: '#6366f1', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' }
      },
      
      // Tool using connection
      {
        id: 'tool-to-llm',
        source: 'tool-pool',
        target: 'llm',
        label: '工具使用',
        labelBgStyle: { fill: 'white' },
        labelStyle: { fontSize: 12 },
        type: 'smoothstep',
        style: { stroke: '#6366f1', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' }
      },
      
      // Reasoning connection (bidirectional)
      {
        id: 'llm-to-memory',
        source: 'llm',
        target: 'memory',
        label: '推理',
        labelBgStyle: { fill: 'white' },
        labelStyle: { fontSize: 12 },
        type: 'smoothstep',
        style: { stroke: '#6366f1', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' }
      },
      {
        id: 'memory-to-llm',
        source: 'memory',
        target: 'llm',
        label: '',
        type: 'smoothstep',
        style: { stroke: '#6366f1', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' }
      },
      
      // Learning connection
      {
        id: 'perception-to-llm',
        source: 'perception',
        target: 'llm',
        label: '学习',
        labelBgStyle: { fill: 'white' },
        labelStyle: { fontSize: 12 },
        type: 'smoothstep',
        style: { stroke: '#6366f1', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' }
      },
      
      // Retrieval connection
      {
        id: 'llm-to-memory-search',
        source: 'llm',
        target: 'memory',
        label: '检索',
        labelBgStyle: { fill: 'white' },
        labelStyle: { fontSize: 12 },
        animated: true,
        type: 'straight',
        style: { stroke: '#6366f1', strokeWidth: 2, strokeDasharray: '5 5' },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' }
      }
    ];

    setNodes(initialNodes);
    setEdges(initialEdges);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="absolute top-4 left-0 w-full text-center z-10">
        <h1 className="text-3xl font-bold text-indigo-500">LLM-based Agent Framework</h1>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.5}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      >
        <Controls />
        <Background color="#f1f5f9" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default AgentFramework;
