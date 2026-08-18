'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BadgeDollarSign,
  RotateCcw,
  ShoppingCart,
  ShieldCheck,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Layers,
  ChevronDown,
  X,
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  onClose?: () => void;
}

interface NavSubItem {
  name: string;
  href: string;
}

interface NavSection {
  name: string;
  icon: any;
  subItems: NavSubItem[];
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  // TechBasket Navigation Configuration
  const navSections: NavSection[] = [
    {
      name: 'Sales',
      icon: BadgeDollarSign,
      subItems: [
        { name: 'Sales Orders', href: '/sales/orders' },
        { name: 'Customers', href: '/sales/customers' },
        { name: 'Invoices', href: '/sales/invoices' },
      ],
    },
    {
      name: 'RMA',
      icon: RotateCcw,
      subItems: [
        { name: 'RMA Requests', href: '/rma/requests' },
        { name: 'RMA Stock', href: '/rma/stock' },
        { name: 'Supplier Claims', href: '/rma/supplier-claims' },
        { name: 'RMA History', href: '/rma/history' },
      ],
    },
    {
      name: 'Purchase',
      icon: ShoppingCart,
      subItems: [
        { name: 'New Purchase', href: '/purchase/new' },
        { name: 'Purchase Orders', href: '/purchase/orders' },
        { name: 'Purchase Returns', href: '/purchase/returns' },
        { name: 'Purchase Invoices', href: '/purchase/invoices' },
      ],
    },
    {
      name: 'Approval',
      icon: ShieldCheck,
      subItems: [
        { name: 'Product Approval', href: '/approval' },
        { name: 'Purchase Approval', href: '/approval/purchase' },
        { name: 'Transfer Approval', href: '/approval/transfer' },
      ],
    },
    {
      name: 'Reports',
      icon: BarChart3,
      subItems: [
        { name: 'Sales Reports', href: '/reports/sales' },
        { name: 'Purchase Reports', href: '/reports/purchase' },
        { name: 'Inventory Reports', href: '/reports/inventory' },
        { name: 'RMA Reports', href: '/reports/rma' },
      ],
    },
    {
      name: 'Admin',
      icon: Settings,
      subItems: [
        { name: 'Products', href: '/admin/products' },
        { name: 'Categories', href: '/admin/categories' },
        { name: 'Brands', href: '/admin/brands' },
        { name: 'Suppliers', href: '/admin/suppliers' },
        { name: 'Stock Management', href: '/admin/stock' },
        { name: 'Stock Transfer', href: '/admin/transfer' },
        { name: 'Branches', href: '/admin/branches' },
        { name: 'Users', href: '/admin/users' },
      ],
    },
  ];

  // Manage open/close state for all sections (Approval and Admin are open by default)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Sales: false,
    RMA: false,
    Purchase: false,
    Approval: true,
    Reports: false,
    Admin: true,
  });

  const toggleSection = (sectionName: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 h-full shadow-lg lg:shadow-none">
      <div className="overflow-y-auto flex-1">
        {/* Brand Header & Mobile Close */}
        <div className="p-5 flex items-center justify-between sticky top-0 bg-white z-10 border-b border-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 text-base leading-tight">
                TechBasket
              </h1>
              <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                Enterprise Logistics
              </p>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Dropdown Navigation Menu */}
        <nav className="px-3 space-y-1.5 py-4">
          {navSections.map(section => {
            const Icon = section.icon;
            const isOpen = openSections[section.name];
            const isAnySubActive = section.subItems.some(
              sub => pathname === sub.href,
            );

            return (
              <div key={section.name} className="space-y-1">
                {/* Main Accordion Button */}
                <button
                  onClick={() => toggleSection(section.name)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                    isAnySubActive
                      ? 'bg-blue-50/70 text-blue-600 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-5 h-5 ${isAnySubActive ? 'text-blue-600' : 'text-slate-400'}`}
                    />
                    <span>{section.name}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-slate-600' : ''
                    }`}
                  />
                </button>

                {/* Sub Items List */}
                {isOpen && (
                  <div className="ml-8 space-y-1 border-l-2 border-slate-100 pl-3 py-1">
                    {section.subItems.map(sub => {
                      const isActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={onClose}
                          className={`block py-1.5 px-3 rounded-lg text-xs font-medium transition-colors ${
                            isActive
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Footer Profile Section */}
      <div className="p-4 border-t border-slate-100 space-y-1.5 shrink-0 bg-white">
        <Link
          href="/help"
          className="flex items-center gap-3 px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 rounded-lg"
        >
          <HelpCircle className="w-4 h-4" /> Help Center
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-1.5 text-xs text-slate-500 hover:text-red-600 rounded-lg">
          <LogOut className="w-4 h-4" /> Logout
        </button>
        <div className="flex items-center gap-3 px-3 py-2 mt-2 bg-slate-50 rounded-xl border border-slate-100">
          <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
            UA
          </div>
          <div className="text-left overflow-hidden">
            <p className="text-xs font-bold text-slate-800 truncate">
              User Admin
            </p>
            <p className="text-[10px] text-slate-400">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
