import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, PieChart as PieChartIcon } from 'lucide-react';

const StatCards = ({ totalBalance, monthlyIncome, monthlyExpenses }) => {
  const savingsRate = monthlyIncome > 0 
    ? (((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100).toFixed(1) 
    : 0;

  const stats = [
    { label: 'Total Balance', value: totalBalance, icon: DollarSign, color: 'text-indigo-600', trend: '+12% from last month', trendColor: 'text-emerald-500' },
    { label: 'Monthly Income', value: monthlyIncome, icon: TrendingUp, color: 'text-emerald-600', trend: 'Budgeted: ₹15,000', trendColor: 'text-gray-400' },
    { label: 'Monthly Expenses', value: monthlyExpenses, icon: TrendingDown, color: 'text-rose-600', trend: 'Spent this month', trendColor: 'text-gray-400' },
    { label: 'Savings Rate', value: `${savingsRate}%`, icon: PieChartIcon, color: 'text-amber-600', trend: 'Of monthly income', trendColor: 'text-gray-400' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((stat, index) => (
        <div key={index} className="glass-card stat-card border-none ring-1 ring-slate-200">
          <div className="flex justify-between items-start mb-2">
            <span className="stat-label">{stat.label}</span>
            <div className={`p-2 rounded-lg bg-slate-50 ${stat.color}`}>
              <stat.icon size={20} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="stat-value text-gray-900">
              {typeof stat.value === 'number' 
                ? `₹${stat.value.toLocaleString('en-IN')}` 
                : stat.value}
            </span>
            <span className={`text-[11px] font-bold mt-2 ${stat.trendColor}`}>
              {stat.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
