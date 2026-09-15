import React, { useState } from 'react';
import {
  Maximize2,
  Printer,
  Download,
  BookOpen,
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
  GitBranch,
  Brain,
  Sliders,
  Share2,
  X,
  Eye,
  Activity
} from 'lucide-react';

const ANIMATED_POSTERS = [
  {
    id: 'unit-1',
    unitNumber: 1,
    unitRoman: 'UNIT I',
    badge: 'ANIMATED RECTANGLE POSTER',
    title: 'Intelligent Agents & PEAS Framework',
    subtitle: 'Foundations of AI, PEAS Specifications, Agent Architectures & State Space',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    formula: 'Agent Function: f: P* ➔ A (Percepts to Action)',
    color: '#0d9488',
    gradient: 'linear-gradient(135deg, #0d9488 0%, #2563eb 50%, #0d9488 100%)',
    bgLight: '#ccfbf1',
    diagramType: 'peas',
    nodes: [
      {
        title: 'Foundations & Turing Test',
        desc: 'Turing Test (1950) for acting humanly. Standard Model of Rationality maximizes expected performance P.',
        chips: ['Acting Humanly', 'Thinking Humanly', 'Rational Action']
      },
      {
        title: 'PEAS Framework Matrix',
        desc: 'Formal 4-part specification: Performance Measure, Environment, Actuators (outputs), Sensors (inputs).',
        chips: ['P: Safety & Speed', 'E: Roads & Weather', 'A: Steering/Brakes', 'S: Camera/LiDAR']
      },
      {
        title: '5 Agent Architecture Classes',
        desc: 'Reflex, Model-Based (internal memory), Goal-Based, Utility-Based, and Learning Agents.',
        chips: ['Simple Reflex', 'Model-Based State', 'Goal & Utility']
      },
      {
        title: 'State-Space Formulation',
        desc: 'Formulates initial state S0, actions A(s), transition result Result(s,a), goal test, and path cost.',
        chips: ['Initial State S0', 'Result(s,a)', 'Goal Test G(s)']
      }
    ],
    examTip: 'Exam Golden Tip: Always draw the 4 PEAS boxes (Performance, Environment, Actuators, Sensors) for +4 Marks!'
  },
  {
    id: 'unit-2',
    unitNumber: 2,
    unitRoman: 'UNIT II',
    badge: 'ANIMATED RECTANGLE POSTER',
    title: 'Heuristic Search & A* Algorithm',
    subtitle: 'Uninformed Search, Informed A* Evaluation, Heuristics & Local Optimization',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    formula: 'A* Evaluation: f(n) = g(n) + h(n)',
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #2563eb 100%)',
    bgLight: '#dbeafe',
    diagramType: 'astar',
    nodes: [
      {
        title: 'Uninformed Search Methods',
        desc: 'BFS (FIFO, unit cost optimal), DFS (LIFO, O(b*d) space), and Uniform Cost Search g(n).',
        chips: ['BFS (FIFO)', 'DFS (LIFO)', 'Uniform Cost (UCS)']
      },
      {
        title: 'Informed A* Search & Heuristics',
        desc: 'Combines actual path cost g(n) with admissible heuristic estimate h(n) (never overestimates).',
        chips: ['f(n) = g(n) + h(n)', 'Admissibility (h ≤ h*)', 'Consistency']
      },
      {
        title: 'Grid Navigation Metrics',
        desc: 'Manhattan distance (|Δx| + |Δy|) for 4-way grid motion; Euclidean straight-line distance.',
        chips: ['Manhattan Metric', 'Euclidean Metric', '8-Puzzle Heuristic']
      },
      {
        title: 'Local Optimization Landscapes',
        desc: 'Hill-Climbing local greedy choice (local maxima trap) and Simulated Annealing temperature decay T.',
        chips: ['Hill Climbing Maxima', 'Simulated Annealing', 'Genetic Search']
      }
    ],
    examTip: 'Exam Golden Tip: An admissible heuristic NEVER overestimates true cost to reach goal: 0 ≤ h(n) ≤ h*(n).'
  },
  {
    id: 'unit-3',
    unitNumber: 3,
    unitRoman: 'UNIT III',
    badge: 'ANIMATED RECTANGLE POSTER',
    title: 'Constraints & Adversarial Search',
    subtitle: 'CSPs, Arc Consistency (AC-3), Minimax Game Tree & Alpha-Beta Cutoffs',
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    formula: 'Alpha-Beta Cutoff: Prune when Alpha (MAX) ≥ Beta (MIN)',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #d97706 50%, #7c3aed 100%)',
    bgLight: '#f3e8ff',
    diagramType: 'minimax',
    nodes: [
      {
        title: 'CSP Formal Triplet (X, D, C)',
        desc: 'Variables X, Domains D of allowable values, and Constraints C restricting legal assignments.',
        chips: ['Variables X', 'Domains D', 'Constraints C']
      },
      {
        title: 'Arc Consistency & AC-3',
        desc: 'Prunes illegal domain values prior to backtracking. MRV heuristic selects most constrained variable.',
        chips: ['AC-3 Algorithm', 'MRV Heuristic', 'Forward Checking']
      },
      {
        title: 'Minimax Game Tree Search',
        desc: 'MAX player maximizes score; MIN player minimizes MAX score in two-player zero-sum games.',
        chips: ['MAX Triangles', 'MIN Triangles', 'Terminal Utility']
      },
      {
        title: 'Alpha-Beta Pruning Cutoffs',
        desc: 'Eliminates subtrees that cannot alter the final Minimax choice, doubling depth to O(b^(m/2)).',
        chips: ['Alpha (MAX Best)', 'Beta (MIN Best)', 'Cutoff (α ≥ β)']
      }
    ],
    examTip: 'Exam Golden Tip: Alpha-Beta pruning removes subtrees without changing the final decision outcome.'
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    unitRoman: 'UNIT IV',
    badge: 'ANIMATED RECTANGLE POSTER',
    title: 'Knowledge Representation & Logic',
    subtitle: 'Propositional Logic, First-Order Logic (FOL), Chaining & Resolution',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    formula: 'Resolution Refutation: Prove KB |= Q by deriving [ ] from (KB ∧ ¬Q)',
    color: '#d97706',
    gradient: 'linear-gradient(135deg, #d97706 0%, #0d9488 50%, #d97706 100%)',
    bgLight: '#fef3c7',
    diagramType: 'logic',
    nodes: [
      {
        title: 'Propositional & Horn Logic',
        desc: 'Atomic facts connected by logic operators. Horn clauses (≤1 positive literal) enable O(n) chaining.',
        chips: ['Propositional Syntax', 'Modus Ponens Rule', 'Horn Clauses O(n)']
      },
      {
        title: 'First-Order Logic (FOL)',
        desc: 'Extends propositional logic by adding Objects, Relations, Functions, and Quantifiers (∀, ∃).',
        chips: ['Objects & Relations', 'Universal ∀', 'Existential ∃']
      },
      {
        title: 'Forward & Backward Chaining',
        desc: 'Forward chaining fires rules data-driven from facts; Backward chaining proves goal hypotheses backwards.',
        chips: ['Forward (Data-Driven)', 'Backward (Goal-Driven)', 'Unification θ']
      },
      {
        title: 'Resolution Refutation Proofs',
        desc: 'Converts KB to CNF (Conjunctive Normal Form), applies unification, and derives empty contradiction clause [ ].',
        chips: ['CNF Conversion', 'Skolemization ∃x', 'Empty Clause [ ]']
      }
    ],
    examTip: 'Exam Golden Tip: Skolemization replaces existential quantifiers ∃ with Skolem constants during CNF.'
  },
  {
    id: 'unit-5',
    unitNumber: 5,
    unitRoman: 'UNIT V',
    badge: 'ANIMATED RECTANGLE POSTER',
    title: 'AI Applications & Frontiers',
    subtitle: 'STRIPS Planning, Natural Language Processing, Computer Vision & Explainable AI',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    formula: 'STRIPS Action: Preconditions + Add List + Delete List',
    color: '#e11d48',
    gradient: 'linear-gradient(135deg, #e11d48 0%, #7c3aed 50%, #e11d48 100%)',
    bgLight: '#ffe4e6',
    diagramType: 'strips',
    nodes: [
      {
        title: 'STRIPS Automated Planning',
        desc: 'Action schemas defined by Preconditions (must be True), Add List (new facts), and Delete List.',
        chips: ['Preconditions', 'Add List', 'Delete List', 'POP Planning']
      },
      {
        title: 'NLP & Transformer Attention',
        desc: 'Self-Attention processes contextual sequences in parallel powering modern Large Language Models.',
        chips: ['Parse Trees', 'Self-Attention', 'Transformer Models']
      },
      {
        title: 'Computer Vision Convolution',
        desc: 'CNN convolution kernels extract edge & feature maps for real-time object detection (YOLO).',
        chips: ['CNN Feature Maps', 'Convolution Kernels', 'YOLO Object Detection']
      },
      {
        title: 'Robotics & Explainable AI (XAI)',
        desc: 'Inverse kinematics positions robotic joints; XAI methods (SHAP, LIME) demystify opaque black boxes.',
        chips: ['Inverse Kinematics', 'XAI (SHAP/LIME)', 'Algorithmic Fairness']
      }
    ],
    examTip: 'Exam Golden Tip: Explainable AI (XAI) provides human-interpretable rationales for opaque deep learning models.'
  }
];

