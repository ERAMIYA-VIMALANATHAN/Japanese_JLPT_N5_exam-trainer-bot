import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SenseiAvatar } from './SenseiAvatar';
import { Award, Flame, CheckCircle2, BookOpen, BarChart2 } from 'lucide-react';

export const ProgressDashboard: React.FC = () => {
  const { lang, getText } = useLanguage();

  const skills = [
    { name: 'Hiragana Mastery', pct: 90, color: 'from-rose-500 to-red-600' },
    { name: 'Katakana Recognition', pct: 75, color: 'from-amber-500 to-orange-600' },
    { name: 'N5 Kanji Mastery', pct: 45, color: 'from-emerald-500 to-teal-600' },
    { name: 'N5 Vocabulary', pct: 60, color: 'from-blue-500 to-cyan-600' },
    { name: 'N5 Grammar Rules', pct: 50, color: 'from-purple-500 to-indigo-600' },
    { name: 'Reading Directly', pct: 55, color: 'from-pink-500 to-rose-600' },
    { name: 'Listening Comprehension', pct: 40, color: 'from-amber-400 to-yellow-600' },
    { name: 'Speaking Dialogue', pct: 35, color: 'from-teal-400 to-emerald-600' },
    { name: 'Writing Stroke Accuracy', pct: 80, color: 'from-red-500 to-rose-600' },
  ];

  return (
    <div className="space-y-6">
      <SenseiAvatar
        messageEn="Continuous 9-Domain JLPT N5 Progress Tracker! Track every stroke, character, and rule."
        messageTa="9 முக்கியப் பிரிவுகளில் உங்கள் கற்றல் முன்னேற்றப் பாதை!"
        mood="happy"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white text-sm">{skill.name}</span>
              <span className="font-mono text-rose-400 text-xs font-bold">{skill.pct}%</span>
            </div>

            <div className="w-full bg-slate-950 rounded-full h-3 border border-slate-800 overflow-hidden">
              <div
                className={`bg-gradient-to-r ${skill.color} h-full transition-all duration-700`}
                style={{ width: `${skill.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
