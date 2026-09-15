import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight, Play, CheckCircle2, ArrowRight } from 'lucide-react';

export default function UnitsView({ syllabus, onSelectConcept, selectedUnitId }) {
  const units = syllabus?.units || [];
  const [expandedUnits, setExpandedUnits] = useState({
    [selectedUnitId || 'unit-1']: true
  });

  const toggleExpand = (unitId) => {
    setExpandedUnits(prev => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-indigo)', letterSpacing: '0.05em', marginBottom: '4px' }}>
          Official Academic Course Syllabus
        </div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)' }}>
          Artificial Intelligence and Its Applications (5 Units)
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '4px' }}>
          Select any unit or specific learning concept below to unlock explanations, interactive visualizers, PPTs, practice questions, and quizzes.
        </p>
      </div>

      {/* Units List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {units.map((unit) => {
          const isExpanded = expandedUnits[unit.id];

          return (
            <div key={unit.id} className="edtech-card" style={{ overflow: 'hidden' }}>
              {/* Unit Header Bar */}
              <div
                onClick={() => toggleExpand(unit.id)}
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  backgroundColor: isExpanded ? 'var(--bg-card-subtle)' : '#ffffff',
                  borderBottom: isExpanded ? '1px solid var(--border-color)' : 'none',
                  transition: 'background-color 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--primary-indigo-light)',
                    color: 'var(--primary-indigo)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.1rem'
                  }}>
                    U{unit.number}
                  </div>

                  <div>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                      {unit.title}
                    </h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {unit.shortDesc}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#e2e8f0',
                    color: 'var(--text-dark)'
                  }}>
                    {unit.conceptCount} Concepts
                  </span>
                  {isExpanded ? <ChevronDown size={20} color="var(--text-muted)" /> : <ChevronRight size={20} color="var(--text-muted)" />}
                </div>
              </div>

              {/* Expandable Concept List */}
              {isExpanded && (
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: '#ffffff' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    Unit Concepts ({unit.topics.length})
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
                    {unit.topics.map((topic, idx) => (
                      <div
                        key={topic.id}
                        onClick={() => onSelectConcept(unit.id, topic.id)}
                        className="edtech-card edtech-card-interactive"
                        style={{
                          padding: '16px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          backgroundColor: '#f8fafc',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        <div style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary-indigo-light)',
                          color: 'var(--primary-indigo)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          flexShrink: 0
                        }}>
                          {idx + 1}
                        </div>

                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '4px' }}>
                            {topic.name}
                          </h3>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                            {topic.desc}
                          </p>
                        </div>

                        <ArrowRight size={16} color="var(--primary-indigo)" style={{ alignSelf: 'center', flexShrink: 0 }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
