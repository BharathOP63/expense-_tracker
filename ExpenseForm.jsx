import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount || !category) return;
    
    setIsSubmitting(true);
    try {
      await onAddExpense({ title, amount: parseFloat(amount), category, date });
      setTitle('');
      setAmount('');
      setCategory('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="human-card">
      <h2 className="text-xl font-bold mb-8 text-primary flex items-center gap-2">
        <span>✍️</span> New Transaction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="human-label">What for?</label>
          <input 
            type="text" 
            placeholder="e.g. Shopping, Lunch, Rent" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div>
          <label className="human-label">How much?</label>
          <input 
            type="number" 
            step="0.01"
            placeholder="0.00" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>

        <div>
          <label className="human-label">When?</label>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>

        <div>
          <label className="human-label">Category</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={isSubmitting}
            required
          >
            <option value="">Select a category</option>
            <option value="Food">🍕 Food</option>
            <option value="Shopping">🛍️ Shopping</option>
            <option value="Travel">🚗 Travel</option>
            <option value="Rent">🏠 Rent</option>
            <option value="Entertainment">🎬 Entertainment</option>
            <option value="Utilities">⚡ Utilities</option>
            <option value="Other">📦 Other</option>
          </select>
        </div>

        <button type="submit" disabled={isSubmitting} className="human-btn">
          {isSubmitting ? 'Adding...' : 'Add to Timeline'}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
