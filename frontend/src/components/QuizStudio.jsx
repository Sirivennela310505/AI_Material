import React, { useState } from 'react';
import { HelpCircle, Check, X, RotateCcw, Award, ChevronRight, Loader2, Sparkles } from 'lucide-react';

export default function QuizStudio() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [quizData, setQuizData] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerateQuiz = async (queryTopic = topic) => {
    const q = queryTopic.trim();
    if (!q || loading) return;

    setLoading(true);
    setSubmitted(false);
    setUserAnswers({});
    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: q, difficulty, count: 4 })
      });
      const data = await res.json();
      setQuizData(data.quiz || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (questionId, optionIndex) => {
    if (submitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    if (!quizData) return 0;
    let score = 0;
    quizData.forEach((q, idx) => {
      const id = q.id || idx;
      if (userAnswers[id] === q.answer) score++;
    });
    return score;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Quiz Studio Header & Controls */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HelpCircle size={22} color="var(--accent-secondary)" /> AI Quiz Studio & Knowledge Check
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '20px' }}>
          Generate custom diagnostic quizzes on any subject to evaluate recall, identify gaps, and reinforce mastery.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); handleGenerateQuiz(); }} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="e.g., Data Structures, Organic Chemistry, World History..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
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
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
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
            <option value="easy">Easy Foundation</option>
            <option value="medium">Medium Standard</option>
            <option value="hard">Hard Advanced</option>
          </select>

          <button type="submit" disabled={!topic.trim() || loading} className="btn-primary">
            {loading ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
            <span>Generate Test</span>
          </button>
        </form>
      </div>

      {/* Quiz Questions List */}
      {quizData && quizData.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Score Header if Submitted */}
          {submitted && (
            <div className="glass-panel" style={{
              padding: '24px',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
              border: '1px solid var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Award size={36} color="var(--accent-amber)" />
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                    Quiz Results: {calculateScore()} / {quizData.length} Correct ({Math.round((calculateScore() / quizData.length) * 100)}%)
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {calculateScore() === quizData.length ? '🌟 Flawless Mastery! You nailed every question.' : 'Great effort! Review the detailed explanations below.'}
                  </p>
                </div>
              </div>

              <button onClick={() => handleGenerateQuiz()} className="btn-secondary">
                <RotateCcw size={16} /> Retake / New Quiz
              </button>
            </div>
          )}

          {/* Cards */}
          {quizData.map((q, qIndex) => {
            const qId = q.id || qIndex;
            const selectedOpt = userAnswers[qId];

            return (
              <div key={qId} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-secondary)' }}>Q{qIndex + 1}.</span> {q.question}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {q.options?.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    const isCorrect = q.answer === optIdx;
                    
                    let bg = 'rgba(255, 255, 255, 0.03)';
                    let border = '1px solid var(--border-light)';
                    let iconColor = 'var(--text-dim)';

                    if (submitted) {
                      if (isCorrect) {
                        bg = 'rgba(16, 185, 129, 0.15)';
                        border = '1px solid var(--accent-emerald)';
                        iconColor = 'var(--accent-emerald)';
                      } else if (isSelected && !isCorrect) {
                        bg = 'rgba(239, 68, 68, 0.15)';
                        border = '1px solid #ef4444';
                        iconColor = '#ef4444';
                      }
                    } else if (isSelected) {
                      bg = 'rgba(99, 102, 241, 0.2)';
                      border = '1px solid var(--accent-primary)';
                      iconColor = 'var(--accent-primary)';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleOptionSelect(qId, optIdx)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '14px 18px',
                          borderRadius: 'var(--radius-md)',
                          background: bg,
                          border: border,
                          color: 'var(--text-main)',
                          fontSize: '0.9rem',
                          textAlign: 'left',
                          cursor: submitted ? 'default' : 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          border: '1px solid var(--border-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: iconColor,
                          flexShrink: 0
                        }}>
                          {String.fromCharCode(65 + optIdx)}
                        </div>
                        <span style={{ flex: 1 }}>{opt}</span>
                        {submitted && isCorrect && <Check size={18} color="var(--accent-emerald)" />}
                        {submitted && isSelected && !isCorrect && <X size={18} color="#ef4444" />}
                      </button>
                    );
                  })}
                </div>

                {submitted && q.explanation && (
                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '14px', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--text-muted)', borderLeft: '3px solid var(--accent-secondary)' }}>
                    💡 <strong>Explanation:</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}

          {!submitted && (
            <button
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(userAnswers).length === 0}
              className="btn-primary"
              style={{ alignSelf: 'center', padding: '14px 32px', fontSize: '1rem' }}
            >
              <span>Submit & Score Answers</span>
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
