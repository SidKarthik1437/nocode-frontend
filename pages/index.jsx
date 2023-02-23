import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  OnNodesDelete,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";
import * as NODES from "../nodes";

import Sidebar from "../components/Sidebar";

let id = 0;
const getId = (type) => `${type}_${id++}`;

const initialNodes = [];

const initialEdges = [
  // { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }
];

const nodeTypes = {
  Start: NODES.Start,
  Stop: NODES.Stop,
  DropDuplicates: NODES.DropDuplicates,
  Add: NODES.Add,
  Int: NODES.Int,
  File: NODES.File,
  FileRef: NODES.FileRef,
  Output: NODES.Output,
  Sub: NODES.Sub,
  Mul: NODES.Multiply,
  IsNull: NODES.IsNull,
  Div: NODES.Divide,
  Float: NODES.Float,
  Char: NODES.Char,
  Str: NODES.String,
  StandardScaler: NODES.StandardScaler,
  FitTransform: NODES.FitTransform,
  LabelEncoder: NODES.LabelEncoder,
  LogisticRegression: NODES.LogisticRegression,
  DecisionTree: NODES.DecisionTree,
  KNN: NODES.KNN,
  RandomForest: NODES.RandomForest,
  Bool: NODES.Bool,
};

function Flow() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        type,
        position,
        data: { label: `${type}_${id}` },
        id: getId(type),
      };

      setNodes((nds) => nds.concat(newNode));
      console.log(nodes);
    },
    [reactFlowInstance]
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  // console.log(nodes)
  // console.log(edges)
  return (
    <div className="w-full h-screen flex select-none">
      <ReactFlowProvider>
        <Sidebar />
        <div className="w-full h-screen" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            // snapToGrid={true}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            deleteKeyCode={["Delete"]}
            onDragOver={onDragOver}
            // onElementsRemove={onElementsRemove}
            fitView
            className="w-full h-screen bg-gray-500"
            snapGrid={[15, 15]}
          >
            <Controls />
            <Background color="#aaa" gap={10} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default Flow;
