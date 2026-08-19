import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SenseiAvatar } from './SenseiAvatar';
import { speakJapanese } from '../utils/speech';
import { Send, Volume2, Mic, Sparkles, MessageSquare } from 'lucide-react';

interface ChatMessage {
  sender: 'sensei' | 'user';
  textJa: string;
  textEn: string;
  textTa: string;
  correction?: string;
}

export const SpeakingPartner: React.FC = () => {
  const { lang, getText, setLang } = useLanguage();
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState<ChatMessage[]>([
    {
      sender: 'sensei',
      textJa: 'こんにちは！お元気ですか。(Konnichiwa! Ogenki desu ka?)',
      textEn: 'Hello! How are you doing today?',
      textTa: 'வணக்கம்! எப்படி இருக்கிறீர்கள்?'
    }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();

    // Language switch command check: "Language: English", "Language: Tamil", "Language: Both"
    if (userText.toLowerCase().includes('language: english')) {
      setLang('english');
      setInput('');
      return;
    }
    if (userText.toLowerCase().includes('language: tamil')) {
      setLang('tamil');
      setInput('');
      return;
    }
    if (userText.toLowerCase().includes('language: both')) {
      setLang('both');
      setInput('');
      return;
    }

    const newLog: ChatMessage[] = [
      ...chatLog,
      {
        sender: 'user',
        textJa: userText,
        textEn: 'User input',
        textTa: 'பயனாளர் உள்ளீடு'
      }
    ];

    setInput('');

    // Generate Sensei Intelligent Response
    setTimeout(() => {
      let senseiReply: ChatMessage = {
        sender: 'sensei',
        textJa: 'いいですね！日本語が とても 上手です！(Nice! Your Japanese is very good!)',
        textEn: 'Great job! Keep practicing basic N5 grammar.',
        textTa: 'மிகச் சிறப்பு! தொடர்ந்து பயிற்சி செய்யுங்கள்.'
      };

      if (userText.includes('わたしの') || userText.includes('わたしは')) {
        senseiReply = {
          sender: 'sensei',
          textJa: 'はい、わかりました。どこに 住んでいますか。(Yes, I understand. Where do you live?)',
          textEn: 'I see! Where do you live right now?',
          textTa: 'புரிந்தது. நீங்கள் எங்கே வசிக்கிறீர்கள்?'
        };
      }

      setChatLog((prev) => [...prev, senseiReply]);
      speakJapanese(senseiReply.textJa);
    }, 600);
  };

  return (
    <div className="space-y-6">
      <SenseiAvatar
        messageEn="Interactive Japanese Speaking Partner! Practice real dialogues with instant Sensei correction."
        messageTa="நேரடி ஜப்பானிய பேச்சுப் பயிற்சி மற்றும் ஆசிரியர் வழிகாட்டல்."
        mood="happy"
      />

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl max-w-3xl mx-auto flex flex-col h-[520px]">
        {/* Chat History Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin">
          {chatLog.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start space-x-3 ${
                msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shadow ${
                  msg.sender === 'sensei'
                    ? 'bg-gradient-to-tr from-rose-600 to-amber-500 text-white'
                    : 'bg-slate-700 text-slate-200'
                }`}
              >
                {msg.sender === 'sensei' ? '⛩️' : '👤'}
              </div>

              <div
                className={`max-w-md p-4 rounded-2xl shadow text-sm ${
                  msg.sender === 'sensei'
                    ? 'bg-slate-950 border border-slate-800 text-slate-100'
                    : 'bg-rose-600 text-white font-medium'
                }`}
              >
                <div className="font-semibold text-base mb-1">{msg.textJa}</div>
                <div className="text-xs opacity-80">{getText(msg.textEn, msg.textTa)}</div>

                {msg.sender === 'sensei' && (
                  <button
                    onClick={() => speakJapanese(msg.textJa)}
                    className="mt-2 text-[10px] text-rose-400 hover:text-rose-300 flex items-center space-x-1 font-mono"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen Dialogue</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="mt-4 flex items-center space-x-2 pt-3 border-t border-slate-800">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type Japanese (e.g. わたしは マイク です) or command..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-rose-500"
          />

          <button
            type="submit"
            className="bg-rose-600 hover:bg-rose-500 text-white p-3 rounded-2xl shadow transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
