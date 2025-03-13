
import React from 'react';
import { Handle, Position } from '@xyflow/react';

interface NodeData {
  label?: string;
}

const ClusterNode = ({ data }: { data: NodeData }) => {
  return (
    <div className="node-cluster">
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const ProjectNode = ({ data }: { data: NodeData }) => {
  return (
    <div className="node-project">
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const ProjectDeletedNode = ({ data }: { data: NodeData }) => {
  return (
    <div className="node-project-deleted">
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const ProjectSetNode = ({ data }: { data: NodeData }) => {
  return (
    <div className="node-project-set">
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const TaskNode = ({ data }: { data: NodeData }) => {
  return (
    <div className="node-task">
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

const LabelNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="node-label">
      {data.label}
    </div>
  );
};

const CaseLabelNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="node-case-label">
      {data.label}
    </div>
  );
};

const ExplanationNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="node-explanation">
      {data.label}
    </div>
  );
};

const ProjectHierarchyNodes = {
  ClusterNode,
  ProjectNode,
  ProjectDeletedNode,
  ProjectSetNode,
  TaskNode,
  LabelNode,
  CaseLabelNode,
  ExplanationNode
};

export default ProjectHierarchyNodes;
