import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SenseiAvatar } from './SenseiAvatar';
import { CheckCircle2, Award, ArrowRight, RefreshCw, Calendar, Target, Sparkles } from 'lucide-react';

interface AssessmentQuizProps {
  onComplete: (level: string) => void;
}

export const AssessmentQuiz: React.FC<AssessmentQuizProps> = ({ onComplete }) => {
  const { getText } = useLanguage();
  const [step, setStep] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const questions = [
    {
      qJa: '「あ」 の読み方は何ですか。',
      qEn: 'Which sound corresponds to Hiragana character 「あ」?',
      qTa: '「あ」 என்ற ஹிரகனா எழுத்தின் ஒலி எது?',
      options: ['1. "a"', '2. "i"', '3. "u"', '4. "ka"'],
      correct: 0
    },
    {
      qJa: '「わたし ___ 学生です。」',
      qEn: 'Which particle correctly fills the blank in: わたし ___ 学生です。 (I am a student)?',
      qTa: 'வாக்கியத்தில் விடுபட்ட இடைச்சொல் எது?',
      options: ['1. を (o)', '2. は (wa)', '3. に (ni)', '4. で (de)'],
      correct: 1
    },
    {
      qJa: '「日」 Kanji の意味は何ですか。',
      qEn: 'What is the primary meaning of the Kanji 「日」?',
      qTa: '「日」 என்ற கஞ்சியின் முதன்மைப் பொருள் என்ன?',
      options: ['1. Water', '2. Moon', '3. Sun / Day', '4. Tree'],
      correct: 2
    },
    {
      qJa: '「ありがとう」 の意味は何ですか。',
      qEn: 'What does "Arigatou" mean?',
      qTa: '"அரிகாதோ" என்பதன் பொருள் என்ன?',
      options: ['1. Goodbye', '2. Thank you', '3. Excuse me', '4. Good morning'],
      correct: 1
    }
  ];

  const handleSelect = (optionIdx: number) => {
    const isCorrect = optionIdx === questions[step].correct;
    if (isCorrect) setScore(prev => prev + 1);
    setUserAnswers([...userAnswers, optionIdx]);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Finished
    }
  };

  const getPlacement = () => {
    if (score === 4) return { title: 'Fast-Track N5 Master', descEn: 'You know your basic Kana & greetings! We will focus on N5 Kanji & Grammar.', descTa: 'அடிப்படைகள் உங்களுக்கு ஏற்கனவே தெரியும்!' };
    if (score >= 2) return { title: 'Beginner Learner', descEn: 'Good start! We will quickly review Hiragana and build your N5 vocab.', descTa: 'நல்ல ஆரம்பம்! ஹிரகனா மற்றும் சொற்களஞ்சியத்தில் கவனம் செலுத்துவோம்.' };
    return { title: 'Absolute Beginner (Zero Knowledge)', descEn: 'Perfect! We assume absolute zero knowledge. Step-by-step Hiragana stroke mastery starts right now!', descTa: 'மிகச் சிறப்பு! முற்றிலும் அடிப்படையிலிருந்து ஒவ்வொரு எழுத்துக்களாகக் கற்றுக்கொள்வோம்.' };
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl max-w-3xl mx-auto my-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/30">
          <Target className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Sensei Level Diagnostic & Assessment</h2>
          <p className="text-xs text-slate-400">Determining your personalized JLPT N5 learning plan</p>
        </div>
      </div>

      {step < questions.length ? (
        <div>
          <SenseiAvatar
            messageEn={`Question ${step + 1} of ${questions.length}: Take your time! If you do not know, select your best guess.`}
            messageTa={`கேள்வி ${step + 1} / ${questions.length}: நிதானமாக யோசித்து விடையளியுங்கள்.`}
            mood="thinking"
          />

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 my-4">
            <div className="text-rose-400 font-mono text-xs mb-1">Diagnostic Test Item #{step + 1}</div>
            <div className="text-2xl font-bold text-white mb-2">{questions[step].qJa}</div>
            <p className="text-slate-300 text-sm mb-4">
              {getText(questions[step].qEn, questions[step].qTa)}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {questions[step].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-rose-500 hover:bg-rose-950/40 text-left text-slate-200 hover:text-white font-medium transition flex items-center justify-between"
                >
                  <span>{opt}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-6">
          <div className="w-20 h-20 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-4 border border-rose-500/40 text-3xl shadow-xl">
            🏆
          </div>
          <h3 className="text-2xl font-extrabold text-white mb-1">Assessment Complete!</h3>
          <p className="text-amber-400 font-semibold text-lg">{getPlacement().title}</p>
          <p className="text-slate-300 text-sm max-w-lg mx-auto mt-2">
            {getText(getPlacement().descEn, getPlacement().descTa)}
          </p>

          <div className="my-6 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex justify-around text-center">
            <div>
              <div className="text-slate-400 text-xs">Score</div>
              <div className="text-2xl font-bold text-white">{score} / {questions.length}</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs">Target Level</div>
              <div className="text-2xl font-bold text-rose-400">JLPT N5 Pass</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs">Custom Plan</div>
              <div className="text-2xl font-bold text-emerald-400">Ready</div>
            </div>
          </div>

          <button
            onClick={() => onComplete(getPlacement().title)}
            className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white px-8 py-3 rounded-2xl font-bold text-base shadow-lg transition flex items-center space-x-2 mx-auto"
          >
            <Sparkles className="w-5 h-5" />
            <span>Start Lesson 1 (Hiragana Basics)</span>
          </button>
        </div>
      )}
    </div>
  );
};
