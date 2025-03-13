
import React from 'react';
import { Handle, Position } from '@xyflow/react';

const UserNode = () => {
  return (
    <div className="node-user">
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="15" r="10" fill="#3b82f6"/>
        <line x1="25" y1="25" x2="25" y2="40" stroke="#3b82f6" strokeWidth="2"/>
        <line x1="15" y1="30" x2="35" y2="30" stroke="#3b82f6" strokeWidth="2"/>
        <line x1="25" y1="40" x2="15" y2="50" stroke="#3b82f6" strokeWidth="2"/>
        <line x1="25" y1="40" x2="35" y2="50" stroke="#3b82f6" strokeWidth="2"/>
      </svg>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const UINode = ({ data }) => {
  return (
    <div className="jira-node node-ui">
      {data.label}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const WebhookNode = ({ data }) => {
  return (
    <div className="jira-node node-webhook">
      <div>
        {data.label}
        <svg viewBox="0 0 50 50" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="15" r="8" fill="#10b981" stroke="#047857" strokeWidth="1"/>
          <circle cx="10" cy="35" r="8" fill="#10b981" stroke="#047857" strokeWidth="1"/>
          <circle cx="40" cy="35" r="8" fill="#10b981" stroke="#047857" strokeWidth="1"/>
          <line x1="25" y1="15" x2="10" y2="35" stroke="#10b981" strokeWidth="3"/>
          <line x1="25" y1="15" x2="40" y2="35" stroke="#10b981" strokeWidth="3"/>
          <line x1="10" y1="35" x2="40" y2="35" stroke="#10b981" strokeWidth="3"/>
        </svg>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

const ServerNode = ({ data }) => {
  return (
    <div className="jira-node node-server">
      <div>
        {data.label}
        <svg viewBox="0 0 50 50" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="30" height="30" transform="rotate(45 25 25)" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1"/>
          <rect x="18" y="18" width="14" height="14" transform="rotate(45 25 25)" fill="white"/>
        </svg>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

const IssueBlueNode = ({ data }) => {
  return (
    <div className="jira-node node-issue-blue">
      {data.label}
      <Handle type="target" position={Position.Bottom} />
      <Handle type="source" position={Position.Top} />
    </div>
  );
};

const IssueEntryNode = ({ data }) => {
  return (
    <div className="jira-node node-issue-entry">
      {data.label}
      <Handle type="target" position={Position.Right} />
      <Handle type="target" position={Position.Bottom} />
      <Handle type="source" position={Position.Top} />
    </div>
  );
};

const WebhookUrlNode = ({ data }) => {
  return (
    <div className="jira-node node-webhook-url">
      {data.label}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Top} />
    </div>
  );
};

const IssueSubmitNode = ({ data }) => {
  return (
    <div className="jira-node node-issue-submit">
      {data.label}
      <Handle type="target" position={Position.Bottom} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

const IssueGetNode = ({ data }) => {
  return (
    <div className="jira-node node-issue-get">
      {data.label}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const RedisContainerNode = ({ data }) => {
  return (
    <div className="jira-node node-redis-container">
      <div className="container-label">{data.title}</div>
      <div className="container-label">{data.queueTitle}</div>
      <div className="flex justify-around mt-2">
        <div className="node-issue-blue w-12 h-12 flex items-center justify-center text-xs">issue</div>
        <div className="node-issue-blue w-12 h-12 flex items-center justify-center text-xs">issue</div>
        <div className="node-issue-blue w-12 h-12 flex items-center justify-center text-xs">issue</div>
        <div className="node-issue-blue w-12 h-12 flex items-center justify-center text-xs">issue</div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

const IssueUpdateNode = ({ data }) => {
  return (
    <div className="jira-node node-issue-update">
      {data.label}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Top} />
    </div>
  );
};

const TaskNode = ({ data }) => {
  return (
    <div className="jira-node node-task">
      {data.label}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const TaskBoxNode = ({ data }) => {
  return (
    <div className="jira-node node-task-box">
      {data.label}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const ThreadPoolNode = ({ data }) => {
  return (
    <div className="jira-node node-thread-pool">
      <div className="container-label">{data.title}</div>
      <div className="thread-container">
        <div className="thread-box">thread</div>
        <div className="thread-box">thread</div>
        <div className="thread-box">thread</div>
        <div className="thread-box">thread</div>
        <div className="thread-box">thread</div>
        <div className="thread-box">thread</div>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

const JiraServiceNodes = {
  UserNode,
  UINode,
  WebhookNode,
  ServerNode,
  IssueBlueNode,
  IssueEntryNode,
  WebhookUrlNode,
  IssueSubmitNode,
  IssueGetNode,
  RedisContainerNode,
  IssueUpdateNode,
  TaskNode,
  TaskBoxNode,
  ThreadPoolNode
};

export default JiraServiceNodes;
