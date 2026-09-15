import React, { useState, useEffect } from 'react';
import {
  Maximize2,
  Printer,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  X,
  Eye,
  LayoutGrid
} from 'lucide-react';

const UNIT_POSTERS = [
  {
    id: 'unit-1',
    unitNumber: 1,
    unitRoman: 'UNIT I',
    badge: 'CONCEPT BLUEPRINT',
    title: 'Unit 1: Intelligent Agents & PEAS Framework',
    image: '/posters/unit1.jpg',
    imageCaption: 'Figure 1.1: Intelligent Agent Perception-Action Loop & Sensor-Actuator Architecture (PEAS)',
    color: '#0d9488',
    gradient: 'linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #2563eb 100%)',
    bgLight: '#f0fdfa'
  },
  {
    id: 'unit-2',
    unitNumber: 2,
    unitRoman: 'UNIT II',
    badge: 'CONCEPT BLUEPRINT',
    title: 'Unit 2: Heuristic Search & A* Algorithm',
    image: '/posters/unit2.jpg',
    imageCaption: 'Figure 2.1: State-Space Graph Network & 2D Grid A* Pathfinding Visualization',
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #4f46e5 100%)',
    bgLight: '#eff6ff'
  },
  {
    id: 'unit-3',
    unitNumber: 3,
    unitRoman: 'UNIT III',
    badge: 'CONCEPT BLUEPRINT',
    title: 'Unit 3: Adversarial Search & CSP',
    image: '/posters/unit3.jpg',
    imageCaption: 'Figure 3.1: Minimax Two-Player Game Tree with Alpha-Beta Pruning & Constraint Graph',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #9333ea 100%)',
    bgLight: '#faf5ff'
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    unitRoman: 'UNIT IV',
    badge: 'CONCEPT BLUEPRINT',
    title: 'Unit 4: Knowledge Representation & Logic',
    image: '/posters/unit4.jpg',
    imageCaption: 'Figure 4.1: First-Order Knowledge Base Inference Graph & CNF Resolution Proof',
    color: '#d97706',
    gradient: 'linear-gradient(135deg, #b45309 0%, #d97706 50%, #ea580c 100%)',
    bgLight: '#fffbeb'
  },
  {
    id: 'unit-5',
    unitNumber: 5,
    unitRoman: 'UNIT V',
    badge: 'CONCEPT BLUEPRINT',
    title: 'Unit 5: AI Planning & Applications',
    image: '/posters/unit5.jpg',
    imageCaption: 'Figure 5.1: STRIPS Automated Action State Transitions & Modern AI Applications',
    color: '#e11d48',
    gradient: 'linear-gradient(135deg, #be123c 0%, #e11d48 50%, #f43f5e 100%)',
    bgLight: '#fff1f2'
  }
];

