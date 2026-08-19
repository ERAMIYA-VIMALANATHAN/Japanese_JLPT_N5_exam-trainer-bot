import React from 'react';
import { useLanguage, ExplanationLang } from '../contexts/LanguageContext';
import { Globe, Check, Sparkles } from 'lucide-react';

export const LanguageSelectorModal: React.FC = () => {
  const { lang, setLang, showLangSelector, setShowLangSelector } = useLanguage();

  if (!showLangSelector) return null;

  const handleSelect = (selected: ExplanationLang) => {
    setLang(selected);
    setShowLangSelector(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-rose-500/40 rounded-3xl p-6 max-w-lg w-full shadow-2xl relative">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-3xl mx-auto shadow-lg mb-3">
            ⛩️
          </div>
          <h2 className="text-2xl font-extrabold text-white">Sensei Language Check</h2>
          <p className="text-slate-400 text-sm mt-1">
            Before every lesson, please confirm your preferred explanation language:
          </p>
          <div className="italic text-rose-300 text-xs mt-1">
            "Which explanation language would you like?"
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleSelect('english')}
            className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition ${
              lang === 'english'
                ? 'bg-rose-950/60 border-rose-500 text-white shadow-lg'
                : 'bg-slate-800/70 border-slate-700 text-slate-200 hover:bg-slate-800'
            }`}
          >
            <div>
              <div className="font-bold text-base flex items-center space-x-2">
                <span>1. English</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Clear step-by-step explanations in standard English.</p>
            </div>
            {lang === 'english' && <Check className="w-5 h-5 text-rose-400" />}
          </button>

          <button
            onClick={() => handleSelect('tamil')}
            className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition ${
              lang === 'tamil'
                ? 'bg-rose-950/60 border-rose-500 text-white shadow-lg'
                : 'bg-slate-800/70 border-slate-700 text-slate-200 hover:bg-slate-800'
            }`}
          >
            <div>
              <div className="font-bold text-base flex items-center space-x-2">
                <span>2. Tamil (தமிழ்)</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">தமிழில் எளிய முறையில் ஜப்பானிய இலக்கணம் மற்றும் கருத்துகள்.</p>
            </div>
            {lang === 'tamil' && <Check className="w-5 h-5 text-rose-400" />}
          </button>

          <button
            onClick={() => handleSelect('both')}
            className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition ${
              lang === 'both'
                ? 'bg-rose-950/60 border-rose-500 text-white shadow-lg'
                : 'bg-slate-800/70 border-slate-700 text-slate-200 hover:bg-slate-800'
            }`}
          >
            <div>
              <div className="font-bold text-base flex items-center space-x-2">
                <span>3. English + Tamil (Dual Explanation)</span>
                <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full border border-rose-500/30">
                  Recommended
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Side-by-side English & தமிழ் explanations for double clarity!</p>
            </div>
            {lang === 'both' && <Check className="w-5 h-5 text-rose-400" />}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            Tip: You can switch anytime using the header toggle or typing <span className="text-rose-400 font-mono">Language: Tamil</span> in speaking chat!
          </p>
        </div>
      </div>
    </div>
  );
};
