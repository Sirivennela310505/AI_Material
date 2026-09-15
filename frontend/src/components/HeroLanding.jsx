import React from 'react';
import { Sparkles, BookOpen, FileImage, HelpCircle, Presentation, ArrowRight, Zap, Brain, Target } from 'lucide-react';

const FEATURES = [
  { icon: BookOpen, title: 'Units 1–5 Syllabus', desc: 'Complete AI syllabus coverage with interactive concepts and deep dives', color: '#0d9488' },
  { icon: FileImage, title: 'Visual Posters', desc: 'One master poster per unit covering the entire concept map', color: '#7c3aed' },
  { icon: Presentation, title: 'PPT Generator', desc: 'Presentation slides with diagrams and key takeaways for every unit', color: '#d97706' },
  { icon: HelpCircle, title: 'Quiz Studio', desc: '10–12 questions per unit with auto-grading and memory tips', color: '#e11d48' },
];

export default function HeroLanding({ onExplore }) {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '36px', alignItems: 'center' }}>

      {/* ── Hero Banner Section ───────────────────────────── */}
      <div className="edtech-card hover-lift" style={{
        width: '100%',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 50%, #eff6ff 100%)',
        border: '1px solid var(--border-color)',
        padding: '48px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: '40px',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>

        {/* Left Column: Text & CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px', borderRadius: 'var(--radius-full)',
            background: 'var(--primary-teal-light)', border: '1px solid rgba(13,148,136,0.3)',
            fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-teal-dark)',
            width: 'fit-content'
          }}>
            <Sparkles size={14} /> AI-Powered Learning Platform
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800,
            lineHeight: 1.2, color: 'var(--text-dark)', letterSpacing: '-0.02em'
          }}>
            Explore Your <span className="gradient-text-edtech">AI Courses</span> Journey
          </h1>

          <p style={{
            fontSize: '1rem', color: 'var(--text-muted)',
            lineHeight: 1.6, maxWidth: '540px'
          }}>
            Master 5 Units of Artificial Intelligence — visual posters, interactive quizzes, downloadable PPTs, and exam-ready Q&A with student-drawable diagrams.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '8px' }}>
            <button
              className="btn-primary"
              onClick={() => onExplore('units')}
              style={{ padding: '12px 28px', fontSize: '0.95rem' }}
            >
              <BookOpen size={18} /> Start Learning <ArrowRight size={16} />
            </button>
            <button
              className="btn-secondary"
              onClick={() => onExplore('posters')}
              style={{ padding: '12px 24px', fontSize: '0.95rem' }}
            >
              <FileImage size={18} /> View Posters
            </button>
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'flex', gap: '32px', marginTop: '16px', flexWrap: 'wrap' }}>
            {[
              { icon: Brain, value: '5 Units', label: 'Full Syllabus' },
              { icon: Target, value: '65+ Qs', label: 'Quiz Bank' },
              { icon: Zap, value: '5 Posters', label: 'Visual Maps' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: 'var(--radius-md)',
                  background: 'var(--primary-teal-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <s.icon size={18} color="var(--primary-teal-dark)" />
                </div>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)' }}>{s.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Neat Image Banner */}
        <div className="img-neat-frame" style={{ height: '280px', width: '100%', boxShadow: 'var(--shadow-md)' }}>
          <img
            src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
            alt="Artificial Intelligence Learning"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
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
                padding: '24px',
                display: 'flex', flexDirection: 'column', gap: '12px',
                animationDelay: `${i * 0.08}s`
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: 'var(--radius-md)',
                background: `${f.color}15`, border: `1px solid ${f.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Icon size={20} color={f.color} />
              </div>
              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-dark)' }}>{f.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{f.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: f.color, marginTop: 'auto' }}>
                Explore <ArrowRight size={14} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
