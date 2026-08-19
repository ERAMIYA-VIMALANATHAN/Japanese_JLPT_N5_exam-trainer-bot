import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { handleGoogleRedirect } from './lib/googleAuth';
import { Header } from './components/Header';
import { LanguageSelectorModal } from './components/LanguageSelectorModal';
import { AssessmentQuiz } from './components/AssessmentQuiz';
import { RoadmapView } from './components/RoadmapView';
import { KanaKanjiMastery } from './components/KanaKanjiMastery';
import { VocabGrammarTrainer } from './components/VocabGrammarTrainer';
import { ReadingCoach } from './components/ReadingCoach';
import { ListeningCoach } from './components/ListeningCoach';
import { SpeakingPartner } from './components/SpeakingPartner';
import { MockTestExaminer } from './components/MockTestExaminer';
import { ProgressDashboard } from './components/ProgressDashboard';

handleGoogleRedirect();

function MainApp() {
  const [activeTab, setActiveTab] = useState<string>('roadmap');
  const [assessmentDone, setAssessmentDone] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(3);
  const { setShowLangSelector } = useLanguage();

  useEffect(() => {
    // Show prompt on initial load
    setShowLangSelector(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} streak={streak} />
      <LanguageSelectorModal />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        {!assessmentDone ? (
          <AssessmentQuiz onComplete={() => setAssessmentDone(true)} />
        ) : (
          <>
            {activeTab === 'roadmap' && <RoadmapView onStartLesson={(domain) => setActiveTab(domain)} />}
            {activeTab === 'kana' && <KanaKanjiMastery />}
            {activeTab === 'vocab' && <VocabGrammarTrainer />}
            {activeTab === 'reading' && <ReadingCoach />}
            {activeTab === 'listening' && <ListeningCoach />}
            {activeTab === 'speaking' && <SpeakingPartner />}
            {activeTab === 'mocktest' && <MockTestExaminer />}
            {activeTab === 'progress' && <ProgressDashboard />}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>JLPT N5 Sensei Master Trainer • Japanese Character Mastery Platform</div>
          <div className="flex space-x-3 text-slate-400">
            <span>Direct Japanese Reading</span> •
            <span>Speech Audio Synthesizer</span> •
            <span>Tamil & English Dual Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </AuthProvider>
  );
}
