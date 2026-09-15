import React, { useState } from 'react';
import { Map, Calendar, CheckCircle2, Sparkles, Code2, ArrowDown, Loader2 } from 'lucide-react';

export default function RoadmapPlanner() {
  const [subject, setSubject] = useState('');
  const [durationWeeks, setDurationWeeks] = useState(4);
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateRoadmap = async (targetSubject = subject) => {
    const s = targetSubject.trim();
    if (!s || loading) return;

    setLoading(true);
    try {
      const res = await fetch('/api/roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject: s, durationWeeks: Number(durationWeeks) })
      });
      const data = await res.json();
      setRoadmap(data.roadmap || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header & Generator */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Map size={22} color="var(--accent-emerald)" /> Personalized Learning Roadmap Pathway
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '20px' }}>
          Generate a structured week-by-week curriculum with skill targets and milestone projects for any discipline.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); handleGenerateRoadmap(); }} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="e.g., Full-Stack Web Development, Machine Learning Engineering, SAT Math..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{
              flex: 1,
              minWidth: '260px',
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />

          <select
            value={durationWeeks}
            onChange={(e) => setDurationWeeks(e.target.value)}
            style={{
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-main)',
              fontSize: '0.875rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value={2}>2-Week Sprint</option>
            <option value={4}>4-Week Standard Mastery</option>
            <option value={8}>8-Week Comprehensive Immersion</option>
          </select>

          <button type="submit" disabled={!subject.trim() || loading} className="btn-primary">
            {loading ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
            <span>Generate Plan</span>
          </button>
        </form>
      </div>

      {/* Visual Roadmap Timeline */}
      {roadmap && roadmap.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', padding: '0 12px' }}>
          {roadmap.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="glass-panel" style={{
                padding: '24px',
                borderLeft: '4px solid var(--accent-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(99, 102, 241, 0.2)',
                    color: 'var(--accent-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Calendar size={14} /> Week {step.week || idx + 1}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', flex: 1, marginLeft: '12px' }}>
                    {step.phase}
                  </h3>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {step.description}
                </p>

                {/* Key Skills */}
                <div>
                  <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    Target Competencies
                  </h4>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {step.keySkills?.map((skill, sIdx) => (
                      <span key={sIdx} style={{
                        fontSize: '0.75rem',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <CheckCircle2 size={12} color="var(--accent-emerald)" /> {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Milestone */}
                {step.practicalProject && (
                  <div style={{ background: 'rgba(6, 182, 212, 0.08)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(6, 182, 212, 0.2)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Code2 size={18} color="var(--accent-secondary)" />
                    <div>
                      <strong style={{ color: 'var(--accent-secondary)' }}>Milestone Project:</strong> {step.practicalProject}
                    </div>
                  </div>
                )}
              </div>

              {idx < roadmap.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--border-glow)' }}>
                  <ArrowDown size={24} className="animate-bounce" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
