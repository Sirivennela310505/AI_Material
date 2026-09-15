import React, { useState } from 'react';
import { Map, Calendar, CheckCircle2, ArrowDown, Code2, Sparkles } from 'lucide-react';

export default function RoadmapView() {
  const [durationWeeks, setDurationWeeks] = useState(4);

  const roadmapSteps = [
    {
      week: 1,
      phase: 'Unit I — Intelligent Agents & Foundations',
      status: 'completed',
      desc: 'Master AI definitions, PEAS framework, environment properties, agent architectures, and state space representation.',
      skills: ['PEAS Matrix', 'Agent Architectures', 'State Space Formulation'],
      project: 'Build PEAS specifications for 3 autonomous systems.'
    },
    {
      week: 2,
      phase: 'Unit II — Problem Solving & Search Strategies',
      status: 'current',
      desc: 'Implement BFS, DFS, Uniform Cost Search, Greedy Best-First, A* Search, and Hill Climbing.',
      skills: ['Traversal Queues', 'A* Evaluation f(n)=g(n)+h(n)', 'Admissibility'],
      project: 'Build an interactive grid pathfinder using A* search.'
    },
    {
      week: 3,
      phase: 'Unit III — Constraints & Adversarial Game Search',
      status: 'upcoming',
      desc: 'Master CSPs, AC-3 constraint propagation, Minimax algorithm, Alpha-Beta Pruning, and MCTS.',
      skills: ['AC-3 Arc Consistency', 'Alpha-Beta Bounds', 'Game Trees'],
      project: 'Implement a Tic-Tac-Toe AI solver using Minimax with Alpha-Beta pruning.'
    },
    {
      week: 4,
      phase: 'Unit IV & V — Knowledge Reasoning & AI Applications',
      status: 'upcoming',
      desc: 'Master Propositional/FOL logic, Forward/Backward chaining, and real-world AI applications in Healthcare, Finance, and NLP.',
      skills: ['Logic Translation', 'Forward Chaining Proofs', 'Generative AI & LLMs'],
      project: 'Build an Expert System rule-based inference engine.'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-indigo)', letterSpacing: '0.05em', marginBottom: '4px' }}>
          Personalized Curriculum Timeline
        </div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)' }}>
          My Artificial Intelligence Learning Roadmap
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '4px' }}>
          Dynamic week-by-week curriculum tracking your journey from Agent Foundations to Advanced Reasoning and Applications.
        </p>
      </div>

      {/* Roadmap Timeline Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {roadmapSteps.map((step, idx) => {
          const isCompleted = step.status === 'completed';
          const isCurrent = step.status === 'current';

          return (
            <React.Fragment key={idx}>
              <div className="edtech-card" style={{
                padding: '24px',
                borderLeft: isCompleted ? '6px solid var(--accent-emerald)' : isCurrent ? '6px solid var(--primary-indigo)' : '6px solid #cbd5e1',
                backgroundColor: isCurrent ? 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)' : '#ffffff'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: isCompleted ? 'var(--accent-emerald-light)' : isCurrent ? 'var(--primary-indigo-light)' : '#e2e8f0',
                      color: isCompleted ? 'var(--accent-emerald)' : isCurrent ? 'var(--primary-indigo)' : 'var(--text-dark)',
                      textTransform: 'uppercase'
                    }}>
                      Week 0{step.week} &bull; {isCompleted ? '✓ Completed' : isCurrent ? '● Current Focus' : 'Upcoming'}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-dark)', flex: 1, marginLeft: '12px' }}>
                    {step.phase}
                  </h3>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                  {step.desc}
                </p>

                {/* Skills */}
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Target Skills
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {step.skills.map((sk, skIdx) => (
                      <span key={skIdx} style={{ fontSize: '0.75rem', padding: '3px 10px', borderRadius: 'var(--radius-sm)', backgroundColor: '#f1f5f9', border: '1px solid var(--border-color)', fontWeight: 600 }}>
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Milestone */}
                <div style={{ backgroundColor: 'var(--primary-indigo-light)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid #c7d2fe', fontSize: '0.85rem', color: 'var(--primary-indigo)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Code2 size={16} />
                  <span><strong>Milestone Project:</strong> {step.project}</span>
                </div>
              </div>

              {idx < roadmapSteps.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--primary-indigo)' }}>
                  <ArrowDown size={20} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
