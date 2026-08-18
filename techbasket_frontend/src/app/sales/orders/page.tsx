'use client';

import { useState } from 'react';
import { Search, Plus, Eye, ShoppingBag } from 'lucide-react';

const mockSales = [
  {
    orderId: 'SO-2026-001',
    customer: 'Rahim Chowdhury',
    phone: '+8801700000000',
    product: 'Logitech B175 Mouse',
    serialAssigned: 'LOG-B175-WH-001',
    amount: '৳ 1,250',
    date: '18 Aug 2026',
    status: 'Completed',
  },
  {
    orderId: 'SO-2026-002',
    customer: 'Tanvir Ahmed',
    phone: '+8801800000000',
    product: 'Dell UltraSharp 27"',
    serialAssigned: 'DEL-U2723-BK-042',
    amount: '৳ 58,000',
    date: '18 Aug 2026',
    status: 'Completed',
  },
];

export default function SalesOrdersPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            Sales Orders
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Manage sales and verified serial assigned transactions.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 shadow-sm transition-all">
          <Plus className="w-4 h-4" /> Create Sale
        </button>
      </div>

      <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search Order ID, Serial, Customer..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-3.5 px-6">Order ID</th>
                <th className="py-3.5 px-6">Customer</th>
                <th className="py-3.5 px-6">Product Title</th>
                <th className="py-3.5 px-6">Assigned Serial</th>
                <th className="py-3.5 px-6">Amount</th>
                <th className="py-3.5 px-6">Date</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {mockSales.map(item => (
                <tr
                  key={item.orderId}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="py-4 px-6 font-mono text-xs font-bold text-blue-600">
                    {item.orderId}
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-semibold text-slate-800 text-xs">
                      {item.customer}
                    </p>
                    <p className="text-[11px] text-slate-400">{item.phone}</p>
                  </td>
                  <td className="py-4 px-6 text-slate-700 text-xs font-medium">
                    {item.product}
                  </td>
                  <td className="py-4 px-6 font-mono text-xs text-slate-600">
                    <span className="px-2 py-0.5 bg-slate-100 rounded border border-slate-200 font-semibold">
                      {item.serialAssigned}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-800 text-xs">
                    {item.amount}
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-xs">
                    {item.date}
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                      {item.status}
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
