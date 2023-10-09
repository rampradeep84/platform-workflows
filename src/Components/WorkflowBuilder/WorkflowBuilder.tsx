/**
 * A global layouting function calculates the new positions for the nodes every time the graph changes and animates existing nodes to their new position.
 *
 * There are three ways of adding nodes to the graph:
 *  1. Click an existing node: Create a new child node of the clicked node
 *  2. Click on the plus icon of an existing edge: Create a node in between the connected nodes of the edge
 *  3. Click a placeholder node: Turn the placeholder into a "real" node to prevent jumping of the layout
 *
 * The graph elements are added via hook calls in the custom nodes and edges. The layout is calculated every time the graph changes (see hooks/useLayout.ts).
 **/
import React from 'react'
import ReactFlow, {
  Background,
  Edge,
  Node,
  ProOptions,
  ReactFlowProvider
} from 'reactflow'

import useLayout from './hooks/useLayout'
import nodeTypes from './NodeTypes'
import edgeTypes from './EdgeTypes'

import 'reactflow/dist/style.css'

const proOptions: ProOptions = { account: 'paid-pro', hideAttribution: true }

// initial setup: one workflow node and a placeholder node
// placeholder nodes can be turned into a workflow node by click
const defaultNodes: Node[] = [
  {
    id: '1',
    data: { label: 'Spin up Env' },
    position: { x: 0, y: 0 },
    type: 'workflow'
  },
  {
    id: '2',
    data: { label: 'Checkout code' },
    position: { x: 0, y: 150 },
    type: 'workflow'
  },
  {
    id: '3',
    data: { label: 'Build Image' },
    position: { x: 0, y: 300 },
    type: 'workflow'
  },
  {
    id: '4',
    data: { label: 'Deploy to Cluster' },
    position: { x: 0, y: 450 },
    type: 'workflow'
  },
  // {
  //   id: '2',
  //   data: { label: '+' },
  //   position: { x: 0, y: 150 },
  //   type: 'placeholder'
  // }
]

// initial setup: connect the workflow node to the placeholder node with a placeholder edge
const defaultEdges: Edge[] = [
  {
    id: '1=>2',
    source: '1',
    target: '2',
    type: 'placeholder'
  },
  {
    id: '2=>3',
    source: '2',
    target: '3',
    type: 'placeholder'
  },
  {
    id: '3=>4',
    source: '3',
    target: '4',
    type: 'placeholder'
  }
]

const fitViewOptions = {
  padding: 0.95
}

function ReactFlowPro(props: any) {
  // this hook call ensures that the layout is re-calculated every time the graph changes
  useLayout()

  setTimeout(() => {
    useLayout()
  }, 1000)

  return (
    <div className="w-full h-full items-center flex justify-center">
      <div style={{ width: '500px', height: '600px' }}>
        <ReactFlow
          defaultNodes={defaultNodes}
          defaultEdges={defaultEdges}
          proOptions={proOptions}
          fitView
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitViewOptions={fitViewOptions}
          minZoom={1}
          nodesDraggable={false}
          nodesConnectable={false}
          zoomOnDoubleClick={false}
          panOnDrag={false}
          panOnScroll={false}
          // we are setting deleteKeyCode to null to prevent the deletion of nodes in order to keep the implementation simple.
          // If you want to enable deletion of nodes, you need to make sure that you only have one root node in your graph.
          deleteKeyCode={null}
        >
          <Background />
        </ReactFlow>
      </div>
    </div>
  )
}

function WorkflowBuilder(props: any) {
  return (
    <ReactFlowProvider>
      <ReactFlowPro readonly={props.readonly}/>
    </ReactFlowProvider>
  )
}

export default WorkflowBuilder
