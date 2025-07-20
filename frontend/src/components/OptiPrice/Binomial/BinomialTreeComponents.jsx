// src/components/BinomialTreeComponents.jsx
import React from 'react';
import ReactFlow, { 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState,
  Handle,
  Position 
} from 'reactflow';
import 'reactflow/dist/style.css';
import { InlineMath } from "react-katex";

// Custom Node Component for Binomial Tree
const BinomialNode = ({ data }) => {
  const { stockPrice, optionValue, exercise, period, nodeType } = data;
  
  return (
    <div className={`px-3 py-2 shadow-lg rounded-lg border-2 min-w-[90px] text-center ${
      exercise 
        ? 'bg-red-50 border-red-300' 
        : nodeType === 'current' 
          ? 'bg-blue-100 border-blue-400'
          : 'bg-white border-gray-300'
    }`}>
      <Handle type="target" position={Position.Left} className="w-2 h-2" />
      <Handle type="source" position={Position.Right} className="w-2 h-2" />
      
      <div className="text-xs font-bold text-gray-600 mb-1">
        t={period}
      </div>
      <div className="text-sm font-bold text-blue-700">
        ${stockPrice}
      </div>
      <div className="text-sm font-bold text-purple-600">
        ${optionValue}
      </div>
      {exercise && (
        <div className="text-xs font-bold text-red-600 mt-1">
          EXERCISE!
        </div>
      )}
    </div>
  );
};

// Simple Binomial Tree Flow Component
export const BinomialTreeFlow = () => {
  const nodeTypes = { binomialNode: BinomialNode };
  
  const initialNodes = [
    {
      id: '0-0',
      type: 'binomialNode',
      position: { x: 50, y: 200 },
      data: { 
        stockPrice: '50', 
        optionValue: '5.10', 
        exercise: false, 
        period: 0,
        nodeType: 'current'
      }
    },
    {
      id: '1-0',
      type: 'binomialNode',
      position: { x: 280, y: 100 },
      data: { 
        stockPrice: '60', 
        optionValue: '1.42', 
        exercise: false, 
        period: 1,
        nodeType: 'normal'
      }
    },
    {
      id: '1-1',
      type: 'binomialNode',
      position: { x: 280, y: 300 },
      data: { 
        stockPrice: '40', 
        optionValue: '12.00', 
        exercise: true, 
        period: 1,
        nodeType: 'normal'
      }
    },
    {
      id: '2-0',
      type: 'binomialNode',
      position: { x: 510, y: 50 },
      data: { 
        stockPrice: '72', 
        optionValue: '0.00', 
        exercise: false, 
        period: 2,
        nodeType: 'terminal'
      }
    },
    {
      id: '2-1',
      type: 'binomialNode',
      position: { x: 510, y: 150 },
      data: { 
        stockPrice: '48', 
        optionValue: '4.00', 
        exercise: false, 
        period: 2,
        nodeType: 'terminal'
      }
    },
    {
      id: '2-2',
      type: 'binomialNode',
      position: { x: 510, y: 350 },
      data: { 
        stockPrice: '32', 
        optionValue: '20.00', 
        exercise: false, 
        period: 2,
        nodeType: 'terminal'
      }
    }
  ];

  const initialEdges = [
    { 
      id: 'e0-0_1-0', 
      source: '0-0', 
      target: '1-0', 
      type: 'smoothstep',
      style: { stroke: '#059669', strokeWidth: 3 },
      label: 'u=1.2',
      labelStyle: { 
        fontSize: '11px', 
        fontWeight: 'bold',
        fill: '#059669'
      }
    },
    { 
      id: 'e0-0_1-1', 
      source: '0-0', 
      target: '1-1', 
      type: 'smoothstep',
      style: { stroke: '#dc2626', strokeWidth: 3 },
      label: 'd=0.8',
      labelStyle: { 
        fontSize: '11px', 
        fontWeight: 'bold',
        fill: '#dc2626'
      }
    },
    { 
      id: 'e1-0_2-0', 
      source: '1-0', 
      target: '2-0', 
      type: 'smoothstep',
      style: { stroke: '#059669', strokeWidth: 2 }
    },
    { 
      id: 'e1-0_2-1', 
      source: '1-0', 
      target: '2-1', 
      type: 'smoothstep',
      style: { stroke: '#dc2626', strokeWidth: 2 }
    },
    { 
      id: 'e1-1_2-1', 
      source: '1-1', 
      target: '2-1', 
      type: 'smoothstep',
      style: { stroke: '#059669', strokeWidth: 2 }
    },
    { 
      id: 'e1-1_2-2', 
      source: '1-1', 
      target: '2-2', 
      type: 'smoothstep',
      style: { stroke: '#dc2626', strokeWidth: 2 }
    }
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-amber-200 overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={true}
        panOnDrag={true}
        zoomOnScroll={true}
        zoomOnPinch={true}
      >
        <Background color="#e2e8f0" gap={16} />
        <Controls 
          showInteractive={false}
          style={{
            button: {
              backgroundColor: 'white',
              border: '1px solid #d1d5db',
              color: '#374151'
            }
          }}
        />
      </ReactFlow>
    </div>
  );
};