// Helper to render live animated SVG diagram for poster concept card
function PosterAnimatedDiagram({ type, color }) {
  if (type === 'peas') {
    return (
      <svg viewBox="0 0 400 120" style={{ width: '100%', height: '100px' }}>
        <rect x="10" y="30" width="80" height="60" rx="8" fill="#ffffff" stroke={color} strokeWidth="2" />
        <text x="50" y="55" textAnchor="middle" fontSize="11" fontWeight="800" fill={color}>Sensors</text>
        <text x="50" y="72" textAnchor="middle" fontSize="9" fill="#64748b">Cameras, LiDAR</text>

        <path d="M 90 60 L 140 60" stroke={color} strokeWidth="2" strokeDasharray="4 2" />
        <polygon points="140,56 148,60 140,64" fill={color} />

        <rect x="150" y="20" width="100" height="80" rx="10" fill={color} opacity="0.1" stroke={color} strokeWidth="2" />
        <text x="200" y="50" textAnchor="middle" fontSize="12" fontWeight="800" fill={color}>Agent Program</text>
        <text x="200" y="68" textAnchor="middle" fontSize="9" fontWeight="700" fill="#334155">f: P* ➔ Action</text>

        <path d="M 250 60 L 300 60" stroke={color} strokeWidth="2" strokeDasharray="4 2" />
        <polygon points="300,56 308,60 300,64" fill={color} />

        <rect x="310" y="30" width="80" height="60" rx="8" fill="#ffffff" stroke={color} strokeWidth="2" />
        <text x="350" y="55" textAnchor="middle" fontSize="11" fontWeight="800" fill={color}>Actuators</text>
        <text x="350" y="72" textAnchor="middle" fontSize="9" fill="#64748b">Brakes, Motor</text>
      </svg>
    );
  }

  if (type === 'astar') {
    return (
      <svg viewBox="0 0 400 120" style={{ width: '100%', height: '100px' }}>
        <circle cx="50" cy="60" r="20" fill="#ffffff" stroke={color} strokeWidth="2" />
        <text x="50" y="64" textAnchor="middle" fontSize="11" fontWeight="800" fill={color}>S (Start)</text>

        <line x1="70" y1="50" x2="160" y2="30" stroke={color} strokeWidth="2" />
        <text x="110" y="34" fontSize="9" fontWeight="700" fill={color}>g=2, h=4 (f=6)</text>
        <circle cx="180" cy="30" r="18" fill="#ffffff" stroke={color} strokeWidth="2" />
        <text x="180" y="34" textAnchor="middle" fontSize="10" fontWeight="700" fill="#334155">A</text>

        <line x1="70" y1="70" x2="160" y2="90" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
        <text x="110" y="95" fontSize="9" fill="#94a3b8">g=5, h=3 (f=8)</text>
        <circle cx="180" cy="90" r="18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
        <text x="180" y="94" textAnchor="middle" fontSize="10" fill="#94a3b8">B</text>

        <line x1="198" y1="30" x2="320" y2="60" stroke={color} strokeWidth="2" />
        <text x="260" y="40" fontSize="9" fontWeight="800" fill={color}>Optimal Path ✓</text>
        <circle cx="340" cy="60" r="20" fill={color} />
        <text x="340" y="64" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff">G (Goal)</text>
      </svg>
    );
  }

  if (type === 'minimax') {
    return (
      <svg viewBox="0 0 400 120" style={{ width: '100%', height: '100px' }}>
        <polygon points="200,15 185,45 215,45" fill={color} />
        <text x="200" y="38" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">v=7</text>

        <line x1="190" y1="45" x2="100" y2="70" stroke={color} strokeWidth="2" />
        <line x1="210" y1="45" x2="300" y2="70" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />

        <polygon points="100,90 85,60 115,60" fill="#ffffff" stroke={color} strokeWidth="2" />
        <text x="100" y="78" textAnchor="middle" fontSize="9" fontWeight="800" fill={color}>MIN (7)</text>

        <polygon points="300,90 285,60 315,60" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
        <text x="300" y="78" textAnchor="middle" fontSize="9" fill="#94a3b8">PRUNED ✂️</text>

        <circle cx="70" cy="110" r="8" fill="#e2e8f0" /><text x="70" y="113" textAnchor="middle" fontSize="8">7</text>
        <circle cx="130" cy="110" r="8" fill="#e2e8f0" /><text x="130" y="113" textAnchor="middle" fontSize="8">9</text>
      </svg>
    );
  }

  if (type === 'logic') {
    return (
      <svg viewBox="0 0 400 120" style={{ width: '100%', height: '100px' }}>
        <rect x="20" y="40" width="100" height="40" rx="6" fill="#ffffff" stroke={color} strokeWidth="2" />
        <text x="70" y="64" textAnchor="middle" fontSize="10" fontWeight="800" fill={color}>KB: (A ∨ B) ∧ ¬A</text>

        <path d="M 120 60 L 170 60" stroke={color} strokeWidth="2" />
        <polygon points="170,56 178,60 170,64" fill={color} />

        <rect x="180" y="30" width="100" height="60" rx="8" fill={color} opacity="0.1" stroke={color} strokeWidth="2" />
        <text x="230" y="55" textAnchor="middle" fontSize="11" fontWeight="800" fill={color}>Resolution Rule</text>
        <text x="230" y="72" textAnchor="middle" fontSize="9" fill="#334155">Literal Cancelation</text>

        <path d="M 280 60 L 330 60" stroke={color} strokeWidth="2" />
        <polygon points="330,56 338,60 330,64" fill={color} />

        <circle cx="360" cy="60" r="20" fill={color} />
        <text x="360" y="64" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff">Derived: B</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 120" style={{ width: '100%', height: '100px' }}>
      <rect x="20" y="40" width="90" height="40" rx="6" fill="#ffffff" stroke={color} strokeWidth="2" />
      <text x="65" y="64" textAnchor="middle" fontSize="10" fontWeight="800" fill={color}>State S0</text>

      <path d="M 110 60 L 160 60" stroke={color} strokeWidth="2" />
      <polygon points="160,56 168,60 160,64" fill={color} />

      <rect x="170" y="30" width="110" height="60" rx="8" fill={color} opacity="0.1" stroke={color} strokeWidth="2" />
      <text x="225" y="55" textAnchor="middle" fontSize="11" fontWeight="800" fill={color}>STRIPS Action</text>
      <text x="225" y="72" textAnchor="middle" fontSize="9" fill="#334155">Precond ➔ Add/Del</text>

      <path d="M 280 60 L 330 60" stroke={color} strokeWidth="2" />
      <polygon points="330,56 338,60 330,64" fill={color} />

      <rect x="340" y="40" width="50" height="40" rx="6" fill={color} />
      <text x="365" y="64" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ffffff">Goal G</text>
    </svg>
  );
}

export default function InteractivePosters() {
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState(false);

  const currentPoster = ANIMATED_POSTERS[selectedUnitIdx];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: 60 }}>

      {/* ── Top Header Bar ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-teal-dark)', letterSpacing: '0.08em', background: 'var(--primary-teal-light)', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
              Interactive Visual Posters
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Medium Horizontal Rectangle Layout (Units 1–5)
            </span>
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0, letterSpacing: '-0.02em' }}>
            Unit {currentPoster.unitNumber} Animated Concept Poster
          </h1>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            onClick={() => setIsFullscreenModalOpen(true)}
            className="btn-primary float-animated-badge"
            style={{ fontSize: '0.82rem', padding: '8px 16px', background: currentPoster.gradient }}
          >
            <Maximize2 size={15} /> Full Sized Poster View
          </button>
          <button onClick={handlePrint} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>
            <Printer size={15} /> Print Poster
          </button>
        </div>
      </div>

      {/* ── 5 Unit Selector Tabs (Unit 1 | Unit 2 | Unit 3 | Unit 4 | Unit 5) ── */}
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
        {ANIMATED_POSTERS.map((p, idx) => {
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
                transition: 'all 0.2s ease'
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
              <span>Unit {p.unitNumber} Poster</span>
            </button>
          );
        })}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* MEDIUM HORIZONTAL RECTANGLE ANIMATED POSTER CARD (MAX-WIDTH: 740PX)     */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <div
        id="master-poster-canvas"
        className="edtech-card hover-lift"
        style={{
          maxWidth: '740px',
          margin: '0 auto',
          width: '100%',
          padding: 0,
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          border: '2px solid var(--border-strong)',
          boxShadow: 'var(--shadow-lg)',
          backgroundColor: '#ffffff'
        }}
      >
        {/* ── Top Animated Gradient Header Banner (Rectangle Landscape) ─────── */}
        <div
          className="animated-poster-header"
          style={{
            position: 'relative',
            height: '145px',
            background: currentPoster.gradient,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            padding: '0 28px'
          }}
        >
          {/* Background Image Overlay */}
          <img
            src={currentPoster.heroImage}
            alt={currentPoster.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.22,
              mixBlendMode: 'overlay'
            }}
          />

          {/* Glowing Animated Pulse Orbs */}
          <div className="pulse-glow-orb" style={{
            position: 'absolute', right: '-30px', top: '-30px',
            width: '180px', height: '180px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
            filter: 'blur(25px)', pointerEvents: 'none'
          }} />

          {/* Banner Contents */}
          <div style={{ position: 'relative', zIndex: 2, color: '#ffffff', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <span className="float-animated-badge" style={{
                backgroundColor: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(4px)',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '3px 12px',
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.04em',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                ✨ {currentPoster.unitRoman} • {currentPoster.badge}
              </span>

              <button
                onClick={() => setIsFullscreenModalOpen(true)}
                style={{
                  background: 'rgba(255,255,255,0.25)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 10px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4
                }}
              >
                <Maximize2 size={13} /> Expand Full Poster
              </button>
            </div>

            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.02em', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              {currentPoster.title}
            </h2>
            <p style={{ fontSize: '0.82rem', color: '#e2e8f0', margin: '3px 0 0 0', opacity: 0.95 }}>
              {currentPoster.subtitle}
            </p>
          </div>
        </div>

        {/* ── Animated Formula / Core Law Pill Bar ──────────────────────────── */}
        <div style={{
          backgroundColor: currentPoster.bgLight,
          padding: '12px 24px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Zap size={18} color={currentPoster.color} className="pulse-live-dot" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: currentPoster.color, letterSpacing: '0.04em' }}>
              Unit Core Formula:
            </span>
          </div>

          <code style={{
            color: currentPoster.color,
            fontWeight: 800,
            fontSize: '0.88rem',
            fontFamily: 'var(--font-mono)',
            backgroundColor: '#ffffff',
            padding: '3px 12px',
            borderRadius: 'var(--radius-full)',
            border: `1px solid ${currentPoster.color}40`,
            boxShadow: 'var(--shadow-sm)'
          }}>
            {currentPoster.formula}
          </code>
        </div>

        {/* ── Visual Animated Concept Flow Diagram Bar ─────────────────────── */}
        <div style={{
          padding: '12px 24px 0 24px',
          backgroundColor: '#fafafa',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              🔹 Live Concept Flow Blueprint Diagram:
            </span>
          </div>
          <PosterAnimatedDiagram type={currentPoster.diagramType} color={currentPoster.color} />
        </div>

        {/* ── 2x2 Animated Concept Node Cards Grid ─────────────────────────── */}
        <div style={{
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '16px',
          backgroundColor: '#ffffff'
        }}>
          {currentPoster.nodes.map((node, nIdx) => (
            <div
              key={nIdx}
              className="edtech-card edtech-card-interactive hover-lift"
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                backgroundColor: '#f8fafc',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: 24, height: 24, borderRadius: '50%',
                  backgroundColor: currentPoster.bgLight,
                  color: currentPoster.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '0.75rem', flexShrink: 0
                }}>
                  {nIdx + 1}
                </div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                  {node.title}
                </h3>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                {node.desc}
              </p>

              {/* Chips row */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '4px' }}>
                {node.chips.map((chip, cIdx) => (
                  <span
                    key={cIdx}
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      backgroundColor: '#ffffff',
                      color: currentPoster.color,
                      border: `1px solid ${currentPoster.color}30`,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    🔹 {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Animated High-Yield Exam Tip Footer ──────────────────────────── */}
        <div style={{
          backgroundColor: '#fffbeb',
          borderTop: '1px solid #fde68a',
          padding: '14px 24px',
          fontSize: '0.8rem',
          color: '#92400e',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <Lightbulb size={18} color="#d97706" style={{ flexShrink: 0 }} />
          <div style={{ lineHeight: 1.4 }}>
            <strong>High-Yield Exam Strategy:</strong> {currentPoster.examTip}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* FULL-SIZED OVERLAY MODAL FOR FULL SCREEN POSTER VIEW                    */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {isFullscreenModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="animate-fade-in" style={{
            width: '100%',
            maxWidth: '1000px',
            maxHeight: '92vh',
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
            border: '2px solid var(--border-strong)'
          }}>
            {/* Modal Header Bar */}
            <div style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              padding: '14px 24px',
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, padding: '3px 10px', borderRadius: 'var(--radius-full)', backgroundColor: currentPoster.bgLight, color: currentPoster.color }}>
                  {currentPoster.unitRoman}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: 'var(--text-dark)' }}>
                  Full Sized Animated Concept Poster - Unit {currentPoster.unitNumber}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button onClick={handlePrint} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                  <Printer size={14} /> Print
                </button>
                <button
                  onClick={() => setIsFullscreenModalOpen(false)}
                  style={{
                    background: '#f1f5f9', border: 'none', borderRadius: '50%',
                    width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: 'var(--text-dark)'
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Canvas Body */}
            <div style={{ overflowY: 'auto', padding: '24px', flex: 1, backgroundColor: '#f1f5f9' }}>
              <div style={{
                maxWidth: '860px',
                margin: '0 auto',
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-xl)',
                border: '2px solid var(--border-strong)',
                boxShadow: 'var(--shadow-lg)',
                overflow: 'hidden'
              }}>
                {/* Poster Animated Header */}
                <div
                  className="animated-poster-header"
                  style={{
                    position: 'relative',
                    padding: '36px 32px',
                    background: currentPoster.gradient,
                    color: '#ffffff'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{
                      backgroundColor: 'rgba(255,255,255,0.25)',
                      padding: '4px 14px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      letterSpacing: '0.05em'
                    }}>
                      ✨ FULL SIZED ANIMATED BLUEPRINT
                    </span>
                    <Sparkles size={24} color="#ffffff" />
                  </div>
                  <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '8px 0 4px 0', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                    {currentPoster.title}
                  </h1>
                  <p style={{ fontSize: '0.95rem', opacity: 0.95, margin: 0 }}>
                    {currentPoster.subtitle}
                  </p>
                </div>

                {/* Formula Bar */}
                <div style={{
                  backgroundColor: currentPoster.bgLight,
                  padding: '16px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-color)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Zap size={20} color={currentPoster.color} className="pulse-live-dot" />
                    <span style={{ fontWeight: 800, color: currentPoster.color, fontSize: '0.9rem' }}>
                      KEY EXAM FORMULA & LAW:
                    </span>
                  </div>
                  <code style={{
                    color: currentPoster.color,
                    fontWeight: 800,
                    fontSize: '1rem',
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: '#ffffff',
                    padding: '4px 16px',
                    borderRadius: 'var(--radius-full)',
                    border: `1px solid ${currentPoster.color}40`
                  }}>
                    {currentPoster.formula}
                  </code>
                </div>

                {/* Concept Diagram */}
                <div style={{ padding: '20px 32px', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-color)' }}>
                  <PosterAnimatedDiagram type={currentPoster.diagramType} color={currentPoster.color} />
                </div>

                {/* Nodes Grid */}
                <div style={{
                  padding: '32px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px',
                  backgroundColor: '#ffffff'
                }}>
                  {currentPoster.nodes.map((node, idx) => (
                    <div key={idx} style={{
                      padding: '20px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: '#f8fafc',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: '50%',
                          backgroundColor: currentPoster.bgLight, color: currentPoster.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800
                        }}>
                          {idx + 1}
                        </div>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--text-dark)' }}>
                          {node.title}
                        </h3>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                        {node.desc}
                      </p>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto' }}>
                        {node.chips.map((c, ci) => (
                          <span key={ci} style={{
                            fontSize: '0.75rem', fontWeight: 600, backgroundColor: '#ffffff',
                            color: currentPoster.color, border: `1px solid ${currentPoster.color}30`,
                            padding: '3px 10px', borderRadius: 'var(--radius-sm)'
                          }}>
                            🔹 {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Exam Tip Footer */}
                <div style={{
                  backgroundColor: '#fffbeb',
                  borderTop: '1px solid #fde68a',
                  padding: '18px 32px',
                  color: '#92400e',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}>
                  <Lightbulb size={22} color="#d97706" />
                  <div>
                    <strong>High-Yield Exam Strategy:</strong> {currentPoster.examTip}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
