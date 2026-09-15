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
// 5 MASTER UNIT POSTERS (1 POSTER PER UNIT)
// ══════════════════════════════════════════════════════════════════════════════
const UNIT_POSTERS = [
  {
    id: 'unit-1',
    unitNumber: 1,
    unitRoman: 'UNIT I',
    badge: 'Master Academic Poster',
    title: 'Intelligent Agents & Problem Formulation',
    subtitle: 'Foundations of AI, PEAS Framework, Agent Architectures & State-Space Search',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    formulaTitle: 'PEAS & Agent Function',
    formula: 'Agent Function f: P* ➔ A (Percept History to Rational Action)',
    stats: [
      { label: 'Topics Covered', value: '11 Concepts' },
      { label: 'Agent Types', value: '5 Classes' },
      { label: 'Exam Weight', value: '20-25 Marks' }
    ],
    sections: [
      {
        title: 'Foundations & Turing Test',
        tag: 'Philosophy & Logic',
        desc: 'Turing Test (1950) evaluates operational human behavior. Rationality focuses on expected utility performance.',
        keyPoints: [
          'Acting Humanly: Turing Test via NLP & Automated Reasoning.',
          'Thinking Humanly: Cognitive modeling of biological thought.',
          'Acting Rationally: Rational agents maximizing expected performance metric P.'
        ]
      },
      {
        title: 'PEAS Framework & Environment',
        tag: 'Agent Specification',
        desc: 'Formal 4-letter specification matrix for autonomous agents: Performance Measure, Environment, Actuators, Sensors.',
        keyPoints: [
          'Performance (P): Safety, travel time, passenger comfort, speed legal compliance.',
          'Environment (E): Roads, pedestrians, weather, other vehicles, signals.',
          'Actuators (A) & Sensors (S): Steering/Brakes (output) vs Cameras/LiDAR (input).'
        ]
      },
      {
        title: 'Agent Architectures & State Space',
        tag: '5 Agent Classes',
        desc: 'Agent typology hierarchy: Reflex, Model-Based, Goal-Based, Utility-Based, and Learning Agents.',
        keyPoints: [
          'Simple Reflex: Condition-action rules on current percept only.',
          'Model-Based: Maintains internal state memory for hidden environment data.',
          'State Space Formulation: Initial State S0, Actions, Transition Result(s,a), Goal Test, Path Cost.'
        ]
      }
    ],
    examTip: 'Exam Key: Always define the 4-letter PEAS matrix (P, E, A, S) when describing any autonomous agent.'
  },
  {
    id: 'unit-2',
    unitNumber: 2,
    unitRoman: 'UNIT II',
    badge: 'Master Academic Poster',
    title: 'Heuristic Search & Uninformed Methods',
    subtitle: 'BFS, DFS, Uniform Cost, Greedy Best-First, A* Search, and Local Search',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    formulaTitle: 'A* Evaluation Function',
    formula: 'f(n) = g(n) + h(n) [Path Cost + Admissible Heuristic]',
    stats: [
      { label: 'Uninformed', value: 'BFS / DFS / UCS' },
      { label: 'Informed', value: 'A* Search' },
      { label: 'Local Search', value: 'Annealing' }
    ],
    sections: [
      {
        title: 'Uninformed Search Algorithms',
        tag: 'Brute-Force Search',
        desc: 'Systematic exploration without domain heuristics. BFS uses FIFO queue; DFS uses LIFO stack; UCS uses g(n) priority queue.',
        keyPoints: [
          'BFS: Optimal for uniform unit step costs, O(b^d) time & space complexity.',
          'DFS: Memory efficient O(b*d), but non-optimal and can get stuck in infinite loops.',
          'Uniform Cost Search (UCS): Expands minimal path cost g(n) node first.'
        ]
      },
      {
        title: 'Informed Search & A* Algorithm',
        tag: 'Heuristic Search',
        desc: 'Uses domain heuristic h(n) estimating distance to goal. A* evaluates f(n) = g(n) + h(n).',
        keyPoints: [
          'Admissibility Condition: 0 <= h(n) <= h*(n) (Never overestimates true cost).',
          'Consistency (Monotonicity): h(n) <= c(n, a, n\') + h(n\') for graph search optimality.',
          'Grid Heuristics: Manhattan distance for 4-way motion; Euclidean for straight-line.'
        ]
      },
      {
        title: 'Local Search & Optimization',
        tag: 'State Landscapes',
        desc: 'Operate on complete states to find optimal peak on fitness landscapes.',
        keyPoints: [
          'Hill-Climbing: Greedy local choice; trapped by local maxima, plateaus, ridges.',
          'Simulated Annealing: Escapes local maxima using temperature decay schedule T.',
          'Genetic Algorithms: Population evolution via Selection, Crossover, and Mutation.'
        ]
      }
    ],
    examTip: 'Exam Key: An admissible heuristic NEVER overestimates true path cost to goal: 0 <= h(n) <= h*(n).'
  },
  {
    id: 'unit-3',
    unitNumber: 3,
    unitRoman: 'UNIT III',
    badge: 'Master Academic Poster',
    title: 'Constraints & Adversarial Search',
    subtitle: 'CSPs, AC-3 Arc Consistency, Minimax Algorithm, and Alpha-Beta Pruning',
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    formulaTitle: 'Alpha-Beta Pruning Cutoff',
    formula: 'Prune branch whenever Alpha (MAX best) >= Beta (MIN best)',
    stats: [
      { label: 'CSP Components', value: 'Variables X, Domains D, Constraints C' },
      { label: 'Adversarial', value: 'Minimax Tree' },
      { label: 'Pruning Depth', value: 'O(b^(m/2))' }
    ],
    sections: [
      {
        title: 'Constraint Satisfaction Problems',
        tag: 'CSP Formalism',
        desc: 'Formal triplet (X, D, C): Variables X, Domains D of values, Constraints C restricting assignments.',
        keyPoints: [
          'Backtracking Search: Depth-first assignment of 1 variable at a time.',
          'Minimum Remaining Values (MRV): Picks variable with smallest remaining domain.',
          'Least Constraining Value (LCV): Chooses value ruling out fewest choices for neighbors.'
        ]
      },
      {
        title: 'Constraint Propagation & AC-3',
        tag: 'Domain Pruning',
        desc: 'AC-3 maintains arc consistency across variable pairs to eliminate invalid domain values early.',
        keyPoints: [
          'Arc Consistency: Arc (Xi, Xj) is consistent if for every x in Xi, there is legal y in Xj.',
          'Forward Checking: Pre-filters neighbor domains after every variable assignment.',
          'Map Coloring Case Study: Regions WA, NT, SA, Q must receive distinct colors.'
        ]
      },
      {
        title: 'Game Search & Alpha-Beta Pruning',
        tag: 'Adversarial Search',
        desc: 'Two-player zero-sum perfect information games (Chess, Tic-Tac-Toe).',
        keyPoints: [
          'Minimax Algorithm: MAX maximizes utility score; MIN minimizes MAX\'s utility.',
          'Alpha-Beta Pruning: Prunes branches whenever Alpha >= Beta without affecting decision.',
          'Optimal Complexity: Doubles searchable depth to O(b^(m/2)) with perfect move ordering.'
        ]
      }
    ],
    examTip: 'Exam Key: Alpha-Beta pruning removes subtrees without altering the final Minimax choice.'
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    unitRoman: 'UNIT IV',
    badge: 'Master Academic Poster',
    title: 'Knowledge Representation & Logic',
    subtitle: 'Propositional Logic, First-Order Logic (FOL), Chaining, and Resolution',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    formulaTitle: 'Resolution Refutation Proof',
    formula: 'Prove KB |= Q by deriving contradiction [ ] from (KB ∧ ¬Q)',
    stats: [
      { label: 'Logic Types', value: 'Propositional & FOL' },
      { label: 'Inference', value: 'Forward / Backward' },
      { label: 'Proof', value: 'Resolution CNF' }
    ],
    sections: [
      {
        title: 'Knowledge-Based Agents & Logic',
        tag: 'Knowledge Representation',
        desc: 'Knowledge Base (KB) stores sentences in formal representation language. TELL and ASK operations.',
        keyPoints: [
          'Propositional Logic: Atomic facts connected by AND, OR, NOT, IMPLIES.',
          'Modus Ponens Rule: From (α => β) and α, infer β.',
          'Horn Clauses: At most 1 positive literal, enabling linear O(n) chaining inference.'
        ]
      },
      {
        title: 'First-Order Logic (FOL)',
        tag: 'Expressive Power',
        desc: 'Extends propositional logic by adding Objects, Relations, Functions, and Quantifiers.',
        keyPoints: [
          'Universal Quantifier (∀ x): Asserts rule holds for all elements in domain.',
          'Existential Quantifier (∃ x): Asserts rule holds for at least one element.',
          'Unification: Finds variable substitution theta that makes two expressions identical.'
        ]
      },
      {
        title: 'Chaining & Resolution Proofs',
        tag: 'Inference Engines',
        desc: 'Proving queries through data-driven forward chaining or goal-driven backward chaining.',
        keyPoints: [
          'Forward Chaining: Data-driven inference starting from KB facts to conclusions.',
          'Backward Chaining: Goal-driven inference working backwards from query Q to facts.',
          'Resolution Refutation: Converts KB to CNF and derives empty clause [ ] contradiction.'
        ]
      }
    ],
    examTip: 'Exam Key: Skolemization replaces existential quantifiers ∃ with unique Skolem constants during CNF.'
  },
  {
    id: 'unit-5',
    unitNumber: 5,
    unitRoman: 'UNIT V',
    badge: 'Master Academic Poster',
    title: 'AI Applications & Modern Frontiers',
    subtitle: 'STRIPS Planning, Natural Language Processing, Computer Vision, and Robotics',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    formulaTitle: 'Transformer Self-Attention',
    formula: 'Attention(Q, K, V) = softmax(Q·Kᵀ / √dₖ)·V',
    stats: [
      { label: 'Planning', value: 'STRIPS & POP' },
      { label: 'Deep Learning', value: 'CNN & Transformers' },
      { label: 'Ethics', value: 'XAI & Fairness' }
    ],
    sections: [
      {
        title: 'STRIPS Automated Planning',
        tag: 'Planning Systems',
        desc: 'Formulates action schemas using Preconditions, Add List, and Delete List.',
        keyPoints: [
          'Preconditions: Facts that must be True in world state to execute action.',
          'Add & Delete Lists: Facts added to or removed from world state after action.',
          'Partial-Order Planning (POP): Orders actions only when required by causal links.'
        ]
      },
      {
        title: 'NLP & Computer Vision',
        tag: 'Perceptual AI',
        desc: 'Processes unstructured sensory signals (text waveforms, image pixels) into structured understanding.',
        keyPoints: [
          'Computer Vision: CNN convolution filters extract edge & texture feature maps.',
          'NLP & Transformers: Self-Attention allows parallel contextual sequence processing.',
          'Generative AI: Diffusion models and LLMs generating text, images, and code.'
        ]
      },
      {
        title: 'Robotics & Ethical AI (XAI)',
        tag: 'Physical & Responsible AI',
        desc: 'Integrates physical sensors and actuators while maintaining human trust and ethical guardrails.',
        keyPoints: [
          'Robotics Kinematics: Inverse kinematics computes joint angles for target coordinates.',
          'Explainable AI (XAI): Methods like SHAP and LIME demystify opaque black-box models.',
          'Ethical Guardrails: Mitigating algorithmic bias, ensuring privacy, and establishing kill-switches.'
        ]
      }
    ],
    examTip: 'Exam Key: Explainable AI (XAI) solves the black-box problem for high-stakes healthcare/finance.'
  }
];

