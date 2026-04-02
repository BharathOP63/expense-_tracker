import React from 'react';
import { Sparkles, Activity, TrendingUp, Target, Zap } from 'lucide-react';
import { generateHealthScore, getSmartAdvice, getAIMetrics } from '../services/aiService';

const AIAssistant = ({ expenses }) => {
  const healthScore = generateHealthScore(expenses);
  const advice = getSmartAdvice(expenses);
  const metrics = getAIMetrics(expenses);

  const getScoreColor = () => {
    if (healthScore >= 80) return 'text-emerald-500';
    if (healthScore >= 60) return 'text-amber-500';
    return 'text-rose-500';
  };

  const getScoreStatus = () => {
    if (healthScore >= 80) return 'Perfect';
    if (healthScore >= 60) return 'Steady';
    return 'Warning';
  };

  return (
    <div className="human-card !p-8 border-none bg-slate-900 text-white relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-20 blur-[100px] pointer-events-none group-hover:opacity-30 transition-opacity"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-10">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 rounded-2xl text-primary">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">Financial AI Assistant</h3>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mt-1">Ready for Analysis</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-5xl font-black ${getScoreColor()} leading-none`}>
              {Math.round(healthScore)}%
            </div>
            <div className={`text-[10px] font-black uppercase tracking-widest mt-2 ${getScoreColor()}`}>
              Health Score: {getScoreStatus()}
            </div>
          </div>
        </div>

        {/* AI Insight Bubble */}
        <div className="bg-white/5 rounded-3xl p-6 border border-white/5 mb-8 relative">
          <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
            AI Insight
          </div>
          <p className="text-slate-300 font-medium leading-relaxed italic text-lg">
            "{advice}"
          </p>
        </div>

        {/* Action Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-1">
            <TrendingUp size={16} className="text-emerald-400 mb-1" />
            <span className="text-[10px] text-slate-500 font-bold uppercase">Budget Left</span>
            <span className="text-sm font-bold">₹{(metrics.budgetLeft / 1000).toFixed(1)}k</span>
          </div>
          <div className="flex flex-col gap-1">
            <Activity size={16} className="text-primary mb-1" />
            <span className="text-[10px] text-slate-500 font-bold uppercase">Consistency</span>
            <span className="text-sm font-bold">{metrics.consistency}%</span>
          </div>
          <div className="flex flex-col gap-1">
            <Target size={16} className="text-amber-400 mb-1" />
            <span className="text-[10px] text-slate-500 font-bold uppercase">Goals Met</span>
            <span className="text-sm font-bold">{metrics.goalsMet}</span>
          </div>
          <div className="flex flex-col gap-1">
            <Zap size={16} className="text-indigo-400 mb-1" />
            <span className="text-[10px] text-slate-500 font-bold uppercase">Smart Rank</span>
            <span className="text-sm font-bold">{metrics.smartRank}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
