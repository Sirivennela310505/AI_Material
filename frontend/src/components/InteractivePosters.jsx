import React, { useState } from 'react';
import {
  Maximize2,
  Printer,
  BookOpen,
  Zap,
  Target,
  CheckCircle2,
  Layers,
  Search,
  Grid,
  Database,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  GitBranch,
  Brain,
  X,
  Eye,
  Activity,
  Image as ImageIcon,
  Check,
  LayoutGrid
} from 'lucide-react';

const UNIT_POSTERS = [
  {
    id: 'unit-1',
    unitNumber: 1,
    unitRoman: 'UNIT I',
    badge: 'BLUEPRINT CONCEPT POSTER',
    title: 'Intelligent Agents & PEAS Framework',
    subtitle: 'Sensors, Percept Sequence, Agent Functions & Environment Types',
    image: '/posters/unit1.jpg',
    imageCaption: 'Blueprint 1.1: Intelligent Agent Perception-Action Loop & Sensor-Actuator Architecture (PEAS)',
    formula: 'Agent Function: f: P* ➔ A (Percepts to Action)',
    color: '#0d9488',
    gradient: 'linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #2563eb 100%)',
    bgLight: '#f0fdfa',
    accentBorder: '#99f6e4',
    pillars: [
      {
        icon: <Brain size={14} color="#0d9488" />,
        label: 'Agent Function',
        value: 'f: P* → A maps percept history to rational actions'
      },
      {
        icon: <Target size={14} color="#0d9488" />,
        label: 'PEAS Framework',
        value: 'Performance, Environment, Actuators, Sensors'
      },
      {
        icon: <Layers size={14} color="#0d9488" />,
        label: '5 Agent Classes',
        value: 'Simple Reflex, Model-Based, Goal, Utility, Learning'
      },
      {
        icon: <GitBranch size={14} color="#0d9488" />,
        label: 'State Space',
        value: 'Initial State S₀, Actions A, Transition Result, Goal Test'
      }
    ],
    takeaway: 'Exam Takeaway: A rational agent always selects the action that maximizes expected performance measure P based on percept sequence.'
  },
  {
    id: 'unit-2',
    unitNumber: 2,
    unitRoman: 'UNIT II',
    badge: 'BLUEPRINT CONCEPT POSTER',
    title: 'Heuristic Search & A* Algorithm',
    subtitle: 'State-Space Frontier, Evaluation Function f(n) & Heuristic Admissibility',
    image: '/posters/unit2.jpg',
    imageCaption: 'Blueprint 2.1: State-Space Graph Network & 2D Grid A* Pathfinding Visualization',
    formula: 'A* Evaluation: f(n) = g(n) + h(n)',
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #4f46e5 100%)',
    bgLight: '#eff6ff',
    accentBorder: '#bfdbfe',
    pillars: [
      {
        icon: <Search size={14} color="#2563eb" />,
        label: 'Evaluation Function',
        value: 'f(n) = g(n) [actual cost] + h(n) [estimated goal cost]'
      },
      {
        icon: <CheckCircle2 size={14} color="#2563eb" />,
        label: 'Admissibility Rule',
        value: '0 ≤ h(n) ≤ h*(n) guarantees optimal shortest path'
      },
      {
        icon: <Grid size={14} color="#2563eb" />,
        label: 'Grid Metrics',
        value: 'Manhattan (|Δx| + |Δy|) & Straight-Line Euclidean Distance'
      },
      {
        icon: <Activity size={14} color="#2563eb" />,
        label: 'Local Optimization',
        value: 'Hill Climbing greedy choices & Simulated Annealing temperature'
      }
    ],
    takeaway: 'Exam Takeaway: If h(n) is admissible, A* tree search is guaranteed to be optimal and complete.'
  },
  {
    id: 'unit-3',
    unitNumber: 3,
    unitRoman: 'UNIT III',
    badge: 'BLUEPRINT CONCEPT POSTER',
    title: 'Adversarial Search & CSP',
    subtitle: 'Minimax Game Tree, Alpha-Beta Cutoffs & Constraint Satisfaction',
    image: '/posters/unit3.jpg',
    imageCaption: 'Blueprint 3.1: Minimax Two-Player Game Tree with Alpha-Beta Pruning & Constraint Graph',
    formula: 'Alpha-Beta Cutoff: Prune branch when α ≥ β',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #9333ea 100%)',
    bgLight: '#faf5ff',
    accentBorder: '#e9d5ff',
    pillars: [
      {
        icon: <GitBranch size={14} color="#7c3aed" />,
        label: 'Minimax Rule',
        value: 'MAX maximizes utility; MIN minimizes opponent score'
      },
      {
        icon: <Zap size={14} color="#7c3aed" />,
        label: 'Alpha-Beta Pruning',
        value: 'Eliminates futile subtrees without altering decision outcome'
      },
      {
        icon: <Layers size={14} color="#7c3aed" />,
        label: 'CSP Triplet (X, D, C)',
        value: 'Variables X, Domain values D, and Constraints C'
      },
      {
        icon: <Target size={14} color="#7c3aed" />,
        label: 'Arc Consistency (AC-3)',
        value: 'Prunes illegal domain values prior to backtracking search'
      }
    ],
    takeaway: 'Exam Takeaway: Alpha-Beta pruning reduces time complexity from O(bᵐ) to O(bᵐ/²), effectively doubling the search depth.'
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    unitRoman: 'UNIT IV',
    badge: 'BLUEPRINT CONCEPT POSTER',
    title: 'Knowledge Representation & Logic',
    subtitle: 'Propositional Logic, First-Order Logic (FOL) & Resolution Refutation',
    image: '/posters/unit4.jpg',
    imageCaption: 'Blueprint 4.1: First-Order Knowledge Base Inference Graph & CNF Resolution Proof',
    formula: 'Resolution Proof: KB ∧ ¬Q ⊢ □ (Derive Contradiction)',
    color: '#d97706',
    gradient: 'linear-gradient(135deg, #b45309 0%, #d97706 50%, #ea580c 100%)',
    bgLight: '#fffbeb',
    accentBorder: '#fde68a',
    pillars: [
      {
        icon: <Database size={14} color="#d97706" />,
        label: 'Propositional Logic',
        value: 'Boolean connectives (∧, ∨, ¬, ⇒) and Modus Ponens inference'
      },
      {
        icon: <Brain size={14} color="#d97706" />,
        label: 'First-Order Logic (FOL)',
        value: 'Quantifiers (∀ Universal, ∃ Existential) + Relations & Objects'
      },
      {
        icon: <ArrowRight size={14} color="#d97706" />,
        label: 'Chaining Methods',
        value: 'Forward (data-driven) vs. Backward (goal-directed) for Horn clauses'
      },
      {
        icon: <CheckCircle2 size={14} color="#d97706" />,
        label: 'Resolution Refutation',
        value: 'Converts KB to CNF with Skolemization to derive empty clause [ ]'
      }
    ],
    takeaway: 'Exam Takeaway: Resolution refutation combined with unification is sound and complete for First-Order Logic.'
  },
  {
    id: 'unit-5',
    unitNumber: 5,
    unitRoman: 'UNIT V',
    badge: 'BLUEPRINT CONCEPT POSTER',
    title: 'AI Planning & Modern Applications',
    subtitle: 'STRIPS Action Schemas, NLP Transformers & Computer Vision',
    image: '/posters/unit5.jpg',
    imageCaption: 'Blueprint 5.1: STRIPS Automated Action State Transitions & Multi-Head Attention',
    formula: 'STRIPS Action: Preconditions ➔ Add List ➔ Delete List',
    color: '#e11d48',
    gradient: 'linear-gradient(135deg, #be123c 0%, #e11d48 50%, #f43f5e 100%)',
    bgLight: '#fff1f2',
    accentBorder: '#fecdd3',
    pillars: [
      {
        icon: <Target size={14} color="#e11d48" />,
        label: 'STRIPS Planning',
        value: 'State transition schemas with Preconditions, Add list & Delete list'
      },
      {
        icon: <Layers size={14} color="#e11d48" />,
        label: 'Planning Graphs',
        value: 'Polynomial time heuristic estimation & Mutex relation pruning'
      },
      {
        icon: <Zap size={14} color="#e11d48" />,
        label: 'NLP Transformers',
        value: 'Self-Attention mechanism parallelizing contextual sequence learning'
      },
      {
        icon: <Activity size={14} color="#e11d48" />,
        label: 'Computer Vision & XAI',
        value: 'CNN feature extraction with Explainable AI (SHAP & LIME)'
      }
    ],
    takeaway: 'Exam Takeaway: STRIPS planning models actions as state transitions, searching for a sequence that reaches the goal.'
  }
];

