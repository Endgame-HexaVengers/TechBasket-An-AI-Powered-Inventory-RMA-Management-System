'use client';

import { useState } from 'react';
import { Search, ChevronDown, Layers } from 'lucide-react';
import { ProductApprovalItem, ApprovalStatus } from '@/types';

const mockApprovals: ProductApprovalItem[] = [
  {
    id: 'PRD-001',
    productTitle: 'Logitech B175 Mouse',
    sku: 'LOG-B175-WH',
    brand: 'Logitech',
    category: 'Accessories',
    submittedBy: 'Chan Badsha',
    date: '17 Aug 2026',
    status: 'Pending',
  },
  {
    id: 'PRD-002',
    productTitle: 'Dell UltraSharp 27"',
    sku: 'DEL-U2723QE',
    brand: 'Dell',
    category: 'Monitors',
    submittedBy: 'Sarah Jenkins',
    date: '16 Aug 2026',
    status: 'Pending',
  },
];

export default function ProductApprovalPage() {
  const [activeTab, setActiveTab] = useState<ApprovalStatus>('Pending');
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Page Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Product Approval
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Review and approve products before they become available for business
          operations.
        </p>
      </div>

      {/* Status Tabs */}
      <div className="flex items-center gap-4 sm:gap-6 border-b border-slate-200 overflow-x-auto no-scrollbar">
        {(['Pending', 'Approved', 'Rejected'] as ApprovalStatus[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 font-medium text-xs sm:text-sm flex items-center gap-2 border-b-2 whitespace-nowrap transition-all ${
              activeTab === tab
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab}
            {tab === 'Pending' && (
              <span className="bg-blue-600 text-white text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full font-semibold">
                12
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 flex-1">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search Title, SKU..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
            />
          </div>
          <div className="grid grid-cols-2 sm:flex items-center gap-2">
            <button className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 flex items-center justify-between sm:justify-center gap-2">
              <span>Brand: All</span>{' '}
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 flex items-center justify-between sm:justify-center gap-2">
              <span>Category: All</span>{' '}
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button className="col-span-2 sm:col-span-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 flex items-center justify-between sm:justify-center gap-2">
              <span>Date: Newest</span>{' '}
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>
        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 text-center sm:text-right shrink-0">
          Clear Filters
        </button>
      </div>

      {/* Responsive Table Container */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-4 sm:px-6">Product</th>
                <th className="py-3.5 px-4 sm:px-6">SKU</th>
                <th className="py-3.5 px-4 sm:px-6">Brand</th>
                <th className="py-3.5 px-4 sm:px-6">Category</th>
                <th className="py-3.5 px-4 sm:px-6">Submitted By</th>
                <th className="py-3.5 px-4 sm:px-6">Date</th>
                <th className="py-3.5 px-4 sm:px-6">Status</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {mockApprovals.map(item => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 flex items-center gap-3">
                    <div className="w-9 h-9 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4 text-slate-400" />
                    </div>
                    <span className="truncate max-w-[140px] sm:max-w-[200px]">
                      {item.productTitle}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-slate-600 whitespace-nowrap">
                    {item.sku}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                    {item.brand}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                    {item.category}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-700 whitespace-nowrap">
                    {item.submittedBy}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500 text-xs whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-right whitespace-nowrap">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition-all">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Pagination */}
        <div className="p-3 sm:p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Showing 1 to 2 of 12 entries</span>
          <div className="flex gap-1">
            <button className="px-2.5 py-1 border border-slate-200 rounded-md hover:bg-slate-50">
              &lt;
            </button>
            <button className="px-2.5 py-1 border border-slate-200 rounded-md hover:bg-slate-50">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
