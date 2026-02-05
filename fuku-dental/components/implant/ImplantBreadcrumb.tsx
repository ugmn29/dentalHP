import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ImplantBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function ImplantBreadcrumb({ items }: ImplantBreadcrumbProps) {
  const allItems = [
    { label: '\u30DB\u30FC\u30E0', href: '/' },
    { label: '\u30A4\u30F3\u30D7\u30E9\u30F3\u30C8', href: '/implant' },
    ...items,
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center flex-wrap gap-1 text-sm text-gray-500">
          {allItems.map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />}
              {item.href && i < allItems.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-[#395b45] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#395b45] font-medium">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
