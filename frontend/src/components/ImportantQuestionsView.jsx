import React, { useState, useEffect } from 'react';
import {
  BookMarked,
  Eye,
  EyeOff,
  Sparkles,
  Award,
  Lightbulb,
  HelpCircle,
  CheckCircle2,
  Download,
  Printer,
  ChevronDown,
  ChevronUp,
  Layers,
  Cpu,
  Zap,
  RefreshCw,
  GitBranch,
  Search,
  Activity,
  Compass,
  Clock,
  Target,
  FileText,
  Sliders,
  Scissors
} from 'lucide-react';
import { ENHANCED_EXAM_QUESTIONS } from '../data/enhancedQuestionsData';

export default function ImportantQuestionsView() {
  const [selectedUnit, setSelectedUnit] = useState('all'); // all, unit-1, unit-2, unit-3, unit-4, unit-5
  const [questions, setQuestions] = useState([]);
  const [revealed, setRevealed] = useState({});

  useEffect(() => {
    fetchQuestions();
  }, [selectedUnit]);

  const fetchQuestions = async () => {
    try {
      const url = selectedUnit !== 'all' ? `/api/important-questions?unitId=${selectedUnit}` : '/api/important-questions';
      const res = await fetch(url);
      const data = await res.json();
      const rawQuestions = data.questions || [];

      // Enrich with comprehensive 8-12 marks data, images, and flowcharts
      const enriched = rawQuestions.map(q => {
        const enhancedMatch = ENHANCED_EXAM_QUESTIONS.find(eq => eq.id === q.id);
        if (enhancedMatch) {
          return {
            ...q,
            ...enhancedMatch,
            marks: Math.max(q.marks || 0, enhancedMatch.marks || 10)
          };
        }

        // Automatic rich 8-12 marks structure for any question
        return {
          ...q,
          marks: q.marks === 2 ? 8 : q.marks === 5 ? 10 : 12,
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
          imageCaption: `Fig: Conceptual architecture and state transitions for ${q.topic}`,
          rubric: 'Definition & Principles: 3M | Architectural Diagram & Flow: 3M | Algorithmic Steps: 3M | Analysis & Use Case: 3M = Total 12 Marks',
          flowchart: [
            { step: '1. Problem Formulation', desc: `Formulate formal states and inputs for ${q.topic}`, icon: 'Layers' },
            { step: '2. Reasoning / Search', desc: 'Execute sound algorithmic inference and evaluation', icon: 'Cpu' },
            { step: '3. State Transition', desc: 'Update internal belief state and verify goal criteria', icon: 'Zap' },
            { step: '4. Optimal Execution', desc: 'Select action that maximizes expected utility performance', icon: 'CheckCircle2' }
          ],
          structuredAnswer: {
            definition: q.shortAnswer + '\n\n' + q.detailedAnswer,
            criticalAnalysis: `Exam Focus: When answering in 8-12 marks university exams, always start with formal mathematical definitions, illustrate with an architectural flowchart, and provide a concrete worked trace.`
          }
        };
      });

      setQuestions(enriched);
    } catch (err) {
      console.error('Failed to load questions:', err);
      // Fallback to enhanced questions directly
      const filtered = selectedUnit !== 'all'
        ? ENHANCED_EXAM_QUESTIONS.filter(q => q.unitId === selectedUnit)
        : ENHANCED_EXAM_QUESTIONS;
      setQuestions(filtered);
    }
  };

  const toggleReveal = (id) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleRevealAll = () => {
    const allIds = {};
    questions.forEach(q => { allIds[q.id] = true; });
    setRevealed(allIds);
  };

  const handleHideAll = () => {
    setRevealed({});
  };

  const handlePrintQuestion = () => {
    window.print();
  };

  // Download entire 50-question model answer booklet as printable HTML / text
  const handleDownloadQuestionBank = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Artificial Intelligence — Top 50 Important Exam Questions & Model Answers</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; padding: 40px; max-width: 900px; margin: auto; }
  h1 { color: #1e1b4b; border-bottom: 3px solid #4f46e5; padding-bottom: 10px; }
  h2 { color: #4f46e5; margin-top: 30px; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px; }
  .q-card { margin-bottom: 32px; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; page-break-inside: avoid; }
  .badge { background: #e0e7ff; color: #3730a3; padding: 3px 10px; border-radius: 12px; font-weight: bold; font-size: 0.8rem; }
  .rubric { background: #f8fafc; border-left: 4px solid #4f46e5; padding: 8px 14px; margin: 12px 0; font-size: 0.85rem; }
  .ascii-box { background: #0f172a; color: #38bdf8; padding: 14px; border-radius: 6px; font-family: monospace; font-size: 0.78rem; overflow-x: auto; white-space: pre; }
  .tip { background: #fef3c7; color: #92400e; padding: 8px 12px; border-radius: 6px; margin-top: 10px; font-size: 0.85rem; font-weight: 600; }
  @media print { body { padding: 15px; } .q-card { page-break-inside: avoid; } }
</style>
</head>
<body>
<h1>Artificial Intelligence and Its Applications</h1>
<p><strong>University Examination High-Yield Model Answer Booklet (8-12 Marks Standard)</strong></p>
<p>Complete 5 Units • Top 50 Questions • Aligned with Official University Syllabus</p>
<hr/>
${questions.map((q, idx) => `
<div class="q-card">
  <div>
    <span class="badge">${q.marks} MARKS COMPREHENSIVE ANSWER</span>
    <span style="font-size: 0.85rem; color: #64748b; margin-left: 10px;">Topic: <strong>${q.topic}</strong></span>
  </div>
  <h3 style="margin: 12px 0; color: #0f172a;">Q${idx + 1}. ${q.question}</h3>
  <div class="rubric"><strong>Examiner Scoring Rubric:</strong> ${q.rubric || 'Definition: 2M | Diagram/Flowchart: 3M | Formulation: 3M | Worked Trace: 4M'}</div>
  
  <p><strong>Key 1-Sentence Summary:</strong> ${q.shortAnswer || ''}</p>

  ${q.diagramAscii ? `<div class="ascii-box">${q.diagramAscii}</div>` : ''}

  <div style="margin-top: 14px;">
    <strong>Comprehensive Model Answer Breakdown:</strong>
    <p>${q.detailedAnswer ? q.detailedAnswer.replace(/\n/g, '<br/>') : ''}</p>
    ${q.structuredAnswer ? `
      ${q.structuredAnswer.definition ? `<h4>1. Theoretical Foundations & Definitions</h4><p>${q.structuredAnswer.definition.replace(/\n/g, '<br/>')}</p>` : ''}
      ${q.structuredAnswer.proofOfOptimality ? `<h4>2. Mathematical Proof / Derivation</h4><p>${q.structuredAnswer.proofOfOptimality.replace(/\n/g, '<br/>')}</p>` : ''}
      ${q.structuredAnswer.caseStudies ? `<h4>3. Real-World Case Studies & PEAS</h4><p>${q.structuredAnswer.caseStudies.replace(/\n/g, '<br/>')}</p>` : ''}
      ${q.structuredAnswer.workedExample ? `<h4>4. Step-by-Step Worked Trace</h4><p>${q.structuredAnswer.workedExample.replace(/\n/g, '<br/>')}</p>` : ''}
      ${q.structuredAnswer.criticalAnalysis ? `<h4>5. Critical Analysis & Examiner Scoring Tips</h4><p>${q.structuredAnswer.criticalAnalysis.replace(/\n/g, '<br/>')}</p>` : ''}
    ` : ''}
  </div>

  ${q.memoryTip ? `<div class="tip">${q.memoryTip}</div>` : ''}
</div>
`).join('\n')}
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI_Top_Important_Questions_8_12_Marks_Model_Answers_${selectedUnit}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const unitTabs = [
    { id: 'all', label: 'All 5 Units (50 Questions)' },
    { id: 'unit-1', label: 'Unit I (10 Questions)' },
    { id: 'unit-2', label: 'Unit II (10 Questions)' },
    { id: 'unit-3', label: 'Unit III (10 Questions)' },
    { id: 'unit-4', label: 'Unit IV (10 Questions)' },
    { id: 'unit-5', label: 'Unit V (10 Questions)' },
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: 60 }}>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-indigo)', letterSpacing: '0.08em', background: 'var(--primary-indigo-light)', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
              University Exam High-Yield Bank
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              8-12 Marks Comprehensive Answers • Graphs & Flowcharts
            </span>
          </div>
          <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0, letterSpacing: '-0.02em' }}>
            Top 10 Important Exam Questions per Unit (50 Total)
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: 6, maxWidth: 840 }}>
            Strictly aligned with the university syllabus. Each answer is formatted for <strong>8-12 marks scoring</strong>, complete with visual flowcharts, concept images, mathematical proofs, worked traces, and examiner rubrics.
          </p>
        </div>

        {/* Global Action Buttons */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            onClick={handleRevealAll}
            className="btn-secondary"
            style={{ fontSize: '0.82rem', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <Eye size={15} /> Reveal All Answers
          </button>
          <button
            onClick={handleHideAll}
            className="btn-secondary"
            style={{ fontSize: '0.82rem', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <EyeOff size={15} /> Collapse All
          </button>
          <button
            onClick={handleDownloadQuestionBank}
            className="btn-primary"
            style={{ fontSize: '0.82rem', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <Download size={15} /> Download Q&A Booklet (.html/PDF)
          </button>
          <button
            onClick={handlePrintQuestion}
            className="btn-secondary"
            style={{ fontSize: '0.82rem', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <Printer size={15} /> Print
          </button>
        </div>
      </div>

      {/* ── Filter Tabs ────────────────────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        backgroundColor: '#ffffff',
        padding: '10px 14px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {unitTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedUnit(tab.id)}
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--radius-md)',
              border: selectedUnit === tab.id ? '2px solid var(--primary-indigo)' : '1px solid var(--border-color)',
              backgroundColor: selectedUnit === tab.id ? 'var(--primary-indigo-light)' : '#ffffff',
              color: selectedUnit === tab.id ? 'var(--primary-indigo)' : 'var(--text-dark)',
              fontWeight: selectedUnit === tab.id ? 800 : 500,
              fontSize: '0.85rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Question Cards List ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {questions.map((q, idx) => {
          const isRevealed = revealed[q.id];

          return (
            <div
              key={q.id}
              className="edtech-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                border: isRevealed ? '2px solid #c7d2fe' : '1px solid var(--border-color)',
                boxShadow: isRevealed ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Question Header Metadata */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '3px 12px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--accent-rose-light)',
                    color: 'var(--accent-rose)',
                    border: '1px solid #fecdd3'
                  }}>
                    {q.marks || 12}-MARK UNIVERSITY COMPREHENSIVE ANSWER
                  </span>

                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Topic: <strong>{q.topic}</strong>
                  </span>
                </div>

                <span style={{ fontSize: '0.75rem', color: '#b45309', backgroundColor: '#fef3c7', padding: '3px 10px', borderRadius: 'var(--radius-sm)', fontWeight: 700 }}>
                  🔥 {q.whyImportant || 'High-Yield 8-12 Marks University Question'}
                </span>
              </div>

              {/* Question Prompt */}
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1.5, margin: 0 }}>
                <span style={{ color: 'var(--primary-indigo)', marginRight: '6px' }}>Q{idx + 1}.</span> {q.question}
              </h3>

              {/* Reveal Toggle Button Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                <button
                  onClick={() => toggleReveal(q.id)}
                  className="btn-primary"
                  style={{ fontSize: '0.85rem', padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
                  <span>{isRevealed ? 'Hide 8-12 Mark Model Answer' : 'Reveal Complete 8-12 Mark Model Answer & Flowcharts'}</span>
                </button>

                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Includes: Conceptual Images, Flowcharts, Proofs & Worked Examples
                </span>
              </div>

              {/* ═══════════════════════════════════════════════════════════════ */}
              {/* REVEALED 8-12 MARK UNIVERSITY MODEL ANSWER                     */}
              {/* ═══════════════════════════════════════════════════════════════ */}
              {isRevealed && (
                <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px', borderTop: '2px solid var(--primary-indigo-light)', paddingTop: '20px' }}>
                  {/* 1. Scoring Rubric Banner */}
                  <div style={{
                    backgroundColor: '#eff6ff',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #bfdbfe',
                    fontSize: '0.85rem',
                    color: '#1e40af',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                  }}>
                    <Award size={20} color="#2563eb" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Official University Examiner Scoring Rubric ({q.marks || 12} Marks):</strong>
                      <div style={{ color: '#1d4ed8', marginTop: 2 }}>{q.rubric || 'Definition: 2M | Architecture Diagram / Flowchart: 3M | Step-by-Step Algorithm: 4M | Trace & Example: 3M'}</div>
                    </div>
                  </div>

                  {/* 2. Visual Media & Flowchart Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 320px) 1fr', gap: 20 }}>
                    {/* Concept Image with Framing */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <div style={{
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        border: '1px solid var(--border-color)',
                        backgroundColor: '#0f172a',
                        boxShadow: 'var(--shadow-sm)'
                      }}>
                        <img
                          src={q.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80'}
                          alt={q.topic}
                          style={{ width: '100%', height: 190, objectFit: 'cover', display: 'block' }}
                        />
                        <div style={{
                          padding: '8px 12px',
                          fontSize: '0.75rem',
                          color: '#cbd5e1',
                          backgroundColor: '#1e293b',
                          fontStyle: 'italic',
                          lineHeight: 1.4
                        }}>
                          {q.imageCaption || `Fig: Concept visualization for ${q.topic}`}
                        </div>
                      </div>

                      {/* Key 1-Sentence Definition */}
                      <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: '4px solid var(--primary-indigo)',
                        fontSize: '0.85rem',
                        color: 'var(--text-dark)'
                      }}>
                        <strong style={{ color: 'var(--primary-indigo)', display: 'block', marginBottom: 4 }}>
                          Key Summary Definition:
                        </strong>
                        {q.shortAnswer}
                      </div>
                    </div>

                    {/* Interactive Visual Flowchart / Diagram Nodes */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-indigo)', letterSpacing: '0.04em' }}>
                        Visual Flowchart & Architectural Pipeline:
                      </div>

                      {q.flowchart && q.flowchart.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {q.flowchart.map((fc, fcIdx) => (
                            <div
                              key={fcIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                backgroundColor: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: 'var(--radius-md)',
                                padding: '10px 14px',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                              }}
                            >
                              <div style={{
                                width: 28,
                                height: 28,
                                borderRadius: '50%',
                                backgroundColor: 'var(--primary-indigo)',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 800,
                                fontSize: '0.78rem',
                                flexShrink: 0
                              }}>
                                {fcIdx + 1}
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.88rem' }}>
                                  {fc.step}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 2 }}>
                                  {fc.desc}
                                </div>
                              </div>
                              {fcIdx < q.flowchart.length - 1 && (
                                <span style={{ color: 'var(--primary-indigo)', fontWeight: 900 }}>↓</span>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {/* ASCII Architectural Diagram if available */}
                      {q.diagramAscii && (
                        <div style={{
                          backgroundColor: '#0f172a',
                          color: '#38bdf8',
                          padding: '12px 16px',
                          borderRadius: 'var(--radius-md)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          lineHeight: 1.5,
                          overflowX: 'auto',
                          whiteSpace: 'pre',
                          marginTop: 4
                        }}>
                          {q.diagramAscii}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3. Detailed University Model Answer (8-12 Marks Breakdown) */}
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    padding: '20px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                  }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-dark)', borderBottom: '2px solid var(--primary-indigo)', paddingBottom: 8 }}>
                      Detailed 8-12 Mark University Model Answer:
                    </div>

                    {/* Render structured answer sections if available */}
                    {q.structuredAnswer ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
                        {q.structuredAnswer.definition && (
                          <div>
                            <strong style={{ color: 'var(--primary-indigo)', fontSize: '0.95rem', display: 'block', marginBottom: 4 }}>
                              1. Theoretical Principles & Formal Definitions:
                            </strong>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{q.structuredAnswer.definition}</div>
                          </div>
                        )}

                        {q.structuredAnswer.peasBreakdown && (
                          <div style={{ backgroundColor: '#f8fafc', padding: 14, borderRadius: 8, border: '1px solid #e2e8f0' }}>
                            <strong style={{ color: 'var(--primary-indigo)', display: 'block', marginBottom: 4 }}>
                              2. PEAS Framework Specification:
                            </strong>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{q.structuredAnswer.peasBreakdown}</div>
                          </div>
                        )}

                        {q.structuredAnswer.caseStudies && (
                          <div>
                            <strong style={{ color: 'var(--primary-indigo)', fontSize: '0.95rem', display: 'block', marginBottom: 4 }}>
                              3. Real-World Case Studies & Architectural Mapping:
                            </strong>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{q.structuredAnswer.caseStudies}</div>
                          </div>
                        )}

                        {q.structuredAnswer.proofOfOptimality && (
                          <div style={{ backgroundColor: '#f0fdf4', padding: 14, borderRadius: 8, border: '1px solid #bbf7d0' }}>
                            <strong style={{ color: '#047857', fontSize: '0.95rem', display: 'block', marginBottom: 4 }}>
                              Mathematical Proof of Optimality (By Contradiction):
                            </strong>
                            <div style={{ whiteSpace: 'pre-wrap', color: '#065f46' }}>{q.structuredAnswer.proofOfOptimality}</div>
                          </div>
                        )}

                        {q.structuredAnswer.workedExample && (
                          <div style={{ backgroundColor: '#f8fafc', padding: 14, borderRadius: 8, border: '1px solid #e2e8f0' }}>
                            <strong style={{ color: 'var(--primary-indigo)', fontSize: '0.95rem', display: 'block', marginBottom: 4 }}>
                              Worked Execution Trace & State Transitions:
                            </strong>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{q.structuredAnswer.workedExample}</div>
                          </div>
                        )}

                        {q.structuredAnswer.translations && (
                          <div>
                            <strong style={{ color: 'var(--primary-indigo)', fontSize: '0.95rem', display: 'block', marginBottom: 4 }}>
                              Sentence Translations into First-Order Logic (FOL):
                            </strong>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{q.structuredAnswer.translations}</div>
                          </div>
                        )}

                        {q.structuredAnswer.attentionMechanism && (
                          <div style={{ backgroundColor: '#f8fafc', padding: 14, borderRadius: 8, border: '1px solid #e2e8f0' }}>
                            <strong style={{ color: 'var(--primary-indigo)', fontSize: '0.95rem', display: 'block', marginBottom: 4 }}>
                              Mathematical Derivation of Scaled Dot-Product Attention:
                            </strong>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{q.structuredAnswer.attentionMechanism}</div>
                          </div>
                        )}

                        {q.structuredAnswer.criticalAnalysis && (
                          <div>
                            <strong style={{ color: '#b45309', fontSize: '0.95rem', display: 'block', marginBottom: 4 }}>
                              Critical Analysis & Common Examiner Traps:
                            </strong>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{q.structuredAnswer.criticalAnalysis}</div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                        {q.detailedAnswer}
                      </div>
                    )}
                  </div>

                  {/* 4. Memory Tip & Viva Mnemonic */}
                  {q.memoryTip && (
                    <div style={{
                      backgroundColor: 'var(--accent-amber-light)',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.88rem',
                      color: '#92400e',
                      border: '1px solid #fde68a',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    }}>
                      <Lightbulb size={20} color="#d97706" style={{ flexShrink: 0 }} />
                      <div>{q.memoryTip}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
