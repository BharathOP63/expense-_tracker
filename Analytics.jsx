import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Analytics = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <div className="human-card border-none bg-slate-50 flex flex-col items-center justify-center py-20">
        <div className="text-4xl mb-4 opacity-20">📊</div>
        <p className="text-secondary font-medium italic text-center">Your Graphical Explanation will appear here once you add expenses!</p>
      </div>
    );
  }

  // Aggregate data by category
  const categoryData = expenses.reduce((acc, curr) => {
    const existing = acc.find(item => item.name === curr.category);
    if (existing) {
      existing.value += curr.amount;
    } else {
      acc.push({ name: curr.category, value: curr.amount });
    }
    return acc;
  }, []);

  const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b', '#10b981', '#3b82f6'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/10">
          <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1.5 tracking-widest">{payload[0].name}</p>
          <p className="text-xl font-black text-white leading-tight">₹{payload[0].value.toLocaleString('en-IN')}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="human-card border-none bg-white/5 relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Graphical Explanation</h3>
        
        {/* Important: ResponsiveContainer needs a specific height to render properly */}
        <div style={{ width: '100%', height: '300px' }} className="flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={6}
                dataKey="value"
                stroke="none"
                isAnimationActive={true}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} style={{ outline: 'none' }} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} cursor={false} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-12 grid grid-cols-2 gap-4">
          {categoryData.map((item, index) => (
            <div key={item.name} className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-2xl shadow-sm border border-white/5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
              <div className="flex-1">
                <div className="text-[9px] font-black text-slate-400 uppercase leading-none mb-1 tracking-wider">{item.name}</div>
                <div className="text-[13px] font-bold text-white leading-tight">₹{item.value.toLocaleString('en-IN')}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -top-10 -right-10 p-8 opacity-5">
        <span className="text-8xl font-black">GRAPH</span>
      </div>
    </div>
  );
};

export default Analytics;
