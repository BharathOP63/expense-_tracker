import React from 'react';
import { Trash2, Utensils, ShoppingBag, Car, Home, Film, Zap, Package } from 'lucide-react';

const CategoryIcon = ({ category }) => {
  const props = { size: 20, className: "text-primary" };
  switch (category) {
    case 'Food': return <Utensils {...props} />;
    case 'Shopping': return <ShoppingBag {...props} />;
    case 'Travel': return <Car {...props} />;
    case 'Rent': return <Home {...props} />;
    case 'Entertainment': return <Film {...props} />;
    case 'Utilities': return <Zap {...props} />;
    default: return <Package {...props} />;
  }
};

const Timeline = ({ expenses, onDeleteExpense }) => {
  if (expenses.length === 0) {
    return (
      <div className="text-center py-20 px-8 human-card">
        <div className="text-4xl mb-4">✨</div>
        <p className="text-secondary font-medium">Your timeline is empty. Ready to track your first expense?</p>
      </div>
    );
  }

  // Sort expenses by date descending
  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Group expenses human-style
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  const groups = sortedExpenses.reduce((acc, exp) => {
    let header = exp.date;
    if (exp.date === today) header = "Today";
    else if (exp.date === yesterday) header = "Yesterday";
    else {
      // Format as "24 March"
      const d = new Date(exp.date);
      header = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long' });
    }

    if (!acc[header]) acc[header] = [];
    acc[header].push(exp);
    return acc;
  }, {});

  return (
    <div className="fade-in">
      {Object.entries(groups).map(([header, items]) => (
        <div key={header} className="timeline-group">
          <h3 className="timeline-header">{header}</h3>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="human-item group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-50 rounded-2xl">
                    <CategoryIcon category={item.category} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.title}</div>
                    <div className="text-xs text-secondary font-semibold uppercase tracking-wider">{item.category}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-lg font-extrabold text-gray-900">
                    ₹{item.amount.toLocaleString('en-IN')}
                  </div>
                  <button 
                    onClick={() => onDeleteExpense(item.id)}
                    className="p-3 text-secondary hover:text-danger hover:bg-danger/10 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
