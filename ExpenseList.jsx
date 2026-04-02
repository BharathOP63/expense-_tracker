import React, { useState } from 'react';
import { Trash2, TrendingDown, Calendar, Tag, Search, Filter } from 'lucide-react';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Food', 'Shopping', 'Travel', 'Rent', 'Entertainment', 'Utilities', 'Other'];

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || expense.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="glass-card h-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-xl font-bold text-primary flex items-center">
            <TrendingDown className="mr-2" /> Daily History
          </h2>
          <p className="text-secondary text-xs mt-1">Review your recent transactions</p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm w-full sm:w-48 focus:border-primary outline-none transition-all"
            />
          </div>

          <div className="relative">
            <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
            <select 
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white w-full sm:w-auto focus:border-primary cursor-pointer outline-none transition-all appearance-none"
            >
              {categories.map(cat => <option key={cat} value={cat} className="bg-slate-900">{cat}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="expense-list-container space-y-2">
        {filteredExpenses.length === 0 ? (
          <div className="text-center text-secondary py-16 italic font-medium bg-white/5 rounded-2xl border border-dashed border-white/10">
            No transactions found matching your criteria.
          </div>
        ) : (
          filteredExpenses.map((expense) => (
            <div key={expense.id} className="expense-item group hover:bg-white/10 hover:translate-x-1 transition-all p-4 rounded-2xl border border-transparent hover:border-white/5">
              <div className="flex justify-between items-center w-full">
                <div className="flex-1">
                  <div className="text-white font-semibold text-lg">{expense.title}</div>
                  <div className="flex items-center space-x-4 mt-1 text-secondary text-xs">
                    <span className="flex items-center"><Tag size={12} className="mr-1 text-primary" /> {expense.category}</span>
                    <span className="flex items-center"><Calendar size={12} className="mr-1 text-primary" /> {expense.date}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="amount text-xl font-bold text-white">-₹{expense.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  <button 
                    onClick={() => onDeleteExpense(expense.id)}
                    className="p-3 text-secondary hover:text-danger hover:bg-danger/10 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                    title="Delete Transaction"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
