
import React, { useEffect } from 'react';
import { 
  ReactFlow, 
  Node, 
  Edge, 
  Background, 
  Controls, 
  MarkerType,
  useNodesState,
  useEdgesState,
  NodeTypes
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import NodeCard from './NodeCard';
import JiraServiceNodes from './JiraServiceNodes';

const nodeTypes: NodeTypes = {
  card: NodeCard,
  user: JiraServiceNodes.UserNode,
  ui: JiraServiceNodes.UINode,
  webhook: JiraServiceNodes.WebhookNode,
  server: JiraServiceNodes.ServerNode,
  issueBlue: JiraServiceNodes.IssueBlueNode,
  issueEntry: JiraServiceNodes.IssueEntryNode,
  webhookUrl: JiraServiceNodes.WebhookUrlNode,
  issueSubmit: JiraServiceNodes.IssueSubmitNode,
  issueGet: JiraServiceNodes.IssueGetNode,
  redisContainer: JiraServiceNodes.RedisContainerNode,
  issueUpdate: JiraServiceNodes.IssueUpdateNode,
  task: JiraServiceNodes.TaskNode,
  taskBox: JiraServiceNodes.TaskBoxNode,
  threadPool: JiraServiceNodes.ThreadPoolNode
};

const AgentFramework: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  useEffect(() => {
    // Define the nodes for our visualization
    const initialNodes: Node[] = [
      // Left Side - Jira Service
      {
        id: 'jira-title',
        type: 'default',
        position: { x: 170, y: 50 },
        data: { label: 'Jira服务' },
        style: { fontSize: '20px', fontWeight: 'bold', width: 120, background: 'transparent', border: 'none' }
      },
      {
        id: 'user',
        type: 'user',
        position: { x: 60, y: 150 },
        data: {}
      },
      {
        id: 'ui',
        type: 'ui',
        position: { x: 170, y: 250 },
        data: { label: 'UI' }
      },
      {
        id: 'webhook',
        type: 'webhook',
        position: { x: 170, y: 420 },
        data: { label: 'webhook' }
      },
      {
        id: 'server',
        type: 'server',
        position: { x: 170, y: 670 },
        data: { label: 'server' }
      },
      
      // Right Side - Project Service
      {
        id: 'project-title',
        type: 'default',
        position: { x: 840, y: 50 },
        data: { label: '项目中台服务' },
        style: { fontSize: '20px', fontWeight: 'bold', width: 200, background: 'transparent', border: 'none' }
      },
      {
        id: 'issue-entry',
        type: 'issueEntry',
        position: { x: 570, y: 370 },
        data: { label: 'issue管理入口' }
      },
      {
        id: 'webhook-url',
        type: 'webhookUrl',
        position: { x: 570, y: 470 },
        data: { label: 'webhook-url' }
      },
      {
        id: 'issue-blue',
        type: 'issueBlue',
        position: { x: 570, y: 570 },
        data: { label: 'issue' }
      },
      {
        id: 'issue-update',
        type: 'issueUpdate',
        position: { x: 570, y: 700 },
        data: { label: '增量拉取更新issue' }
      },
      {
        id: 'issue-submit',
        type: 'issueSubmit',
        position: { x: 570, y: 250 },
        data: { label: '提交变更issue' }
      },
      {
        id: 'redis-container',
        type: 'redisContainer',
        position: { x: 820, y: 220 },
        data: { 
          title: '变更Issue缓冲',
          queueTitle: 'redis队列' 
        }
      },
      {
        id: 'issue-get',
        type: 'issueGet',
        position: { x: 1070, y: 250 },
        data: { label: '获取变更issue' }
      },
      {
        id: 'task-box-seal',
        type: 'taskBox',
        position: { x: 1070, y: 370 },
        data: { label: '封装更新task' }
      },
      {
        id: 'task',
        type: 'task',
        position: { x: 1070, y: 490 },
        data: { label: 'task' }
      },
      {
        id: 'task-box-execute',
        type: 'taskBox',
        position: { x: 1070, y: 610 },
        data: { label: '执行task' }
      },
      {
        id: 'thread-pool',
        type: 'threadPool',
        position: { x: 820, y: 550 },
        data: { title: '任务更新线程池' }
      }
    ];

    // Define the edges for our visualization
    const initialEdges: Edge[] = [
      // Left Side - Jira Service connections
      {
        id: 'user-to-ui',
        source: 'user',
        target: 'ui',
        label: 'operate',
        labelBgStyle: { fill: 'white' },
        labelStyle: { fontSize: 12 },
        type: 'smoothstep',
        style: { stroke: '#c026d3', strokeWidth: 2 },
      },
      {
        id: 'ui-to-webhook',
        source: 'ui',
        target: 'webhook',
        label: 'advice',
        labelBgStyle: { fill: 'white' },
        labelStyle: { fontSize: 12 },
        type: 'smoothstep',
        style: { stroke: '#c026d3', strokeWidth: 2 },
      },
      {
        id: 'webhook-to-webhook-url',
        source: 'webhook',
        target: 'webhook-url',
        label: 'push',
        labelBgStyle: { fill: 'white' },
        labelStyle: { fontSize: 12, fill: 'red' },
        type: 'default',
        style: { stroke: 'red', strokeWidth: 2 },
      },
      {
        id: 'server-to-issue-update',
        source: 'server',
        target: 'issue-update',
        label: 'pull',
        labelBgStyle: { fill: 'white' },
        labelStyle: { fontSize: 12, fill: 'red' },
        type: 'default',
        style: { stroke: 'red', strokeWidth: 2 },
        animated: true
      },
      
      // Right Side - Project Service connections
      {
        id: 'webhook-url-to-issue-entry',
        source: 'webhook-url',
        target: 'issue-entry',
        type: 'default',
        style: { stroke: 'black', strokeWidth: 2 },
        markerEnd: { type: MarkerType.Arrow, color: 'black' }
      },
      {
        id: 'issue-blue-to-issue-entry',
        source: 'issue-blue',
        target: 'issue-entry',
        type: 'default',
        style: { stroke: 'black', strokeWidth: 2 },
        markerEnd: { type: MarkerType.Arrow, color: 'black' }
      },
      {
        id: 'issue-entry-to-issue-submit',
        source: 'issue-entry',
        target: 'issue-submit',
        type: 'default',
        style: { stroke: 'black', strokeWidth: 2 },
        markerEnd: { type: MarkerType.Arrow, color: 'black' }
      },
      {
        id: 'issue-update-to-issue-blue',
        source: 'issue-update',
        target: 'issue-blue',
        type: 'default',
        style: { stroke: 'black', strokeWidth: 2 },
        markerEnd: { type: MarkerType.Arrow, color: 'black' }
      },
      {
        id: 'issue-submit-to-redis',
        source: 'issue-submit',
        target: 'redis-container',
        type: 'smoothstep',
        style: { stroke: '#c026d3', strokeWidth: 2 },
        markerEnd: { type: MarkerType.Arrow, color: '#c026d3' }
      },
      {
        id: 'redis-to-issue-get',
        source: 'redis-container',
        target: 'issue-get',
        type: 'smoothstep',
        style: { stroke: '#c026d3', strokeWidth: 2 },
        markerEnd: { type: MarkerType.Arrow, color: '#c026d3' }
      },
      {
        id: 'issue-get-to-task-seal',
        source: 'issue-get',
        target: 'task-box-seal',
        type: 'smoothstep',
        style: { stroke: '#c026d3', strokeWidth: 2 },
        markerEnd: { type: MarkerType.Arrow, color: '#c026d3' }
      },
      {
        id: 'task-seal-to-task',
        source: 'task-box-seal',
        target: 'task',
        type: 'smoothstep',
        style: { stroke: '#c026d3', strokeWidth: 2 },
        markerEnd: { type: MarkerType.Arrow, color: '#c026d3' }
      },
      {
        id: 'task-to-task-execute',
        source: 'task',
        target: 'task-box-execute',
        type: 'smoothstep',
        style: { stroke: '#c026d3', strokeWidth: 2 },
        markerEnd: { type: MarkerType.Arrow, color: '#c026d3' }
      },
      {
        id: 'thread-pool-to-task-execute',
        source: 'thread-pool',
        target: 'task-box-execute',
        type: 'smoothstep',
        style: { stroke: '#c026d3', strokeWidth: 2 },
        markerEnd: { type: MarkerType.Arrow, color: '#c026d3' }
      }
    ];

    setNodes(initialNodes);
    setEdges(initialEdges);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="absolute top-4 left-0 w-full text-center z-10">
        <h1 className="text-3xl font-bold text-indigo-500">Jira服务工作流</h1>
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
