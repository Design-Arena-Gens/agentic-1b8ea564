"use client";

import Link from 'next/link';
import { useState } from 'react';
import { site } from '@/lib/site';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="container-section h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <span className="font-semibold">{site.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {site.primaryNav.map((item) => (
            <Link key={item.name} href={item.href} className="text-slate-700 hover:text-slate-900 font-medium">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/students" className="button-secondary">Students</Link>
          <Link href="/apply" className="button-primary">Apply</Link>
        </div>

        <button className="md:hidden inline-flex items-center justify-center rounded-xl ring-1 ring-slate-200 p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-section py-4 flex flex-col gap-2">
            {site.primaryNav.map((item) => (
              <Link key={item.name} href={item.href} className="py-2 font-medium text-slate-800" onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <Link href="/students" className="button-secondary flex-1" onClick={() => setOpen(false)}>Students</Link>
              <Link href="/apply" className="button-primary flex-1" onClick={() => setOpen(false)}>Apply</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
