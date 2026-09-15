import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Eye,
  FileImage,
  Presentation,
  HelpCircle,
  Award,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Loader2,
  GraduationCap
} from 'lucide-react';

export default function ConceptDetailView({ unitId, topicId, syllabus, onNavigate, onBack }) {
  const [level, setLevel] = useState('beginner'); // beginner, intermediate, advanced, exam
  const [explanationData, setExplanationData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Find target topic & unit
  const targetUnit = syllabus?.units?.find(u => u.id === unitId) || syllabus?.units?.[1] || syllabus?.units?.[0];
  const targetTopic = targetUnit?.topics?.find(t => t.id === topicId) || targetUnit?.topics?.[5] || targetUnit?.topics?.[0];

  useEffect(() => {
    if (targetTopic) {
      fetchExplanation(targetTopic.name, level);
    }
  }, [targetTopic?.name, level]);

  const fetchExplanation = async (topicName, selectedLevel) => {
    setLoading(true);
    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topicName, level: selectedLevel })
      });
      const data = await res.json();
      setExplanationData(data.explanation);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const levels = [
    { id: 'beginner', label: 'Beginner (ELI5 + Analogy)' },
    { id: 'intermediate', label: 'Intermediate (Academic)' },
    { id: 'advanced', label: 'Advanced (Technical / Grad)' },
    { id: 'exam', label: 'Exam Mode (Model Answer)' },
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Back Button & Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
          <ArrowLeft size={14} /> Back to Units
        </button>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {targetUnit?.title} &bull; <strong style={{ color: 'var(--text-dark)' }}>{targetTopic?.name}</strong>
        </span>
      </div>

      {/* Main Concept Banner & Tool Launchers */}
      <div className="edtech-card" style={{ padding: '28px', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: 'var(--primary-indigo)',
              backgroundColor: 'var(--primary-indigo-light)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              textTransform: 'uppercase'
            }}>
              Unit 0{targetUnit?.number} Concept
            </span>

            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '8px' }}>
              {targetTopic?.name}
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '4px', maxWidth: '720px' }}>
              {targetTopic?.desc}
            </p>
          </div>

          {/* Action Launcher Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('visualize')} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '8px 12px' }}>
              <Eye size={14} color="var(--primary-indigo)" />
              <span>Visualize</span>
            </button>

            <button onClick={() => onNavigate('posters')} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '8px 12px' }}>
              <FileImage size={14} color="var(--accent-purple)" />
              <span>Poster</span>
            </button>

            <button onClick={() => onNavigate('presentation')} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '8px 12px' }}>
              <Presentation size={14} color="var(--accent-amber)" />
              <span>Generate PPT</span>
            </button>

            <button onClick={() => onNavigate('important')} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '8px 12px' }}>
              <Award size={14} color="var(--accent-emerald)" />
              <span>Top Questions</span>
            </button>

            <button onClick={() => onNavigate('quiz')} className="btn-primary" style={{ fontSize: '0.8rem', padding: '8px 14px' }}>
              <HelpCircle size={14} />
              <span>Take Quiz</span>
            </button>
          </div>
        </div>

        {/* Level Switcher Tabs */}
        <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--border-color)', marginTop: '24px', paddingTop: '16px', overflowX: 'auto' }}>
          {levels.map(l => (
            <button
              key={l.id}
              onClick={() => setLevel(l.id)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                border: level === l.id ? '1px solid var(--primary-indigo)' : '1px solid var(--border-color)',
                backgroundColor: level === l.id ? 'var(--primary-indigo-light)' : '#ffffff',
                color: level === l.id ? 'var(--primary-indigo)' : 'var(--text-muted)',
                fontWeight: level === l.id ? 700 : 500,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Explanation Cards Content */}
      {loading ? (
        <div className="edtech-card" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
          <Loader2 className="animate-spin" size={24} color="var(--primary-indigo)" style={{ margin: '0 auto 12px auto' }} />
          <p>EduAgent AI is synthesizing {level} explanation for <strong>{targetTopic?.name}</strong>...</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Simple Explanation & Analogy */}
          <div className="edtech-card" style={{ padding: '28px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lightbulb size={18} color="var(--accent-amber)" /> Simple Explanation & Real-World Analogy
            </h2>

            <div style={{ backgroundColor: 'var(--accent-amber-light)', padding: '16px 20px', borderRadius: 'var(--radius-md)', border: '1px solid #fef3c7', marginBottom: '16px', fontSize: '0.95rem', color: '#92400e', lineHeight: 1.6 }}>
              <strong>Real-World Analogy:</strong> {typeof explanationData === 'object' ? explanationData?.analogy : `Imagine using a smart GPS navigation system while driving...`}
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
              {typeof explanationData === 'object' ? explanationData?.summary : explanationData}
            </p>
          </div>

          {/* Key Mechanics */}
          <div className="edtech-card" style={{ padding: '28px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={18} color="var(--accent-emerald)" /> Core Key Takeaways & Mechanics
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
              {Array.isArray(explanationData?.keyPoints) ? (
                explanationData.keyPoints.map((pt, idx) => (
                  <div key={idx} style={{ backgroundColor: '#f8fafc', border: '1px solid var(--border-color)', padding: '14px', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                    <strong style={{ color: 'var(--primary-indigo)', display: 'block', marginBottom: '4px' }}>Pillar {idx + 1}</strong>
                    {pt}
                  </div>
                ))
              ) : (
                <>
                  <div style={{ backgroundColor: '#f8fafc', border: '1px solid var(--border-color)', padding: '14px', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                    <strong style={{ color: 'var(--primary-indigo)', display: 'block', marginBottom: '4px' }}>State Formulation</strong>
                    Maps physical environment inputs into structured decision states.
                  </div>
                  <div style={{ backgroundColor: '#f8fafc', border: '1px solid var(--border-color)', padding: '14px', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                    <strong style={{ color: 'var(--primary-indigo)', display: 'block', marginBottom: '4px' }}>Evaluation Metric</strong>
                    Calculates costs and bounds to prioritize optimal decisions.
                  </div>
                  <div style={{ backgroundColor: '#f8fafc', border: '1px solid var(--border-color)', padding: '14px', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                    <strong style={{ color: 'var(--primary-indigo)', display: 'block', marginBottom: '4px' }}>Algorithmic Bounds</strong>
                    Prevents explosive exponential growth in space and time.
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Common Student Mistakes */}
          <div className="edtech-card" style={{ padding: '28px', backgroundColor: '#fff1f2', border: '1px solid #fecdd3' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#9f1239', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={18} color="#e11d48" /> Common Student Exam Misconceptions
            </h2>
            <ul style={{ paddingLeft: '20px', color: '#881337', fontSize: '0.9rem', lineHeight: 1.7 }}>
              <li>Confusing total cost equations with heuristic distance estimates.</li>
              <li>Forgetting state cycle checking leading to infinite recursion in written traces.</li>
              <li>Failing to state initial state, goal test condition, and step cost equation in 10-mark questions.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
