import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { VOCAB_DATA, GRAMMAR_DATA, VocabItem, GrammarItem } from '../utils/n5Data';
import { SenseiAvatar } from './SenseiAvatar';
import { speakJapanese } from '../utils/speech';
import { Volume2, RotateCcw, Check, Sparkles, BookOpen, Layers } from 'lucide-react';

export const VocabGrammarTrainer: React.FC = () => {
  const { lang, romajiMode, getText } = useLanguage();
  const [activeTab, setActiveTab] = useState<'vocab' | 'grammar'>('vocab');
  const [currentVocabIndex, setCurrentVocabIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Greetings', 'People', 'Food & Drink', 'Verbs', 'Objects'];

  const filteredVocab = selectedCategory === 'All'
    ? VOCAB_DATA
    : VOCAB_DATA.filter(v => v.category === selectedCategory);

  const currentVocab = filteredVocab[currentVocabIndex] || VOCAB_DATA[0];

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentVocabIndex((prev) => (prev + 1) % filteredVocab.length);
  };

  return (
    <div className="space-y-6">
      <SenseiAvatar
        messageEn="JLPT N5 Core Vocabulary & Sentence Structure Mastery! Use SRS flashcards and particle breakdowns."
        messageTa="JLPT N5 முக்கிய சொற்களஞ்சியம் மற்றும் இலக்கண அமைப்புகள்!"
        mood="happy"
      />

      {/* Main Tab Switcher */}
      <div className="flex items-center justify-between bg-slate-900 p-2 rounded-2xl border border-slate-800">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('vocab')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'vocab' ? 'bg-rose-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            N5 Vocabulary (800+ Words)
          </button>
          <button
            onClick={() => setActiveTab('grammar')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'grammar' ? 'bg-rose-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            N5 Grammar Points (40+ Patterns)
          </button>
        </div>
      </div>

      {activeTab === 'vocab' && (
        <div className="space-y-6">
          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentVocabIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-rose-950 border border-rose-500 text-rose-300'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Flashcard Component */}
          <div className="max-w-xl mx-auto">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="bg-slate-900 border-2 border-rose-500/40 hover:border-rose-500 rounded-3xl p-8 shadow-2xl min-h-[280px] flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-xs font-mono text-slate-500">
                Tap to Flip 🔄
              </div>

              {!isFlipped ? (
                <div>
                  <div className="text-5xl font-extrabold text-white mb-2">{currentVocab.word}</div>
                  <div className="text-sm font-mono text-rose-400 mb-2">Reading: {currentVocab.reading}</div>
                  {romajiMode !== 'hidden' && (
                    <div className="text-xs text-slate-400 font-mono">[{currentVocab.romaji}]</div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakJapanese(currentVocab.word);
                    }}
                    className="mt-4 p-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white inline-flex items-center space-x-2 text-xs font-bold shadow"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Listen Word</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                    Category: {currentVocab.category}
                  </span>
                  <div className="text-2xl font-bold text-emerald-400">
                    {getText(currentVocab.meaning_en, currentVocab.meaning_ta)}
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 mt-2 text-left">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Example Sentence</div>
                    <div className="text-sm font-bold text-white">{currentVocab.example_ja}</div>
                    <div className="text-xs text-slate-300 mt-1">
                      {getText(currentVocab.example_en, currentVocab.example_ta)}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs font-mono text-slate-400">
                Card {currentVocabIndex + 1} of {filteredVocab.length}
              </span>
              <button
                onClick={nextCard}
                className="bg-rose-600 hover:bg-rose-500 text-white text-xs px-6 py-2.5 rounded-xl font-bold shadow transition"
              >
                Next Word Card ➔
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grammar Breakdown View */}
      {activeTab === 'grammar' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GRAMMAR_DATA.map((g) => (
            <div key={g.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-extrabold text-rose-400 font-mono bg-rose-950/60 px-3 py-1 rounded-xl border border-rose-800">
                  {g.pattern}
                </span>
                <span className="text-[10px] uppercase font-mono text-slate-500">N5 Core Rule</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">
                  {getText(g.title_en, g.title_ta)}
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {getText(g.explanation_en, g.explanation_ta)}
                </p>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-amber-300">
                <span className="text-slate-500 block text-[10px] mb-0.5">FORMULA / STRUCTURE:</span>
                {g.structure}
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase font-bold mb-2">Example Sentences</h4>
                <div className="space-y-2">
                  {g.examples.map((ex, idx) => (
                    <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-bold text-white">{ex.ja}</span>
                        <button
                          onClick={() => speakJapanese(ex.ja)}
                          className="text-rose-400 hover:text-rose-300 p-1"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-xs text-slate-400 font-mono">{ex.reading}</div>
                      <div className="text-xs text-emerald-300 mt-1">
                        {getText(ex.en, ex.ta)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
