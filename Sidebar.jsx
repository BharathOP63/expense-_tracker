import React from 'react';
import { LayoutDashboard, Receipt, PiggyBank, BarChart3, Goal, Share2, Wallet } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Receipt, label: 'Transactions' },
    { icon: PiggyBank, label: 'Budgets' },
    { icon: BarChart3, label: 'Reports' },
    { icon: Goal, label: 'Savings Goals' },
    { icon: Share2, label: 'Export Data' },
  ];

  return (
    <aside className="sidebar sticky top-0 h-screen">
      <div className="flex items-center gap-3 mb-12 px-4">
        <div className="bg-primary p-2 rounded-xl text-white">
          <Wallet size={24} />
        </div>
        <div>
          <h1 className="text-xl font-extrabold text-[#111827] tracking-tight leading-tight">Expense<br/>Tracker</h1>
          <p className="text-[10px] text-secondary font-semibold uppercase tracking-widest mt-1 opacity-70">Empowering Finance</p>
        </div>
      </div>

      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.label.toLowerCase().replace(' ', '-')}`}
            className={`nav-link flex items-center gap-3 ${item.active ? 'active' : ''}`}
          >
            <item.icon size={20} className={item.active ? 'text-primary' : 'text-secondary'} />
            <span className="text-sm font-semibold">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto px-4 py-6 border-t border-border-light bg-slate-50/50 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-indigo-400 flex items-center justify-center text-white font-bold shadow-lg">B</div>
          <div>
            <p className="text-sm font-bold text-gray-900 leading-none">Bharath</p>
            <p className="text-[10px] text-secondary font-medium mt-1">Free Tier Account</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
