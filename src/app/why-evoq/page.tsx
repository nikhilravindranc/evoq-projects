"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import EvoqProjectsFooter from "@/components/EvoqProjectsFooter";
import DemoModal from "@/components/DemoModal";
import {
  TrendingUp, Headphones, Settings2, LifeBuoy,
  ArrowRight, Database, Eye, Layers, Rocket,
  Users, Briefcase, ShieldCheck, BarChart3, ArrowDown,
} from "lucide-react";

export default function WhyEvoqPage() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DemoModal open={showDemo} onClose={() => setShowDemo(false)} />
      <Header />

      {/* 1. HERO */}
      <section className="pt-20 pb-16 text-center px-4" style={{ background: "#F2F2FF" }}>
        <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "#4747E0" }}>
          The Complete Business Suite
        </p>
        <h1 className="text-5xl font-black tracking-tight mb-6" style={{ color: "#000099" }}>
          Why EVOQ?
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Most businesses run on 5–10 disconnected tools — one for sales, another for service,
          another for projects. EVOQ brings every department into one connected suite, so your
          entire business finally moves as one.
        </p>
        <div className="mt-12 max-w-4xl mx-auto h-px" style={{ background: "#BDBDFF" }} />
      </section>

      {/* 2. PILLARS + FLOW */}
      <section className="py-20 px-4" style={{ background: "#F2F2FF" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
            {[
              { label: "Sales",      Icon: TrendingUp, desc: "CRM & pipeline"       },
              { label: "Service",    Icon: Headphones, desc: "Support & ticketing"   },
              { label: "Operations", Icon: Settings2,  desc: "Projects & workflows"  },
              { label: "Support",    Icon: LifeBuoy,   desc: "Help & knowledge base" },
            ].map(({ label, Icon, desc }) => (
              <div key={label} className="rounded-2xl p-6 flex flex-col items-center text-center"
                style={{ background: "white", border: "1.5px solid #BDBDFF" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ background: "#BDBDFF" }}>
                  <Icon className="w-6 h-6" style={{ color: "#4747E0" }} />
                </div>
                <span className="text-base font-bold mb-1" style={{ color: "#000099" }}>{label}</span>
                <span className="text-xs text-gray-500">{desc}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-0 px-8 mb-1">
            {[0,1,2].map((i) => (
              <div key={i} className="flex items-center flex-1">
                <div className="flex-1 h-px" style={{ background: "#BDBDFF" }} />
              </div>
            ))}
          </div>
          <div className="h-8 w-px mx-auto" style={{ background: "#BDBDFF" }} />

          <p className="text-center text-sm italic mb-6" style={{ color: "#4747E0", fontFamily: "Georgia, serif" }}>
            Every department works in one direction
          </p>

          <div className="flex justify-center mb-6">
            <ArrowDown className="w-6 h-6" style={{ color: "#8484FF" }} />
          </div>

          {/* Platform visual */}
          <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #000099 0%, #3333CC 100%)" }}>
            <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10 flex items-center justify-center gap-0">
              {[
                { label: "CRM",      abbr: "S"  },
                { label: "Desk",     abbr: "Sv" },
                { label: "Projects", abbr: "O"  },
                { label: "LMS",      abbr: "Su" },
              ].map(({ label, abbr }, i) => (
                <div key={label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-black border-2"
                      style={{ background: "rgba(255,255,255,0.12)", borderColor: "#8484FF", color: "white" }}>
                      {abbr}
                    </div>
                    <span className="text-[10px] font-semibold mt-2" style={{ color: "#BDBDFF" }}>{label}</span>
                  </div>
                  {i < 3 && <div className="w-12 md:w-20 h-px mx-2" style={{ background: "#8484FF" }} />}
                </div>
              ))}
            </div>
            <p className="text-center text-sm italic mt-8 relative z-10" style={{ color: "#BDBDFF", fontFamily: "Georgia, serif" }}>
              As a true organisation, connecting the dots.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT OTHER BENEFITS? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-2" style={{ color: "#000099" }}>What Other Benefits?</h2>
          <p className="text-gray-500 mb-12 max-w-xl">The most expected benefits that solve your team&apos;s everyday challenges — listed here as solutions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Database, title: "One Source of Truth",  desc: "Every team works from the same data. No version confusion, no copy-paste errors, no outdated reports.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" },
              { Icon: Layers,   title: "Less Tool Sprawl",     desc: "Replace 5+ disconnected subscriptions with one suite. Less context switching, lower costs, more focus.",   img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" },
              { Icon: Eye,      title: "Real-time Visibility", desc: "See every department's performance from a single dashboard. Spot blockers before they become problems.",    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80" },
              { Icon: Rocket,   title: "Built to Scale",       desc: "Start with what you need. Expand as you grow. EVOQ scales from 5 to 500 without re-platforming.",          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80" },
            ].map(({ Icon, title, desc, img }) => (
              <div key={title} className="rounded-2xl overflow-hidden flex flex-col" style={{ border: "1.5px solid #BDBDFF" }}>
                <div className="h-44 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "#5C5CFF" }} />
                    <span className="text-sm font-bold" style={{ color: "#000099" }}>{title}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOR WHOM? */}
      <section className="py-20 px-4" style={{ background: "#F2F2FF" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-2" style={{ color: "#000099" }}>For Whom?</h2>
          <p className="text-gray-500 mb-14">EVOQ is built for the teams that power modern businesses — whatever their function.</p>
          <div className="relative flex flex-wrap items-center justify-center gap-6 min-h-[280px]">
            {[
              { label: "Sales Teams",         size: "lg", Icon: TrendingUp  },
              { label: "Operations Managers", size: "md", Icon: Settings2   },
              { label: "Customer Support",    size: "sm", Icon: Headphones  },
              { label: "C-Suite Leaders",     size: "xl", Icon: BarChart3   },
              { label: "HR & People Ops",     size: "sm", Icon: Users       },
              { label: "Finance Teams",       size: "md", Icon: Briefcase   },
              { label: "IT & Admins",         size: "sm", Icon: ShieldCheck },
            ].map(({ label, size, Icon }, i) => {
              const dim: Record<string, { w: number; text: string; icon: string }> = {
                xl: { w: 144, text: "text-[13px]", icon: "w-8 h-8" },
                lg: { w: 120, text: "text-[12px]", icon: "w-6 h-6" },
                md: { w: 100, text: "text-[11px]", icon: "w-5 h-5" },
                sm: { w: 80,  text: "text-[10px]", icon: "w-4 h-4" },
              };
              const d = dim[size];
              const isEven = i % 2 === 0;
              return (
                <div key={label} className="flex items-center gap-3">
                  {i > 0 && <span className="text-xl font-bold flex-shrink-0" style={{ color: "#8484FF" }}>+</span>}
                  <div className="rounded-full flex flex-col items-center justify-center text-center p-3 flex-shrink-0"
                    style={{ width: d.w, height: d.w, background: isEven ? "#5C5CFF" : "white", border: "2px solid #BDBDFF", color: isEven ? "white" : "#3333CC" }}>
                    <Icon className={`${d.icon} mb-1 flex-shrink-0`} />
                    <span className={`${d.text} font-semibold leading-tight`}>{label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TRUSTED BY TEAMS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-2" style={{ color: "#000099" }}>Trusted by Teams That Move Fast</h2>
          <p className="text-gray-500 mb-12">From early-stage startups to established enterprises — EVOQ is already making a difference.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {[
              { stat: "10,000+", label: "Teams across 40+ countries" },
              { stat: "63%",     label: "Reduction in tool spend on average" },
              { stat: "4.8/5",   label: "Customer satisfaction rating" },
            ].map(({ stat, label }) => (
              <div key={label} className="rounded-2xl p-8 text-center" style={{ background: "#F2F2FF", border: "1.5px solid #BDBDFF" }}>
                <div className="text-4xl font-black mb-2" style={{ color: "#3333CC" }}>{stat}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{label}</div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl p-10 relative overflow-hidden" style={{ background: "#F2F2FF", border: "1.5px solid #BDBDFF" }}>
            <div className="absolute top-6 left-8 text-7xl font-black opacity-10" style={{ color: "#5C5CFF" }}>&ldquo;</div>
            <blockquote className="relative z-10 text-xl font-semibold leading-relaxed mb-6 max-w-3xl" style={{ color: "#000099" }}>
              Before EVOQ, our sales team used one tool, operations used another, and support had their own.
              Handoffs were chaotic. Now every department is in sync — and our delivery speed has improved dramatically.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "#5C5CFF" }}>SL</div>
              <div>
                <p className="text-sm font-bold" style={{ color: "#000099" }}>Sarah Lin</p>
                <p className="text-xs text-gray-400">COO, Meridian Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-20 px-4" style={{ background: "#F2F2FF" }}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden flex flex-col lg:flex-row" style={{ background: "linear-gradient(135deg, #000099 0%, #3333CC 100%)" }}>
            <div className="flex-1 p-10 lg:p-14 relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "#BDBDFF" }}>Ready to unify your business?</p>
              <h2 className="text-3xl font-black text-white leading-snug mb-4">
                One Suite.<br /><span style={{ color: "#8484FF" }}>Endless Potential.</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
                Join thousands of businesses that replaced their stack with EVOQ — and haven&apos;t looked back since.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowDemo(true)}
                  className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl text-white transition-all hover:scale-[1.02]"
                  style={{ background: "#5C5CFF", boxShadow: "0 6px 24px rgba(92,92,255,0.4)" }}>
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/evoq-projects">
                  <button className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-xl transition-all hover:bg-white/10"
                    style={{ border: "1.5px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)" }}>
                    Explore Products <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-[38%] flex-shrink-0 overflow-hidden min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=85"
                alt="Teams unified with EVOQ"
                className="w-full h-full object-cover opacity-80"
                style={{ minHeight: 280 }}
              />
            </div>
          </div>
        </div>
      </section>

      <EvoqProjectsFooter />
    </div>
  );
}
