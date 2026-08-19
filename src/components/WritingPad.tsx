import React, { useRef, useState, useEffect } from 'react';
import { Eraser, RotateCcw, Check, PenTool } from 'lucide-react';

interface WritingPadProps {
  character: string;
  onClear?: () => void;
}

export const WritingPad: React.FC<WritingPadProps> = ({ character, onClear }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.strokeStyle = '#f43f5e'; // Rose color for drawing
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (onClear) onClear();
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.beginPath();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 bg-slate-950 border-2 border-rose-500/40 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
        {/* Background Grid Guide Lines */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none opacity-20 border-dashed border-slate-600">
          <div className="border-r border-b border-dashed border-slate-500" />
          <div className="border-b border-dashed border-slate-500" />
          <div className="border-r border-dashed border-slate-500" />
          <div />
        </div>

        {/* Character Stroke Guide Background */}
        {showGuide && (
          <div className="absolute inset-0 flex items-center justify-center text-8xl font-serif text-slate-800 pointer-events-none select-none">
            {character}
          </div>
        )}

        {/* Interactive Canvas */}
        <canvas
          ref={canvasRef}
          width={256}
          height={256}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={draw}
          className="absolute inset-0 cursor-crosshair touch-none"
        />
      </div>

      {/* Writing Pad Control Tools */}
      <div className="flex items-center space-x-2 mt-3">
        <button
          onClick={() => setShowGuide(!showGuide)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
            showGuide ? 'bg-rose-950 border-rose-700 text-rose-300' : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          {showGuide ? 'Hide Guide' : 'Show Guide'}
        </button>

        <button
          onClick={clearCanvas}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-lg text-xs font-semibold flex items-center space-x-1 transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear Canvas</span>
        </button>
      </div>
    </div>
  );
};
