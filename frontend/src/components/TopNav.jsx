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
      backgroundColor: '#ffffff',
      borderBottom: '1px solid var(--border-color)',
      padding: '12px 28px',
      position: 'sticky',
      top: 0,
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Search / AI Command Bar */}
      <form onSubmit={handleSubmit} style={{ flex: 1, maxWidth: '620px', position: 'relative' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          backgroundColor: focused ? '#ffffff' : 'var(--bg-card-subtle)',
          border: `1px solid ${focused ? 'var(--primary-teal)' : 'var(--border-color)'}`,
          borderRadius: 'var(--radius-md)',
          padding: '4px 4px 4px 14px',
          transition: 'all 0.2s ease',
          boxShadow: focused ? '0 0 0 3px rgba(13,148,136,0.12)' : 'none'
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
          border: '1px solid rgba(13,148,136,0.25)',
          padding: '6px 14px', borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-teal-dark)'
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
            background: 'linear-gradient(135deg, #0d9488 0%, #2563eb 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: '0.85rem'
          }}>
            <User size={18} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)' }}>Student User</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>AI &amp; Applications</span>
          </div>
        </div>
      </div>
    </header>
  );
}
