import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SenseiAvatar } from './SenseiAvatar';
import { Award, Clock, AlertCircle, CheckCircle, RefreshCw, BarChart2 } from 'lucide-react';

export const MockTestExaminer: React.FC = () => {
  const { lang, getText } = useLanguage();
  const [testState, setTestState] = useState<'idle' | 'active' | 'completed'>('idle');
  const [timeLeft, setTimeLeft] = useState<number>(1800); // 30 mins
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});

  const mockQuestions = [
    {
      section: 'Language Knowledge (Script & Vocab)',
      questionJa: '「本」 の 読み方は 何ですか。',
      questionEn: 'What is the reading of 「本」?',
      questionTa: '「本」 என்பதன் உச்சரிப்பு என்ன?',
      options: ['1. ほん (hon)', '2. かわ (kawa)', '3. やま (yama)', '4. みず (mizu)'],
      correct: 1
    },
    {
      section: 'Language Knowledge (Script & Vocab)',
      questionJa: '「いぬ」 の 意味は 何ですか。',
      questionEn: 'What is the meaning of 「いぬ」?',
      questionTa: '「いぬ」 என்பதன் பொருள் என்ன?',
      options: ['1. Cat', '2. Dog', '3. Bird', '4. Fish'],
      correct: 2
    },
    {
      section: 'Grammar & Reading',
      questionJa: 'わたし ___ 日本語を 勉強します。',
      questionEn: 'Fill in particle: わたし ___ 日本語を 勉強します。',
      questionTa: 'சரியான இடைச்சொல்லைத் தேர்ந்தெடுக்கவும்:',
      options: ['1. は (wa)', '2. に (ni)', '3. で (de)', '4. から (kara)'],
      correct: 1
    },
    {
      section: 'Listening Comprehension',
      questionJa: '「いま 何時ですか。」 「午後 三時です。」 時間は 何時ですか。',
      questionEn: 'What time was stated in the dialogue?',
      questionTa: 'உரையாடலில் கூறப்பட்ட நேரம் என்ன?',
      options: ['1. 2:00 PM', '2. 3:00 PM', '3. 4:00 PM', '4. 5:00 PM'],
      correct: 2
    }
  ];

  useEffect(() => {
    let timer: any;
    if (testState === 'active' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0 && testState === 'active') {
      setTestState('completed');
    }
    return () => clearInterval(timer);
  }, [testState, timeLeft]);

  const startTest = () => {
    setTestState('active');
    setTimeLeft(1800);
    setUserAnswers({});
    setCurrentQuestion(0);
  };

  const calculateScore = () => {
    let correctCount = 0;
    mockQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) correctCount++;
    });
    return Math.round((correctCount / mockQuestions.length) * 180); // JLPT 180 max score scale
  };

  return (
    <div className="space-y-6">
      <SenseiAvatar
        messageEn="Official-Style JLPT N5 Mock Test Examiner! Timed exam simulator with standard scoring."
        messageTa="JLPT N5 மாதிரித் தேர்வு மற்றும் மதிப்பெண் பகுப்பாய்வு."
        mood="strict"
      />

      {testState === 'idle' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center shadow-2xl max-w-xl mx-auto space-y-4">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 text-white flex items-center justify-center text-4xl mx-auto shadow-xl">
            🎯
          </div>
          <h2 className="text-2xl font-bold text-white">JLPT N5 Full Simulator Test</h2>
          <p className="text-xs text-slate-400">
            30 Minutes • 180 Max Score • Vocab, Grammar, Reading & Listening Sections
          </p>

          <button
            onClick={startTest}
            className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-2xl shadow-lg transition text-base"
          >
            Begin Official Mock Exam
          </button>
        </div>
      )}

      {testState === 'active' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="text-xs font-mono text-rose-400 font-bold">
              {mockQuestions[currentQuestion].section}
            </span>
            <div className="flex items-center space-x-1 text-amber-400 font-mono font-bold text-sm bg-amber-950/60 px-3 py-1 rounded-xl border border-amber-800">
              <Clock className="w-4 h-4" />
              <span>{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-xl font-bold text-white">
              {mockQuestions[currentQuestion].questionJa}
            </div>
            <p className="text-xs text-slate-400">
              {getText(mockQuestions[currentQuestion].questionEn, mockQuestions[currentQuestion].questionTa)}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mockQuestions[currentQuestion].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setUserAnswers({ ...userAnswers, [currentQuestion]: idx + 1 })}
                  className={`p-4 rounded-xl border text-left text-sm font-semibold transition ${
                    userAnswers[currentQuestion] === idx + 1
                      ? 'bg-rose-950 border-rose-500 text-white shadow'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-800">
            <button
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold disabled:opacity-40"
            >
              Previous
            </button>

            {currentQuestion < mockQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={() => setTestState('completed')}
                className="px-6 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow"
              >
                Submit Test
              </button>
            )}
          </div>
        </div>
      )}

      {testState === 'completed' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center shadow-2xl max-w-xl mx-auto space-y-4">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-4xl mx-auto border border-emerald-500/30">
            🏆
          </div>
          <h3 className="text-2xl font-bold text-white">Mock Test Results</h3>
          <div className="text-4xl font-extrabold text-rose-400">{calculateScore()} / 180</div>
          <p className="text-sm font-bold text-emerald-400">
            {calculateScore() >= 90 ? 'PASSED (合格)' : 'Keep Practicing!'}
          </p>

          <button
            onClick={startTest}
            className="px-6 py-3 bg-rose-600 text-white font-bold rounded-2xl shadow transition"
          >
            Retake Exam
          </button>
        </div>
      )}
    </div>
  );
};
