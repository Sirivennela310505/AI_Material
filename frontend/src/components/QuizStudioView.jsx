import React, { useState, useEffect } from 'react';
import { HelpCircle, Check, X, RotateCcw, Award, ChevronRight, Loader2, Sparkles, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';
import { UNIT_QUIZZES } from '../data/unitQuizData';

export default function QuizStudioView({ onNavigate }) {
  const [selectedUnitKey, setSelectedUnitKey] = useState('unit-1');
  const [customTopic, setCustomTopic] = useState('');
  const [quizData, setQuizData] = useState([]);
  const [quizTitle, setQuizTitle] = useState('');
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load selected unit on mount or change
  useEffect(() => {
    if (selectedUnitKey && UNIT_QUIZZES[selectedUnitKey]) {
      const uData = UNIT_QUIZZES[selectedUnitKey];
      setQuizData(uData.questions);
      setQuizTitle(uData.title);
      setUserAnswers({});
      setSubmitted(false);
    }
  }, [selectedUnitKey]);

  const handleSelectUnit = (unitKey) => {
    setSelectedUnitKey(unitKey);
    setCustomTopic('');
  };

  const handleGenerateCustomQuiz = async (e) => {
    e?.preventDefault();
    if (!customTopic.trim() || loading) return;
    setLoading(true);
    setSubmitted(false);
    setUserAnswers({});
    setSelectedUnitKey(null);

    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: customTopic, count: 10 })
      });
      const data = await res.json();
      setQuizData(data.quiz || []);
      setQuizTitle(`Custom Quiz: ${customTopic} (10 Questions)`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (qId, optionIdx) => {
    if (submitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
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
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* ── Quiz Studio Header & Unit Selector ─────────────────── */}
      <div className="edtech-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HelpCircle size={24} color="var(--primary-teal)" /> AI Quiz Studio — 10–12 Questions Per Unit
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Master Units 1 to 5 with full 10–12 multiple-choice question sets, detailed explanations, and memory tips.
          </p>
        </div>

        {/* Unit Selector Tabs (10-12 Qs per unit) */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { key: 'unit-1', label: 'Unit I (12 Qs)' },
            { key: 'unit-2', label: 'Unit II (12 Qs)' },
            { key: 'unit-3', label: 'Unit III (12 Qs)' },
            { key: 'unit-4', label: 'Unit IV (12 Qs)' },
            { key: 'unit-5', label: 'Unit V (12 Qs)' },
          ].map((u) => {
            const isSelected = selectedUnitKey === u.key;
            return (
              <button
                key={u.key}
                onClick={() => handleSelectUnit(u.key)}
                className={isSelected ? 'btn-primary' : 'btn-secondary'}
                style={{
                  padding: '10px 18px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <BookOpen size={15} /> {u.label}
              </button>
            );
          })}
        </div>

        {/* Custom AI Topic Input */}
        <form onSubmit={handleGenerateCustomQuiz} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', paddingTop: '10px', borderTop: '1px solid var(--border-color)' }}>
          <input
            type="text"
            placeholder="Or enter custom topic (e.g. A* Search, PEAS, Minimax, First Order Logic)..."
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            style={{
              flex: 1,
              minWidth: '260px',
              padding: '10px 16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-card-subtle)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-white)',
              fontSize: '0.88rem',
              outline: 'none'
            }}
          />
          <button type="submit" disabled={!customTopic.trim() || loading} className="btn-primary">
            {loading ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
            <span>Generate AI Quiz</span>
          </button>
        </form>
      </div>

      {/* ── Active Quiz Section ──────────────────────────────── */}
      {loading ? (
        <div className="edtech-card" style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>
          <Loader2 className="animate-spin" size={28} color="var(--primary-teal)" style={{ margin: '0 auto 12px auto' }} />
          <p>Generating custom quiz questions...</p>
        </div>
      ) : quizData && quizData.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Quiz Title Banner */}
          <div style={{
            padding: '14px 20px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(90deg, rgba(20,184,166,0.15) 0%, rgba(99,102,241,0.1) 100%)',
            border: '1px solid rgba(20,184,166,0.3)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-teal)' }}>
              {quizTitle} ({quizData.length} Questions)
            </h2>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Answered: {Object.keys(userAnswers).length} / {quizData.length}
            </div>
          </div>

          {/* Post-Quiz Score Header */}
          {submitted && (
            <div className="edtech-card" style={{
              padding: '24px',
              backgroundColor: 'rgba(20,184,166,0.1)',
              border: '1px solid var(--primary-teal)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Award size={36} color="var(--primary-teal)" />
                  <div>
                    <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-teal)' }}>
                      Quiz Score: {calculateScore()} / {quizData.length} ({Math.round((calculateScore() / quizData.length) * 100)}%)
                    </h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {calculateScore() === quizData.length
                        ? '🌟 Perfect Score! Excellent mastery of this unit!'
                        : 'Review the explanations below to strengthen your understanding.'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => { setSubmitted(false); setUserAnswers({}); }}
                  className="btn-primary"
                >
                  <RotateCcw size={16} /> Retake Unit Quiz
                </button>
              </div>
            </div>
          )}

          {/* Question Cards List */}
          {quizData.map((q, qIndex) => {
            const qId = q.id || qIndex;
            const selectedOpt = userAnswers[qId];

            return (
              <div
                key={qId}
                className="edtech-card"
                style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-white)', display: 'flex', gap: '10px', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--primary-teal)', fontWeight: 800 }}>Q{qIndex + 1}.</span>
                  <span>{q.question}</span>
                </h3>

                {/* Options List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {q.options?.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    const isCorrect = q.answer === optIdx;

                    let bg = 'var(--bg-card-subtle)';
                    let border = '1px solid var(--border-color)';
                    let color = 'var(--text-white)';

                    if (submitted) {
                      if (isCorrect) {
                        bg = 'rgba(16, 185, 129, 0.15)';
                        border = '1px solid #10b981';
                        color = '#34d399';
                      } else if (isSelected && !isCorrect) {
                        bg = 'rgba(244, 63, 94, 0.15)';
                        border = '1px solid #f43f5e';
                        color = '#fb7185';
                      }
                    } else if (isSelected) {
                      bg = 'var(--primary-teal-light)';
                      border = '1px solid var(--primary-teal)';
                      color = 'var(--primary-teal)';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleOptionSelect(qId, optIdx)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 18px',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: bg,
                          border: border,
                          color: color,
                          fontSize: '0.9rem',
                          textAlign: 'left',
                          cursor: submitted ? 'default' : 'pointer',
                          fontWeight: isSelected || (submitted && isCorrect) ? 700 : 500,
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          border: '1px solid rgba(255,255,255,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          flexShrink: 0
                        }}>
                          {String.fromCharCode(65 + optIdx)}
                        </div>
                        <span style={{ flex: 1, lineHeight: 1.4 }}>{opt}</span>
                        {submitted && isCorrect && <Check size={18} color="#34d399" />}
                        {submitted && isSelected && !isCorrect && <X size={18} color="#fb7185" />}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback Panel */}
                {submitted && (
                  <div style={{
                    marginTop: '8px',
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: selectedOpt === q.answer ? 'rgba(16,185,129,0.1)' : 'rgba(244,63,94,0.1)',
                    border: selectedOpt === q.answer ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(244,63,94,0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    <div style={{
                      fontWeight: 800, fontSize: '0.85rem',
                      color: selectedOpt === q.answer ? '#34d399' : '#fb7185',
                      display: 'flex', alignItems: 'center', gap: '6px'
                    }}>
                      {selectedOpt === q.answer ? <Check size={16} /> : <AlertTriangle size={16} />}
                      {selectedOpt === q.answer ? 'CORRECT' : 'EXPLANATION'}
                    </div>

                    <div style={{ fontSize: '0.88rem', color: 'var(--text-white)', lineHeight: 1.5 }}>
                      {q.explanation}
                    </div>

                    {q.memoryTip && (
                      <div style={{
                        backgroundColor: 'rgba(245,158,11,0.12)',
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.82rem',
                        color: '#fbbf24',
                        border: '1px solid rgba(245,158,11,0.3)',
                        fontWeight: 600
                      }}>
                        {q.memoryTip}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {!submitted && (
            <button
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(userAnswers).length === 0}
              className="btn-primary animate-pulse-glow"
              style={{ alignSelf: 'center', padding: '14px 36px', fontSize: '1rem', marginTop: '12px' }}
            >
              <span>Submit & Check Answers</span>
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}