export default function InteractivePosters({ selectedUnitId }) {
  const getInitialIdx = () => {
    if (!selectedUnitId) return 0;
    const found = UNIT_POSTERS.findIndex((p) => p.id === selectedUnitId);
    return found >= 0 ? found : 0;
  };

  const [selectedUnitIdx, setSelectedUnitIdx] = useState(getInitialIdx);
  const [modalPoster, setModalPoster] = useState(null);
  const [viewMode, setViewMode] = useState('single'); // 'single' or 'grid'

  useEffect(() => {
    if (selectedUnitId) {
      const found = UNIT_POSTERS.findIndex((p) => p.id === selectedUnitId);
      if (found >= 0) {
        setSelectedUnitIdx(found);
        setViewMode('single');
      }
    }
  }, [selectedUnitId]);

  const currentPoster = UNIT_POSTERS[selectedUnitIdx];

  const handlePrint = () => {
    window.print();
  };

  const handlePrev = () => {
    setSelectedUnitIdx((prev) => (prev > 0 ? prev - 1 : UNIT_POSTERS.length - 1));
  };

  const handleNext = () => {
    setSelectedUnitIdx((prev) => (prev < UNIT_POSTERS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: 60 }}>

      {/* ── Top Header Bar ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: 'var(--primary-teal-dark)',
              letterSpacing: '0.08em',
              background: 'var(--primary-teal-light)',
              padding: '3px 10px',
              borderRadius: 'var(--radius-full)'
            }}>
              Visual Concept Posters
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Units 1 to 5 Blueprint Diagrams
            </span>
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0, letterSpacing: '-0.02em' }}>
            Unit Posters
          </h1>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            onClick={() => setViewMode(viewMode === 'single' ? 'grid' : 'single')}
            className="btn-secondary"
            style={{ fontSize: '0.82rem', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            {viewMode === 'single' ? <LayoutGrid size={15} /> : <BookOpen size={15} />}
            {viewMode === 'single' ? 'View All 5 Posters' : 'Focus Single Unit'}
          </button>

          <button
            onClick={() => setModalPoster(currentPoster)}
            className="btn-primary"
            style={{ fontSize: '0.82rem', padding: '8px 14px', background: currentPoster.gradient, display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <Maximize2 size={15} /> Expand High-Res
          </button>

          <button onClick={handlePrint} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '8px 14px' }}>
            <Printer size={15} /> Print
          </button>
        </div>
      </div>

      {/* ── 5 Unit Selector Tabs ───────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        backgroundColor: '#ffffff',
        padding: '8px 12px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {UNIT_POSTERS.map((p, idx) => {
          const isSelected = selectedUnitIdx === idx && viewMode === 'single';
          return (
            <button
              key={p.id}
              onClick={() => {
                setSelectedUnitIdx(idx);
                setViewMode('single');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '7px 14px',
                borderRadius: 'var(--radius-md)',
                border: isSelected ? `2px solid ${p.color}` : '1px solid var(--border-color)',
                backgroundColor: isSelected ? p.bgLight : '#ffffff',
                color: isSelected ? p.color : 'var(--text-dark)',
                fontWeight: isSelected ? 800 : 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                backgroundColor: isSelected ? p.color : '#f1f5f9',
                color: isSelected ? '#ffffff' : 'var(--text-dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '0.72rem'
              }}>
                {p.unitNumber}
              </div>
              <span>Unit {p.unitNumber}</span>
            </button>
          );
        })}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ── SINGLE POSTER VIEW: PURE POSTER IMAGE ONLY (NO TEXT MATTER) ─── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {viewMode === 'single' ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          
          {/* Previous / Next Navigator Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '780px', alignItems: 'center' }}>
            <button
              onClick={handlePrev}
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: 4 }}
            >
              <ArrowLeft size={14} /> Previous Unit
            </button>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: currentPoster.color }}>
              Unit {currentPoster.unitNumber} Poster
            </span>
            <button
              onClick={handleNext}
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: 4 }}
            >
              Next Unit <ArrowRight size={14} />
            </button>
          </div>

          {/* Master Poster Card */}
          <div
            className="blueprint-card"
            style={{
              maxWidth: '780px',
              width: '100%',
              overflow: 'hidden',
              backgroundColor: '#ffffff'
            }}
          >
            {/* Header Banner */}
            <div
              className="animated-poster-header"
              style={{
                position: 'relative',
                padding: '14px 20px',
                background: currentPoster.gradient,
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <span style={{
                  backgroundColor: 'rgba(255,255,255,0.22)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  letterSpacing: '0.04em'
                }}>
                  ✨ {currentPoster.unitRoman} • {currentPoster.badge}
                </span>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 0 0', letterSpacing: '-0.01em' }}>
                  {currentPoster.title}
                </h2>
              </div>

              <button
                onClick={() => setModalPoster(currentPoster)}
                style={{
                  background: 'rgba(255,255,255,0.22)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 12px',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4
                }}
              >
                <Maximize2 size={13} /> Full Screen
              </button>
            </div>

            {/* Poster Image Container */}
            <div style={{ padding: '12px', backgroundColor: '#0f172a' }}>
              <div
                className="blueprint-img-frame"
                onClick={() => setModalPoster(currentPoster)}
                style={{
                  cursor: 'pointer',
                  width: '100%',
                  aspectRatio: '16/9',
                  maxHeight: '440px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  border: 'none',
                  borderRadius: 'var(--radius-md)'
                }}
                title="Click to view full-screen"
              >
                <img
                  src={currentPoster.image}
                  alt={currentPoster.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />

                {/* Floating Zoom Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: 12,
                  right: 12,
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  pointerEvents: 'none'
                }}>
                  <Eye size={12} /> Click to Zoom
                </div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* ═══════════════════════════════════════════════════════════════════ */
        /* ── GRID VIEW: ALL 5 UNIT POSTERS AT A GLANCE (IMAGES ONLY) ─────── */
        /* ═══════════════════════════════════════════════════════════════════ */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 20
        }}>
          {UNIT_POSTERS.map((p, idx) => (
            <div
              key={p.id}
              className="blueprint-card hover-lift"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              {/* Header */}
              <div style={{
                padding: '12px 16px',
                background: p.gradient,
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.9 }}>
                    {p.unitRoman}
                  </span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: '2px 0 0 0', color: '#ffffff' }}>
                    {p.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedUnitIdx(idx);
                    setViewMode('single');
                  }}
                  style={{
                    background: 'rgba(255,255,255,0.25)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Focus
                </button>
              </div>

              {/* Poster Image */}
              <div
                className="blueprint-img-frame"
                onClick={() => setModalPoster(p)}
                style={{
                  cursor: 'pointer',
                  aspectRatio: '16/9',
                  backgroundColor: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '8px'
                }}
              >
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ── HIGH RESOLUTION FULL SCREEN MODAL ───────────────────────────── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {modalPoster && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setModalPoster(null)}
        >
          <div
            style={{
              maxWidth: '960px',
              width: '100%',
              maxHeight: '92vh',
              backgroundColor: '#0f172a',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              padding: '14px 20px',
              background: modalPoster.gradient,
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  {modalPoster.unitRoman} Concept Poster
                </span>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '2px 0 0 0', color: '#ffffff' }}>
                  {modalPoster.title}
                </h2>
              </div>
              <button
                onClick={() => setModalPoster(null)}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: '#ffffff',
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* High-res Image Display */}
            <div style={{ padding: '16px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={modalPoster.image}
                alt={modalPoster.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)'
                }}
              />
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '12px 20px', backgroundColor: '#1e293b', display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button onClick={handlePrint} className="btn-secondary" style={{ fontSize: '0.78rem', padding: '6px 14px' }}>
                <Printer size={14} /> Print
              </button>
              <button onClick={() => setModalPoster(null)} className="btn-primary" style={{ fontSize: '0.78rem', padding: '6px 16px', background: modalPoster.gradient }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
