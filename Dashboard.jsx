import React from 'react';

const Dashboard = ({ totalAmount, expenseCount }) => {
  return (
    <div className="glass-card summary-card fade-in">
      <div className="text-secondary font-semibold uppercase tracking-wider text-xs mb-2">Total Balance</div>
      <div className="total-amount">
        ₹{totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
      <div className="text-secondary mt-2">
        Tracking <span className="font-bold text-white">{expenseCount}</span> expenses
      </div>
    </div>
  );
};

export default Dashboard;
