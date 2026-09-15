import React, { useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Play,
  CheckCircle2,
  ArrowRight,
  FileImage,
  Presentation,
  HelpCircle,
  BookMarked,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';

const FALLBACK_SYLLABUS_DATA = [
  {
    id: 'unit-1',
    number: 1,
    title: 'Unit I — Intelligent Agents',
    shortDesc: 'AI foundations, definitions, PEAS framework, environment properties, agent architectures, and state-space search.',
    conceptCount: 11,
    topics: [
      { id: 'u1-t1', name: 'Introduction to AI & Definitions', desc: 'Acting humanly, thinking humanly, acting rationally, thinking rationally.' },
      { id: 'u1-t2', name: 'Turing Test & Foundations of AI', desc: 'Historical foundations: Philosophy, Mathematics, Neuroscience, Economics.' },
      { id: 'u1-t3', name: 'Standard Model of Rational Action', desc: 'Evaluating rational behavior and expected performance measures.' },
      { id: 'u1-t4', name: 'Intelligent Agents & Environments', desc: 'Sensors, actuators, environment interactions, and agent functions.' },
      { id: 'u1-t5', name: 'PEAS Framework', desc: 'Performance Measure, Environment, Actuators, Sensors specification.' },
      { id: 'u1-t6', name: 'Environment Properties', desc: 'Fully vs Partially Observable, Deterministic vs Stochastic, Static vs Dynamic.' },
      { id: 'u1-t7', name: 'Simple Reflex Agents', desc: 'Condition-action rules operating on current percepts without history.' },
      { id: 'u1-t8', name: 'Model-Based Reflex Agents', desc: 'Internal state tracking how the world evolves.' },
      { id: 'u1-t9', name: 'Goal-Based Agents', desc: 'Combining state with goal information to choose actions.' },
      { id: 'u1-t10', name: 'Utility-Based Agents', desc: 'Using utility functions to evaluate trade-offs and happiness scores.' },
      { id: 'u1-t11', name: 'Problem-Solving Agents & State Space', desc: 'Formulating problems, state space representation, initial & goal states.' }
    ]
  },
  {
    id: 'unit-2',
    number: 2,
    title: 'Unit II — Problem Solving and Searching',
    shortDesc: 'BFS, DFS, Uniform Cost, Greedy Best-First, A* Search, Hill Climbing, and Simulated Annealing.',
    conceptCount: 11,
    topics: [
      { id: 'u2-t1', name: 'Formulating Search Problems', desc: 'Initial state, actions, transition model, goal test, path cost.' },
      { id: 'u2-t2', name: 'Breadth-First Search (BFS)', desc: 'FIFO queue traversal, completeness, optimality, O(b^d) space complexity.' },
      { id: 'u2-t3', name: 'Depth-First Search (DFS)', desc: 'LIFO stack traversal, memory efficiency, non-optimal behavior.' },
      { id: 'u2-t4', name: 'Uniform Cost Search (UCS)', desc: 'Priority queue traversal ordered by path cost g(n).' },
      { id: 'u2-t5', name: 'Greedy Best-First Search', desc: 'Heuristic-driven search selecting nodes closest to goal h(n).' },
      { id: 'u2-t6', name: 'A* Search Algorithm', desc: 'Optimal evaluation function f(n) = g(n) + h(n) with admissible heuristics.' },
      { id: 'u2-t7', name: 'Heuristic Functions & Admissibility', desc: 'Manhattan distance, Euclidean distance, consistency criteria.' },
      { id: 'u2-t8', name: 'Hill Climbing Search', desc: 'Local search greedy approach, local maxima, plateaus, ridges.' },
      { id: 'u2-t9', name: 'Simulated Annealing', desc: 'Stochastic hill climbing escaping local maxima using temperature decay.' },
      { id: 'u2-t10', name: 'Continuous Space Search', desc: 'Gradient descent, optimization landscapes.' },
      { id: 'u2-t11', name: 'Online Search & Unknown Environments', desc: 'Exploring partially observable or unknown environments dynamically.' }
    ]
  },
  {
    id: 'unit-3',
    number: 3,
    title: 'Unit III — Constraints and Adversarial Search',
    shortDesc: 'Constraint Satisfaction Problems (CSPs), AC-3 arc consistency, Minimax algorithm, Alpha-Beta Pruning, and MCTS.',
    conceptCount: 10,
    topics: [
      { id: 'u3-t1', name: 'Constraint Satisfaction Problems (CSPs)', desc: 'Variables X, Domains D, Constraints C formulation.' },
      { id: 'u3-t2', name: 'Constraint Hypergraphs & Types', desc: 'Unary, binary, higher-order constraints.' },
      { id: 'u3-t3', name: 'Backtracking Search for CSPs', desc: 'Depth-first search with single variable assignments.' },
      { id: 'u3-t4', name: 'Forward Checking', desc: 'Tracking remaining valid domain values during search.' },
      { id: 'u3-t5', name: 'Arc Consistency & AC-3 Algorithm', desc: 'Enforcing pairwise domain consistency to prune search space.' },
      { id: 'u3-t6', name: 'Game Theory & Game Trees', desc: 'Deterministic, zero-sum, perfect information game models.' },
      { id: 'u3-t7', name: 'Minimax Algorithm', desc: 'Optimal decision strategy for two-player zero-sum games.' },
      { id: 'u3-t8', name: 'Alpha-Beta Pruning', desc: 'Eliminating branches that cannot influence final decision.' },
      { id: 'u3-t9', name: 'Evaluation Functions in Games', desc: 'Heuristic state evaluation for depth-limited games.' },
      { id: 'u3-t10', name: 'Monte Carlo Tree Search (MCTS)', desc: 'Selection, Expansion, Simulation (Rollout), Backpropagation.' }
    ]
  },
  {
    id: 'unit-4',
    number: 4,
    title: 'Unit IV — Knowledge Representation and Reasoning',
    shortDesc: 'Knowledge-based agents, propositional & first-order logic, forward/backward chaining, resolution, and expert systems.',
    conceptCount: 10,
    topics: [
      { id: 'u4-t1', name: 'Knowledge-Based Agents', desc: 'Knowledge base (KB), TELL and ASK operations.' },
      { id: 'u4-t2', name: 'Propositional Logic', desc: 'Syntax, semantics, truth tables, entailment, equivalence.' },
      { id: 'u4-t3', name: 'Inference Rules & Proofs', desc: 'Modus Ponens, Resolution, Conjunctive Normal Form (CNF).' },
      { id: 'u4-t4', name: 'First-Order Logic (FOL)', desc: 'Objects, relations, functions, quantifiers (∀, ∃).' },
      { id: 'u4-t5', name: 'Forward Chaining', desc: 'Data-driven inference firing rules from facts to conclusions.' },
      { id: 'u4-t6', name: 'Backward Chaining', desc: 'Goal-driven inference proving hypotheses backwards from goals.' },
      { id: 'u4-t7', name: 'Resolution Refutation in FOL', desc: 'Unification, CNF conversion, proving by contradiction.' },
      { id: 'u4-t8', name: 'Semantic Networks', desc: 'Graphical knowledge representation with nodes and relational edges.' },
      { id: 'u4-t9', name: 'Frames & Inheritance', desc: 'Structured data frames with slots, fillers, and inheritance.' },
      { id: 'u4-t10', name: 'Expert Systems & Production Rules', desc: 'Inference engines, rule bases, domain knowledge integration.' }
    ]
  },
  {
    id: 'unit-5',
    number: 5,
    title: 'Unit V — Artificial Intelligence Applications',
    shortDesc: 'Real-world applications in Healthcare, Finance, Agriculture, Smart Cities, NLP, Computer Vision, and Generative AI.',
    conceptCount: 10,
    topics: [
      { id: 'u5-t1', name: 'AI in Healthcare & Medicine', desc: 'Diagnostic imagery analysis, drug discovery, personalized medicine.' },
      { id: 'u5-t2', name: 'AI in Finance & Algorithmic Trading', desc: 'Fraud detection, credit scoring, high-frequency trading.' },
      { id: 'u5-t3', name: 'AI in Agriculture & Precision Farming', desc: 'Crop yield prediction, automated weed detection, soil monitoring.' },
      { id: 'u5-t4', name: 'AI in Smart Cities & Transportation', desc: 'Autonomous vehicles, intelligent traffic routing, grid management.' },
      { id: 'u5-t5', name: 'AI in Manufacturing & Robotics', desc: 'Predictive maintenance, industrial assembly, quality inspection.' },
      { id: 'u5-t6', name: 'AI in Education & EdTech', desc: 'Adaptive learning systems, automated grading, intelligent tutoring.' },
      { id: 'u5-t7', name: 'AI in Cybersecurity', desc: 'Threat detection, anomaly analysis, automated vulnerability patching.' },
      { id: 'u5-t8', name: 'Natural Language Processing (NLP)', desc: 'Sentiment analysis, machine translation, LLMs, information extraction.' },
      { id: 'u5-t9', name: 'Computer Vision Applications', desc: 'Object detection (YOLO), face recognition, image segmentation.' },
      { id: 'u5-t10', name: 'Generative AI & Case Studies', desc: 'Diffusion models, LLMs, ethical AI, real-world deployment challenges.' }
    ]
  }
];

export default function UnitsView({ syllabus, onSelectConcept, selectedUnitId = 'unit-1', onNavigate }) {
  const units = (syllabus?.units && syllabus.units.length > 0) ? syllabus.units : FALLBACK_SYLLABUS_DATA;

  const [expandedUnits, setExpandedUnits] = useState({
    [selectedUnitId || 'unit-1']: true
  });

  const toggleExpand = (unitId) => {
    setExpandedUnits(prev => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  const currentUnit = units.find(u => u.id === selectedUnitId) || units[0];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* ── Page Header ────────────────────────────────────────── */}
      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-teal-dark)', letterSpacing: '0.05em', marginBottom: '4px' }}>
          Official Academic Course Syllabus
        </div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)' }}>
          Artificial Intelligence and Its Applications (5 Units)
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '4px' }}>
          Explore concepts for <strong>{currentUnit.title}</strong> or launch unit study materials (Posters, PPTs, Questions, Quizzes) directly below.
        </p>
      </div>

      {/* ── UNIT QUICK ACTION HUB (Posters, PPT, Questions, Quiz) ── */}
      <div className="edtech-card" style={{
        padding: '24px',
        backgroundColor: 'var(--primary-teal-light)',
        border: '1px solid rgba(13,148,136,0.3)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-teal-dark)', letterSpacing: '0.04em' }}>
              Selected Unit Hub
            </span>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-teal-dark)', margin: '2px 0 0 0' }}>
              {currentUnit.title}
            </h2>
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, backgroundColor: '#ffffff', color: 'var(--primary-teal-dark)', padding: '4px 12px', borderRadius: 'var(--radius-full)', border: '1px solid rgba(13,148,136,0.3)' }}>
            {currentUnit.topics?.length || currentUnit.conceptCount || 10} Concepts Covered
          </span>
        </div>

        {/* 4 Clickable Action Cards (Posters, PPT, Questions, Quiz) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px'
        }}>
          {/* Card 1: Unit Poster */}
          <div
            className="edtech-card edtech-card-interactive hover-lift"
            onClick={() => onNavigate && onNavigate('posters')}
            style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'rgba(124,58,237,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FileImage size={20} color="#7c3aed" />
            </div>
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)', margin: 0 }}>Unit Poster</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>View Concept Map</p>
            </div>
          </div>

          {/* Card 2: PPT Generator */}
          <div
            className="edtech-card edtech-card-interactive hover-lift"
            onClick={() => onNavigate && onNavigate('presentation')}
            style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'rgba(217,119,6,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Presentation size={20} color="#d97706" />
            </div>
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)', margin: 0 }}>PPT Slides</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Download Deck</p>
            </div>
          </div>

          {/* Card 3: Important Questions */}
          <div
            className="edtech-card edtech-card-interactive hover-lift"
            onClick={() => onNavigate && onNavigate('important')}
            style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <BookMarked size={20} color="#2563eb" />
            </div>
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)', margin: 0 }}>Exam Q&amp;A</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>8–12 Marks Answers</p>
            </div>
          </div>

          {/* Card 4: Quiz Studio */}
          <div
            className="edtech-card edtech-card-interactive hover-lift"
            onClick={() => onNavigate && onNavigate('quiz')}
            style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'rgba(225,29,72,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <HelpCircle size={20} color="#e11d48" />
            </div>
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)', margin: 0 }}>Quiz Studio</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>10–12 Questions</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── All 5 Units Syllabus Accordions ───────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {units.map((unit) => {
          const isSelected = selectedUnitId === unit.id;
          const isExpanded = expandedUnits[unit.id] || isSelected;

          return (
            <div
              key={unit.id}
              className="edtech-card"
              style={{
                overflow: 'hidden',
                border: isSelected ? '2px solid var(--primary-teal)' : '1px solid var(--border-color)'
              }}
            >
              {/* Unit Header Bar */}
              <div
                onClick={() => toggleExpand(unit.id)}
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  backgroundColor: isSelected ? 'var(--primary-teal-light)' : '#ffffff',
                  borderBottom: isExpanded ? '1px solid var(--border-color)' : 'none',
                  transition: 'background-color 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isSelected ? 'var(--primary-teal)' : 'var(--bg-card-subtle)',
                    color: isSelected ? '#ffffff' : 'var(--text-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    flexShrink: 0
                  }}>
                    U{unit.number || unit.id.split('-')[1]}
                  </div>

                  <div>
                    <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                      {unit.title}
                    </h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px', margin: 0 }}>
                      {unit.shortDesc || unit.description}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-dark)'
                  }}>
                    {unit.topics?.length || unit.conceptCount || 10} Concepts
                  </span>
                  {isExpanded ? <ChevronDown size={20} color="var(--text-dark)" /> : <ChevronRight size={20} color="var(--text-dark)" />}
                </div>
              </div>

              {/* Expandable Concept List */}
              {isExpanded && (
                <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: '#ffffff' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    Topics &amp; Concepts ({unit.topics?.length || 0})
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                    {unit.topics?.map((topic, idx) => {
                      const topicName = typeof topic === 'string' ? topic : topic.name;
                      const topicDesc = typeof topic === 'string' ? 'Core concept in ' + unit.title : topic.desc;
                      const topicId = typeof topic === 'string' ? topic : topic.id;

                      return (
                        <div
                          key={topicId || idx}
                          className="edtech-card edtech-card-interactive hover-lift"
                          onClick={() => onSelectConcept(unit.id, topicId)}
                          style={{
                            padding: '14px 16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-md)'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-dark)', margin: 0 }}>
                              {topicName}
                            </h3>
                            <ArrowRight size={14} color="var(--primary-teal)" style={{ flexShrink: 0, marginTop: 2 }} />
                          </div>
                          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                            {topicDesc}
                          </p>
                        </div>
                      );
                    })}
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
