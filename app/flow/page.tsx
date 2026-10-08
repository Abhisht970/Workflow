'use client';

import FlowSidebar from '../components/FlowSidebar';
import CustomInput from '../components/CustomInput';
import CustomOutput from '../components/CustomOutput';
import CustomCondition from '../components/CustomCondition';
import CustomProcess from '../components/CustomProcess';

import { useCallback, useState, useEffect } from 'react';

import {
    ReactFlow,
    ReactFlowProvider,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    useReactFlow,
    type Node,
    type Edge,
    type NodeChange,
    type EdgeChange,
    type Connection,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [

];

const initialEdges: Edge[] = [
    {
        id: 'n1-n2',
        source: 'n1',
        target: 'n2',
    },
];

function Flow() {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
    const nodeTypes = {
        input: CustomInput,
        output: CustomOutput,
        condition: CustomCondition,
        process: CustomProcess,
    };

    const { screenToFlowPosition } = useReactFlow();

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => {
            setNodes((nodesSnapshot) =>
                applyNodeChanges(changes, nodesSnapshot)
            );
        },
        []
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => {
            setEdges((edgesSnapshot) =>
                applyEdgeChanges(changes, edgesSnapshot)
            );
        },
        []
    );

    const onConnect = useCallback(
        (params: Connection) => {
            console.log(params);

            setEdges((edgesSnapshot) =>
                addEdge(params, edgesSnapshot)
            );
        },
        []
    );

    const onDragOver = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        },
        []
    );

    const onDrop = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();

            const nodeType = event.dataTransfer.getData('nodeType');
            const nodeLabel = event.dataTransfer.getData('nodeLabel');

            if (!nodeType) {
                return;
            }

            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const newNode: Node = {
                id: `node-${Date.now()}`,
                position,
                type: nodeType,
                data: {
                    label: nodeLabel,
                },
            };

            setNodes((nodes) => [...nodes, newNode]);

            console.log('Node Type:', nodeType);
            console.log('Node Label:', nodeLabel);
        },
        [screenToFlowPosition]
    );

    useEffect(() => {
        localStorage.setItem('flow-nodes', JSON.stringify(nodes));
        localStorage.setItem('flow-edges', JSON.stringify(edges));
    }, [nodes, edges]);

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
            }}
        >
            {/* Sidebar */}
            <FlowSidebar />

            {/* React Flow */}
            <div style={{ flex: 1 }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    nodeTypes={nodeTypes}
                    fitView
                />
            </div>
        </div>
    );
}

export default function App() {
    return (
        <ReactFlowProvider>
            <Flow />
        </ReactFlowProvider>
    );
}