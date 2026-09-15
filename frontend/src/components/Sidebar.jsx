import React, { useState } from 'react';
import {
  Home,
  BookOpen,
  MessageSquare,
  Eye,
  FileImage,
  Presentation,
  HelpCircle,
  BookMarked,
  Map,
  BarChart3,
  RotateCcw,
  Sparkles,
  GraduationCap,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const UNITS_LIST = [
  { id: 'unit-1', label: 'Unit 1: Intelligent Agents', badge: 'PEAS & Logic' },
  { id: 'unit-2', label: 'Unit 2: Heuristic Search', badge: 'A* Search' },
  { id: 'unit-3', label: 'Unit 3: Constraints & Games', badge: 'Minimax & CSP' },
  { id: 'unit-4', label: 'Unit 4: Knowledge & Logic', badge: 'FOL & Chaining' },
  { id: 'unit-5', label: 'Unit 5: AI Applications', badge: 'NLP & Robotics' },
];

const OTHER_GROUPS = [
  {
    label: 'Learning Tools',
    items: [
      { id: 'visualize',    label: 'Visualizations',   icon: Eye,          badge: null },
      { id: 'posters',      label: 'Unit Posters',     icon: FileImage,    badge: '5 Posters' },
      { id: 'presentation', label: 'PPT Generator',    icon: Presentation, badge: null },
      { id: 'important',    label: 'Top Questions',    icon: BookMarked,   badge: '50 Q' },
      { id: 'quiz',         label: 'Quiz Studio',      icon: HelpCircle,   badge: '10–12/Unit' },
    ]
  },
  {
    label: 'Analytics & Exams',
    items: [
      { id: 'progress', label: 'My Progress',    icon: BarChart3,     badge: null },
      { id: 'roadmap',  label: 'Study Roadmap',  icon: Map,           badge: null },
      { id: 'revision', label: 'Quick Revision', icon: RotateCcw,     badge: null },
      { id: 'exam',     label: 'Exam Mode',      icon: GraduationCap, badge: '10-Mark' },
    ]
  }
];

export default function Sidebar({ activeTab, setActiveTab, selectedUnitId, onSelectUnit }) {
  const [unitsExpanded, setUnitsExpanded] = useState(true);

  return (
    <aside style={{
      width: '260px',
      backgroundColor: 'var(--bg-sidebar)',
      color: 'var(--text-dark)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: '20px 14px',
      borderRight: '1px solid var(--border-color)',
      flexShrink: 0,
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto'
    }}>
      {/* Brand */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        padding: '4px 8px 22px 8px',
        borderBottom: '1px solid var(--border-color)',
        marginBottom: '16px'
      }}>
        <div style={{
          width: '38px', height: '38px', borderRadius: '12px',
          background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(13,148,136,0.3)'
        }}>
          <Sparkles size={20} color="#fff" />
        </div>
        <div>
          <h1 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--text-dark)', letterSpacing: '-0.01em' }}>
            EduAgent<span style={{ color: 'var(--primary-teal)' }}> AI</span>
          </h1>
          <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', margin: 0 }}>
            AI Learning Companion
          </p>
        </div>
      </div>

      {/* Nav Groups */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Platform Section */}
        <div>
          <div style={{
            fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', color: 'var(--text-muted)',
            padding: '0 10px 6px 10px'
          }}>
            Platform
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {/* Home Tab */}
            <button
              onClick={() => setActiveTab('home')}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '9px 12px', borderRadius: 'var(--radius-md)', border: 'none',
                background: activeTab === 'home' ? 'var(--primary-teal-light)' : 'transparent',
                color: activeTab === 'home' ? 'var(--primary-teal-dark)' : 'var(--text-dark)',
                fontWeight: activeTab === 'home' ? 700 : 500, fontSize: '0.855rem',
                cursor: 'pointer', textAlign: 'left', transition: 'all 0.18s ease',
                borderLeft: activeTab === 'home' ? '3px solid var(--primary-teal)' : '3px solid transparent'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Home size={16} color={activeTab === 'home' ? 'var(--primary-teal-dark)' : 'currentColor'} />
                <span>Home</span>
              </div>
            </button>

            {/* AI Course Units Expandable Header */}
            <button
              onClick={() => {
                setActiveTab('units');
                setUnitsExpanded(!unitsExpanded);
              }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '9px 12px', borderRadius: 'var(--radius-md)', border: 'none',
                background: activeTab === 'units' ? 'var(--primary-teal-light)' : 'transparent',
                color: activeTab === 'units' ? 'var(--primary-teal-dark)' : 'var(--text-dark)',
                fontWeight: activeTab === 'units' ? 700 : 500, fontSize: '0.855rem',
                cursor: 'pointer', textAlign: 'left', transition: 'all 0.18s ease',
                borderLeft: activeTab === 'units' ? '3px solid var(--primary-teal)' : '3px solid transparent'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <BookOpen size={16} color={activeTab === 'units' ? 'var(--primary-teal-dark)' : 'currentColor'} />
                <span>AI Course (Units 1–5)</span>
              </div>
              {unitsExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
            </button>

            {/* ── Sub-Menu: Unit 1 to Unit 5 Clickable Items ────────────────── */}
            {unitsExpanded && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingLeft: '16px', marginTop: '2px' }}>
                {UNITS_LIST.map((unit) => {
                  const isUnitActive = activeTab === 'units' && selectedUnitId === unit.id;
                  return (
                    <button
                      key={unit.id}
                      onClick={() => {
                        if (onSelectUnit) onSelectUnit(unit.id);
                        else setActiveTab('units');
                      }}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '7px 10px', borderRadius: 'var(--radius-sm)', border: 'none',
                        background: isUnitActive ? 'var(--primary-teal-light)' : 'transparent',
                        color: isUnitActive ? 'var(--primary-teal-dark)' : 'var(--text-muted)',
                        fontWeight: isUnitActive ? 700 : 500, fontSize: '0.8rem',
                        cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={e => {
                        if (!isUnitActive) {
                          e.currentTarget.style.background = 'var(--bg-card-subtle)';
                          e.currentTarget.style.color = 'var(--primary-teal-dark)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isUnitActive) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = 'var(--text-muted)';
                        }
                      }}
                    >
                      <span>{unit.label}</span>
                      {isUnitActive && (
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-teal)' }} />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* AI Tutor Chat */}
            <button
              onClick={() => setActiveTab('tutor')}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '9px 12px', borderRadius: 'var(--radius-md)', border: 'none',
                background: activeTab === 'tutor' ? 'var(--primary-teal-light)' : 'transparent',
                color: activeTab === 'tutor' ? 'var(--primary-teal-dark)' : 'var(--text-dark)',
                fontWeight: activeTab === 'tutor' ? 700 : 500, fontSize: '0.855rem',
                cursor: 'pointer', textAlign: 'left', transition: 'all 0.18s ease',
                borderLeft: activeTab === 'tutor' ? '3px solid var(--primary-teal)' : '3px solid transparent'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageSquare size={16} color={activeTab === 'tutor' ? 'var(--primary-teal-dark)' : 'currentColor'} />
                <span>AI Tutor Chat</span>
              </div>
            </button>
          </div>
        </div>

        {/* Other Nav Groups */}
        {OTHER_GROUPS.map(group => (
          <div key={group.label}>
            <div style={{
              fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.1em', color: 'var(--text-muted)',
              padding: '0 10px 6px 10px'
            }}>
              {group.label}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {group.items.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '9px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      background: isActive
                        ? 'var(--primary-teal-light)'
                        : 'transparent',
                      color: isActive ? 'var(--primary-teal-dark)' : 'var(--text-dark)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.855rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.18s ease',
                      borderLeft: isActive ? '3px solid var(--primary-teal)' : '3px solid transparent'
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'var(--bg-card-subtle)';
                        e.currentTarget.style.color = 'var(--primary-teal-dark)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--text-dark)';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Icon size={16} color={isActive ? 'var(--primary-teal-dark)' : 'currentColor'} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span style={{
                        fontSize: '0.6rem', fontWeight: 700,
                        padding: '2px 7px', borderRadius: 'var(--radius-full)',
                        background: isActive ? '#ffffff' : 'var(--bg-card-subtle)',
                        color: isActive ? 'var(--primary-teal-dark)' : 'var(--text-muted)',
                        whiteSpace: 'nowrap'
                      }}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer card */}
      <div style={{
        marginTop: '16px', padding: '12px 14px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--primary-teal-light)',
        border: '1px solid rgba(13,148,136,0.2)',
        fontSize: '0.72rem', color: 'var(--primary-teal-dark)'
      }}>
        <strong style={{ color: 'var(--primary-teal-dark)', display: 'block', marginBottom: '2px' }}>
          Course: AI &amp; Applications
        </strong>
        MRU-AI Techspark 2026
      </div>
    </aside>
  );
}
