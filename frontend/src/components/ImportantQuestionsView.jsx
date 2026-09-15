import React, { useState, useEffect } from 'react';
import {
  BookMarked,
  Eye,
  EyeOff,
  Sparkles,
  Award,
  Lightbulb,
  HelpCircle,
  CheckCircle2,
  Download,
  Printer,
  ChevronDown,
  ChevronUp,
  Layers,
  Cpu,
  Zap,
  RefreshCw,
  GitBranch,
  Search,
  Activity,
  Compass,
  Clock,
  Target,
  FileText,
  PenTool
} from 'lucide-react';
import { ENHANCED_EXAM_QUESTIONS } from '../data/enhancedQuestionsData';

// ══════════════════════════════════════════════════════════════════════════════
// STUDENT-DRAWABLE EXAM DIAGRAM SVG COMPONENTS (HAND-DRAWABLE FOR EXAMS)
// ══════════════════════════════════════════════════════════════════════════════

function StudentDrawableDiagram({ topic = '', unitId = 'unit-1' }) {
  const topicLower = topic.toLowerCase();

  // 1. PEAS & Intelligent Agent Diagram
  if (unitId === 'unit-1' || topicLower.includes('peas') || topicLower.includes('agent')) {
    return (
      <div style={{ background: '#ffffff', border: '2px dashed #0d9488', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <PenTool size={15} /> Student Exam Diagram: Draw on Answer Sheet (3–4 Marks)
        </div>
        <svg viewBox="0 0 500 240" style={{ width: '100%', maxHeight: '200px', display: 'block', margin: '0 auto' }}>
          {/* Environment Box */}
          <rect x="130" y="10" width="240" height="40" rx="8" fill="#f0fdf4" stroke="#059669" strokeWidth="2" />
          <text x="250" y="35" textAnchor="middle" fill="#047857" fontWeight="bold" fontSize="13">ENVIRONMENT (External World)</text>

          {/* Sensors Box */}
          <rect x="20" y="90" width="120" height="45" rx="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="80" y="112" textAnchor="middle" fill="#1d4ed8" fontWeight="bold" fontSize="12">SENSORS</text>
          <text x="80" y="127" textAnchor="middle" fill="#475569" fontSize="10">(Cameras, LiDAR)</text>

          {/* Agent Logic Box */}
          <rect x="180" y="90" width="140" height="60" rx="8" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
          <text x="250" y="115" textAnchor="middle" fill="#0f766e" fontWeight="bold" fontSize="13">INTELLIGENT AGENT</text>
          <text x="250" y="132" textAnchor="middle" fill="#0f766e" fontSize="10">Agent Function f: P* ➔ A</text>
          <text x="250" y="144" textAnchor="middle" fill="#0f766e" fontSize="9">Maximize Utility P</text>

          {/* Actuators Box */}
          <rect x="360" y="90" width="120" height="45" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="420" y="112" textAnchor="middle" fill="#b45309" fontWeight="bold" fontSize="12">ACTUATORS</text>
          <text x="420" y="127" textAnchor="middle" fill="#475569" fontSize="10">(Steering, Motors)</text>

          {/* Arrows */}
          {/* Environment to Sensors */}
          <path d="M 170 50 L 80 90" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
          <text x="110" y="65" fill="#047857" fontSize="10">Percepts</text>

          {/* Sensors to Agent */}
          <path d="M 140 115 L 180 115" stroke="#2563eb" strokeWidth="2" fill="none" />

          {/* Agent to Actuators */}
          <path d="M 320 115 L 360 115" stroke="#0d9488" strokeWidth="2" fill="none" />

          {/* Actuators back to Environment */}
          <path d="M 420 90 L 330 50" stroke="#d97706" strokeWidth="2" fill="none" />
          <text x="390" y="65" fill="#b45309" fontSize="10">Actions</text>
        </svg>
        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
          <strong>Fig:</strong> Standard PEAS Rational Agent Architecture — Label Environment, Sensors, Agent Function & Actuators.
        </div>
      </div>
    );
  }

  // 2. Search Tree / A* Algorithm Diagram
  if (unitId === 'unit-2' || topicLower.includes('search') || topicLower.includes('a*') || topicLower.includes('heuristic')) {
    return (
      <div style={{ background: '#ffffff', border: '2px dashed #4f46e5', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <PenTool size={15} /> Student Exam Diagram: Draw Search Tree & A* Node Formula
        </div>
        <svg viewBox="0 0 500 220" style={{ width: '100%', maxHeight: '200px', display: 'block', margin: '0 auto' }}>
          {/* Formula Box */}
          <rect x="330" y="10" width="150" height="45" rx="6" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5" />
          <text x="405" y="28" textAnchor="middle" fill="#3730a3" fontWeight="bold" fontSize="11">A* Evaluation Formula:</text>
          <text x="405" y="44" textAnchor="middle" fill="#4338ca" fontWeight="bold" fontSize="12">f(n) = g(n) + h(n)</text>

          {/* Root Node S0 */}
          <circle cx="200" cy="30" r="20" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
          <text x="200" y="34" textAnchor="middle" fill="#0f766e" fontWeight="bold" fontSize="12">S0</text>
          <text x="200" y="60" textAnchor="middle" fill="#64748b" fontSize="9">g=0, h=6 (f=6)</text>

          {/* Branches to Level 1 */}
          <line x1="185" y1="45" x2="100" y2="95" stroke="#94a3b8" strokeWidth="2" />
          <line x1="215" y1="45" x2="300" y2="95" stroke="#94a3b8" strokeWidth="2" />
          <text x="130" y="70" fill="#2563eb" fontSize="10" fontWeight="bold">cost=2</text>
          <text x="270" y="70" fill="#2563eb" fontSize="10" fontWeight="bold">cost=4</text>

          {/* Node A */}
          <circle cx="100" cy="110" r="18" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
          <text x="100" y="114" textAnchor="middle" fill="#3730a3" fontWeight="bold" fontSize="12">A</text>
          <text x="100" y="140" textAnchor="middle" fill="#4338ca" fontSize="9">g=2, h=3 (f=5) ⭐</text>

          {/* Node B */}
          <circle cx="300" cy="110" r="18" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="300" y="114" textAnchor="middle" fill="#b45309" fontWeight="bold" fontSize="12">B</text>
          <text x="300" y="140" textAnchor="middle" fill="#92400e" fontSize="9">g=4, h=4 (f=8)</text>

          {/* Branch to Goal */}
          <line x1="100" y1="128" x2="100" y2="170" stroke="#059669" strokeWidth="2.5" />
          <text x="115" y="155" fill="#059669" fontSize="10" fontWeight="bold">cost=3</text>

          {/* Goal Node G */}
          <circle cx="100" cy="188" r="18" fill="#d1fae5" stroke="#059669" strokeWidth="3" />
          <text x="100" y="192" textAnchor="middle" fill="#047857" fontWeight="bold" fontSize="12">GOAL</text>
          <text x="100" y="214" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="bold">g=5, h=0 (Optimal Goal!)</text>
        </svg>
        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
          <strong>Fig:</strong> State-Space Search Tree & A* Node Expansion — Label g(n) path cost, h(n) heuristic, and f(n) evaluation.
        </div>
      </div>
    );
  }

  // 3. Game Tree / Minimax & Alpha-Beta Diagram
  if (unitId === 'unit-3' || topicLower.includes('game') || topicLower.includes('minimax') || topicLower.includes('csp') || topicLower.includes('constraint')) {
    return (
      <div style={{ background: '#ffffff', border: '2px dashed #d97706', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <PenTool size={15} /> Student Exam Diagram: Minimax Tree with Alpha-Beta Pruning Cutoff
        </div>
        <svg viewBox="0 0 500 220" style={{ width: '100%', maxHeight: '200px', display: 'block', margin: '0 auto' }}>
          {/* MAX Root (Triangle) */}
          <polygon points="250,15 225,50 275,50" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
          <text x="250" y="42" textAnchor="middle" fill="#3730a3" fontWeight="bold" fontSize="12">MAX [v=6]</text>

          {/* Branches to MIN level */}
          <line x1="235" y1="50" x2="130" y2="95" stroke="#94a3b8" strokeWidth="2" />
          <line x1="265" y1="50" x2="370" y2="95" stroke="#94a3b8" strokeWidth="2" />

          {/* MIN Nodes (Inverted Triangles) */}
          <polygon points="130,135 105,100 155,100" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
          <text x="130" y="118" textAnchor="middle" fill="#991b1b" fontWeight="bold" fontSize="11">MIN [v=6]</text>

          <polygon points="370,135 345,100 395,100" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
          <text x="370" y="118" textAnchor="middle" fill="#991b1b" fontWeight="bold" fontSize="11">MIN [v=2]</text>

          {/* Leaf Nodes under Left MIN */}
          <line x1="115" y1="135" x2="80" y2="170" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="145" y1="135" x2="180" y2="170" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="65" y="170" width="30" height="24" rx="4" fill="#f1f5f9" stroke="#64748b" />
          <text x="80" y="186" textAnchor="middle" fontWeight="bold" fontSize="12">6</text>
          <rect x="165" y="170" width="30" height="24" rx="4" fill="#f1f5f9" stroke="#64748b" />
          <text x="180" y="186" textAnchor="middle" fontWeight="bold" fontSize="12">9</text>

          {/* Leaf Nodes under Right MIN (Pruned!) */}
          <line x1="355" y1="135" x2="320" y2="170" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="305" y="170" width="30" height="24" rx="4" fill="#f1f5f9" stroke="#64748b" />
          <text x="320" y="186" textAnchor="middle" fontWeight="bold" fontSize="12">2</text>

          {/* Pruned Branch Cutoff */}
          <line x1="385" y1="135" x2="420" y2="170" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4,4" />
          <text x="425" y="155" fill="#dc2626" fontWeight="bold" fontSize="14">✂️ PRUNED!</text>
          <text x="425" y="170" fill="#dc2626" fontSize="9">(Alpha &ge; Beta Cutoff)</text>
        </svg>
        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
          <strong>Fig:</strong> Minimax Game Tree with Alpha-Beta Pruning Cutoff — Draw MAX triangles, MIN inverted triangles, and pruned cutoff line.
        </div>
      </div>
    );
  }

  // 4. First-Order Logic & Chaining Diagram
  if (unitId === 'unit-4' || topicLower.includes('logic') || topicLower.includes('fol') || topicLower.includes('chaining') || topicLower.includes('resolution')) {
    return (
      <div style={{ background: '#ffffff', border: '2px dashed #7c3aed', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <PenTool size={15} /> Student Exam Diagram: Resolution Refutation Proof Tree
        </div>
        <svg viewBox="0 0 500 200" style={{ width: '100%', maxHeight: '180px', display: 'block', margin: '0 auto' }}>
          {/* Premise 1 */}
          <rect x="60" y="15" width="140" height="35" rx="6" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="2" />
          <text x="130" y="37" textAnchor="middle" fill="#6b21a8" fontWeight="bold" fontSize="12">Clause 1: ¬P ∨ Q</text>

          {/* Premise 2 */}
          <rect x="300" y="15" width="140" height="35" rx="6" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="2" />
          <text x="370" y="37" textAnchor="middle" fill="#6b21a8" fontWeight="bold" fontSize="12">Clause 2: P</text>

          {/* Resolution Line */}
          <line x1="130" y1="50" x2="250" y2="100" stroke="#7c3aed" strokeWidth="2" />
          <line x1="370" y1="50" x2="250" y2="100" stroke="#7c3aed" strokeWidth="2" />

          {/* Intermediate Resolvent */}
          <rect x="180" y="100" width="140" height="35" rx="6" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
          <text x="250" y="122" textAnchor="middle" fill="#0f766e" fontWeight="bold" fontSize="12">Derived: Q</text>

          {/* Negated Query Premise */}
          <rect x="340" y="100" width="130" height="35" rx="6" fill="#ffe4e6" stroke="#e11d48" strokeWidth="2" />
          <text x="405" y="122" textAnchor="middle" fill="#be123c" fontWeight="bold" fontSize="12">Negated Query: ¬Q</text>

          {/* Final Resolution to Contradiction */}
          <line x1="250" y1="135" x2="325" y2="170" stroke="#e11d48" strokeWidth="2" />
          <line x1="405" y1="135" x2="325" y2="170" stroke="#e11d48" strokeWidth="2" />

          {/* Empty Clause Box */}
          <rect x="290" y="165" width="70" height="30" rx="6" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
          <text x="325" y="185" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="14">[ ] (CONTRADICTION!)</text>
        </svg>
        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
          <strong>Fig:</strong> Resolution Refutation Proof Tree — Derive empty clause [ ] to prove Query Q is valid.
        </div>
      </div>
    );
  }

  // 5. Default Planning / AI Application Pipeline Diagram
  return (
    <div style={{ background: '#ffffff', border: '2px dashed #059669', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        <PenTool size={15} /> Student Exam Diagram: STRIPS Planning & State Pipeline
      </div>
      <svg viewBox="0 0 500 180" style={{ width: '100%', maxHeight: '160px', display: 'block', margin: '0 auto' }}>
        {/* Initial State Box */}
        <rect x="20" y="60" width="120" height="50" rx="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
        <text x="80" y="82" textAnchor="middle" fill="#1d4ed8" fontWeight="bold" fontSize="11">Initial State S0</text>
        <text x="80" y="98" textAnchor="middle" fill="#475569" fontSize="9">At(Robot, A), Clear(B)</text>

        {/* Action Operator */}
        <rect x="180" y="50" width="140" height="70" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="250" y="70" textAnchor="middle" fill="#b45309" fontWeight="bold" fontSize="12">Action: Move(A, B)</text>
        <text x="250" y="88" textAnchor="middle" fill="#78350f" fontSize="9">Precond: At(Robot, A)</text>
        <text x="250" y="102" textAnchor="middle" fill="#047857" fontSize="9">Add: At(Robot, B) | Del: At(A)</text>

        {/* Goal State Box */}
        <rect x="360" y="60" width="120" height="50" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
        <text x="420" y="82" textAnchor="middle" fill="#047857" fontWeight="bold" fontSize="11">Goal State G</text>
        <text x="420" y="98" textAnchor="middle" fill="#047857" fontSize="9">At(Robot, B) Verified</text>

        {/* Arrows */}
        <path d="M 140 85 L 180 85" stroke="#2563eb" strokeWidth="2" fill="none" />
        <path d="M 320 85 L 360 85" stroke="#059669" strokeWidth="2" fill="none" />
      </svg>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
        <strong>Fig:</strong> STRIPS Automated Planning State Transition — Draw Initial State, Action Operator (Preconditions, Add & Delete lists), and Goal State.
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN IMPORTANT QUESTIONS VIEW COMPONENT
// ══════════════════════════════════════════════════════════════════════════════

export default function ImportantQuestionsView() {
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [revealed, setRevealed] = useState({});

  useEffect(() => {
    fetchQuestions();
  }, [selectedUnit]);

  const fetchQuestions = async () => {
    try {
      const url = selectedUnit !== 'all' ? `/api/important-questions?unitId=${selectedUnit}` : '/api/important-questions';
      const res = await fetch(url);
      const data = await res.json();
      const rawQuestions = data.questions || [];

      const enriched = rawQuestions.map(q => {
        const enhancedMatch = ENHANCED_EXAM_QUESTIONS.find(eq => eq.id === q.id);
        if (enhancedMatch) {
          return {
            ...q,
            ...enhancedMatch,
            marks: Math.max(q.marks || 0, enhancedMatch.marks || 10)
          };
        }

        return {
          ...q,
          marks: q.marks === 2 ? 8 : q.marks === 5 ? 10 : 12,
          rubric: 'Definition & Principles: 3M | Architectural Diagram & Flow: 3M | Algorithmic Steps: 3M | Analysis & Use Case: 3M = Total 12 Marks',
          flowchart: [
            { step: '1. Problem Formulation', desc: `Formulate formal states and inputs for ${q.topic}`, icon: 'Layers' },
            { step: '2. Reasoning / Search', desc: 'Execute sound algorithmic inference and evaluation', icon: 'Cpu' },
            { step: '3. State Transition', desc: 'Update internal belief state and verify goal criteria', icon: 'Zap' },
            { step: '4. Optimal Execution', desc: 'Select action that maximizes expected utility performance', icon: 'CheckCircle2' }
          ],
          structuredAnswer: {
            definition: q.shortAnswer + '\n\n' + (q.detailedAnswer || ''),
            criticalAnalysis: `Exam Focus: When answering in 8-12 marks university exams, always start with formal mathematical definitions, illustrate with the student exam diagram, and provide step-by-step points.`
          }
        };
      });

      setQuestions(enriched);
    } catch (err) {
      console.error('Failed to load questions:', err);
      const filtered = selectedUnit !== 'all'
        ? ENHANCED_EXAM_QUESTIONS.filter(q => q.unitId === selectedUnit)
        : ENHANCED_EXAM_QUESTIONS;
      setQuestions(filtered);
    }
  };

  const toggleReveal = (id) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleRevealAll = () => {
    const allIds = {};
    questions.forEach(q => { allIds[q.id] = true; });
    setRevealed(allIds);
  };

  const handleHideAll = () => {
    setRevealed({});
  };

  const unitTabs = [
    { id: 'all', label: 'All 5 Units (50 Questions)' },
    { id: 'unit-1', label: 'Unit I (10 Questions)' },
    { id: 'unit-2', label: 'Unit II (10 Questions)' },
    { id: 'unit-3', label: 'Unit III (10 Questions)' },
    { id: 'unit-4', label: 'Unit IV (10 Questions)' },
    { id: 'unit-5', label: 'Unit V (10 Questions)' },
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: 60 }}>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-teal-dark)', letterSpacing: '0.08em', background: 'var(--primary-teal-light)', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
              University Exam High-Yield Bank
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              8-12 Marks Model Answers • Student-Drawable Exam Diagrams
            </span>
          </div>
          <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0, letterSpacing: '-0.02em' }}>
            Top 10 Important Exam Questions per Unit (50 Total)
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: 6, maxWidth: 840 }}>
            Strictly aligned with university evaluations. Every question includes a <strong>hand-drawable exam diagram</strong> that students can easily draw on paper to score full 8–12 marks!
          </p>
        </div>

        {/* Global Action Buttons */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button onClick={handleRevealAll} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '8px 14px' }}>
            <Eye size={15} /> Reveal All Answers
          </button>
          <button onClick={handleHideAll} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '8px 14px' }}>
            <EyeOff size={15} /> Collapse All
          </button>
        </div>
      </div>

      {/* ── Filter Tabs ────────────────────────────────────────────────────── */}
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
        {unitTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedUnit(tab.id)}
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--radius-md)',
              border: selectedUnit === tab.id ? '2px solid var(--primary-teal)' : '1px solid var(--border-color)',
              backgroundColor: selectedUnit === tab.id ? 'var(--primary-teal-light)' : '#ffffff',
              color: selectedUnit === tab.id ? 'var(--primary-teal-dark)' : 'var(--text-dark)',
              fontWeight: selectedUnit === tab.id ? 700 : 500,
              fontSize: '0.85rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Questions List ──────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {questions.map((q, idx) => {
          const isRevealed = revealed[q.id];

          return (
            <div
              key={q.id || idx}
              className="edtech-card"
              style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {/* Question Header Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{
                    backgroundColor: 'var(--primary-teal-light)',
                    color: 'var(--primary-teal-dark)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    {q.unitId ? q.unitId.toUpperCase() : 'UNIT I'} • {q.marks || 12} MARKS QUESTION
                  </span>

                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Topic: <strong>{q.topic}</strong>
                  </span>
                </div>

                <span style={{ fontSize: '0.75rem', color: '#b45309', backgroundColor: '#fef3c7', padding: '3px 10px', borderRadius: 'var(--radius-sm)', fontWeight: 700 }}>
                  🔥 {q.whyImportant || 'High-Yield 8-12 Marks University Question'}
                </span>
              </div>

              {/* Question Prompt */}
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1.5, margin: 0 }}>
                <span style={{ color: 'var(--primary-teal)', marginRight: '6px' }}>Q{idx + 1}.</span> {q.question}
              </h3>

              {/* Reveal Toggle Button Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                <button
                  onClick={() => toggleReveal(q.id)}
                  className="btn-primary"
                  style={{ fontSize: '0.85rem', padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
                  <span>{isRevealed ? 'Hide Model Answer' : 'Reveal Model Answer & Hand-Drawable Diagram'}</span>
                </button>

                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Includes: Student Exam Diagram, Rubric & Step-by-Step Explanation
                </span>
              </div>

              {/* ═══════════════════════════════════════════════════════════════ */}
              {/* REVEALED MODEL ANSWER & DRAWABLE DIAGRAM                       */}
              {/* ═══════════════════════════════════════════════════════════════ */}
              {isRevealed && (
                <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px', borderTop: '2px solid var(--primary-teal-light)', paddingTop: '20px' }}>

                  {/* 1. Scoring Rubric Banner */}
                  <div style={{
                    backgroundColor: '#eff6ff',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #bfdbfe',
                    fontSize: '0.85rem',
                    color: '#1e40af',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                  }}>
                    <Award size={20} color="#2563eb" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Official University Examiner Scoring Rubric ({q.marks || 12} Marks):</strong>
                      <div style={{ color: '#1d4ed8', marginTop: 2 }}>{q.rubric || 'Definition: 2M | Architecture Diagram: 3M | Step-by-Step Algorithm: 4M | Analysis: 3M'}</div>
                    </div>
                  </div>

                  {/* 2. HAND-DRAWABLE EXAM DIAGRAM (Replacing real photos) */}
                  <StudentDrawableDiagram topic={q.topic} unitId={q.unitId || 'unit-1'} />

                  {/* 3. Key Summary Definition */}
                  <div style={{
                    backgroundColor: '#f8fafc',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '4px solid var(--primary-teal)',
                    fontSize: '0.88rem',
                    color: 'var(--text-dark)'
                  }}>
                    <strong style={{ color: 'var(--primary-teal-dark)', display: 'block', marginBottom: 4 }}>
                      Key Summary Definition:
                    </strong>
                    {q.shortAnswer}
                  </div>

                  {/* 4. Detailed University Model Answer Breakdown */}
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                  }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-dark)', borderBottom: '2px solid var(--primary-teal)', paddingBottom: 8 }}>
                      Detailed 8-12 Mark Model Answer:
                    </div>

                    {q.structuredAnswer ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
                        {q.structuredAnswer.definition && (
                          <div>
                            <strong style={{ color: 'var(--primary-teal-dark)', fontSize: '0.95rem', display: 'block', marginBottom: 4 }}>
                              1. Theoretical Principles & Formal Definitions:
                            </strong>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{q.structuredAnswer.definition}</div>
                          </div>
                        )}

                        {q.structuredAnswer.peasBreakdown && (
                          <div style={{ backgroundColor: '#f8fafc', padding: 14, borderRadius: 8, border: '1px solid #e2e8f0' }}>
                            <strong style={{ color: 'var(--primary-teal-dark)', display: 'block', marginBottom: 4 }}>
                              2. PEAS Framework Specification:
                            </strong>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{q.structuredAnswer.peasBreakdown}</div>
                          </div>
                        )}

                        {q.structuredAnswer.caseStudies && (
                          <div>
                            <strong style={{ color: 'var(--primary-teal-dark)', fontSize: '0.95rem', display: 'block', marginBottom: 4 }}>
                              3. Real-World Case Studies & Architectural Mapping:
                            </strong>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{q.structuredAnswer.caseStudies}</div>
                          </div>
                        )}

                        {q.structuredAnswer.criticalAnalysis && (
                          <div style={{ backgroundColor: '#fffbeb', padding: 14, borderRadius: 8, border: '1px solid #fde68a', color: '#92400e' }}>
                            <strong>Examiner Tip & Scoring Strategy:</strong>
                            <div style={{ marginTop: 4 }}>{q.structuredAnswer.criticalAnalysis}</div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                        {q.detailedAnswer}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
