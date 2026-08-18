'use client';

import { Plus, Eye } from 'lucide-react';

const mockPurchases = [
  {
    purchaseId: 'PUR-000123',
    supplier: 'DHL Distribution',
    branch: 'MPL Shop 1316',
    totalUnits: 20,
    totalBill: '৳ 22,000',
    date: '15 Aug 2026',
    approvalStatus: 'Approved',
  },
  {
    purchaseId: 'PUR-000124',
    supplier: 'Excel Technologies',
    branch: 'MPL Shop 1316',
    totalUnits: 10,
    totalBill: '৳ 9,000',
    date: '17 Aug 2026',
    approvalStatus: 'Pending',
  },
];

export default function PurchaseOrdersPage() {
  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            Purchase Invoices & Batches
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Track multi-batch procurement and unique serial numbers entry.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 shadow-sm transition-all">
          <Plus className="w-4 h-4" /> New Batch Purchase
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-3.5 px-6">Purchase ID</th>
                <th className="py-3.5 px-6">Supplier</th>
                <th className="py-3.5 px-6">Branch</th>
                <th className="py-3.5 px-6">Quantity</th>
                <th className="py-3.5 px-6">Total Bill</th>
                <th className="py-3.5 px-6">Date</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {mockPurchases.map(item => (
                <tr key={item.purchaseId} className="hover:bg-slate-50/70">
                  <td className="py-4 px-6 font-mono text-xs font-bold text-blue-600">
                    {item.purchaseId}
                  </td>
                  <td className="py-4 px-6 text-xs font-semibold text-slate-800">
                    {item.supplier}
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-600">
                    {item.branch}
                  </td>
                  <td className="py-4 px-6 text-xs font-bold text-slate-800">
                    {item.totalUnits} Units
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-800 text-xs">
                    {item.totalBill}
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-xs">
                    {item.date}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        item.approvalStatus === 'Approved'
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                          : 'bg-amber-50 text-amber-600 border-amber-200'
                      }`}
                    >
                      {item.approvalStatus}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