export default function InteractivePosters() {
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [modalPoster, setModalPoster] = useState(null);
  const [viewMode, setViewMode] = useState('single'); // 'single' or 'grid'

  const currentPoster = UNIT_POSTERS[selectedUnitIdx];

  const handlePrint = () => {
    window.print();
  };

  const handlePrev = () => {
    setSelectedUnitIdx((prev) => (prev > 0 ? prev - 1 : UNIT_POSTERS.length - 1));
  };

  const handleNext = () => {
    setSelectedUnitIdx((prev) => (prev < UNIT_POSTERS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: 60 }}>

      {/* ── Top Header Bar ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: 'var(--primary-teal-dark)',
              letterSpacing: '0.08em',
              background: 'var(--primary-teal-light)',
              padding: '3px 10px',
              borderRadius: 'var(--radius-full)'
            }}>
              Visual Concept Blueprint
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Units 1 to 5 Concept Architecture
            </span>
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0, letterSpacing: '-0.02em' }}>
            AI Course Concept Posters
          </h1>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            onClick={() => setViewMode(viewMode === 'single' ? 'grid' : 'single')}
            className="btn-secondary"
            style={{ fontSize: '0.82rem', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            {viewMode === 'single' ? <LayoutGrid size={15} /> : <BookOpen size={15} />}
            {viewMode === 'single' ? 'View All 5 Posters' : 'Focus Single Unit'}
          </button>

          <button
            onClick={() => setModalPoster(currentPoster)}
            className="btn-primary"
            style={{ fontSize: '0.82rem', padding: '8px 14px', background: currentPoster.gradient, display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <Maximize2 size={15} /> Expand High-Res
          </button>

          <button onClick={handlePrint} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '8px 14px' }}>
            <Printer size={15} /> Print
          </button>
        </div>
      </div>

      {/* ── 5 Unit Selector Tabs ───────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        backgroundColor: '#ffffff',
        padding: '8px 12px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {UNIT_POSTERS.map((p, idx) => {
          const isSelected = selectedUnitIdx === idx && viewMode === 'single';
          return (
            <button
              key={p.id}
              onClick={() => {
                setSelectedUnitIdx(idx);
                setViewMode('single');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '7px 14px',
                borderRadius: 'var(--radius-md)',
                border: isSelected ? `2px solid ${p.color}` : '1px solid var(--border-color)',
                backgroundColor: isSelected ? p.bgLight : '#ffffff',
                color: isSelected ? p.color : 'var(--text-dark)',
                fontWeight: isSelected ? 800 : 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                backgroundColor: isSelected ? p.color : '#f1f5f9',
                color: isSelected ? '#ffffff' : 'var(--text-dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '0.72rem'
              }}>
                {p.unitNumber}
              </div>
              <span>Unit {p.unitNumber}</span>
            </button>
          );
        })}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ── SINGLE POSTER VIEW: SMALL, NEAT, BLUEPRINT RECTANGLE CARD ───── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {viewMode === 'single' ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          
          {/* Previous / Next Navigator Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '700px', alignItems: 'center' }}>
            <button
              onClick={handlePrev}
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: 4 }}
            >
              <ArrowLeft size={14} /> Previous Unit
            </button>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              Unit {currentPoster.unitNumber} of 5
            </span>
            <button
              onClick={handleNext}
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: 4 }}
            >
              Next Unit <ArrowRight size={14} />
            </button>
          </div>

          {/* Master Poster Card */}
          <div
            className="blueprint-card"
            style={{
              maxWidth: '700px',
              width: '100%',
              overflow: 'hidden',
              backgroundColor: '#ffffff'
            }}
          >
            {/* 1. Header Banner */}
            <div
              className="animated-poster-header"
              style={{
                position: 'relative',
                padding: '20px 24px',
                background: currentPoster.gradient,
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: 6
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  backgroundColor: 'rgba(255,255,255,0.22)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)',
                  letterSpacing: '0.04em'
                }}>
                  ✨ {currentPoster.unitRoman} • {currentPoster.badge}
                </span>

                <button
                  onClick={() => setModalPoster(currentPoster)}
                  style={{
                    background: 'rgba(255,255,255,0.22)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    color: '#ffffff',
                    borderRadius: 'var(--radius-full)',
                    padding: '3px 10px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                  }}
                >
                  <Maximize2 size={12} /> High-Res
                </button>
              </div>

              <div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
                  {currentPoster.title}
                </h2>
                <p style={{ fontSize: '0.8rem', color: '#e2e8f0', margin: '2px 0 0 0', opacity: 0.95 }}>
                  {currentPoster.subtitle}
                </p>
              </div>
            </div>

            {/* 2. Core Formula / Principle Pill Bar */}
            <div style={{
              backgroundColor: currentPoster.bgLight,
              padding: '10px 20px',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Zap size={16} color={currentPoster.color} className="pulse-live-dot" />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: currentPoster.color }}>
                  Core Formulation:
                </span>
              </div>
              <code style={{
                color: currentPoster.color,
                fontWeight: 800,
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                backgroundColor: '#ffffff',
                padding: '2px 10px',
                borderRadius: 'var(--radius-full)',
                border: `1px solid ${currentPoster.accentBorder}`,
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
              }}>
                {currentPoster.formula}
              </code>
            </div>

            {/* 3. MIDDLE SECTION: UNIT-SPECIFIC BLUEPRINT IMAGE */}
            <div style={{
              padding: '16px 20px',
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div
                className="blueprint-img-frame"
                onClick={() => setModalPoster(currentPoster)}
                style={{
                  cursor: 'pointer',
                  height: '280px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Click to view full-resolution blueprint diagram"
              >
                <img
                  src={currentPoster.image}
                  alt={currentPoster.title}
                />
                
                {/* Floating Click to Zoom Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  pointerEvents: 'none'
                }}>
                  <Eye size={12} /> Click to Zoom
                </div>
              </div>

              {/* Technical Caption */}
              <div style={{
                textAlign: 'center',
                marginTop: 8,
                fontSize: '0.76rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                letterSpacing: '0.01em'
              }}>
                {currentPoster.imageCaption}
              </div>
            </div>

            {/* 4. BOTTOM SECTION: BLUEPRINT CONCEPT PILLARS (NOT WALL OF ANSWERS) */}
            <div style={{ padding: '16px 20px', backgroundColor: '#ffffff' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 10,
                marginBottom: 14
              }}>
                {currentPoster.pillars.map((pillar, pIdx) => (
                  <div
                    key={pIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#f8fafc',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <div style={{
                      marginTop: 2,
                      width: 22,
                      height: 22,
                      borderRadius: '6px',
                      backgroundColor: currentPoster.bgLight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {pillar.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                        {pillar.label}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: 1, lineHeight: 1.3 }}>
                        {pillar.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 5. Golden Takeaway Pill */}
              <div style={{
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: currentPoster.bgLight,
                border: `1.5px dashed ${currentPoster.accentBorder}`,
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}>
                <Sparkles size={16} color={currentPoster.color} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.76rem', color: 'var(--text-dark)', fontWeight: 600, lineHeight: 1.35 }}>
                  {currentPoster.takeaway}
                </span>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* ═══════════════════════════════════════════════════════════════════ */
        /* ── GRID VIEW: ALL 5 UNIT POSTERS AT A GLANCE ───────────────────── */
        /* ═══════════════════════════════════════════════════════════════════ */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 20
        }}>
          {UNIT_POSTERS.map((p, idx) => (
            <div
              key={p.id}
              className="blueprint-card hover-lift"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              {/* Header */}
              <div style={{
                padding: '14px 18px',
                background: p.gradient,
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.9 }}>
                    {p.unitRoman}
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '2px 0 0 0', color: '#ffffff' }}>
                    {p.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedUnitIdx(idx);
                    setViewMode('single');
                  }}
                  style={{
                    background: 'rgba(255,255,255,0.25)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Focus
                </button>
              </div>

              {/* Image in Middle */}
              <div
                className="blueprint-img-frame"
                onClick={() => setModalPoster(p)}
                style={{ height: '180px', cursor: 'pointer', margin: '12px' }}
              >
                <img src={p.image} alt={p.title} />
              </div>

              {/* Formula & Pillars */}
              <div style={{ padding: '0 14px 14px 14px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                <code style={{
                  color: p.color,
                  fontWeight: 700,
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: p.bgLight,
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'center'
                }}>
                  {p.formula}
                </code>

                <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', lineHeight: 1.35, marginTop: 4 }}>
                  {p.takeaway}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: 8, display: 'flex', gap: 6 }}>
                  <button
                    onClick={() => {
                      setSelectedUnitIdx(idx);
                      setViewMode('single');
                    }}
                    className="btn-primary"
                    style={{ flex: 1, padding: '6px', fontSize: '0.75rem', background: p.gradient }}
                  >
                    View Poster
                  </button>
                  <button
                    onClick={() => setModalPoster(p)}
                    className="btn-secondary"
                    style={{ padding: '6px 10px', fontSize: '0.75rem' }}
                  >
                    <Maximize2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ── HIGH RESOLUTION MODAL OVERLAY ───────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {modalPoster && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setModalPoster(null)}
        >
          <div
            style={{
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              padding: '16px 24px',
              background: modalPoster.gradient,
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  {modalPoster.unitRoman} Blueprint Poster
                </span>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0 0', color: '#ffffff' }}>
                  {modalPoster.title}
                </h2>
              </div>
              <button
                onClick={() => setModalPoster(null)}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: '#ffffff',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* High-res Image Display */}
            <div style={{ padding: '20px', backgroundColor: '#0b1120', textAlign: 'center' }}>
              <img
                src={modalPoster.image}
                alt={modalPoster.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '65vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)'
                }}
              />
            </div>

            {/* Modal Footer with details */}
            <div style={{ padding: '16px 24px', backgroundColor: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                  {modalPoster.imageCaption}
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: 2 }}>
                  {modalPoster.formula}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={handlePrint} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                  <Printer size={14} /> Print
                </button>
                <button onClick={() => setModalPoster(null)} className="btn-primary" style={{ fontSize: '0.8rem', padding: '6px 16px', background: modalPoster.gradient }}>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
