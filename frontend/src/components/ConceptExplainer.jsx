import React, { useState } from 'react';
import { Search, Lightbulb, Sparkles, BookOpen, CheckCircle, HelpCircle, Loader2 } from 'lucide-react';

export default function ConceptExplainer() {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('beginner');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const levels = [
    { id: 'beginner', label: 'Beginner (ELI5)', color: 'var(--accent-emerald)' },
    { id: 'intermediate', label: 'Intermediate (High School)', color: 'var(--accent-secondary)' },
    { id: 'advanced', label: 'Advanced (Expert / Grad)', color: 'var(--accent-pink)' },
  ];

  const popularTopics = [
    "Quantum Entanglement",
    "Transformer Neural Networks",
    "CRISPR Gene Editing",
    "Blockchain Consensus",
    "TCP/IP Handshake"
  ];

  const handleExplain = async (targetTopic = topic) => {
    const query = targetTopic.trim();
    if (!query || loading) return;

    setLoading(true);
    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: query, level })
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Search & Configuration Header */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>
          Concept Simplifier & Deep Dive
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '20px' }}>
          Enter any topic or select a popular subject to unpack simple analogies, key mechanics, and core takeaways.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); handleExplain(); }} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px', position: 'relative' }}>
            <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="e.g., Quantum Computing, Backpropagation, Microservices..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid var(--border-light)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Level Selector */}
          <div style={{ display: 'flex', gap: '6px', background: 'rgba(0, 0, 0, 0.3)', padding: '4px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            {levels.map(l => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLevel(l.id)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  background: level === l.id ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                  color: level === l.id ? l.color : 'var(--text-muted)',
                  fontWeight: level === l.id ? 700 : 500,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button type="submit" disabled={!topic.trim() || loading} className="btn-primary">
            {loading ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
            <span>Deconstruct</span>
          </button>
        </form>

        {/* Popular Tags */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>Popular:</span>
          {popularTopics.map((item, idx) => (
            <button
              key={idx}
              onClick={() => { setTopic(item); handleExplain(item); }}
              style={{
                fontSize: '0.75rem',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-light)',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.borderColor = 'var(--accent-secondary)'}
              onMouseLeave={(e) => e.target.style.borderColor = 'var(--border-light)'}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Explanation Results */}
      {result && (
        <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>
              Mastery Breakdown: <span className="gradient-text">{result.topic}</span>
            </h3>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(6, 182, 212, 0.15)',
              color: 'var(--accent-secondary)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              textTransform: 'uppercase'
            }}>
              {result.level} Mode
            </span>
          </div>

          {typeof result.explanation === 'string' ? (
            <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {result.explanation}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Summary */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BookOpen size={16} /> Summary Definition
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{result.explanation.summary}</p>
              </div>

              {/* Analogy */}
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-amber)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Lightbulb size={16} /> Real-World Analogy
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{result.explanation.analogy}</p>
              </div>

              {/* Key Takeaways */}
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={16} /> Key Mechanics
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                  {result.explanation.keyPoints?.map((point, idx) => (
                    <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.875rem' }}>
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              {/* Self-check question */}
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle size={16} /> Interactive Reflection Question
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{result.explanation.interactiveQuestion}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
