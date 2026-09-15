import React, { useState } from 'react';
import { RotateCcw, GraduationCap, CheckCircle2, FileText, BookOpen } from 'lucide-react';

export default function RevisionExamView({ mode = 'revision' }) {
  const [selectedUnit, setSelectedUnit] = useState('unit-2');

  const revisionSummaries = [
    {
      unit: 'Unit I — Intelligent Agents',
      points: [
        'AI Definitions: Acting Humanly (Turing Test), Thinking Humanly (Cognitive), Acting Rationally (PEAS), Thinking Rationally (Laws of thought).',
        'PEAS Framework: Performance Measure, Environment, Actuators, Sensors.',
        'Environment Types: Fully/Partially Observable, Deterministic/Stochastic, Episodic/Sequential, Static/Dynamic, Discrete/Continuous, Single/Multi-Agent.',
        'Agent Architectures: Simple Reflex -> Model-Based -> Goal-Based -> Utility-Based.'
      ]
    },
    {
      unit: 'Unit II — Problem Solving & Search',
      points: [
        'BFS: FIFO Queue, Complete & Optimal (step cost=1), Time O(b^d), Space O(b^d).',
        'DFS: LIFO Stack, Space O(bm), Not Complete in infinite depth.',
        'A* Search: Evaluation function f(n) = g(n) + h(n). Optimal if h(n) is admissible (0 <= h(n) <= h*(n)).',
        'Hill Climbing Pitfalls: Local Maxima, Ridges, Plateaus. Escaped via Simulated Annealing (P = exp(-ΔE/T)).'
      ]
    },
    {
      unit: 'Unit III — Constraints & Adversarial Search',
      points: [
        'CSP Formulation: Variables X, Domains D, Constraints C.',
        'Forward Checking: Detects future domain empty states early during backtracking.',
        'Minimax Algorithm: MAX chooses max child value, MIN chooses min child value.',
        'Alpha-Beta Pruning: Prunes branches whenever α >= β.'
      ]
    },
    {
      unit: 'Unit IV — Knowledge Representation',
      points: [
        'Propositional Logic: Truth tables, Modus Ponens, CNF conversion.',
        'First-Order Logic: Objects, Predicates, Functions, Quantifiers (∀ with ->, ∃ with ^).',
        'Forward Chaining: Data-driven (Facts -> Rules -> Goal).',
        'Backward Chaining: Goal-driven (Goal <- Rules <- Facts).'
      ]
    },
    {
      unit: 'Unit V — AI Applications',
      points: [
        'Healthcare: Computer Vision MRI tumor detection, drug discovery.',
        'Smart Cities: Adaptive traffic signal timing, grid optimization.',
        'Generative AI & LLMs: Transformer architectures, self-attention, RLHF safety alignment.'
      ]
    }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-indigo)', letterSpacing: '0.05em', marginBottom: '4px' }}>
          {mode === 'exam' ? 'Exam Preparation Mode' : 'High-Yield Quick Revision'}
        </div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)' }}>
          {mode === 'exam' ? '10-Mark Model Exam Answers & Cheat Sheets' : '5-Unit Quick Revision Summary'}
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '4px' }}>
          Review key definitions, essential equations, comparisons, and exam-ready answers 15 minutes before your evaluation.
        </p>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {revisionSummaries.map((rev, idx) => (
          <div key={idx} className="edtech-card" style={{ padding: '24px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-indigo)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} /> {rev.unit}
            </h2>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '20px', color: 'var(--text-dark)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {rev.points.map((pt, pIdx) => (
                <li key={pIdx}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
