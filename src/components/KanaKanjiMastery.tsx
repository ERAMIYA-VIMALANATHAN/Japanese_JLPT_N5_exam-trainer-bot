import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { HIRAGANA_DATA, KATAKANA_DATA, KANJI_DATA, CharacterItem } from '../utils/n5Data';
import { SenseiAvatar } from './SenseiAvatar';
import { WritingPad } from './WritingPad';
import { speakJapanese } from '../utils/speech';
import { Volume2, Sparkles, Check, ChevronRight, PenTool, BookOpen, RefreshCw } from 'lucide-react';

export const KanaKanjiMastery: React.FC = () => {
  const { lang, romajiMode, getText } = useLanguage();
  const [activeTab, setActiveTab] = useState<'hiragana' | 'katakana' | 'kanji'>('hiragana');
  const [selectedCharIndex, setSelectedCharIndex] = useState<number>(0);
  const [activePracticeMode, setActivePracticeMode] = useState<'study' | 'write' | 'quiz'>('study');
  const [quizInput, setQuizInput] = useState<string>('');
  const [quizResult, setQuizResult] = useState<'correct' | 'wrong' | null>(null);

  const getDataset = (): CharacterItem[] => {
    if (activeTab === 'hiragana') return HIRAGANA_DATA;
    if (activeTab === 'katakana') return KATAKANA_DATA;
    return KANJI_DATA;
  };

  const dataset = getDataset();
  const currentItem = dataset[selectedCharIndex] || dataset[0];

  const handleAudio = () => {
    speakJapanese(currentItem.char, 0.8);
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = quizInput.trim().toLowerCase();
    const target = currentItem.romaji.toLowerCase();
    if (target.includes(cleanInput) && cleanInput.length > 0) {
      setQuizResult('correct');
      speakJapanese(currentItem.char);
    } else {
      setQuizResult('wrong');
    }
  };

  return (
    <div className="space-y-6">
      <SenseiAvatar
        messageEn={`Mastering ${activeTab.toUpperCase()} character 「${currentItem.char}」! Study stroke order, mnemonics, and write directly.`}
        messageTa={`「${currentItem.char}」 என்ற எழுத்தின் உச்சரிப்பு, நினைவுக்குறிப்பு மற்றும் எழுத்துப் பயிற்சி.`}
        speakableJa={currentItem.char}
        mood="happy"
      />

      {/* Script Tab Switcher: Hiragana / Katakana / Kanji */}
      <div className="flex items-center justify-between bg-slate-900 p-2 rounded-2xl border border-slate-800">
        <div className="flex space-x-1">
          {(['hiragana', 'katakana', 'kanji'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedCharIndex(0);
                setActivePracticeMode('study');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                activeTab === tab
                  ? 'bg-rose-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab} ({tab === 'hiragana' ? HIRAGANA_DATA.length : tab === 'katakana' ? KATAKANA_DATA.length : KANJI_DATA.length})
            </button>
          ))}
        </div>

        {/* Practice Sub-Modes */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 space-x-1">
          {(['study', 'write', 'quiz'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => {
                setActivePracticeMode(mode);
                setQuizResult(null);
                setQuizInput('');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${
                activePracticeMode === mode
                  ? 'bg-slate-800 text-rose-300 border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Character Grid Selector */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 shadow-xl">
          <h3 className="text-xs font-mono uppercase text-slate-400 font-bold mb-3 flex items-center justify-between">
            <span>Character Selection Grid</span>
            <span className="text-rose-400 font-bold">{selectedCharIndex + 1} / {dataset.length}</span>
          </h3>

          <div className="grid grid-cols-5 gap-2 max-h-96 overflow-y-auto pr-1 scrollbar-thin">
            {dataset.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCharIndex(idx);
                  setQuizResult(null);
                  setQuizInput('');
                }}
                className={`aspect-square rounded-2xl flex flex-col items-center justify-center font-bold transition border ${
                  selectedCharIndex === idx
                    ? 'bg-rose-600 text-white border-rose-400 shadow-lg scale-105'
                    : 'bg-slate-950 text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                <span className="text-xl">{item.char}</span>
                {romajiMode !== 'hidden' && (
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5">{item.romaji}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right 2 Columns: Character Interactive Card & Practice Canvas */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
          {activePracticeMode === 'study' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Massive Visual Character & Audio */}
              <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800 text-center flex flex-col items-center justify-center relative">
                <span className="text-9xl font-extrabold text-white mb-2 drop-shadow-md">
                  {currentItem.char}
                </span>

                {romajiMode !== 'hidden' && (
                  <span className="text-base text-rose-400 font-mono font-bold bg-rose-950/60 px-4 py-1 rounded-full border border-rose-800">
                    Romaji: {currentItem.romaji}
                  </span>
                )}

                {activeTab === 'kanji' && (
                  <div className="mt-3 text-xs text-slate-400 font-mono space-y-1">
                    <div>Onyomi: <span className="text-amber-300 font-semibold">{currentItem.onyomi}</span></div>
                    <div>Kunyomi: <span className="text-emerald-300 font-semibold">{currentItem.kunyomi}</span></div>
                  </div>
                )}

                <button
                  onClick={handleAudio}
                  className="mt-4 bg-rose-600 hover:bg-rose-500 text-white p-3 rounded-2xl shadow-lg transition flex items-center space-x-2 text-sm font-bold"
                >
                  <Volume2 className="w-5 h-5" />
                  <span>Audio Pronunciation</span>
                </button>
              </div>

              {/* Character Details & Mnemonics */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase font-bold">Meaning</h4>
                  <p className="text-lg font-bold text-white">
                    {getText(currentItem.meaning_en, currentItem.meaning_ta)}
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <h4 className="text-xs font-mono text-rose-400 uppercase font-bold flex items-center space-x-1 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Sensei Memory Mnemonic</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    "{getText(currentItem.mnemonic_en, currentItem.mnemonic_ta)}"
                  </p>
                </div>

                {currentItem.vocabulary && currentItem.vocabulary.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase font-bold mb-2">
                      Connected Vocabulary
                    </h4>
                    <div className="space-y-2">
                      {currentItem.vocabulary.map((v, idx) => (
                        <div key={idx} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-base font-bold text-white mr-2">{v.word}</span>
                            <span className="text-xs text-rose-400 font-mono">({v.reading})</span>
                          </div>
                          <span className="text-xs text-slate-300">
                            {getText(v.meaning_en, v.meaning_ta)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Interactive Writing Canvas Mode */}
          {activePracticeMode === 'write' && (
            <div className="flex flex-col items-center justify-center space-y-4 py-4">
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-1">Stroke Order Canvas Practice</h3>
                <p className="text-xs text-slate-400">Draw character 「{currentItem.char}」 using touch or mouse stroke</p>
              </div>

              <WritingPad character={currentItem.char} />
            </div>
          )}

          {/* Interactive Quiz Mode */}
          {activePracticeMode === 'quiz' && (
            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 text-center max-w-md mx-auto space-y-4">
              <div className="text-7xl font-extrabold text-white">{currentItem.char}</div>
              <p className="text-sm text-slate-300">
                What is the correct Romaji reading of this character?
              </p>

              <form onSubmit={handleQuizSubmit} className="space-y-3">
                <input
                  type="text"
                  value={quizInput}
                  onChange={(e) => setQuizInput(e.target.value)}
                  placeholder="Type reading (e.g. ka, ka, a)..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white font-mono text-center text-lg focus:outline-none focus:border-rose-500"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl font-bold shadow-lg transition"
                >
                  Verify Answer
                </button>
              </form>

              {quizResult === 'correct' && (
                <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500 text-emerald-300 text-sm font-bold flex items-center justify-center space-x-2">
                  <Check className="w-5 h-5" />
                  <span>Correct! すばらしい (Excellent!)</span>
                </div>
              )}

              {quizResult === 'wrong' && (
                <div className="p-3 rounded-xl bg-rose-950 border border-rose-500 text-rose-300 text-sm font-bold">
                  Try Again! Correct answer is: <span className="font-mono text-white">{currentItem.romaji}</span>
                </div>
              )}
            </div>
          )}

          {/* Bottom Next / Prev Controls */}
          <div className="flex items-center justify-between border-t border-slate-800 pt-4">
            <button
              disabled={selectedCharIndex === 0}
              onClick={() => setSelectedCharIndex(prev => prev - 1)}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold disabled:opacity-40 transition"
            >
              Previous Character
            </button>
            <button
              disabled={selectedCharIndex === dataset.length - 1}
              onClick={() => setSelectedCharIndex(prev => prev + 1)}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition flex items-center space-x-1"
            >
              <span>Next Character</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
