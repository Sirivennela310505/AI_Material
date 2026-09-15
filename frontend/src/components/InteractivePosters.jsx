import React, { useState } from 'react';
import {
  Maximize2,
  Printer,
  Download,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
  Zap,
  Target,
  CheckCircle2,
  Lightbulb,
  Layers,
  Cpu,
  Search,
  Grid,
  Database,
  Compass,
  ArrowRight,
  Sparkles,
  ExternalLink,
  X,
  FileText,
  GitBranch,
  Brain,
  Sliders,
  Share2
} from 'lucide-react';

// ══════════════════════════════════════════════════════════════════════════════
// 5 CONCEPT BLUEPRINT POSTERS (1 VISUAL BLUEPRINT CARD PER UNIT)
// ══════════════════════════════════════════════════════════════════════════════
const BLUEPRINT_POSTERS = [
  {
    id: 'unit-1',
    unitNumber: 1,
    unitRoman: 'UNIT I',
    badge: 'Concept Blueprint Map',
    title: 'Unit 1: Intelligent Agents Blueprint',
    subtitle: 'Visual Mindmap of Foundations, PEAS Matrix, Agent Classes & State Space',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    formulaBadge: 'Agent Function: f: P* ➔ A',
    blueprintNodes: [
      {
        category: 'FOUNDATIONS OF AI',
        icon: Brain,
        color: '#0d9488',
        bg: '#ccfbf1',
        chips: ['Turing Test (1950)', 'Acting Humanly', 'Thinking Humanly', 'Acting Rationally (Standard Model)']
      },
      {
        category: 'PEAS MATRIX SPECIFICATION',
        icon: Sliders,
        color: '#2563eb',
        bg: '#dbeafe',
        chips: ['P: Performance Measure', 'E: Task Environment', 'A: Actuators (Outputs)', 'S: Sensors (Inputs)']
      },
      {
        category: '5 AGENT ARCHITECTURES',
        icon: Cpu,
        color: '#7c3aed',
        bg: '#f3e8ff',
        chips: ['Simple Reflex', 'Model-Based (Internal State)', 'Goal-Based', 'Utility-Based', 'Learning Agent']
      },
      {
        category: 'STATE-SPACE FORMULATION',
        icon: GitBranch,
        color: '#d97706',
        bg: '#fef3c7',
        chips: ['S0 (Initial State)', 'Actions A(s)', 'Result(s, a) Transition', 'Goal Test G(s)', 'Path Cost c(s,a,s\')']
      }
    ]
  },
  {
    id: 'unit-2',
    unitNumber: 2,
    unitRoman: 'UNIT II',
    badge: 'Concept Blueprint Map',
    title: 'Unit 2: Problem Solving & Search Blueprint',
    subtitle: 'Visual Mindmap of Uninformed Search, Informed A* Search & Local Optimization',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    formulaBadge: 'A* Evaluation: f(n) = g(n) + h(n)',
    blueprintNodes: [
      {
        category: 'UNINFORMED SEARCH (BRUTE FORCE)',
        icon: Search,
        color: '#2563eb',
        bg: '#dbeafe',
        chips: ['BFS (FIFO, Unit Cost Optimal)', 'DFS (LIFO Stack, O(b*d) Space)', 'Uniform Cost Search (g(n) Priority)']
      },
      {
        category: 'INFORMED HEURISTIC SEARCH',
        icon: Target,
        color: '#0d9488',
        bg: '#ccfbf1',
        chips: ['Greedy Best-First (h(n) only)', 'A* Search (g + h)', 'Admissibility (h <= h*)', 'Consistency (Monotonicity)']
      },
      {
        category: 'GRID HEURISTIC METRICS',
        icon: Grid,
        color: '#7c3aed',
        bg: '#f3e8ff',
        chips: ['Manhattan Distance (|Δx| + |Δy|)', 'Euclidean Straight-Line Distance', '8-Puzzle Misplaced Tiles']
      },
      {
        category: 'LOCAL OPTIMIZATION LANDSCAPES',
        icon: Zap,
        color: '#d97706',
        bg: '#fef3c7',
        chips: ['Hill-Climbing (Local Maxima Trap)', 'Simulated Annealing (Temperature Decay)', 'Genetic Algorithms (Fitness)']
      }
    ]
  },
  {
    id: 'unit-3',
    unitNumber: 3,
    unitRoman: 'UNIT III',
    badge: 'Concept Blueprint Map',
    title: 'Unit 3: Constraints & Game Search Blueprint',
    subtitle: 'Visual Mindmap of CSPs, Arc Consistency, Minimax Tree & Alpha-Beta Cutoffs',
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    formulaBadge: 'Alpha-Beta Pruning: Alpha >= Beta',
    blueprintNodes: [
      {
        category: 'CSP TRIPLET FORMULATION',
        icon: Layers,
        color: '#2563eb',
        bg: '#dbeafe',
        chips: ['Variables X', 'Domains D', 'Constraints C', 'Map Coloring Case Study']
      },
      {
        category: 'CSP INFERENCE & PRUNING',
        icon: CheckCircle2,
        color: '#0d9488',
        bg: '#ccfbf1',
        chips: ['Backtracking Search', 'MRV Heuristic (Fail-First)', 'Forward Checking', 'AC-3 Arc Consistency']
      },
      {
        category: 'MINIMAX GAME TREES',
        icon: GitBranch,
        color: '#d97706',
        bg: '#fef3c7',
        chips: ['MAX Nodes (Maximize Utility)', 'MIN Nodes (Minimize MAX)', 'Terminal State Scores', 'Eval(s) Cutoff']
      },
      {
        category: 'ALPHA-BETA PRUNING & MCTS',
        icon: Zap,
        color: '#e11d48',
        bg: '#ffe4e6',
        chips: ['Alpha (MAX Best)', 'Beta (MIN Best)', 'Branch Cutoff (α ≥ β)', 'MCTS (Selection, Rollout, Backprop)']
      }
    ]
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    unitRoman: 'UNIT IV',
    badge: 'Concept Blueprint Map',
    title: 'Unit 4: Logic & Knowledge Reasoning Blueprint',
    subtitle: 'Visual Mindmap of Propositional Logic, FOL, Chaining & Resolution Refutation',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    formulaBadge: 'Resolution Refutation: KB ∧ ¬Q ➔ [ ]',
    blueprintNodes: [
      {
        category: 'KNOWLEDGE BASE & LOGIC',
        icon: Database,
        color: '#7c3aed',
        bg: '#f3e8ff',
        chips: ['Knowledge Base (KB)', 'TELL & ASK', 'Propositional Syntax', 'Modus Ponens ((P➔Q) ∧ P ➔ Q)']
      },
      {
        category: 'FIRST-ORDER LOGIC (FOL)',
        icon: Brain,
        color: '#0d9488',
        bg: '#ccfbf1',
        chips: ['Objects & Relations', 'Universal Quantifier ∀', 'Existential Quantifier ∃', 'Unification θ']
      },
      {
        category: 'INFERENCE ENGINES',
        icon: Compass,
        color: '#2563eb',
        bg: '#dbeafe',
        chips: ['Horn Clauses (1 Pos Literal)', 'Forward Chaining (Data-Driven)', 'Backward Chaining (Goal-Driven)']
      },
      {
        category: 'RESOLUTION REFUTATION PROOF',
        icon: Zap,
        color: '#e11d48',
        bg: '#ffe4e6',
        chips: ['Conjunctive Normal Form (CNF)', 'Skolemization (∃x ➔ Constant)', 'Empty Clause Contradiction [ ]']
      }
    ]
  },
  {
    id: 'unit-5',
    unitNumber: 5,
    unitRoman: 'UNIT V',
    badge: 'Concept Blueprint Map',
    title: 'Unit 5: AI Applications & Frontiers Blueprint',
    subtitle: 'Visual Mindmap of STRIPS Planning, NLP, Computer Vision & Explainable AI',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    formulaBadge: 'STRIPS Action: Precond + Add List + Del List',
    blueprintNodes: [
      {
        category: 'STRIPS AUTOMATED PLANNING',
        icon: Sliders,
        color: '#2563eb',
        bg: '#dbeafe',
        chips: ['Preconditions', 'Add List (New Facts)', 'Delete List (Old Facts)', 'Partial-Order Planning (POP)']
      },
      {
        category: 'NATURAL LANGUAGE PROCESSING',
        icon: Share2,
        color: '#0d9488',
        bg: '#ccfbf1',
        chips: ['Tokenization & POS Tagging', 'Syntactic Parse Trees', 'Transformer Self-Attention', 'Large Language Models (LLMs)']
      },
      {
        category: 'COMPUTER VISION ARCHITECTURES',
        icon: Search,
        color: '#7c3aed',
        bg: '#f3e8ff',
        chips: ['CNN Convolution Kernels', 'Edge & Feature Maps', 'Real-Time YOLO Object Detection', 'Semantic Segmentation']
      },
      {
        category: 'ROBOTICS & ETHICAL AI (XAI)',
        icon: Cpu,
        color: '#d97706',
        bg: '#fef3c7',
        chips: ['Inverse Kinematics (Joint Angles)', 'Explainable AI (SHAP & LIME)', 'Algorithmic Fairness & Guardrails']
      }
    ]
  }
];

