'use client';

import { RotateCcw, Plus, AlertCircle } from 'lucide-react';

const mockRMA = [
  {
    rmaId: 'RMA-9021',
    customer: 'Kamrul Hasan',
    serialNumber: 'LOG-B175-WH-001',
    issue: 'Left click not working',
    stockStatus: 'RMA Stock',
    supplierClaim: 'Supplier Hand',
    date: '17 Aug 2026',
  },
  {
    rmaId: 'RMA-9022',
    customer: 'Farhan Kabir',
    serialNumber: 'DEL-P2422H-BK-009',
    issue: 'Screen flicker issue',
    stockStatus: 'RMA Stock',
    supplierClaim: 'Inspection',
    date: '18 Aug 2026',
  },
];

export default function RMARequestsPage() {
  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            RMA & Warranty Complaints
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Track complaints, supplier hand claims and replacements.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 shadow-sm transition-all">
          <Plus className="w-4 h-4" /> New RMA Ticket
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-3.5 px-6">RMA Ticket</th>
                <th className="py-3.5 px-6">Customer</th>
                <th className="py-3.5 px-6">Faulty Serial</th>
                <th className="py-3.5 px-6">Reported Issue</th>
                <th className="py-3.5 px-6">Current Stock Location</th>
                <th className="py-3.5 px-6">Supplier Claim Status</th>
                <th className="py-3.5 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {mockRMA.map(item => (
                <tr key={item.rmaId} className="hover:bg-slate-50/70">
                  <td className="py-4 px-6 font-mono text-xs font-bold text-blue-600">
                    {item.rmaId}
                  </td>
                  <td className="py-4 px-6 text-xs font-semibold text-slate-800">
                    {item.customer}
                  </td>
                  <td className="py-4 px-6 font-mono text-xs text-rose-600 font-bold">
                    {item.serialNumber}
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-600">
                    {item.issue}
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                      {item.stockStatus}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {item.supplierClaim}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded text-xs font-medium text-slate-700">
                      Manage
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
