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
  FileText
} from 'lucide-react';

// ══════════════════════════════════════════════════════════════════════════════
// 5 MASTER POSTER CARDS DATA (1 POSTER CARD PER UNIT)
// ══════════════════════════════════════════════════════════════════════════════
const UNIT_POSTERS = [
  {
    id: 'unit-1',
    unitNumber: 1,
    unitRoman: 'UNIT I',
    badge: 'Master Poster Card',
    title: 'Intelligent Agents & Problem Formulation',
    subtitle: 'Foundations of AI, PEAS Framework, Agent Architectures & State-Space Search',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    heroAlt: 'Neural intelligent agent architecture',
    formulaTitle: 'PEAS & Agent Function',
    formula: 'Agent Function f: P* ➔ A (Percept History to Action)',
    highlights: [
      'Turing Test (1950): Operational test for acting humanly via NLP and Reasoning.',
      'PEAS Framework: Performance Measure, Environment, Actuators, Sensors.',
      'Agent Typology: Reflex, Model-Based, Goal-Based, Utility-Based, Learning Agents.'
    ],
    examTip: 'Exam Key: Always define the 4-letter PEAS matrix (P, E, A, S) when describing any autonomous agent.'
  },
  {
    id: 'unit-2',
    unitNumber: 2,
    unitRoman: 'UNIT II',
    badge: 'Master Poster Card',
    title: 'Heuristic Search & Uninformed Methods',
    subtitle: 'BFS, DFS, Uniform Cost, Greedy Best-First, A* Search, and Local Search',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    heroAlt: 'A* Search space graph',
    formulaTitle: 'A* Evaluation Function',
    formula: 'f(n) = g(n) + h(n) [Path Cost + Admissible Heuristic]',
    highlights: [
      'Uninformed Search: BFS (O(b^d) memory, optimal for unit costs), DFS, UCS.',
      'Informed Search: A* Search (Optimal when h(n) is admissible and consistent).',
      'Local Optimization: Hill-Climbing (local maxima trap) & Simulated Annealing.'
    ],
    examTip: 'Exam Key: An admissible heuristic NEVER overestimates true path cost to goal: 0 <= h(n) <= h*(n).'
  },
  {
    id: 'unit-3',
    unitNumber: 3,
    unitRoman: 'UNIT III',
    badge: 'Master Poster Card',
    title: 'Constraints & Adversarial Search',
    subtitle: 'CSPs, AC-3 Arc Consistency, Minimax Algorithm, and Alpha-Beta Pruning',
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    heroAlt: 'Game theory minimax search tree',
    formulaTitle: 'Alpha-Beta Pruning Cutoff',
    formula: 'Prune branch whenever Alpha (MAX best) >= Beta (MIN best)',
    highlights: [
      'CSP Triplet (X, D, C): Variables X, Domains D, Constraints C (e.g. Map Coloring).',
      'AC-3 Arc Consistency: Prunes illegal domain values before backtracking.',
      'Adversarial Search: Minimax algorithm & Alpha-Beta pruning (doubles depth to O(b^(m/2))).'
    ],
    examTip: 'Exam Key: Alpha-Beta pruning removes subtrees without altering the final Minimax choice.'
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    unitRoman: 'UNIT IV',
    badge: 'Master Poster Card',
    title: 'Knowledge Representation & Logic',
    subtitle: 'Propositional Logic, First-Order Logic (FOL), Chaining, and Resolution',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    heroAlt: 'First-order logic inference tree',
    formulaTitle: 'Resolution Refutation Proof',
    formula: 'Prove KB |= Q by deriving contradiction [ ] from (KB ∧ ¬Q)',
    highlights: [
      'First-Order Logic: Adds Objects, Relations, and Quantifiers (Universal ∀, Existential ∃).',
      'Inference Engines: Forward Chaining (data-driven) & Backward Chaining (goal-driven).',
      'Resolution Proofs: Converts KB to CNF (Conjunctive Normal Form) and applies resolution.'
    ],
    examTip: 'Exam Key: Skolemization replaces existential quantifiers ∃ with unique Skolem constants during CNF.'
  },
  {
    id: 'unit-5',
    unitNumber: 5,
    unitRoman: 'UNIT V',
    badge: 'Master Poster Card',
    title: 'AI Applications & Modern Frontiers',
    subtitle: 'STRIPS Planning, Natural Language Processing, Computer Vision, and Robotics',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    heroAlt: 'Robotics and Computer Vision Applications',
    formulaTitle: 'Transformer Self-Attention',
    formula: 'Attention(Q, K, V) = softmax(Q·Kᵀ / √dₖ)·V',
    highlights: [
      'STRIPS Planning: Actions defined by Preconditions, Add List, and Delete List.',
      'Computer Vision & NLP: CNN feature extraction, Transformer self-attention, LLMs.',
      'Robotics & XAI: Inverse kinematics for joints, Explainable AI (XAI) for trust & ethics.'
    ],
    examTip: 'Exam Key: Explainable AI (XAI) solves the black-box problem for high-stakes healthcare/finance.'
  }
];

