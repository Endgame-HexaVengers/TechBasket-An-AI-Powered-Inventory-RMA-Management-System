'use client';

import { useState } from 'react';
import {
  Search,
  Plus,
  MoreVertical,
  SlidersHorizontal,
  ChevronDown,
} from 'lucide-react';
import { ProductItem } from '@/types';

const mockProducts: ProductItem[] = [
  {
    id: 'PRD-001',
    productTitle: 'Logitech B175 Mouse',
    sku: 'LOG-B175-WH',
    brand: 'Logitech',
    category: 'Mouse',
    color: 'White',
    warranty: '365 Days',
    status: 'Active',
  },
  {
    id: 'PRD-002',
    productTitle: 'Logitech B175 Mouse',
    sku: 'LOG-B175-BK',
    brand: 'Logitech',
    category: 'Mouse',
    color: 'Black',
    warranty: '365 Days',
    status: 'Active',
  },
  {
    id: 'PRD-003',
    productTitle: 'Logitech K120 Keyboard',
    sku: 'LOG-K120-BK',
    brand: 'Logitech',
    category: 'Keyboard',
    color: 'Black',
    warranty: '365 Days',
    status: 'Active',
  },
  {
    id: 'PRD-004',
    productTitle: 'Dell P2422H Monitor',
    sku: 'DEL-P2422H',
    brand: 'Dell',
    category: 'Monitor',
    color: 'Black',
    warranty: '3 Years',
    status: 'Active',
  },
];

export default function AdminProductsPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Products
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage product information, SKU, brand, category and warranty
            details.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 shadow-sm transition-all shrink-0">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by product title or SKU..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 flex items-center justify-between gap-2">
              Brand <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 flex items-center justify-between gap-2">
              Category <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 flex items-center justify-between gap-2">
              Color <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 flex items-center justify-between gap-2">
              Status <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-3.5 px-6">Product</th>
                <th className="py-3.5 px-6">SKU</th>
                <th className="py-3.5 px-6">Brand</th>
                <th className="py-3.5 px-6">Category</th>
                <th className="py-3.5 px-6">Color</th>
                <th className="py-3.5 px-6">Warranty</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {mockProducts.map(item => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="py-4 px-6 font-semibold text-slate-900 text-xs flex items-center gap-3">
                    <div className="w-9 h-9 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-[10px] text-slate-400 font-bold">
                        IMG
                      </span>
                    </div>
                    {item.productTitle}
                  </td>
                  <td className="py-4 px-6 font-mono text-xs text-slate-600">
                    {item.sku}
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-600">
                    {item.brand}
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-600">
                    {item.category}
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-600">
                    {item.color}
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-700 font-medium">
                    {item.warranty}
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-1 text-slate-400 hover:text-slate-700 rounded-lg">
                      <MoreVertical className="w-4 h-4" />
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