// Complete Tree Visualization Component
export const CompleteTreeVisualization = () => {
  const nodeTypes = { binomialNode: BinomialNode };
  
  const initialNodes = [
    {
      id: '0-0',
      type: 'binomialNode',
      position: { x: 50, y: 200 },
      data: { 
        stockPrice: '50', 
        optionValue: '5.10', 
        exercise: false, 
        period: 0,
        nodeType: 'current'
      }
    },
    {
      id: '1-0',
      type: 'binomialNode',
      position: { x: 280, y: 100 },
      data: { 
        stockPrice: '60', 
        optionValue: '1.42', 
        exercise: false, 
        period: 1,
        nodeType: 'normal'
      }
    },
    {
      id: '1-1',
      type: 'binomialNode',
      position: { x: 280, y: 300 },
      data: { 
        stockPrice: '40', 
        optionValue: '12.00', 
        exercise: true, 
        period: 1,
        nodeType: 'normal'
      }
    },
    {
      id: '2-0',
      type: 'binomialNode',
      position: { x: 510, y: 50 },
      data: { 
        stockPrice: '72', 
        optionValue: '0.00', 
        exercise: false, 
        period: 2,
        nodeType: 'terminal'
      }
    },
    {
      id: '2-1',
      type: 'binomialNode',
      position: { x: 510, y: 150 },
      data: { 
        stockPrice: '48', 
        optionValue: '4.00', 
        exercise: false, 
        period: 2,
        nodeType: 'terminal'
      }
    },
    {
      id: '2-2',
      type: 'binomialNode',
      position: { x: 510, y: 350 },
      data: { 
        stockPrice: '32', 
        optionValue: '20.00', 
        exercise: false, 
        period: 2,
        nodeType: 'terminal'
      }
    }
  ];

  const initialEdges = [
    { 
      id: 'e0-0_1-0', 
      source: '0-0', 
      target: '1-0', 
      type: 'smoothstep',
      style: { stroke: '#059669', strokeWidth: 3 },
      label: 'u=1.2',
      labelStyle: { 
        fontSize: '11px', 
        fontWeight: 'bold',
        fill: '#059669'
      }
    },
    { 
      id: 'e0-0_1-1', 
      source: '0-0', 
      target: '1-1', 
      type: 'smoothstep',
      style: { stroke: '#dc2626', strokeWidth: 3 },
      label: 'd=0.8',
      labelStyle: { 
        fontSize: '11px', 
        fontWeight: 'bold',
        fill: '#dc2626'
      }
    },
    { 
      id: 'e1-0_2-0', 
      source: '1-0', 
      target: '2-0', 
      type: 'smoothstep',
      style: { stroke: '#059669', strokeWidth: 2 }
    },
    { 
      id: 'e1-0_2-1', 
      source: '1-0', 
      target: '2-1', 
      type: 'smoothstep',
      style: { stroke: '#dc2626', strokeWidth: 2 }
    },
    { 
      id: 'e1-1_2-1', 
      source: '1-1', 
      target: '2-1', 
      type: 'smoothstep',
      style: { stroke: '#059669', strokeWidth: 2 }
    },
    { 
      id: 'e1-1_2-2', 
      source: '1-1', 
      target: '2-2', 
      type: 'smoothstep',
      style: { stroke: '#dc2626', strokeWidth: 2 }
    }
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
      <h4 className="font-bold text-amber-800 text-xl mb-6 text-center">
        🎨 Complete Tree Visualization with Decision Points
      </h4>

      <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
        <div className="text-center mb-6">
          <h5 className="font-bold text-amber-700 text-lg">Stock Prices and Option Values with Exercise Decisions</h5>
          <p className="text-amber-600 text-sm mt-2">Interactive tree showing optimal exercise decisions at each node</p>
        </div>
        
        {/* React Flow Tree */}
        <div className="h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-amber-200 overflow-hidden mb-6">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.15 }}
            nodesDraggable={true}
            nodesConnectable={false}
            elementsSelectable={true}
            panOnDrag={true}
            zoomOnScroll={true}
            zoomOnPinch={true}
          >
            <Background color="#e2e8f0" gap={20} />
            <Controls 
              showInteractive={false}
              style={{
                button: {
                  backgroundColor: 'white',
                  border: '1px solid #d1d5db',
                  color: '#374151'
                }
              }}
            />
          </ReactFlow>
        </div>

        {/* Decision Analysis Table */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
          <h6 className="font-semibold text-gray-700 mb-3 text-center">Decision Analysis at Each Node</h6>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-gray-700">Period</th>
                  <th className="px-3 py-2 text-left font-semibold text-gray-700">Stock Price</th>
                  <th className="px-3 py-2 text-left font-semibold text-gray-700">Intrinsic Value</th>
                  <th className="px-3 py-2 text-left font-semibold text-gray-700">Continuation Value</th>
                  <th className="px-3 py-2 text-left font-semibold text-gray-700">Option Value</th>
                  <th className="px-3 py-2 text-left font-semibold text-gray-700">Decision</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td className="px-3 py-2 font-mono">0</td>
                  <td className="px-3 py-2 font-mono">$50</td>
                  <td className="px-3 py-2 font-mono">$2.00</td>
                  <td className="px-3 py-2 font-mono">$5.10</td>
                  <td className="px-3 py-2 font-mono font-bold text-blue-600">$5.10</td>
                  <td className="px-3 py-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Continue
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2 font-mono">1</td>
                  <td className="px-3 py-2 font-mono">$60</td>
                  <td className="px-3 py-2 font-mono">$0.00</td>
                  <td className="px-3 py-2 font-mono">$1.42</td>
                  <td className="px-3 py-2 font-mono font-bold text-blue-600">$1.42</td>
                  <td className="px-3 py-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Continue
                    </span>
                  </td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-3 py-2 font-mono">1</td>
                  <td className="px-3 py-2 font-mono">$40</td>
                  <td className="px-3 py-2 font-mono font-bold text-red-600">$12.00</td>
                  <td className="px-3 py-2 font-mono">$9.45</td>
                  <td className="px-3 py-2 font-mono font-bold text-red-600">$12.00</td>
                  <td className="px-3 py-2">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Exercise Early!
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 font-mono">2</td>
                  <td className="px-3 py-2 font-mono">$72</td>
                  <td className="px-3 py-2 font-mono">$0.00</td>
                  <td className="px-3 py-2 font-mono text-gray-400">N/A</td>
                  <td className="px-3 py-2 font-mono">$0.00</td>
                  <td className="px-3 py-2">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      Expires OTM
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 font-mono">2</td>
                  <td className="px-3 py-2 font-mono">$48</td>
                  <td className="px-3 py-2 font-mono">$4.00</td>
                  <td className="px-3 py-2 font-mono text-gray-400">N/A</td>
                  <td className="px-3 py-2 font-mono">$4.00</td>
                  <td className="px-3 py-2">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                      Exercise at Expiry
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 font-mono">2</td>
                  <td className="px-3 py-2 font-mono">$32</td>
                  <td className="px-3 py-2 font-mono">$20.00</td>
                  <td className="px-3 py-2 font-mono text-gray-400">N/A</td>
                  <td className="px-3 py-2 font-mono">$20.00</td>
                  <td className="px-3 py-2">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                      Exercise at Expiry
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend and Controls */}
        <div className="flex justify-center space-x-8 text-sm bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded mr-2"></div>
            <span>Continue Holding</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-50 border-2 border-red-300 rounded mr-2"></div>
            <span>Exercise Early</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-green-600 mr-2"></div>
            <span>Up Movement (u=1.2)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-red-600 mr-2"></div>
            <span>Down Movement (d=0.8)</span>
          </div>
        </div>

        {/* Key Insights Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h6 className="font-semibold text-amber-700 mb-3 text-center flex items-center justify-center">
              <span className="mr-2">🎯</span>
              Key Insights
            </h6>
            <ul className="text-amber-600 text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>Early exercise optimal when stock drops to $40</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>American premium = $5.10 - $4.49 = <strong>$0.61</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>Exercise boundary clearly visible in tree</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>Deep ITM puts favor immediate exercise</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h6 className="font-semibold text-green-700 mb-3 text-center flex items-center justify-center">
              <span className="mr-2">✅</span>
              Continue Zones
            </h6>
            <ul className="text-green-600 text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>At $50:</strong> Time value ($3.10) exceeds intrinsic ($2.00)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span><strong>At $60:</strong> Put has only time value, no intrinsic worth</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>Holding preserves option's time value</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>Future volatility has positive value</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h6 className="font-semibold text-red-700 mb-3 text-center flex items-center justify-center">
              <span className="mr-2">🚨</span>
              Exercise Zone
            </h6>
            <ul className="text-red-600 text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span><strong>At $40:</strong> Intrinsic ($12) {">"} continuation ($9.45)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Deep ITM puts lose time value quickly</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Early exercise captures full payoff immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Prevents further time decay losses</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mathematical Explanation */}
        <div className="mt-6 bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h6 className="font-semibold text-blue-700 mb-3 text-center">
            📊 Mathematical Logic Behind Exercise Decisions
          </h6>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-semibold text-blue-700 mb-2">At the $40 Node (Period 1):</div>
              <div className="bg-white p-3 rounded border space-y-1">
                <div><strong>Continuation Value:</strong></div>
                <div className="font-mono text-xs">
                  <InlineMath math="e^{-0.05} \times [0.628 \times 4 + 0.372 \times 20] = 9.45" />
                </div>
                <div><strong>Intrinsic Value:</strong></div>
                <div className="font-mono text-xs">
                  <InlineMath math="\max(52 - 40, 0) = 12.00" />
                </div>
                <div className="text-red-600 font-bold">
                  <InlineMath math="\text{Decision: } \max(9.45, 12.00) = 12.00" /> ← Exercise!
                </div>
              </div>
            </div>
            
            <div>
              <div className="font-semibold text-blue-700 mb-2">At the $60 Node (Period 1):</div>
              <div className="bg-white p-3 rounded border space-y-1">
                <div><strong>Continuation Value:</strong></div>
                <div className="font-mono text-xs">
                  <InlineMath math="e^{-0.05} \times [0.628 \times 0 + 0.372 \times 4] = 1.42" />
                </div>
                <div><strong>Intrinsic Value:</strong></div>
                <div className="font-mono text-xs">
                  <InlineMath math="\max(52 - 60, 0) = 0.00" />
                </div>
                <div className="text-green-600 font-bold">
                  <InlineMath math="\text{Decision: } \max(1.42, 0.00) = 1.42" /> ← Continue
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};