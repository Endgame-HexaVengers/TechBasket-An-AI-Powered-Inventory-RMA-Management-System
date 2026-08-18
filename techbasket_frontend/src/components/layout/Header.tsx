'use client';

import { Search, Bell, Store, ChevronDown, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="h-16 border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8 flex items-center justify-between shrink-0 sticky top-0 z-20">
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          className="p-2 -ml-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden focus:outline-none"
        >
          <Menu className="w-5 h-5" />
        </button>

        <span className="font-bold text-slate-800 text-sm sm:text-base whitespace-nowrap">
          TechBasket ERP
        </span>

        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-medium text-slate-600">
          <Store className="w-3.5 h-3.5" />
          <span>MPL Shop 1316</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search - Hidden on small mobile, expands on larger */}
        <div className="relative hidden md:block w-52 lg:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search everywhere..."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Mobile Search Icon Button */}
        <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg border border-slate-200 md:hidden">
          <Search className="w-4 h-4" />
        </button>

        {/* Notification */}
        <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg border border-slate-200">
          <Bell className="w-4 h-4" />
        </button>

        {/* User Profile Info */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
            JH
          </div>
          <span className="text-xs font-medium text-slate-700 hidden sm:inline-block truncate max-w-[100px] lg:max-w-none">
            JOBAYER HOSEN
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </div>
      </div>
    </header>
  );
}
