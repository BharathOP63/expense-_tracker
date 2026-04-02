import React from 'react';
import { Lightbulb, TrendingUp, Activity } from 'lucide-react';

const InsightCard = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <div className="glass-card fade-in">
        <div className="flex items-center text-secondary mb-4">
          <Activity className="mr-2" size={20} />
          <h3 className="font-bold text-white">Daily Readiness</h3>
        </div>
        <p className="text-secondary italic">Start adding expenses to see real-time insights and saving tips!</p>
      </div>
    );
  }

  // Calculate insights
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const categories = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  const highestCategory = Object.keys(categories).reduce((a, b) => categories[a] > categories[b] ? a : b);
  const highestAmount = categories[highestCategory];

  // Dynamic Tips Logic
  let tip = "Try to set aside 20% of your income for savings.";
  if (highestCategory === 'Food') tip = "Consider meal prepping to reduce your Food expenses.";
  if (highestCategory === 'Shopping') tip = "Wait 24 hours before making non-essential purchases.";
  if (highestCategory === 'Entertainment') tip = "Check for free local events to save on entertainment.";
  if (total > 5000) tip = "You've crossed ₹5,000 in total spend. Review your 'Other' category.";

  return (
    <div className="glass-card fade-in">
      <div className="flex items-center text-primary mb-6">
        <Activity className="mr-2" size={20} />
        <h3 className="font-bold text-white uppercase tracking-wider text-sm">Real-time Insights</h3>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="p-2 bg-primary/10 rounded-lg mr-4 text-primary">
            <TrendingUp size={20} />
          </div>
          <div>
            <div className="text-secondary text-xs uppercase font-bold">Highest Spending</div>
            <div className="text-white font-semibold">{highestCategory}</div>
            <div className="text-primary font-bold">₹{highestAmount.toLocaleString('en-IN')}</div>
          </div>
        </div>

        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
          <div className="flex items-center text-yellow-400 mb-2">
            <Lightbulb size={16} className="mr-2" />
            <span className="text-xs font-bold uppercase">Daily Tip</span>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            {tip}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