export default function InteractivePosters() {
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const currentPoster = UNIT_POSTERS[selectedUnitIdx];

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPosterHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${currentPoster.unitRoman} — ${currentPoster.title}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.5; color: #0f172a; margin: 0; padding: 24px; background: #f1f5f9; }
  .poster-container { max-width: 680px; margin: auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 2px solid #cbd5e1; box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
  .hero-banner { position: relative; background: #0f172a; color: #ffffff; padding: 20px 24px; }
  .hero-banner img { width: 100%; height: 130px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; }
  .badge { background: #4f46e5; color: #ffffff; padding: 3px 10px; border-radius: 9999px; font-weight: 800; font-size: 0.75rem; display: inline-block; margin-bottom: 6px; }
  h1 { font-size: 1.4rem; margin: 0 0 4px 0; color: #ffffff; }
  .subtitle { font-size: 0.85rem; color: #cbd5e1; margin-bottom: 12px; }
  .body-content { padding: 16px; display: flex; flex-direction: column; gap: 12px; background: #f8fafc; }
  .sec-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; display: flex; flex-direction: column; gap: 6px; }
  .sec-title { font-size: 0.95rem; font-weight: 800; color: #0f172a; margin: 0; }
  .exam-box { background: #fffbeb; border: 1px solid #fde68a; color: #92400e; padding: 8px 12px; border-radius: 6px; font-weight: 600; font-size: 0.78rem; }
</style>
</head>
<body>
<div class="poster-container">
  <div class="hero-banner">
    <img src="${currentPoster.heroImage}" alt="${currentPoster.title}">
    <span class="badge">${currentPoster.unitRoman} • MASTER POSTER</span>
    <h1>${currentPoster.title}</h1>
    <div class="subtitle">${currentPoster.subtitle}</div>
  </div>
  <div class="body-content">
    ${currentPoster.sections.map(s => `
      <div class="sec-card">
        <h3 class="sec-title">${s.title} (${s.tag})</h3>
        <p style="font-size: 0.82rem; color: #334155; margin: 0;">${s.desc}</p>
        <ul style="padding-left: 18px; font-size: 0.78rem; color: #1e293b; margin: 0;">
          ${s.keyPoints.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
    <div class="exam-box">💡 <strong>Exam Tip:</strong> ${currentPoster.examTip}</div>
  </div>
</div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentPoster.id}_Master_Poster.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: 60 }}>
      
      {/* ── Top Page Header ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-teal-dark)', letterSpacing: '0.08em', background: 'var(--primary-teal-light)', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
              Horizontal Medium Unit Poster Card
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Viewing Unit {currentPoster.unitNumber} of 5
            </span>
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0, letterSpacing: '-0.02em' }}>
            Unit Poster Study Card — {currentPoster.unitRoman}
          </h1>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button onClick={handleDownloadPosterHTML} className="btn-primary" style={{ fontSize: '0.82rem', padding: '8px 14px' }}>
            <Download size={15} /> Download Poster
          </button>
          <button onClick={handlePrint} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '8px 14px' }}>
            <Printer size={15} /> Print
          </button>
          <button onClick={() => setIsFullScreen(true)} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '8px 14px' }}>
            <Maximize2 size={15} /> Fullscreen
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
        {UNIT_POSTERS.map((p, idx) => {
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
              <span>{p.unitRoman} Poster</span>
            </button>
          );
        })}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* HORIZONTAL MEDIUM-SIZED SINGLE UNIT POSTER CARD (MAX-WIDTH: 680PX)     */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <div
        id="master-poster-canvas"
        className="edtech-card hover-lift"
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          width: '100%',
          padding: 0,
          overflow: 'hidden',
          border: '2px solid var(--border-strong)',
          boxShadow: 'var(--shadow-md)',
          backgroundColor: '#ffffff'
        }}
      >
        {/* Horizontal Hero Header Banner */}
        <div style={{ position: 'relative', height: '140px', overflow: 'hidden' }}>
          <img
            src={currentPoster.heroImage}
            alt={currentPoster.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,118,110,0.85) 100%)'
          }} />

          <div style={{
            position: 'absolute',
            inset: 0,
            padding: '18px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                backgroundColor: 'var(--primary-teal-dark)',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '3px 12px',
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.04em'
              }}>
                {currentPoster.unitRoman} • MASTER UNIT POSTER
              </span>

              <div style={{ display: 'flex', gap: 6 }}>
                {currentPoster.stats.map(s => (
                  <span key={s.label} style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(4px)',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {s.value}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 800, margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
                {currentPoster.title}
              </h2>
              <p style={{ color: '#e2e8f0', fontSize: '0.8rem', margin: '2px 0 0 0', opacity: 0.9 }}>
                {currentPoster.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Poster Body */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px', backgroundColor: '#ffffff' }}>
          
          {/* Key Formula / Rule Banner */}
          <div style={{
            backgroundColor: 'var(--primary-teal-light)',
            border: '1px solid rgba(13,148,136,0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '10px 14px',
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10
          }}>
            <div>
              <strong style={{ color: 'var(--primary-teal-dark)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block' }}>
                ⚡ {currentPoster.formulaTitle}:
              </strong>
              <code style={{ color: 'var(--primary-teal-dark)', fontWeight: 800, fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                {currentPoster.formula}
              </code>
            </div>
            <Sparkles size={18} color="var(--primary-teal-dark)" style={{ flexShrink: 0 }} />
          </div>

          {/* 3 Horizontal Section Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {currentPoster.sections.map((sec, sIdx) => (
              <div
                key={sIdx}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                    <span style={{ color: 'var(--primary-teal-dark)', marginRight: '6px' }}>0{sIdx + 1}.</span>
                    {sec.title}
                  </h3>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--primary-teal-dark)', backgroundColor: 'var(--primary-teal-light)', padding: '2px 8px', borderRadius: 4 }}>
                    {sec.tag}
                  </span>
                </div>

                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                  {sec.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '2px' }}>
                  {sec.keyPoints.map((pt, pIdx) => (
                    <div key={pIdx} style={{ fontSize: '0.78rem', color: 'var(--text-dark)', display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary-teal-dark)', fontWeight: 800 }}>•</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* High-Yield Exam Tip Pill */}
          <div style={{
            backgroundColor: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: 'var(--radius-md)',
            padding: '10px 14px',
            fontSize: '0.8rem',
            color: '#92400e',
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }}>
            <Lightbulb size={18} color="#d97706" style={{ flexShrink: 0 }} />
            <div>
              <strong>Exam High-Yield Tip:</strong> {currentPoster.examTip}
            </div>
          </div>
        </div>
      </div>

      {/* ── CINEMA FULLSCREEN MODAL ────────────────────────────────────── */}
      {isFullScreen && (
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
            maxWidth: '680px',
            width: '100%',
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '2px solid var(--primary-teal)'
          }}>
            <div style={{ padding: '16px 20px', backgroundColor: 'var(--primary-teal-dark)', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 800, fontSize: '1rem' }}>{currentPoster.unitRoman} FULLSCREEN MASTER POSTER</div>
              <button onClick={() => setIsFullScreen(false)} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>{currentPoster.title}</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{currentPoster.subtitle}</p>
              <div style={{ backgroundColor: 'var(--primary-teal-light)', padding: '12px', borderRadius: '8px', color: 'var(--primary-teal-dark)', fontWeight: 700 }}>
                ⚡ {currentPoster.formulaTitle}: {currentPoster.formula}
              </div>
              <button onClick={() => setIsFullScreen(false)} className="btn-primary" style={{ alignSelf: 'center', padding: '10px 28px' }}>
                Close Cinema
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
