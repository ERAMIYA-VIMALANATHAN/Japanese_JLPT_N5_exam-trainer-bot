import React from 'react';
import { useLanguage, ExplanationLang, RomajiMode } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { signInWithGoogle } from '../lib/googleAuth';
import { Languages, Flame, BookOpen, Award, UserCheck, Eye, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  streak: number;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, streak }) => {
  const { lang, setLang, romajiMode, setRomajiMode, setShowLangSelector } = useLanguage();
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-rose-900/40 text-white px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('roadmap')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-700 flex items-center justify-center font-bold text-xl shadow-md border border-rose-300/30">
            日
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-lg tracking-wide text-rose-100">Sensei N5</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-mono">
                JLPT Master
              </span>
            </div>
            <p className="text-xs text-slate-400">Zero to Confident N5 Pass</p>
          </div>
        </div>

        {/* Center Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
          {[
            { id: 'roadmap', label: 'Roadmap', icon: '🗺️' },
            { id: 'kana', label: 'Kana & Kanji', icon: 'あ' },
            { id: 'vocab', label: 'Vocab & Grammar', icon: '文' },
            { id: 'reading', label: 'Reading', icon: '📖' },
            { id: 'listening', label: 'Listening', icon: '🎧' },
            { id: 'speaking', label: 'Speaking', icon: '🗣️' },
            { id: 'mocktest', label: 'Mock Test', icon: '🎯' },
            { id: 'progress', label: 'Progress', icon: '📊' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
                activeTab === tab.id
                  ? 'bg-rose-600 text-white shadow-md font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Right Controls: Language Selector, Romaji Mode, Streak, Auth */}
        <div className="flex items-center space-x-2">
          {/* Explanation Language Selector Toggle Pill */}
          <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setLang('english')}
              className={`px-2 py-1 rounded-md transition ${lang === 'english' ? 'bg-rose-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
              title="Explain in English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('tamil')}
              className={`px-2 py-1 rounded-md transition ${lang === 'tamil' ? 'bg-rose-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
              title="Explain in Tamil (தமிழ்)"
            >
              தமிழ்
            </button>
            <button
              onClick={() => setLang('both')}
              className={`px-2 py-1 rounded-md transition ${lang === 'both' ? 'bg-rose-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
              title="Dual Explanation: EN + Tamil"
            >
              Both
            </button>
          </div>

          {/* Romaji Mode Toggle */}
          <button
            onClick={() => {
              const modes: RomajiMode[] = ['intro-only', 'hidden', 'always'];
              const nextIdx = (modes.indexOf(romajiMode) + 1) % modes.length;
              setRomajiMode(modes[nextIdx]);
            }}
            className="flex items-center space-x-1 bg-slate-800 hover:bg-slate-700 text-xs text-rose-300 border border-slate-700 px-2.5 py-1 rounded-lg transition"
            title="Toggle Romaji reading assistance mode"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="capitalize font-mono">Romaji: {romajiMode}</span>
          </button>

          {/* Streak Indicator */}
          <div className="flex items-center space-x-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-2.5 py-1 rounded-lg text-xs font-bold">
            <Flame className="w-4 h-4 fill-amber-400" />
            <span>{streak} d</span>
          </div>

          {/* Auth Button */}
          {user ? (
            <button
              onClick={() => signOut()}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-lg border border-slate-700 flex items-center space-x-1"
            >
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Signed In</span>
            </button>
          ) : (
            <button
              onClick={() => signInWithGoogle('Japanese Sensei N5')}
              className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs px-3 py-1 rounded-lg font-medium shadow flex items-center space-x-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Google Login</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Strip */}
      <div className="flex md:hidden items-center overflow-x-auto space-x-1 mt-2.5 pt-2 border-t border-slate-800 scrollbar-none">
        {[
          { id: 'roadmap', label: 'Roadmap', icon: '🗺️' },
          { id: 'kana', label: 'Kana/Kanji', icon: 'あ' },
          { id: 'vocab', label: 'Vocab', icon: '文' },
          { id: 'reading', label: 'Reading', icon: '📖' },
          { id: 'listening', label: 'Listening', icon: '🎧' },
          { id: 'speaking', label: 'Speaking', icon: '🗣️' },
          { id: 'mocktest', label: 'Mock Test', icon: '🎯' },
          { id: 'progress', label: 'Progress', icon: '📊' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap flex items-center space-x-1 ${
              activeTab === tab.id
                ? 'bg-rose-600 text-white font-semibold'
                : 'text-slate-300 bg-slate-800/60'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </header>
  );
};
