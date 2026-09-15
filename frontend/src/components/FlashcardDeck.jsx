import React, { useState } from 'react';
import { Layers, RotateCcw, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';

export default function FlashcardDeck() {
  const [topic, setTopic] = useState('');
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState({});
  const [loading, setLoading] = useState(false);

  const handleGenerateCards = async (queryTopic = topic) => {
    const q = queryTopic.trim();
    if (!q || loading) return;

    setLoading(true);
    setCards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setMasteredCards({});

    try {
      const res = await fetch('/api/flashcards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: q })
      });
      const data = await res.json();
      setCards(data.flashcards || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleMastered = (index) => {
    setMasteredCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const currentCard = cards[currentIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Form */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Layers size={22} color="var(--accent-pink)" /> AI Flashcard Study Deck
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '20px' }}>
          Generate interactive 3D memory flashcards with definitions and cognitive memory tips.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); handleGenerateCards(); }} style={{ display: 'flex', gap: '12px' }}>
          <input
            type="text"
            placeholder="e.g., Anomaly Detection, Cell Biology, Microeconomics..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
          <button type="submit" disabled={!topic.trim() || loading} className="btn-primary">
            {loading ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
            <span>Build Deck</span>
          </button>
        </form>
      </div>

      {/* Main Flashcard Stage */}
      {cards.length > 0 && currentCard && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          {/* Card Counter & Mastered Indicator */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '560px', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span>Card <strong>{currentIndex + 1}</strong> of {cards.length}</span>
            <button
              onClick={() => toggleMastered(currentIndex)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: masteredCards[currentIndex] ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: masteredCards[currentIndex] ? '1px solid var(--accent-emerald)' : '1px solid var(--border-light)',
                color: masteredCards[currentIndex] ? 'var(--accent-emerald)' : 'var(--text-muted)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                fontSize: '0.8rem',
                transition: 'all 0.2s ease'
              }}
            >
              <CheckCircle2 size={16} />
              <span>{masteredCards[currentIndex] ? 'Mastered' : 'Mark as Mastered'}</span>
            </button>
          </div>

          {/* 3D Flip Card Container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
              width: '100%',
              maxWidth: '560px',
              height: '320px',
              perspective: '1000px',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}>
              {/* FRONT OF CARD */}
              <div className="glass-panel" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(18, 24, 43, 0.95), rgba(30, 41, 69, 0.95))',
                border: '1px solid var(--accent-pink)',
                boxShadow: '0 12px 36px rgba(0,0,0,0.5)'
              }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-pink)', fontWeight: 700, marginBottom: '12px' }}>
                  Front (Click to Flip)
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>
                  {currentCard.term}
                </h3>
              </div>

              {/* BACK OF CARD */}
              <div className="glass-panel" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '32px',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 30, 54, 0.95))',
                border: '1px solid var(--accent-secondary)',
                boxShadow: '0 12px 36px rgba(0,0,0,0.5)'
              }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-secondary)', fontWeight: 700, marginBottom: '12px' }}>
                  Back Definition
                </span>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '16px', color: '#f8fafc' }}>
                  {currentCard.definition}
                </p>
                {currentCard.memoryTip && (
                  <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: 'var(--accent-amber)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                    {currentCard.memoryTip}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentIndex(prev => (prev > 0 ? prev - 1 : cards.length - 1));
              }}
              className="btn-secondary"
            >
              <ChevronLeft size={18} /> Previous
            </button>
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="btn-secondary"
            >
              <RotateCcw size={16} /> Flip
            </button>
            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentIndex(prev => (prev < cards.length - 1 ? prev + 1 : 0));
              }}
              className="btn-secondary"
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
