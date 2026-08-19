import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Volume2, Sparkles, MessageSquare } from 'lucide-react';
import { speakJapanese } from '../utils/speech';

interface SenseiAvatarProps {
  messageEn: string;
  messageTa?: string;
  speakableJa?: string;
  mood?: 'happy' | 'thinking' | 'encouraging' | 'strict';
}

export const SenseiAvatar: React.FC<SenseiAvatarProps> = ({
  messageEn,
  messageTa = '',
  speakableJa = '',
  mood = 'happy'
}) => {
  const { lang, getText } = useLanguage();

  const getMoodEmoji = () => {
    switch (mood) {
      case 'happy': return '👘 ⛩️';
      case 'thinking': return '🤔 💡';
      case 'strict': return '🎯 📜';
      default: return '🌸 🎌';
    }
  };

  return (
    <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-4 shadow-xl flex items-start space-x-4 relative overflow-hidden my-4">
      {/* Sensei Portrait / Visual Avatar */}
      <div className="relative flex-shrink-0">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-600 via-red-500 to-amber-500 flex items-center justify-center text-3xl shadow-lg border-2 border-rose-300/40">
          ⛩️
        </div>
        <div className="absolute -bottom-1 -right-1 bg-slate-950 text-xs px-1.5 py-0.5 rounded-full border border-rose-500/40 text-rose-300 font-mono">
          先生
        </div>
      </div>

      {/* Speech Bubble */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-rose-200 text-sm">Sensei Tanaka</span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-rose-900/40 text-rose-300 border border-rose-700/50">
              N5 Master Coach
            </span>
          </div>

          {speakableJa && (
            <button
              onClick={() => speakJapanese(speakableJa)}
              className="flex items-center space-x-1 text-xs text-rose-400 hover:text-rose-300 bg-rose-950/60 hover:bg-rose-900/60 border border-rose-800 px-2 py-1 rounded-lg transition"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Listen Sensei</span>
            </button>
          )}
        </div>

        {/* Message in Selected Language */}
        <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">
          {getText(messageEn, messageTa)}
        </p>

        {speakableJa && (
          <div className="mt-2 inline-flex items-center space-x-2 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800 text-xs font-mono text-amber-300">
            <span>🗣️ Japanese Focus:</span>
            <span className="font-semibold text-white">{speakableJa}</span>
          </div>
        )}
      </div>
    </div>
  );
};
