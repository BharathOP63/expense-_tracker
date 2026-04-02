import React, { useState } from 'react';
import { Sparkles, Zap, Send } from 'lucide-react';
import { parseExpense } from '../services/aiService';
import { toast } from 'react-toastify';

const MagicBar = ({ onAddExpense }) => {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsProcessing(true);
    
    // Simulate AI 'Thinking'
    setTimeout(async () => {
      const parsed = parseExpense(input);
      if (parsed.amount && !isNaN(parsed.amount)) {
        await onAddExpense(parsed);
        setInput('');
      } else {
        toast.warn("I couldn't find an amount in that! Try: '500 for coffee'", {
          icon: "🤔",
          theme: "colored"
        });
      }
      setIsProcessing(false);
    }, 800);
  };

  return (
    <div className="human-card !p-1 border-none shadow-[0_20px_50px_rgba(99,102,241,0.2)] bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#ec4899] mb-12 relative group overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-all duration-700">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-[60px] animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-400 rounded-full blur-[60px] animate-pulse delay-1000"></div>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 flex items-center bg-white/95 backdrop-blur-md rounded-[1.8rem] p-1.5 transition-all group-focus-within:ring-4 ring-white/50">
        <div className="pl-4 pr-2 text-indigo-600">
          <Sparkles size={20} className="animate-spin-slow" />
        </div>
        
        <input 
          type="text"
          placeholder="Try: 'I just spent 500 on coffee' 🪄"
          className="flex-1 bg-transparent border-none text-gray-900 font-bold placeholder:text-gray-400 placeholder:font-semibold focus:ring-0 text-sm py-3 px-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isProcessing}
        />

        <button 
          type="submit" 
          disabled={isProcessing || !input.trim()}
          className={`px-6 py-3 rounded-2xl transition-all flex items-center gap-2 ${
            isProcessing ? 'bg-slate-200 text-slate-400' : 'bg-slate-900 text-white hover:bg-black shadow-lg shadow-black/10'
          }`}
        >
          {isProcessing ? (
            <div className="animate-spin h-4 w-4 border-2 border-slate-300 border-t-slate-800 rounded-full"></div>
          ) : (
            <Zap size={16} fill="currentColor" />
          )}
          <span className="font-black text-[10px] uppercase tracking-widest">Magic Add</span>
        </button>
      </form>

      {/* Helper text overlay */}
      <div className="absolute -bottom-6 left-6 text-[10px] text-indigo-400 font-bold uppercase tracking-widest opacity-0 group-focus-within:opacity-100 transition-opacity">
        Try: "Spent 500 on Amazon", "Gas 1200", "Dinner for 800"
      </div>
    </div>
  );
};

export default MagicBar;
