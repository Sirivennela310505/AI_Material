import React from 'react';
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
  ChevronRight
} from 'lucide-react';

const NAV_GROUPS = [
  {
    label: 'Platform',
    items: [
      { id: 'home',   label: 'Home',           icon: Home,         badge: null },
      { id: 'units',  label: 'AI Course (5 Units)', icon: BookOpen, badge: 'Course' },
      { id: 'tutor',  label: 'AI Tutor Chat',  icon: MessageSquare, badge: null },
    ]
  },
  {
    label: 'Learning Tools',
    items: [
      { id: 'visualize',    label: 'Visualizations',   icon: Eye,          badge: null },
      { id: 'posters',      label: 'Unit Posters',     icon: FileImage,    badge: '5 Posters' },
      { id: 'presentation', label: 'PPT Generator',    icon: Presentation, badge: null },
      { id: 'important',    label: 'Top Questions',    icon: BookMarked,   badge: '50 Q' },
      { id: 'quiz',         label: 'Quiz Studio',      icon: HelpCircle,   badge: '10–15/Unit' },
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

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside style={{
      width: '260px',
      backgroundColor: 'var(--bg-sidebar)',
      color: 'var(--text-white)',
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
        marginBottom: '20px'
      }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '12px',
          background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(20,184,166,0.4)'
        }}>
          <Sparkles size={20} color="#fff" />
        </div>
        <div>
          <h1 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: '#fff', letterSpacing: '-0.01em' }}>
            EduAgent<span style={{ color: 'var(--primary-teal)' }}> AI</span>
          </h1>
          <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', margin: 0 }}>
            AI Learning Companion
          </p>
        </div>
      </div>

      {/* Nav Groups */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {NAV_GROUPS.map(group => (
          <div key={group.label}>
            <div style={{
              fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.1em', color: 'var(--text-muted)',
              padding: '0 10px 8px 10px'
            }}>
              {group.label}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
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
                        ? 'linear-gradient(135deg, rgba(20,184,166,0.2) 0%, rgba(20,184,166,0.08) 100%)'
                        : 'transparent',
                      color: isActive ? 'var(--primary-teal)' : 'var(--text-muted)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.855rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.18s ease',
                      borderLeft: isActive ? '2px solid var(--primary-teal)' : '2px solid transparent'
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                        e.currentTarget.style.color = 'var(--text-light)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--text-muted)';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Icon size={16} color={isActive ? 'var(--primary-teal)' : 'currentColor'} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span style={{
                        fontSize: '0.6rem', fontWeight: 700,
                        padding: '2px 7px', borderRadius: 'var(--radius-full)',
                        background: isActive ? 'var(--primary-teal-light)' : 'rgba(255,255,255,0.07)',
                        color: isActive ? 'var(--primary-teal)' : 'var(--text-muted)',
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
        background: 'rgba(20,184,166,0.06)',
        border: '1px solid rgba(20,184,166,0.15)',
        fontSize: '0.72rem', color: 'var(--text-muted)'
      }}>
        <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '2px' }}>
          Course: AI &amp; Applications
        </strong>
        MRU-AI Techspark 2026
      </div>
    </aside>
  );
}
