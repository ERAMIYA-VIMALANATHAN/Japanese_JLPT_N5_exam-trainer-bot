import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { READING_DATA } from '../utils/n5Data';
import { SenseiAvatar } from './SenseiAvatar';
import { speakJapanese } from '../utils/speech';
import { Volume2, CheckCircle2, Eye, BookOpen, ChevronRight } from 'lucide-react';

export const ReadingCoach: React.FC = () => {
  const { lang, getText } = useLanguage();
  const [selectedPassage, setSelectedPassage] = useState(0);
  const [showFurigana, setShowFurigana] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});

  const passage = READING_DATA[selectedPassage] || READING_DATA[0];

  const handleOptionSelect = (qIdx: number, optIdx: number) => {
    setSelectedAnswers({ ...selectedAnswers, [qIdx]: optIdx });
  };

  return (
    <div className="space-y-6">
      <SenseiAvatar
        messageEn="Direct Japanese Reading Practice! Test reading without depending on English."
        messageTa="நேரடி ஜப்பானிய வாசிப்பு பயிற்சி! Furigana மற்றும் வினாக்கள்."
        speakableJa={passage.content_ja}
        mood="happy"
      />

      {/* Control Header */}
      <div className="flex flex-wrap items-center justify-between bg-slate-900 p-4 rounded-2xl border border-slate-800 gap-3">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-rose-400" />
          <h2 className="text-lg font-bold text-white">Passage: {getText(passage.title_en, passage.title_ta)}</h2>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowFurigana(!showFurigana)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
              showFurigana ? 'bg-rose-950 border-rose-700 text-rose-300' : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            Furigana: {showFurigana ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
              showTranslation ? 'bg-amber-950 border-amber-700 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            Translation: {showTranslation ? 'Visible' : 'Hidden'}
          </button>

          <button
            onClick={() => speakJapanese(passage.content_ja)}
            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold shadow flex items-center space-x-1"
          >
            <Volume2 className="w-4 h-4" />
            <span>Read Aloud</span>
          </button>
        </div>
      </div>

      {/* Main Reading Block */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 leading-loose text-2xl font-serif text-slate-100 tracking-wide">
          {passage.content_furigana.map((chunk, idx) => (
            <span key={idx} className="inline-block mx-1 my-1">
              {showFurigana && chunk.ruby ? (
                <ruby className="ruby-position-above">
                  {chunk.ruby}
                  <rt className="text-xs text-rose-400 font-sans font-normal">{chunk.word}</rt>
                </ruby>
              ) : (
                <span>{chunk.ruby || chunk.word}</span>
              )}
            </span>
          ))}
        </div>

        {/* Translation Accordion */}
        {showTranslation && (
          <div className="bg-slate-950 p-4 rounded-2xl border border-amber-500/30 text-amber-200 text-sm leading-relaxed">
            <span className="text-xs font-mono uppercase text-amber-400 block font-bold mb-1">Passage Translation:</span>
            {getText(passage.translation_en, passage.translation_ta)}
          </div>
        )}

        {/* Comprehension Questions */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h3 className="text-sm font-mono text-slate-400 uppercase font-bold">Comprehension Verification</h3>

          {passage.questions.map((q, qIdx) => (
            <div key={qIdx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="font-bold text-white text-base">{q.question_ja}</div>
              <p className="text-xs text-slate-400">{getText(q.question_en, q.question_ta)}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleOptionSelect(qIdx, optIdx + 1)}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition ${
                      selectedAnswers[qIdx] === optIdx + 1
                        ? optIdx + 1 === q.correct
                          ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                          : 'bg-rose-950 border-rose-500 text-rose-300'
                        : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {selectedAnswers[qIdx] && (
                <div className="mt-2 text-xs p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 italic">
                  Sensei Note: {getText(q.explanation_en, q.explanation_ta)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
