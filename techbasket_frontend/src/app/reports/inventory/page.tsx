'use client';

import { BarChart3, TrendingUp, AlertTriangle, Layers } from 'lucide-react';

export default function InventoryReportsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Inventory & Stock Analytics
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Live overview of Current Stock, RMA Stock and Batch Values.
        </p>
      </div>

      {/* Analytics KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Current Stock
          </p>
          <p className="text-2xl font-bold text-slate-900 mt-2">1,248 Units</p>
          <span className="text-[11px] text-emerald-600 font-medium mt-1 inline-block">
            ● Operational
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            RMA Stock
          </p>
          <p className="text-2xl font-bold text-amber-600 mt-2">34 Units</p>
          <span className="text-[11px] text-amber-600 font-medium mt-1 inline-block">
            ● Under Processing
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Supplier Hand Units
          </p>
          <p className="text-2xl font-bold text-indigo-600 mt-2">12 Units</p>
          <span className="text-[11px] text-indigo-600 font-medium mt-1 inline-block">
            ● Warranty Claim
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            AI Restock Alert
          </p>
          <p className="text-2xl font-bold text-rose-600 mt-2">3 SKUs</p>
          <span className="text-[11px] text-rose-500 font-medium mt-1 inline-block">
            ● Low Stock Threshold
          </span>
        </div>
      </div>

      {/* Stock Summary Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <h2 className="text-sm font-bold text-slate-900 mb-4">
          Branch-wise Breakdown (MPL Shop 1316)
        </h2>
        <div className="divide-y divide-slate-100">
          <div className="py-3 flex justify-between text-xs">
            <span className="font-semibold text-slate-700">
              Logitech B175 Wireless Mouse
            </span>
            <span className="font-bold text-slate-900">
              142 In-Stock / 3 RMA
            </span>
          </div>
          <div className="py-3 flex justify-between text-xs">
            <span className="font-semibold text-slate-700">
              Dell UltraSharp 27" 4K
            </span>
            <span className="font-bold text-slate-900">
              18 In-Stock / 1 RMA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
