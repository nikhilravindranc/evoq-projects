"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const products = [
  { name: "EVOQ Projects", href: "/evoq-projects", desc: "Plan, track & deliver" },
  { name: "EVOQ CRM",      href: "/evoq-crm",      desc: "Sales & client management" },
  { name: "EVOQ Desk",     href: "/evoq-desk",      desc: "Customer support" },
  { name: "EVOQ AI",       href: "/evoq-ai",        desc: "Predictive intelligence" },
  { name: "EVOQ Sync",     href: "/evoq-sync",      desc: "Cross-app automation" },
  { name: "EVOQ LMS",      href: "/evoq-lms",       desc: "Learning & development" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef                     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="relative z-50" style={{ background: "#F5F3FF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center flex-shrink-0 select-none">
            <span className="text-2xl font-black tracking-tight text-[#0F0F1A]" style={{ letterSpacing: "-0.03em" }}>
              <span style={{ fontWeight: 900 }}>≡</span>VOQ
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-1.5 py-1.5" style={{ background: "#DDD6FE" }}>

            {/* Products dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#0F0F1A] transition-colors rounded-full px-4 py-2"
                style={{ background: "transparent" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#F5F3FF"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                Products
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-200"
                  style={{ transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {productsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl overflow-hidden"
                  style={{
                    background: "white",
                    border: "1px solid #EBEBEB",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                  }}
                >
                  <div className="p-2">
                    {products.map((p) => (
                      <Link
                        key={p.name}
                        href={p.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex flex-col px-3.5 py-2.5 rounded-xl transition-colors hover:bg-gray-50 group"
                      >
                        <span className="text-sm font-semibold text-[#0F0F1A] group-hover:text-[#1B4FD8]">
                          {p.name}
                        </span>
                        <span className="text-xs text-gray-400 mt-0.5">{p.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Why EVOQ? */}
            <Link
              href="/why-evoq"
              className="text-sm font-medium text-gray-700 hover:text-[#0F0F1A] transition-colors rounded-full px-4 py-2"
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F5F3FF"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              Why EVOQ?
            </Link>
          </nav>

          {/* ── Right CTAs ── */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className="font-semibold text-white rounded-full pl-5 pr-1.5 py-1.5 h-auto flex items-center gap-2"
              style={{ background: "#7C3AED" }}
            >
              Contact Us
              <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                <ArrowRight className="w-4 h-4" style={{ color: "#FFFFFF" }} />
              </span>
            </Button>
          </div>

          {/* ── Mobile toggle ── */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2 pt-1 pb-2">Products</p>
          {products.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="block text-sm font-medium text-gray-700 hover:text-[#0F0F1A] py-2 px-2 rounded-lg hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {p.name}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-3 mt-2 space-y-2">
            <Link href="/why-evoq" className="block text-sm font-medium text-gray-700 px-2 py-2" onClick={() => setMobileOpen(false)}>
              Why EVOQ?
            </Link>
            <Button size="sm" className="w-full font-semibold text-white" style={{ background: "#7C3AED" }}>
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
