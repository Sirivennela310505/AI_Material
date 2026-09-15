import React, { useState } from 'react';
import { Search, Sparkles, Cpu, User, ArrowRight } from 'lucide-react';

export default function TopNav({ onSearchCommand, backendStatus }) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearchCommand(query.trim());
      setQuery('');
    }
  };

  return (
    <header style={{
      backgroundColor: 'rgba(15,23,41,0.95)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '12px 28px',
      position: 'sticky',
      top: 0,
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.4)'
    }}>
      {/* Search / AI Command Bar */}
      <form onSubmit={handleSubmit} style={{ flex: 1, maxWidth: '620px', position: 'relative' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          backgroundColor: focused ? 'var(--bg-card)' : 'var(--bg-card-subtle)',
          border: `1px solid ${focused ? 'var(--primary-teal)' : 'var(--border-color)'}`,
          borderRadius: 'var(--radius-md)',
          padding: '4px 4px 4px 14px',
          transition: 'all 0.2s ease',
          boxShadow: focused ? '0 0 0 3px rgba(20,184,166,0.12)' : 'none'
        }}>
          <Sparkles size={16} color="var(--primary-teal)" style={{ marginRight: '10px', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Ask anything… 'Quiz on Unit 3', 'PPT for PEAS', 'Explain A*'…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              width: '100%', border: 'none', outline: 'none',
              backgroundColor: 'transparent',
              fontSize: '0.875rem', color: 'var(--text-dark)',
              fontFamily: 'var(--font-sans)',
              boxShadow: 'none', borderRadius: 0, padding: '6px 0'
            }}
          />
          <button
            type="submit"
            disabled={!query.trim()}
            style={{
              background: query.trim()
                ? 'linear-gradient(135deg, var(--primary-teal) 0%, var(--primary-teal-dark) 100%)'
                : 'var(--border-color)',
              color: 'white', border: 'none',
              borderRadius: '8px',
              padding: '7px 14px',
              fontSize: '0.78rem', fontWeight: 700,
              cursor: query.trim() ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', gap: '5px',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
          >
            Ask <ArrowRight size={12} />
          </button>
        </div>
      </form>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Engine badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '7px',
          backgroundColor: 'var(--primary-teal-light)',
          border: '1px solid rgba(20,184,166,0.25)',
          padding: '6px 14px', borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-teal)'
        }}>
          <Cpu size={13} />
          <span>Engine: <strong>{backendStatus?.hasApiKey ? 'Gemini Active' : 'AI Core'}</strong></span>
        </div>

        {/* Avatar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          paddingLeft: '12px', borderLeft: '1px solid var(--border-color)'
        }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--primary-teal) 0%, var(--primary-indigo) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <User size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, lineHeight: 1.2, color: 'var(--text-dark)' }}>IT Student</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>AI Learner</div>
          </div>
        </div>
      </div>
    </header>
  );
}
