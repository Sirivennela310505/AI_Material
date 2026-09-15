import React from 'react';
import { Sparkles, BookOpen, FileImage, HelpCircle, Presentation, ArrowRight, Zap, Brain, Target } from 'lucide-react';

const FEATURES = [
  { icon: BookOpen, title: 'Units 1–5', desc: 'Complete AI syllabus coverage with interactive concepts', color: '#14b8a6' },
  { icon: FileImage, title: 'Visual Posters', desc: 'One poster per unit covering the entire concept map', color: '#a855f7' },
  { icon: Presentation, title: 'PPT Downloads', desc: 'Presentation slides with diagrams for every unit', color: '#f59e0b' },
  { icon: HelpCircle, title: 'Quiz Studio', desc: '10–15 questions per unit to test your knowledge', color: '#f43f5e' },
];

export default function HeroLanding({ onExplore }) {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>

      {/* ── Hero Section ──────────────────────────────────── */}
      <div style={{
        width: '100%',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(135deg, rgba(20,184,166,0.12) 0%, rgba(99,102,241,0.10) 50%, rgba(168,85,247,0.08) 100%)',
        border: '1px solid var(--border-color)',
        padding: '64px 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating glow orbs */}
        <div style={{
          position: 'absolute', top: '-60px', left: '-60px',
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20,184,166,0.2) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '-40px', right: '-40px',
          width: '180px', height: '180px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none'
        }} />

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px', borderRadius: 'var(--radius-full)',
          background: 'var(--primary-teal-light)', border: '1px solid rgba(20,184,166,0.3)',
          fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-teal)',
          marginBottom: '20px'
        }}>
          <Sparkles size={14} /> AI-Powered Learning Platform
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
          lineHeight: 1.15, marginBottom: '16px', maxWidth: '700px',
          letterSpacing: '-0.03em'
        }}>
          Explore Your{' '}
          <span className="gradient-text-edtech">AI Courses</span>
          {' '}Journey
        </h1>

        <p style={{
          fontSize: '1.05rem', color: 'var(--text-muted)',
          maxWidth: '560px', lineHeight: 1.7, marginBottom: '32px'
        }}>
          Dive into 5 units of Artificial Intelligence — visual posters, interactive quizzes,
          downloadable PPTs, and exam-ready Q&A with diagrams.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            className="btn-primary animate-pulse-glow"
            onClick={() => onExplore('units')}
            style={{ padding: '14px 32px', fontSize: '1rem' }}
          >
            <BookOpen size={18} /> Start Learning <ArrowRight size={16} />
          </button>
          <button
            className="btn-secondary"
            onClick={() => onExplore('posters')}
            style={{ padding: '14px 28px', fontSize: '1rem' }}
          >
            <FileImage size={18} /> View Posters
          </button>
        </div>

        {/* Quick Stats */}
        <div style={{
          display: 'flex', gap: '40px', marginTop: '48px',
          flexWrap: 'wrap', justifyContent: 'center'
        }}>
          {[
            { icon: Brain, value: '5 Units', label: 'Full Syllabus' },
            { icon: Target, value: '75+ Qs', label: 'Quiz Bank' },
            { icon: Zap, value: '5 Posters', label: 'Visual Maps' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: 'var(--radius-md)',
                background: 'var(--primary-teal-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <s.icon size={18} color="var(--primary-teal)" />
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-white)' }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Feature Cards ─────────────────────────────────── */}
      <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px'
      }}>
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="edtech-card edtech-card-interactive"
              onClick={() => {
                if (f.title.includes('Unit')) onExplore('units');
                else if (f.title.includes('Poster')) onExplore('posters');
                else if (f.title.includes('PPT')) onExplore('presentation');
                else if (f.title.includes('Quiz')) onExplore('quiz');
              }}
              style={{
                padding: '28px 24px',
                display: 'flex', flexDirection: 'column', gap: '14px',
                animationDelay: `${i * 0.08}s`
              }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: 'var(--radius-md)',
                background: `${f.color}20`, border: `1px solid ${f.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Icon size={22} color={f.color} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{f.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{f.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 600, color: f.color, marginTop: 'auto' }}>
                Explore <ArrowRight size={14} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
