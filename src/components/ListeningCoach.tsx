import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LISTENING_DATA } from '../utils/n5Data';
import { SenseiAvatar } from './SenseiAvatar';
import { speakJapanese } from '../utils/speech';
import { Headphones, Volume2, CheckCircle, RotateCcw } from 'lucide-react';

export const ListeningCoach: React.FC = () => {
  const { lang, getText } = useLanguage();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.9);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const scenario = LISTENING_DATA[currentScenario] || LISTENING_DATA[0];

  const handlePlayAudio = () => {
    speakJapanese(scenario.audioText, playbackSpeed);
  };

  return (
    <div className="space-y-6">
      <SenseiAvatar
        messageEn="JLPT N5 Listening Audio Dictation Coach! Listen carefully to native dialogue and select answer."
        messageTa="ஜப்பானிய கேட்கும் திறன் பயிற்சி! உரையாடலைக் கேட்டு சரியான விடையைத் தேர்ந்தெடுக்கவும்."
        mood="happy"
      />

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-rose-500/20 text-rose-400 rounded-2xl border border-rose-500/30">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-white text-lg">{scenario.title}</h2>
              <p className="text-xs text-slate-400 font-mono">Speaker: {scenario.speaker}</p>
            </div>
          </div>

          {/* Speed Selector */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            {[0.75, 0.9, 1.1].map((spd) => (
              <button
                key={spd}
                onClick={() => setPlaybackSpeed(spd)}
                className={`px-2.5 py-1 rounded-lg font-mono font-bold transition ${
                  playbackSpeed === spd ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>
        </div>

        {/* Audio Player Button */}
        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center space-y-4">
          <button
            onClick={handlePlayAudio}
            className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-600 to-red-500 hover:from-rose-500 hover:to-red-400 text-white flex items-center justify-center mx-auto shadow-2xl hover:scale-105 transition border-2 border-rose-300/30"
          >
            <Volume2 className="w-10 h-10" />
          </button>
          <p className="text-xs text-slate-400">Click to play audio scenario ({playbackSpeed}x speed)</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono text-slate-400 uppercase font-bold">Select Correct Answer</h3>

          {scenario.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOption(idx + 1)}
              className={`w-full p-4 rounded-2xl border text-left text-sm font-semibold transition ${
                selectedOption === idx + 1
                  ? idx + 1 === scenario.correct
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-300 shadow-lg'
                    : 'bg-rose-950 border-rose-500 text-rose-300'
                  : 'bg-slate-950 border-slate-800 text-slate-200 hover:bg-slate-800'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {selectedOption && (
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
            <span className="font-bold text-rose-400 block font-mono">Audio Script & Analysis:</span>
            <p className="italic text-white font-serif">"{scenario.audioText}"</p>
            <p className="mt-1">{getText(scenario.explanation_en, scenario.explanation_ta)}</p>
          </div>
        )}
      </div>
    </div>
  );
};
