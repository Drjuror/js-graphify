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
import '../styles/flowchart.css';
import NodeCard from './NodeCard';
import JiraServiceNodes from './JiraServiceNodes';
import ProjectHierarchyNodes from './ProjectHierarchyNodes';

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
  threadPool: JiraServiceNodes.ThreadPoolNode,
  cluster: ProjectHierarchyNodes.ClusterNode,
  projectNode: ProjectHierarchyNodes.ProjectNode,
  projectDeletedNode: ProjectHierarchyNodes.ProjectDeletedNode,
  projectSetNode: ProjectHierarchyNodes.ProjectSetNode,
  taskNode: ProjectHierarchyNodes.TaskNode,
  labelNode: ProjectHierarchyNodes.LabelNode,
  caseLabel: ProjectHierarchyNodes.CaseLabelNode,
  explanation: ProjectHierarchyNodes.ExplanationNode
};

const AgentFramework: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  useEffect(() => {
    const initialNodes: Node[] = [
      {
        id: 'label-cluster',
        type: 'labelNode',
        position: { x: 50, y: 50 },
        data: { label: '集群' },
      },
      {
        id: 'label-top',
        type: 'labelNode',
        position: { x: 50, y: 150 },
        data: { label: 'top项目组' },
      },
      {
        id: 'label-middle',
        type: 'labelNode',
        position: { x: 50, y: 250 },
        data: { label: '中间层级的项目组' },
      },
      {
        id: 'label-bottom',
        type: 'labelNode',
        position: { x: 50, y: 350 },
        data: { label: 'bottom项目组' },
      },
      {
        id: 'label-project-set',
        type: 'labelNode',
        position: { x: 50, y: 450 },
        data: { label: '项目（省略项目集）' },
      },
      {
        id: 'label-task',
        type: 'labelNode',
        position: { x: 50, y: 550 },
        data: { label: '任务' },
      },
      
      {
        id: 'cluster-1',
        type: 'cluster',
        position: { x: 430, y: 50 },
        data: {},
      },
      {
        id: 'top-1-1',
        type: 'projectNode',
        position: { x: 380, y: 150 },
        data: {},
      },
      {
        id: 'middle-1-1',
        type: 'projectNode',
        position: { x: 330, y: 250 },
        data: {},
      },
      {
        id: 'bottom-1-1',
        type: 'projectDeletedNode',
        position: { x: 280, y: 350 },
        data: {},
      },
      {
        id: 'project-1-1',
        type: 'projectSetNode',
        position: { x: 280, y: 450 },
        data: {},
      },
      {
        id: 'task-1-1',
        type: 'taskNode',
        position: { x: 230, y: 550 },
        data: {},
      },
      {
        id: 'task-1-2',
        type: 'taskNode',
        position: { x: 330, y: 550 },
        data: {},
      },
      {
        id: 'case-1',
        type: 'caseLabel',
        position: { x: 280, y: 650 },
        data: { label: 'case1' },
      },
      
      {
        id: 'cluster-2',
        type: 'cluster',
        position: { x: 580, y: 50 },
        data: {},
      },
      {
        id: 'top-2-1',
        type: 'projectDeletedNode',
        position: { x: 580, y: 150 },
        data: {},
      },
      {
        id: 'middle-2-1',
        type: 'projectNode',
        position: { x: 580, y: 250 },
        data: {},
      },
      {
        id: 'bottom-2-1',
        type: 'projectNode',
        position: { x: 580, y: 350 },
        data: {},
      },
      {
        id: 'project-2-1',
        type: 'projectSetNode',
        position: { x: 580, y: 450 },
        data: {},
      },
      {
        id: 'task-2-1',
        type: 'taskNode',
        position: { x: 580, y: 550 },
        data: {},
      },
      {
        id: 'case-2',
        type: 'caseLabel',
        position: { x: 580, y: 650 },
        data: { label: 'case2' },
      },
      
      {
        id: 'cluster-3',
        type: 'cluster',
        position: { x: 730, y: 50 },
        data: {},
      },
      {
        id: 'top-3-1',
        type: 'projectNode',
        position: { x: 780, y: 150 },
        data: {},
      },
      {
        id: 'middle-3-1',
        type: 'projectDeletedNode',
        position: { x: 830, y: 250 },
        data: {},
      },
      {
        id: 'bottom-3-1',
        type: 'projectNode',
        position: { x: 880, y: 350 },
        data: {},
      },
      {
        id: 'project-3-1',
        type: 'projectSetNode',
        position: { x: 880, y: 450 },
        data: {},
      },
      {
        id: 'task-3-1',
        type: 'taskNode',
        position: { x: 880, y: 550 },
        data: {},
      },
      {
        id: 'case-3',
        type: 'caseLabel',
        position: { x: 880, y: 650 },
        data: { label: 'case3' },
      },
      
      {
        id: 'table-header-1',
        type: 'explanation',
        position: { x: 170, y: 730 },
        data: { label: '删除项目组' },
        style: { border: '1px solid #ccc', backgroundColor: '#f5f5f5', fontWeight: 'bold', textAlign: 'center' }
      },
      {
        id: 'table-header-2',
        type: 'explanation',
        position: { x: 520, y: 730 },
        data: { label: '节点转项目集' },
        style: { border: '1px solid #ccc', backgroundColor: '#f5f5f5', fontWeight: 'bold', textAlign: 'center' }
      },
      {
        id: 'table-cell-1-1',
        type: 'explanation',
        position: { x: 170, y: 780 },
        data: { label: 'case1：删除bottom项目组' },
        style: { border: '1px solid #ccc', padding: '10px', minWidth: '200px', textAlign: 'center' }
      },
      {
        id: 'table-cell-1-2',
        type: 'explanation',
        position: { x: 520, y: 780 },
        data: { label: '节点转项目集' },
        style: { border: '1px solid #ccc', padding: '10px', minWidth: '200px', textAlign: 'center' }
      },
      {
        id: 'table-cell-2-1',
        type: 'explanation',
        position: { x: 170, y: 830 },
        data: { label: 'case2：删除top项目组' },
        style: { border: '1px solid #ccc', padding: '10px', minWidth: '200px', textAlign: 'center' }
      },
      {
        id: 'table-cell-2-2',
        type: 'explanation',
        position: { x: 520, y: 830 },
        data: { label: '其下的项目及任务数据，不纳入组织架构维度的统计' },
        style: { border: '1px solid #ccc', padding: '10px', minWidth: '200px', textAlign: 'center' }
      },
      {
        id: 'table-cell-3-1',
        type: 'explanation',
        position: { x: 170, y: 880 },
        data: { label: 'case3：删除中间层的项目组' },
        style: { border: '1px solid #ccc', padding: '10px', minWidth: '200px', textAlign: 'center' }
      },
      {
        id: 'table-cell-3-2',
        type: 'explanation',
        position: { x: 520, y: 880 },
        data: { label: '项目层级错误，tpc自身的bug，报警人工介入' },
        style: { border: '1px solid #ccc', padding: '10px', minWidth: '200px', textAlign: 'center' }
      }
    ];

    const initialEdges: Edge[] = [
      {
        id: 'cluster-1-to-top-1-1',
        source: 'cluster-1',
        target: 'top-1-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'top-1-1-to-middle-1-1',
        source: 'top-1-1',
        target: 'middle-1-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'middle-1-1-to-bottom-1-1',
        source: 'middle-1-1',
        target: 'bottom-1-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'bottom-1-1-to-project-1-1',
        source: 'bottom-1-1',
        target: 'project-1-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'project-1-1-to-task-1-1',
        source: 'project-1-1',
        target: 'task-1-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'project-1-1-to-task-1-2',
        source: 'project-1-1',
        target: 'task-1-2',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      
      {
        id: 'cluster-2-to-top-2-1',
        source: 'cluster-2',
        target: 'top-2-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'top-2-1-to-middle-2-1',
        source: 'top-2-1',
        target: 'middle-2-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'middle-2-1-to-bottom-2-1',
        source: 'middle-2-1',
        target: 'bottom-2-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'bottom-2-1-to-project-2-1',
        source: 'bottom-2-1',
        target: 'project-2-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'project-2-1-to-task-2-1',
        source: 'project-2-1',
        target: 'task-2-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      
      {
        id: 'cluster-3-to-top-3-1',
        source: 'cluster-3',
        target: 'top-3-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'top-3-1-to-middle-3-1',
        source: 'top-3-1',
        target: 'middle-3-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'middle-3-1-to-bottom-3-1',
        source: 'middle-3-1',
        target: 'bottom-3-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'bottom-3-1-to-project-3-1',
        source: 'bottom-3-1',
        target: 'project-3-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      },
      {
        id: 'project-3-1-to-task-3-1',
        source: 'project-3-1',
        target: 'task-3-1',
        type: 'default',
        markerEnd: { type: MarkerType.ArrowClosed },
      }
    ];

    setNodes(initialNodes);
    setEdges(initialEdges);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="absolute top-4 left-0 w-full text-center z-10">
        <h1 className="text-3xl font-bold text-indigo-500">项目架构层级关系图</h1>
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
