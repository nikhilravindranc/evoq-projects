"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GanttChart } from "lucide-react";

const navItems = [
  { label: "Features", href: "/evoq-projects/features" },
  { label: "Pricing",  href: "/evoq-projects/pricing"  },
];

const EvoqProjectsSubHeader = ({ dark = false }: { dark?: boolean }) => {
  const pathname = usePathname();

  const barBg      = dark ? "#7C3AED" : "#F5F3FF";
  const barBorder  = dark ? "rgba(255,255,255,0.15)" : "rgba(124,58,237,0.15)";
  const brandColor = dark ? "#FFFFFF" : "#5D1E99";
  const linkColor  = dark ? "rgba(255,255,255,0.85)" : "#5D1E99";
  const activeColor = dark ? "#FFFFFF" : "#7C3AED";

  return (
    <div
      className="sticky top-0 z-50"
      style={{
        background: barBg,
        borderBottom: `1px solid ${barBorder}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch h-20 gap-8" style={{ marginLeft: "96px" }}>

          {/* ── Logo → links to overview ── */}
          <Link href="/evoq-projects" className="flex items-center gap-2.5 flex-shrink-0 group py-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
              style={{
                background: dark ? "rgba(255,255,255,0.18)" : "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
                boxShadow: dark ? "none" : "0 2px 8px rgba(124,58,237,0.45)",
              }}
            >
              <GanttChart className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold tracking-tight transition-colors duration-150" style={{ color: brandColor }}>
              EVOQ Projects
            </span>
          </Link>

          {/* ── Divider ── */}
          <div className="self-center h-5 w-px flex-shrink-0" style={{ background: "rgba(255,255,255,0.10)" }} />

          {/* ── Nav items ── */}
          <nav className="flex items-stretch gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative flex items-center px-4 text-[13px] font-semibold transition-colors duration-150 select-none"
                  style={{ color: isActive ? activeColor : linkColor }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = activeColor; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = linkColor; }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 inset-x-3 h-[2px] rounded-t-full"
                      style={{ background: dark ? "#FFFFFF" : "linear-gradient(90deg, #7C3AED, #A78BFA)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

        </div>
      </div>
    </div>
  );
};

export default EvoqProjectsSubHeader;
