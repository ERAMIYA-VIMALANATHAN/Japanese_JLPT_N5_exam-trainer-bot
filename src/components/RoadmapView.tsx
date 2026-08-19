import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SenseiAvatar } from './SenseiAvatar';
import { Calendar, CheckCircle, Clock, BookOpen, Flame, Sparkles, ChevronRight } from 'lucide-react';

interface RoadmapViewProps {
  onStartLesson: (domain: string) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ onStartLesson }) => {
  const { getText } = useLanguage();
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const dailyTasks = [
    { day: 1, title: 'Hiragana Vowels (あ、い、う、え、お)', type: 'kana', duration: '20 mins', status: 'ready', descEn: 'Learn stroke order, mnemonics, audio, and write on pad.', descTa: 'ஹிரகனா உயிர் எழுத்துக்கள் உச்சரிப்பு மற்றும் எழுதுதல் பயிற்சி.' },
    { day: 2, title: 'Hiragana KA Row (か、き、く、け、こ)', type: 'kana', duration: '25 mins', status: 'pending', descEn: 'Master KA-row characters and vocabulary like かさ (Umbrella).', descTa: 'க-வரிசை எழுத்துக்கள் மற்றும் சொற்கள்.' },
    { day: 3, title: 'Greetings & Grammar Point 1 (A は B です)', type: 'vocab', duration: '30 mins', status: 'pending', descEn: 'Learn basic polite introductions & Topic particle は.', descTa: 'வணக்கம் மற்றும் அடிப்படை வாக்கிய அமைப்பு.' },
    { day: 4, title: 'Hiragana SA & TA Rows (さ～と)', type: 'kana', duration: '25 mins', status: 'pending', descEn: 'Recognize SHI and TSU sounds with audio check.', descTa: 'ச மற்றும் த வரிசை எழுத்துக்கள்.' },
    { day: 5, title: 'Basic N5 Kanji (一、二、三、日、月)', type: 'kanji', duration: '30 mins', status: 'pending', descEn: 'Numbers & Days Kanji with stroke practice.', descTa: 'அடிப்படை கஞ்சி எழுத்துக்கள்.' },
  ];

  const weeklyMilestones = [
    { week: 1, title: 'Complete All Hiragana 46 Basic Characters', progress: 35 },
    { week: 2, title: 'Master All Katakana & Foreign Loan Words', progress: 10 },
    { week: 3, title: '50 N5 Kanji & Particle Mastery (は、が、を、に)', progress: 0 },
    { week: 4, title: 'Core N5 Grammar (～てください、～たいです)', progress: 0 },
    { week: 5, title: 'Reading Comprehension & Dictation Drills', progress: 0 },
    { week: 6, title: 'Full JLPT N5 Mock Exam & Pass Certification', progress: 0 }
  ];

  return (
    <div className="space-y-6">
      <SenseiAvatar
        messageEn="Welcome to your JLPT N5 Master Plan! Follow this daily curriculum step-by-step. We never skip fundamentals and ensure 100% mastery."
        messageTa="ஜப்பானிய மொழி N5 தேர்வுக்கான முழுமையான பாடத்திட்டம்! தினமும் சிறப்பான முன்னேற்றத்தை அடைவோம்."
        mood="happy"
      />

      {/* View Switcher: Daily / Weekly / Monthly */}
      <div className="flex items-center justify-between bg-slate-900 p-2 rounded-2xl border border-slate-800">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-rose-400 ml-2" />
          <span className="font-bold text-white text-sm">Study Schedule Mode</span>
        </div>
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
          {(['daily', 'weekly', 'monthly'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveTab(mode)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${
                activeTab === mode
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {mode} Plan
            </button>
          ))}
        </div>
      </div>

      {/* Daily Plan View */}
      {activeTab === 'daily' && (
        <div className="grid grid-cols-1 gap-4">
          {dailyTasks.map((task) => (
            <div
              key={task.day}
              className="bg-slate-900 border border-slate-800 hover:border-rose-500/50 rounded-2xl p-5 transition shadow-lg flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-[10px] text-slate-500 font-mono">DAY</span>
                  <span className="text-lg font-extrabold text-rose-400">{task.day}</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-white text-base">{task.title}</h3>
                    <span className="text-[10px] bg-rose-950 text-rose-300 border border-rose-800 px-2 py-0.5 rounded-full font-mono">
                      {task.duration}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 max-w-xl">
                    {getText(task.descEn, task.descTa)}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onStartLesson(task.type)}
                className="bg-rose-600 hover:bg-rose-500 text-white text-xs px-4 py-2.5 rounded-xl font-bold flex items-center space-x-1.5 shadow transition"
              >
                <span>Start Lesson</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Weekly Plan View */}
      {activeTab === 'weekly' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {weeklyMilestones.map((w) => (
            <div key={w.week} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-rose-400 font-bold">WEEK {w.week}</span>
                <span className="text-xs text-slate-400 font-semibold">{w.progress}% Complete</span>
              </div>
              <h4 className="font-bold text-white text-sm mb-3">{w.title}</h4>
              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-rose-500 to-amber-500 h-full transition-all duration-500"
                  style={{ width: `${w.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Monthly Exam Target View */}
      {activeTab === 'monthly' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-600 text-white flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg">
            🎌
          </div>
          <h3 className="text-xl font-bold text-white">Target Examination Target</h3>
          <p className="text-slate-400 text-xs max-w-md mx-auto mt-1">
            Goal: Read Japanese script directly without Romaji, understand N5 spoken dialogues, and pass JLPT N5 with 140+ / 180 score!
          </p>

          <div className="grid grid-cols-3 gap-3 my-6 max-w-lg mx-auto">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="text-slate-400 text-[10px]">Hiragana/Katakana</div>
              <div className="text-lg font-extrabold text-emerald-400">100% Target</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="text-slate-400 text-[10px]">Kanji Target</div>
              <div className="text-lg font-extrabold text-amber-400">100 Kanji</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="text-slate-400 text-[10px]">Vocabulary</div>
              <div className="text-lg font-extrabold text-rose-400">800 Words</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
