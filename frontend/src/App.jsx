import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import HeroLanding from './components/HeroLanding';
import UnitsView from './components/UnitsView';
import ConceptDetailView from './components/ConceptDetailView';
import AlgorithmVisualizer from './components/AlgorithmVisualizer';
import InteractivePosters from './components/InteractivePosters';
import PresentationStudio from './components/PresentationStudio';
import ImportantQuestionsView from './components/ImportantQuestionsView';
import QuizStudioView from './components/QuizStudioView';
import ProgressView from './components/ProgressView';
import RoadmapView from './components/RoadmapView';
import RevisionExamView from './components/RevisionExamView';
import AITutorView from './components/AITutorView';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedUnitId, setSelectedUnitId] = useState('unit-1');
  const [selectedTopicId, setSelectedTopicId] = useState('u1-t1');
  const [syllabus, setSyllabus] = useState(null);
  const [backendStatus, setBackendStatus] = useState(null);
  const [tutorQuery, setTutorQuery] = useState('');

  // Fetch Syllabus & Backend Health on Mount
  useEffect(() => {
    fetch('/api/syllabus')
      .then(res => res.json())
      .then(data => setSyllabus(data))
      .catch(err => console.error('Failed to load syllabus:', err));

    fetch('/api/health')
      .then(res => res.json())
      .then(data => setBackendStatus(data))
      .catch(err => setBackendStatus({ status: 'offline', error: err.message }));
  }, []);

  // Handle Unit Selection
  const handleSelectUnit = (unitId) => {
    setSelectedUnitId(unitId);
    setActiveTab('units');
  };

  // Handle Concept Deep Dive Selection
  const handleSelectConcept = (unitId, topicId) => {
    setSelectedUnitId(unitId);
    setSelectedTopicId(topicId);
    setActiveTab('concept_detail');
  };

  // Intent parsing from Top Search Bar
  const handleSearchCommand = (query) => {
    const qLower = query.toLowerCase();

    if (qLower.includes('quiz') || qLower.includes('test')) {
      setActiveTab('quiz');
    } else if (qLower.includes('ppt') || qLower.includes('presentation') || qLower.includes('slide')) {
      setActiveTab('presentation');
    } else if (qLower.includes('important') || qLower.includes('question') || qLower.includes('exam')) {
      setActiveTab('important');
    } else if (qLower.includes('visual') || qLower.includes('a*') || qLower.includes('path')) {
      setActiveTab('visualize');
    } else if (qLower.includes('poster')) {
      setActiveTab('posters');
    } else if (qLower.includes('unit')) {
      setActiveTab('units');
    } else if (qLower.includes('home')) {
      setActiveTab('home');
    } else {
      setTutorQuery(query);
      setActiveTab('tutor');
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-app)' }}>
      {/* Left Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedUnitId={selectedUnitId}
        onSelectUnit={handleSelectUnit}
      />

      {/* Main Column */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Header */}
        <TopNav onSearchCommand={handleSearchCommand} backendStatus={backendStatus} />

        {/* Content Container */}
        <main style={{
          flex: 1,
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: '32px 28px'
        }}>
          {activeTab === 'home' && (
            <HeroLanding onExplore={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'units' && (
            <UnitsView
              syllabus={syllabus}
              onSelectConcept={handleSelectConcept}
              selectedUnitId={selectedUnitId}
              onNavigate={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'concept_detail' && (
            <ConceptDetailView
              unitId={selectedUnitId}
              topicId={selectedTopicId}
              syllabus={syllabus}
              onNavigate={(tab) => setActiveTab(tab)}
              onBack={() => setActiveTab('units')}
            />
          )}

          {activeTab === 'tutor' && (
            <AITutorView initialPrompt={tutorQuery} />
          )}

          {activeTab === 'visualize' && (
            <AlgorithmVisualizer />
          )}

          {activeTab === 'posters' && (
            <InteractivePosters />
          )}

          {activeTab === 'presentation' && (
            <PresentationStudio />
          )}

          {activeTab === 'important' && (
            <ImportantQuestionsView />
          )}

          {activeTab === 'quiz' && (
            <QuizStudioView onNavigate={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'progress' && (
            <ProgressView onNavigate={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'roadmap' && (
            <RoadmapView />
          )}

          {activeTab === 'revision' && (
            <RevisionExamView mode="revision" />
          )}

          {activeTab === 'exam' && (
            <RevisionExamView mode="exam" />
          )}
        </main>
      </div>
    </div>
  );
}