export default function InteractivePosters() {
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);

  const currentPoster = BLUEPRINT_POSTERS[selectedUnitIdx];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: 60 }}>
      
      {/* ── Top Header Bar ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-teal-dark)', letterSpacing: '0.08em', background: 'var(--primary-teal-light)', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
              Neat Concept Blueprint
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Viewing Unit {currentPoster.unitNumber} of 5
            </span>
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0, letterSpacing: '-0.02em' }}>
            Unit {currentPoster.unitNumber} Concept Blueprint Map
          </h1>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button onClick={handlePrint} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>
            <Printer size={15} /> Print Blueprint
          </button>
        </div>
      </div>

      {/* ── Unit Switcher Tabs (Unit 1 | Unit 2 | Unit 3 | Unit 4 | Unit 5) ── */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        backgroundColor: '#ffffff',
        padding: '10px 14px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {BLUEPRINT_POSTERS.map((p, idx) => {
          const isSelected = selectedUnitIdx === idx;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedUnitIdx(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                border: isSelected ? '2px solid var(--primary-teal)' : '1px solid var(--border-color)',
                backgroundColor: isSelected ? 'var(--primary-teal-light)' : '#ffffff',
                color: isSelected ? 'var(--primary-teal-dark)' : 'var(--text-dark)',
                fontWeight: isSelected ? 800 : 500,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.18s ease'
              }}
            >
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                backgroundColor: isSelected ? 'var(--primary-teal)' : '#f1f5f9',
                color: isSelected ? '#ffffff' : 'var(--text-dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '0.75rem'
              }}>
                {p.unitNumber}
              </div>
              <span>Unit {p.unitNumber} Blueprint</span>
            </button>
          );
        })}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* NEAT SMALL CONCEPT BLUEPRINT POSTER CARD (MAX-WIDTH: 580PX)           */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <div
        id="master-poster-canvas"
        className="edtech-card hover-lift"
        style={{
          maxWidth: '580px',
          margin: '0 auto',
          width: '100%',
          padding: 0,
          overflow: 'hidden',
          border: '2px solid var(--border-strong)',
          boxShadow: 'var(--shadow-md)',
          backgroundColor: '#ffffff'
        }}
      >
        {/* Neat Blueprint Image Header */}
        <div className="img-neat-frame" style={{ height: '150px', borderRadius: 0, border: 'none' }}>
          <img src={currentPoster.heroImage} alt={currentPoster.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.85) 100%)'
          }} />

          <div style={{
            position: 'absolute',
            bottom: '14px',
            left: '18px',
            right: '18px',
            color: '#ffffff'
          }}>
            <span style={{
              backgroundColor: 'var(--primary-teal-dark)',
              color: '#ffffff',
              fontSize: '0.68rem',
              fontWeight: 800,
              padding: '2px 10px',
              borderRadius: 'var(--radius-full)',
              letterSpacing: '0.04em'
            }}>
              {currentPoster.unitRoman} • {currentPoster.badge}
            </span>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '4px 0 0 0', color: '#ffffff' }}>
              {currentPoster.title}
            </h2>
          </div>
        </div>

        {/* Blueprint Body */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Key Formula / Core Law Pill */}
          <div style={{
            backgroundColor: 'var(--primary-teal-light)',
            border: '1px solid rgba(13,148,136,0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10
          }}>
            <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-teal-dark)', letterSpacing: '0.04em' }}>
                Unit Core Formula / Rule:
              </span>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-teal-dark)', fontFamily: 'var(--font-mono)' }}>
                ⚡ {currentPoster.formulaBadge}
              </div>
            </div>
            <Sparkles size={18} color="var(--primary-teal-dark)" style={{ flexShrink: 0 }} />
          </div>

          {/* 4 Concept Blueprint Nodes (Connected Flow) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {currentPoster.blueprintNodes.map((node, nIdx) => {
              const Icon = node.icon;
              return (
                <div key={nIdx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: node.bg, border: `1px solid ${node.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={14} color={node.color} />
                    </div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-dark)', letterSpacing: '0.02em' }}>
                      {node.category}
                    </span>
                  </div>

                  {/* Concept Chips Row */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', paddingLeft: '34px' }}>
                    {node.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          backgroundColor: '#f1f5f9',
                          color: 'var(--text-dark)',
                          border: '1px solid var(--border-color)',
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-sm)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4
                        }}
                      >
                        🔹 {chip}
                      </span>
                    ))}
                  </div>

                  {nIdx < currentPoster.blueprintNodes.length - 1 && (
                    <div style={{ paddingLeft: '44px', color: 'var(--primary-teal)', fontWeight: 800, fontSize: '0.8rem', margin: '-2px 0' }}>
                      ↓
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Hint */}
          <div style={{
            backgroundColor: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: 'var(--radius-md)',
            padding: '8px 12px',
            fontSize: '0.78rem',
            color: '#92400e',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            <Lightbulb size={16} color="#d97706" style={{ flexShrink: 0 }} />
            <div>
              <strong>Pre-Exam Blueprint Rule:</strong> Memorize node connections &amp; formula badge for written exams.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
