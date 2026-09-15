import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, Compass, BookOpen, Target, Code, Loader2 } from 'lucide-react';

export default function AITutorView({ initialPrompt = '' }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello! I am your **EduAgent AI Tutor**. I am specialized in **Artificial Intelligence and Its Applications**. What concept or doubt can I help you master today?',
      persona: 'socratic',
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState(initialPrompt);
  const [persona, setPersona] = useState('socratic');
  const [loading, setLoading] = useState(false);

  const personas = [
    { id: 'socratic', name: 'Socratic Guide', icon: Compass, desc: 'Asks guiding questions to trigger critical thinking' },
    { id: 'explainer', name: 'Concept Simplifier', icon: BookOpen, desc: 'Breaks down complex topics into analogies & key steps' },
    { id: 'exam_coach', name: 'Exam Coach', icon: Target, desc: 'Focuses on high-yield exam points, formulas, & traps' },
    { id: 'coding_mentor', name: 'Code & Algo Mentor', icon: Code, desc: 'Provides clean snippets, algorithms, & syntax traces' },
  ];

  const suggestedPrompts = [
    "Explain A* Search Algorithm using a GPS navigation analogy",
    "What is the difference between BFS and DFS in time/space complexity?",
    "Give me 3 PEAS framework examples for autonomous systems",
    "How does Alpha-Beta pruning reduce game tree search space?"
  ];

  const handleSend = async (textToSend = input) => {
    const query = textToSend.trim();
    if (!query || loading) return;

    const userMsg = { sender: 'user', text: query, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, persona, history: messages })
      });
      const data = await res.json();

      const aiMsg = {
        sender: 'ai',
        text: data.response || 'Sorry, I could not generate a response.',
        persona: data.persona || persona,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: '⚠️ Network connection issue. Please check backend server status.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '20px', minHeight: '620px' }}>
      {/* Sidebar */}
      <div className="edtech-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h3 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '12px' }}>
            Tutor Persona
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {personas.map(p => {
              const Icon = p.icon;
              const isSelected = persona === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setPersona(p.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    border: isSelected ? '1px solid var(--primary-indigo)' : '1px solid var(--border-color)',
                    backgroundColor: isSelected ? 'var(--primary-indigo-light)' : '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: isSelected ? 'var(--primary-indigo)' : 'var(--text-dark)', fontWeight: 700, fontSize: '0.875rem' }}>
                    <Icon size={16} />
                    <span>{p.name}</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {p.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Prompt Starters */}
        <div style={{ marginTop: 'auto' }}>
          <h4 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} color="var(--accent-amber)" /> Suggested Starters
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                style={{
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: '#f8fafc',
                  color: 'var(--text-dark)',
                  fontSize: '0.75rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary-indigo)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                "{prompt}"
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Stage */}
      <div className="edtech-card" style={{ display: 'flex', flexDirection: 'column', height: '620px', padding: '20px' }}>
        {/* Messages Feed */}
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '8px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '12px',
                flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: msg.sender === 'user' ? 'var(--primary-indigo)' : 'var(--primary-blue)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {msg.sender === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>

              <div style={{
                maxWidth: '75%',
                padding: '14px 18px',
                borderRadius: '16px',
                backgroundColor: msg.sender === 'user' ? 'var(--primary-indigo-light)' : '#f8fafc',
                border: msg.sender === 'user' ? '1px solid #c7d2fe' : '1px solid var(--border-color)',
                color: 'var(--text-dark)',
                whiteSpace: 'pre-wrap',
                fontSize: '0.9rem',
                lineHeight: 1.6
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  <strong>{msg.sender === 'user' ? 'You' : `EduAgent (${msg.persona || persona})`}</strong>
                  <span>{msg.time}</span>
                </div>
                <div>{msg.text}</div>
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <Loader2 className="animate-spin" size={16} color="var(--primary-indigo)" />
              <span>EduAgent is synthesizing response...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          style={{
            marginTop: '16px',
            display: 'flex',
            gap: '10px',
            backgroundColor: '#f8fafc',
            padding: '8px 12px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)'
          }}
        >
          <input
            type="text"
            placeholder={`Ask EduAgent in ${persona} mode...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-dark)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem'
            }}
          />
          <button type="submit" disabled={!input.trim() || loading} className="btn-primary">
            <Send size={16} />
            <span>Ask</span>
          </button>
        </form>
      </div>
    </div>
  );
}
