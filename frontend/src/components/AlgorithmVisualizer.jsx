import React, { useState } from 'react';
import { Play, RotateCcw, ChevronRight, Eye, Sparkles, Check, HelpCircle } from 'lucide-react';

export default function AlgorithmVisualizer() {
  const [selectedAlgo, setSelectedAlgo] = useState('astar'); // astar, bfs, minimax, csp, forward_chaining
  const [stepIndex, setStepIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  // 1. A* Search Steps Dataset
  const astarSteps = [
    {
      step: 1,
      title: 'Initialize Start Node (0,0)',
      desc: 'Set Start Node (0,0) with g(n)=0, heuristic h(n)=6 (Manhattan distance to Goal (3,3)), total f(n) = 6.',
      gridState: [
        ['S', '.', '.', '.'],
        ['.', 'X', 'X', '.'],
        ['.', '.', 'X', '.'],
        ['.', '.', '.', 'G']
      ],
      activeQueue: ['(0,0) f=6'],
      currentEval: 'f((0,0)) = 0 + 6 = 6'
    },
    {
      step: 2,
      title: 'Expand Node (0,0) ➔ Neighbors (1,0) & (0,1)',
      desc: 'Generate neighbors. (1,0): g=1, h=5, f=6. (0,1): g=1, h=5, f=6. Add both to Open Queue.',
      gridState: [
        ['S', 'O', '.', '.'],
        ['O', 'X', 'X', '.'],
        ['.', '.', 'X', '.'],
        ['.', '.', '.', 'G']
      ],
      activeQueue: ['(0,1) f=6', '(1,0) f=6'],
      currentEval: 'Pop lowest f-value node (0,1)'
    },
    {
      step: 3,
      title: 'Expand (0,1) ➔ Neighbor (0,2)',
      desc: '(1,1) is blocked by obstacle X. Neighbor (0,2): g=2, h=4, f=6. Added to Open Queue.',
      gridState: [
        ['S', 'V', 'O', '.'],
        ['O', 'X', 'X', '.'],
        ['.', '.', 'X', '.'],
        ['.', '.', '.', 'G']
      ],
      activeQueue: ['(0,2) f=6', '(1,0) f=6'],
      currentEval: 'f((0,2)) = 2 + 4 = 6'
    },
    {
      step: 4,
      title: 'Traverse Around Obstacle (0,3) ➔ (1,3)',
      desc: '(0,3) evaluated (g=3, h=3, f=6). Next expands to (1,3) below obstacle (g=4, h=2, f=6).',
      gridState: [
        ['S', 'V', 'V', 'V'],
        ['O', 'X', 'X', 'O'],
        ['.', '.', 'X', '.'],
        ['.', '.', '.', 'G']
      ],
      activeQueue: ['(1,3) f=6', '(1,0) f=6'],
      currentEval: 'Moving along optimal boundary path'
    },
    {
      step: 5,
      title: 'Reach Goal Node (3,3)!',
      desc: 'Expand (1,3) ➔ (2,3) ➔ (3,3). Goal state reached with optimal path cost g(n)=6.',
      gridState: [
        ['S', '*', '*', '*'],
        ['.', 'X', 'X', '*'],
        ['.', '.', 'X', '*'],
        ['.', '.', '.', 'G*']
      ],
      activeQueue: ['GOAL REACHED!'],
      currentEval: 'Optimal Shortest Path Guaranteed! (f(Goal) = 6)'
    }
  ];

  // 2. Minimax with Alpha-Beta Pruning Dataset
  const minimaxSteps = [
    {
      step: 1,
      title: 'Root Node MAX (Initial State)',
      desc: 'Initialize α = -∞, β = +∞. Goal: MAX wants to pick child with highest score.',
      treeVisual: 'MAX Root [α=-∞, β=+∞]\n ├── Left Subtree (Evaluating...)\n └── Right Subtree (Pending)'
    },
    {
      step: 2,
      title: 'Evaluate Left Subtree (MIN Node)',
      desc: 'MIN node evaluates leaf children (val=3, val=5). MIN picks minimum = 3. Root updates α = 3.',
      treeVisual: 'MAX Root [α=3, β=+∞]\n ├── MIN Left = 3 (Leaves: 3, 5)\n └── Right Subtree (Evaluating...)'
    },
    {
      step: 3,
      title: 'Evaluate Right Subtree (MIN Node) ➔ PRUNING!',
      desc: 'Right MIN node evaluates first leaf = 2. Since 2 <= α (3), MIN will pick at most 2. MAX already has 3! PRUNE remaining right branches!',
      treeVisual: 'MAX Root [α=3, β=+∞] ➔ Final Decision: Pick Left Path (Score = 3)\n ├── MIN Left = 3\n └── MIN Right = 2 [PRUNED ✂️ Remaining branch]'
    }
  ];

  const algorithms = [
    { id: 'astar', name: 'A* Search Grid Pathfinder', unit: 'Unit II' },
    { id: 'minimax', name: 'Minimax & Alpha-Beta Pruning', unit: 'Unit III' },
  ];

  const currentAstarStep = astarSteps[Math.min(stepIndex, astarSteps.length - 1)];
  const currentMinimaxStep = minimaxSteps[Math.min(stepIndex, minimaxSteps.length - 1)];

  const handleNext = () => {
    const maxSteps = selectedAlgo === 'astar' ? astarSteps.length : minimaxSteps.length;
    if (stepIndex < maxSteps - 1) {
      setStepIndex(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setStepIndex(0);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-indigo)', letterSpacing: '0.05em', marginBottom: '4px' }}>
          Interactive Educational Visualizer
        </div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)' }}>
          Algorithm Mechanics & Step Tracing
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '4px' }}>
          Watch how core AI search algorithms explore states, manage memory queues, and prune sub-optimal branches step-by-step.
        </p>
      </div>

      {/* Selector Tabs */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {algorithms.map(algo => (
          <button
            key={algo.id}
            onClick={() => { setSelectedAlgo(algo.id); setStepIndex(0); }}
            style={{
              padding: '10px 18px',
              borderRadius: 'var(--radius-md)',
              border: selectedAlgo === algo.id ? '1px solid var(--primary-indigo)' : '1px solid var(--border-color)',
              backgroundColor: selectedAlgo === algo.id ? 'var(--primary-indigo-light)' : '#ffffff',
              color: selectedAlgo === algo.id ? 'var(--primary-indigo)' : 'var(--text-muted)',
              fontWeight: selectedAlgo === algo.id ? 700 : 500,
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Eye size={16} />
            <span>{algo.name}</span>
            <span style={{ fontSize: '0.68rem', backgroundColor: '#e2e8f0', color: 'var(--text-dark)', padding: '2px 6px', borderRadius: 'var(--radius-full)' }}>{algo.unit}</span>
          </button>
        ))}
      </div>

      {/* Main Visualization Canvas Container */}
      <div className="edtech-card" style={{ padding: '28px' }}>
        {selectedAlgo === 'astar' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>
            {/* Grid Visualizer */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>
                  Step {currentAstarStep.step} of {astarSteps.length}: <span className="gradient-text-edtech">{currentAstarStep.title}</span>
                </h3>
              </div>

              {/* 4x4 Grid Render */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 70px)',
                gridTemplateRows: 'repeat(4, 70px)',
                gap: '8px',
                padding: '16px',
                backgroundColor: 'var(--bg-card-subtle)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)'
              }}>
                {currentAstarStep.gridState.map((row, rIdx) =>
                  row.map((cell, cIdx) => {
                    let bg = '#ffffff';
                    let border = '1px solid #cbd5e1';
                    let label = '.';
                    let color = 'var(--text-dark)';

                    if (cell === 'S') { bg = '#dbeafe'; border = '2px solid #2563eb'; label = 'Start'; color = '#1d4ed8'; }
                    else if (cell === 'G' || cell === 'G*') { bg = '#d1fae5'; border = '2px solid #059669'; label = 'Goal'; color = '#047857'; }
                    else if (cell === 'X') { bg = '#475569'; border = '1px solid #334155'; label = 'Wall'; color = '#ffffff'; }
                    else if (cell === 'O') { bg = '#fef3c7'; border = '2px solid #d97706'; label = 'Open'; color = '#b45309'; }
                    else if (cell === 'V' || cell === '*') { bg = '#e0e7ff'; border = '2px solid #4f46e5'; label = 'Path'; color = '#4338ca'; }

                    return (
                      <div
                        key={`${rIdx}-${cIdx}`}
                        style={{
                          backgroundColor: bg,
                          border: border,
                          borderRadius: 'var(--radius-sm)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '0.85rem',
                          color: color,
                          boxShadow: 'var(--shadow-sm)'
                        }}
                      >
                        {label}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Step Controls */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button onClick={handleReset} className="btn-secondary">
                  <RotateCcw size={16} /> Reset
                </button>
                <button
                  onClick={handleNext}
                  disabled={stepIndex >= astarSteps.length - 1}
                  className="btn-primary"
                  style={{ padding: '10px 24px' }}
                >
                  <span>Next Step</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Sidebar Trace Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#f8fafc', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Step Description
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dark)', lineHeight: 1.5 }}>
                  {currentAstarStep.desc}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Current Evaluation
                </h4>
                <div style={{ backgroundColor: 'var(--primary-indigo-light)', padding: '10px 12px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-indigo)' }}>
                  {currentAstarStep.currentEval}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Active Priority Queue (Open Set)
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {currentAstarStep.activeQueue.map((item, idx) => (
                    <div key={idx} style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', padding: '8px 10px', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 600 }}>
                      📌 {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Minimax & Alpha-Beta Visualizer */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>
              Step {currentMinimaxStep.step} of {minimaxSteps.length}: <span className="gradient-text-edtech">{currentMinimaxStep.title}</span>
            </h3>

            <div style={{ backgroundColor: '#0f172a', color: '#38bdf8', padding: '24px', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
              {currentMinimaxStep.treeVisual}
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>
              {currentMinimaxStep.desc}
            </p>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button onClick={handleReset} className="btn-secondary">
                <RotateCcw size={16} /> Reset
              </button>
              <button
                onClick={handleNext}
                disabled={stepIndex >= minimaxSteps.length - 1}
                className="btn-primary"
              >
                <span>Next Decision Step</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