export default function InteractivePosters() {
  const [selectedPoster, setSelectedPoster] = useState(null);

  const handlePrintCard = () => {
    window.print();
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: 60 }}>
      {/* ── Page Header ────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-teal-dark)', letterSpacing: '0.08em', background: 'var(--primary-teal-light)', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
              Visual Study Cards
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              1 Master Poster Card Per Unit (Units 1–5)
            </span>
          </div>
          <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0, letterSpacing: '-0.02em' }}>
            5 Master Poster Study Cards
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: 4, maxWidth: 720 }}>
            Visual concept cards covering key equations, architectural formulas, high-yield exam tips, and core highlights for each unit.
          </p>
        </div>
      </div>

      {/* ── 5 POSTER CARDS GRID (1 CARD PER UNIT) ────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        {UNIT_POSTERS.map((poster) => (
          <div
            key={poster.id}
            className="edtech-card edtech-card-interactive hover-lift"
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              backgroundColor: '#ffffff'
            }}
          >
            {/* Poster Card Image Banner */}
            <div className="img-neat-frame" style={{ height: '160px', borderRadius: 0, border: 'none' }}>
              <img src={poster.heroImage} alt={poster.heroAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                backgroundColor: 'var(--primary-indigo)',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.04em'
              }}>
                {poster.unitRoman} • {poster.badge}
              </div>
            </div>

            {/* Poster Card Content Body */}
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0, lineHeight: 1.3 }}>
                  {poster.title}
                </h2>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px', margin: 0, lineHeight: 1.45 }}>
                  {poster.subtitle}
                </p>
              </div>

              {/* Formula / Rule Pill */}
              <div style={{
                backgroundColor: 'var(--primary-teal-light)',
                border: '1px solid rgba(13,148,136,0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 12px',
                fontSize: '0.8rem'
              }}>
                <strong style={{ color: 'var(--primary-teal-dark)', display: 'block', marginBottom: '2px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  ⚡ {poster.formulaTitle}:
                </strong>
                <code style={{ color: 'var(--primary-teal-dark)', fontWeight: 700, fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                  {poster.formula}
                </code>
              </div>

              {/* Highlights List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                  Unit Highlights:
                </div>
                {poster.highlights.map((h, hIdx) => (
                  <div key={hIdx} style={{ fontSize: '0.8rem', color: 'var(--text-dark)', display: 'flex', gap: '6px', alignItems: 'flex-start', lineHeight: 1.4 }}>
                    <span style={{ color: 'var(--primary-teal)', fontWeight: 800 }}>•</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Exam Tip Box */}
              <div style={{
                marginTop: 'auto',
                backgroundColor: '#fffbeb',
                border: '1px solid #fde68a',
                borderRadius: 'var(--radius-md)',
                padding: '10px 12px',
                fontSize: '0.78rem',
                color: '#92400e',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px'
              }}>
                <Lightbulb size={16} color="#d97706" style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <strong>High-Yield Tip:</strong> {poster.examTip}
                </div>
              </div>

              {/* Card Action Buttons */}
              <div style={{ display: 'flex', gap: '8px', paddingTop: '6px', borderTop: '1px solid var(--border-color)' }}>
                <button
                  onClick={() => setSelectedPoster(poster)}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem', padding: '8px 12px' }}
                >
                  <Maximize2 size={14} /> Cinema Zoom
                </button>
                <button
                  onClick={handlePrintCard}
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '8px 12px' }}
                >
                  <Printer size={14} /> Print
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── CINEMA FULLSCREEN MODAL FOR POSTER CARDS ───────────────────── */}
      {selectedPoster && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: 'rgba(15,23,42,0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div className="animate-fade-in" style={{
            maxWidth: '600px',
            width: '100%',
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '2px solid var(--primary-indigo)'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '16px 20px',
              backgroundColor: 'var(--primary-indigo)',
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ fontWeight: 800, fontSize: '1rem' }}>
                {selectedPoster.unitRoman} MASTER POSTER STUDY CARD
              </div>
              <button
                onClick={() => setSelectedPoster(null)}
                style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Banner */}
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img src={selectedPoster.heroImage} alt={selectedPoster.heroAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                  {selectedPoster.title}
                </h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {selectedPoster.subtitle}
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--primary-teal-light)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(13,148,136,0.3)' }}>
                <strong style={{ color: 'var(--primary-teal-dark)', display: 'block', marginBottom: '4px' }}>
                  ⚡ {selectedPoster.formulaTitle}:
                </strong>
                <div style={{ fontWeight: 700, color: 'var(--primary-teal-dark)', fontFamily: 'var(--font-mono)' }}>
                  {selectedPoster.formula}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <strong style={{ color: 'var(--text-dark)', fontSize: '0.88rem' }}>Core Unit Highlights:</strong>
                {selectedPoster.highlights.map((h, i) => (
                  <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-dark)' }}>
                    • {h}
                  </div>
                ))}
              </div>

              <div style={{ backgroundColor: '#fffbeb', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #fde68a', color: '#92400e', fontSize: '0.85rem' }}>
                <strong>High-Yield Exam Tip:</strong> {selectedPoster.examTip}
              </div>

              <button
                onClick={() => setSelectedPoster(null)}
                className="btn-primary"
                style={{ alignSelf: 'center', padding: '10px 28px', marginTop: '8px' }}
              >
                Close Card Zoom
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
