import React from 'react';
import { BarChart3, TrendingUp, Award, AlertCircle, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

export default function ProgressView({ onNavigate }) {
  const unitProgressData = [
    { name: 'Unit I — Intelligent Agents', pct: 85, color: '#4f46e5' },
    { name: 'Unit II — Problem Solving & Search', pct: 60, color: '#2563eb' },
    { name: 'Unit III — CSPs & Adversarial Search', pct: 30, color: '#059669' },
    { name: 'Unit IV — Knowledge Representation', pct: 15, color: '#d97706' },
    { name: 'Unit V — AI Applications', pct: 0, color: '#94a3b8' },
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-indigo)', letterSpacing: '0.05em', marginBottom: '4px' }}>
          Learning Telemetry & AI Insights
        </div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)' }}>
          My Learning Progress Dashboard
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '4px' }}>
          Track unit completion, quiz accuracy, strength areas, and actionable AI recommendations.
        </p>
      </div>

      {/* Overview Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="edtech-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary-indigo-light)', color: 'var(--primary-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TrendingUp size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Overall Completion</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)' }}>38%</div>
          </div>
        </div>

        <div className="edtech-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Award size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Quiz Accuracy</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)' }}>82%</div>
          </div>
        </div>

        <div className="edtech-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--accent-amber-light)', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Concepts Mastered</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)' }}>19 / 52</div>
          </div>
        </div>
      </div>

      {/* Unit Progress Breakdown */}
      <div className="edtech-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)' }}>
          Unit Progress Breakdown
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {unitProgressData.map((u, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                <span>{u.name}</span>
                <span>{u.pct}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${u.pct}%`, height: '100%', backgroundColor: u.color, borderRadius: '4px', transition: 'width 0.6s ease' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strong & Weak Areas Analysis */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {/* Strong */}
        <div className="edtech-card" style={{ padding: '24px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#047857', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={18} /> Strong Concepts (High Mastery)
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#065f46', fontSize: '0.9rem', lineHeight: 1.7 }}>
            <li>PEAS Framework & Environment Classification (Unit I)</li>
            <li>Breadth-First Search & Depth-First Search (Unit II)</li>
            <li>Turing Test & AI Definitions (Unit I)</li>
          </ul>
        </div>

        {/* Weak */}
        <div className="edtech-card" style={{ padding: '24px', backgroundColor: '#fff1f2', border: '1px solid #fecdd3' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#be123c', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle size={18} /> Weak Concepts (Needs Improvement)
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#9f1239', fontSize: '0.9rem', lineHeight: 1.7 }}>
            <li>A* Heuristic Admissibility & Consistency (Unit II)</li>
            <li>Alpha-Beta Pruning Bounds (\(\alpha \ge \beta\)) (Unit III)</li>
            <li>First-Order Logic Universal Quantifier Rules (Unit IV)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
