"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import EvoqProjectsSubHeader from "@/components/EvoqProjectsSubHeader";
import EvoqProjectsFooter from "@/components/EvoqProjectsFooter";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import ProjectDashboardMockup from "@/components/ProjectDashboardMockup";
import FeatureMockup from "@/components/FeatureMockup";
import {
  GanttChart, KanbanSquare, MessageSquare, BarChart3,
  Users, RefreshCw, Wrench, Brain, MessageCircle,
  ArrowRight, CheckCircle2, XCircle, TrendingUp, Clock,
  Shield, Zap, Mail, Cloud, FileText, Globe, Database,
  Layers, Video, GitBranch, BookOpen, Calendar, LayoutGrid,
  Workflow, Boxes, FolderOpen, BarChart2,
} from "lucide-react";
import type { ElementType } from "react";

const teamWorkingOffice = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";

interface IndustryItem {
  name: string;
  executionStyle: string;
  description: string;
  capabilities: string[];
  icon: ElementType;
  image: string;
  gradient: string;
}

// ── Individual sticky card — no shared container, no Framer Motion ───────────
// Each card is its own sticky element. CSS handles the stacking:
//   Card i → position:sticky, top = STICKY_BASE + i × STRIP_PX, z-index = i+1
// As the user scrolls, each card slides up from its natural document position
// until it sticks. The next card then slides over it, leaving the top STRIP_PX
// of the previous card visible as a coloured strip at the top of the stack.
// ─────────────────────────────────────────────────────────────────────────────
const STICKY_BASE = 112; // px — below the fixed nav + sub-header
const STRIP_PX    = 28;  // px — how much of each pinned card's top remains visible
const CARD_HEIGHT = 520; // px — height of every card

export default function EvoqProjectsPage() {
  const [showDemo, setShowDemo] = useState(false);

  const industries = [
    {
      name: "Software & Technology",
      executionStyle: "Agile / Kanban workflows",
      description: "Support iterative development cycles, sprint execution, backlog management, and collaborative delivery workflows for software and product teams.",
      capabilities: ["Sprint Planning & Backlogs", "Kanban & List Views", "Epics & Work Items", "Team Discussions & Activity Tracking", "Velocity & Delivery Reporting"],
      icon: KanbanSquare,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80",
      gradient: "linear-gradient(135deg, #DDD6FE 0%, #EDE9FE 100%)",   // Brand purple — pastel
    },
    {
      name: "Enterprise PMOs",
      executionStyle: "Structured project planning",
      description: "Manage organization-wide initiatives with timeline visibility, dependencies, approvals, resource coordination, and milestone tracking.",
      capabilities: ["Project Phases & Milestones", "Gantt Charts & Dependencies", "Resource Workload Planning", "Executive Reporting", "Approval Workflows"],
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80",
      gradient: "linear-gradient(135deg, #BFDBFE 0%, #DBEAFE 100%)",   // Blue — pastel
    },
    {
      name: "Manufacturing Operations",
      executionStyle: "Operational workflow coordination",
      description: "Coordinate production-related activities, operational workflows, recurring processes, and team responsibilities with improved visibility across execution stages.",
      capabilities: ["Workflow Coordination", "Operational Task Tracking", "Approval Processes", "Team Accountability", "Timeline Visibility"],
      icon: Workflow,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80",
      gradient: "linear-gradient(135deg, #99F6E4 0%, #CCFBF1 100%)",   // Teal — pastel
    },
    {
      name: "Engineering Teams",
      executionStyle: "Milestone-based execution",
      description: "Plan and manage engineering initiatives involving structured deliverables, technical coordination, execution stages, and deadline tracking.",
      capabilities: ["Milestone Tracking", "Dependency Management", "Structured Planning", "Team Coordination", "Progress Dashboards"],
      icon: GanttChart,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&q=80",
      gradient: "linear-gradient(135deg, #C7D2FE 0%, #E0E7FF 100%)",   // Indigo — pastel
    },
    {
      name: "Construction & Field Ops",
      executionStyle: "Phase and dependency planning",
      description: "Coordinate execution phases, approvals, field activities, documentation, and schedule dependencies across operational teams.",
      capabilities: ["Phase-Based Planning", "Timeline Coordination", "Approval Tracking", "Documentation Management", "Team Communication"],
      icon: Layers,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
      gradient: "linear-gradient(135deg, #FED7AA 0%, #FFEDD5 100%)",   // Orange — pastel
    },
    {
      name: "Healthcare Operations",
      executionStyle: "Scheduling and process coordination",
      description: "Support operational coordination across administrative workflows, scheduling, approvals, recurring activities, and team communication.",
      capabilities: ["Workflow Visibility", "Scheduling Coordination", "Task & Activity Tracking", "Operational Reporting", "Team Collaboration"],
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80",
      gradient: "linear-gradient(135deg, #A7F3D0 0%, #D1FAE5 100%)",   // Emerald — pastel
    },
    {
      name: "Logistics & Supply Chain",
      executionStyle: "Workflow and delivery tracking",
      description: "Coordinate movement, scheduling, approvals, operational dependencies, and delivery-related activities with greater execution visibility.",
      capabilities: ["Workflow Tracking", "Timeline Coordination", "Process Visibility", "Operational Reporting", "Cross-Team Coordination"],
      icon: RefreshCw,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80",
      gradient: "linear-gradient(135deg, #BAE6FD 0%, #E0F2FE 100%)",   // Sky — pastel
    },
    {
      name: "Professional Services",
      executionStyle: "Client delivery and resource planning",
      description: "Manage delivery timelines, client coordination, team workloads, recurring deliverables, and operational accountability across service teams.",
      capabilities: ["Delivery Planning", "Resource Coordination", "Timeline Management", "Team Collaboration", "Reporting & Visibility"],
      icon: Users,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80",
      gradient: "linear-gradient(135deg, #FECDD3 0%, #FFE4E6 100%)",   // Rose — pastel
    },
  ];

  const challenges = [
    "Disconnected tools are separating planning, collaboration, and reporting",
    "Shifting priorities without real-time visibility",
    "Repeated projects lacking insight from previous results",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <DemoModal open={showDemo} onClose={() => setShowDemo(false)} />
      <Header />
      <EvoqProjectsSubHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "#F5F3FF" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full opacity-60"
            style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.18) 0%, transparent 65%)" }} />
          <div className="absolute top-0 left-0 w-[500px] h-[600px] rounded-full opacity-40"
            style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.22) 0%, transparent 65%)" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-35"
            style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.18) 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full opacity-30"
            style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.15) 0%, transparent 65%)" }} />
        </div>

        <div className="relative w-full" style={{ height: 420 }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 420" preserveAspectRatio="none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#E56399" stopOpacity="0.6" />
                <stop offset="50%"  stopColor="#7F96FF" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#E56399" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path d="M 19,231 C 26,220 34,204 41,198 C 48,192 54,187 61,194 C 68,201 76,223 84,238"
              fill="none" stroke="url(#cg)" strokeWidth="1.5" strokeDasharray="7,6"
              strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            <path d="M 25,348 Q 50,332 74,318"
              fill="none" stroke="#7F96FF" strokeWidth="1.5" strokeDasharray="7,6"
              strokeLinecap="round" opacity="0.55" vectorEffect="non-scaling-stroke" />
            <path d="M 14,388 Q 50,356 86,388"
              fill="none" stroke="#E56399" strokeWidth="1.5" strokeDasharray="8,7"
              strokeLinecap="round" opacity="0.22" vectorEffect="non-scaling-stroke" />
            <path d="M 8,413 Q 50,374 92,413"
              fill="none" stroke="#7F96FF" strokeWidth="1.5" strokeDasharray="8,7"
              strokeLinecap="round" opacity="0.15" vectorEffect="non-scaling-stroke" />
          </svg>

          {([
            { left: "14%",  top: 128, size: 13, color: "#8B5CF6" },
            { left: "37%",  top: 120, size: 11, color: "#8B5CF6" },
            { left: "57%",  top: 142, size: 17, color: "#8B5CF6" },
            { left: "71%",  top: 60,  size: 10, color: "#A78BFA" },
            { right: "4%",  top: 78,  size: 12, color: "#A78BFA" },
            { left: "8%",   top: 338, size: 10, color: "#A78BFA" },
            { right: "10%", top: 340, size: 11, color: "#8B5CF6" },
          ] as const).map((s, i) => (
            <div key={i} className="absolute pointer-events-none select-none font-black leading-none"
              style={{ ...s, fontSize: s.size, zIndex: 3, lineHeight: 1 }}>✦</div>
          ))}

          {/* Photos */}
          <div className="absolute" style={{ top: 130, left: "2%", zIndex: 2 }}>
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&q=80"
              alt="Field engineer" className="object-cover rounded-3xl border-4 border-white shadow-xl"
              style={{ width: 118, height: 155, objectPosition: "top" }} />
          </div>
          <div className="absolute" style={{ top: 90, left: "23%", zIndex: 2 }}>
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80"
              alt="" className="object-cover rounded-3xl border-4 border-white shadow-xl"
              style={{ width: 158, height: 208, objectPosition: "top" }} />
          </div>
          <div className="absolute" style={{ top: 128, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=380&q=80"
              alt="" className="object-cover rounded-3xl border-4 border-white shadow-2xl"
              style={{ width: 188, height: 228, objectPosition: "top" }} />
          </div>
          <div className="absolute" style={{ top: 90, right: "23%", zIndex: 2 }}>
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&q=80"
              alt="Healthcare professional" className="object-cover rounded-3xl border-4 border-white shadow-xl"
              style={{ width: 152, height: 200, objectPosition: "top" }} />
          </div>
          <div className="absolute" style={{ top: 122, right: "3%", zIndex: 2 }}>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=280&q=80"
              alt="" className="object-cover rounded-3xl border-4 border-white shadow-xl"
              style={{ width: 138, height: 175, objectPosition: "top" }} />
          </div>
          <div className="absolute" style={{ top: 265, left: "13%", zIndex: 2 }}>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=260&q=80"
              alt="" className="object-cover rounded-3xl border-4 border-white shadow-lg"
              style={{ width: 126, height: 156, objectPosition: "top" }} />
          </div>
          <div className="absolute" style={{ top: 260, right: "13%", zIndex: 2 }}>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=260&q=80"
              alt="Manufacturing professional" className="object-cover rounded-3xl border-4 border-white shadow-lg"
              style={{ width: 132, height: 160, objectPosition: "top" }} />
          </div>

          {/* Floating stat badges */}
          <div className="absolute bg-white rounded-2xl shadow-lg border border-gray-100 px-3.5 py-2.5 flex items-center gap-2.5 whitespace-nowrap"
            style={{ top: 44, left: "17%", zIndex: 4 }}>
            <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <div className="text-[12px] font-bold text-gray-800 leading-tight">+8 tasks done</div>
              <div className="text-[10px] text-gray-400 leading-tight">This week</div>
            </div>
          </div>
          <div className="absolute bg-white rounded-2xl shadow-lg border border-gray-100 px-3.5 py-2.5 flex items-center gap-2.5 whitespace-nowrap"
            style={{ top: 330, left: "26%", zIndex: 4 }}>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0" />
            <div>
              <div className="text-[12px] font-bold text-gray-800 leading-tight">Project kickoff</div>
              <div className="text-[10px] text-gray-400 leading-tight">Completed</div>
            </div>
          </div>
          <div className="absolute bg-white rounded-2xl shadow-lg border border-gray-100 px-3.5 py-2.5 flex items-center gap-2.5 whitespace-nowrap"
            style={{ top: 84, right: "20%", zIndex: 4 }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#DDD6FE" }}>
              <TrendingUp className="w-4 h-4" style={{ color: "#A78BFA" }} />
            </div>
            <div>
              <div className="text-[12px] font-bold text-gray-800 leading-tight">On track</div>
              <div className="text-[10px] text-gray-400 leading-tight">Website redesign</div>
            </div>
          </div>
          <div className="absolute bg-white rounded-2xl shadow-lg border border-gray-100 px-3.5 py-2.5 flex items-center gap-2.5 whitespace-nowrap"
            style={{ top: 268, left: "54%", zIndex: 4 }}>
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse" style={{ background: "#8B5CF6" }} />
            <div>
              <div className="text-[12px] font-bold text-gray-800 leading-tight">12 tasks today</div>
              <div className="text-[10px] text-gray-400 leading-tight">2 due soon</div>
            </div>
          </div>
          <div className="absolute bg-white rounded-2xl shadow-lg border border-gray-100 px-3.5 py-2.5 flex items-center gap-2.5 whitespace-nowrap"
            style={{ top: 358, right: "13%", zIndex: 4 }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#DDD6FE" }}>
              <BarChart3 className="w-4 h-4" style={{ color: "#8B5CF6" }} />
            </div>
            <div>
              <div className="text-[12px] font-bold text-gray-800 leading-tight">94% velocity</div>
              <div className="text-[10px] text-gray-400 leading-tight">Team performance</div>
            </div>
          </div>

          {/* Connector circles */}
          {([
            { top: 215, left: "18%", bg: "#8B5CF6" },
            { top: 182, left: "40%", bg: "#A78BFA" },
            { top: 178, left: "60%", bg: "#8B5CF6" },
            { top: 222, left: "83%", bg: "#A78BFA" },
            { top: 332, left: "24%", bg: "#A78BFA" },
            { top: 302, left: "73%", bg: "#8B5CF6" },
          ] as const).map((pos, i) => {
            const { bg, ...style } = pos;
            return (
              <div key={i}
                className="absolute w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg select-none"
                style={{ ...style, background: bg, fontSize: 18, zIndex: 3 }}>+</div>
            );
          })}
        </div>

        {/* Centered headline + CTA */}
        <div className="text-center px-4 pb-16 pt-2 relative z-10">
          <p className="eyebrow mb-4" style={{ color: "#7C3AED" }}>
            Work Management &amp; Operations Platform
          </p>
          <h1 className="h1 text-gray-900"
            style={{ fontFamily: '"Figtree", sans-serif', fontSize: "48px" }}>
            Plan, Coordinate, and Execute<br />
            Work Across Teams
          </h1>
          <p className="body-large mt-4 text-gray-500 max-w-2xl mx-auto" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            EVOQ Projects helps organizations manage projects, workflows, approvals, timelines, and operational execution with the flexibility to support Agile delivery, structured planning, and cross-functional coordination across industries.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg"
              onClick={() => setShowDemo(true)}
              className="text-white font-bold text-sm px-7 py-3 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
              style={{ background: "#8B5CF6", boxShadow: "0 8px 24px rgba(139,92,246,0.35)" }}>
              Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* The Smarter Way Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: "radial-gradient(circle, #7C3AED 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-7">
              <h2 className="h2 text-gray-900" style={{ fontFamily: '"Figtree", sans-serif', fontSize: "38px" }}>
                The Smarter Way to Keep<br />
                Every Team on Track
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Projects rarely fail because of effort. They fail when information is scattered,
                priorities shift, and teams lose visibility. EVOQ Projects brings clarity and
                structure to your operations, keeping every task, team, and timeline connected.
              </p>
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">What slows teams down</p>
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-4 rounded-xl p-4"
                    style={{ background: "linear-gradient(to right, #F5F3FF, #ffffff)", border: "1px solid #DDD6FE" }}>
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black bg-white"
                      style={{ color: "#7C3AED", border: "1.5px solid #C4B5FD" }}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 pt-0.5">
                      <p className="text-sm text-gray-700 leading-relaxed">{challenge}</p>
                    </div>
                    <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#A78BFA" }} />
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                With EVOQ Projects, every plan, sprint, and update live in one shared workspace
                that keeps your team aligned, responsive, and ready to deliver.
              </p>
            </div>
            <div className="relative">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ height: 420 }}>
                <img src={teamWorkingOffice} alt="Team collaborating" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Execution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#7C3AED" }}>
              Flexible Execution Across Industries
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-[1.15] mb-5">
              Adapt to Different Planning<br />
              and Operational Styles
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Different industries coordinate work in different ways. EVOQ Projects supports iterative delivery, structured planning, operational coordination, milestone tracking, and process-driven execution, allowing teams to manage work using the structure that fits their operations.
            </p>
          </div>

          {/* ── Industry Cards: individual sticky elements ────────────────────
               No shared container. Each card is position:sticky with an
               increasing top offset. As the user scrolls, each card slides
               up from its natural document position, pins, and the next
               card covers it — leaving the top STRIP_PX strip visible.
          ─────────────────────────────────────────────────────────────── */}
          <div>
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="rounded-3xl overflow-hidden flex flex-col lg:flex-row relative"
                  style={{
                    position: "sticky",
                    top: `${STICKY_BASE + i * STRIP_PX}px`,
                    zIndex: i + 1,
                    height: CARD_HEIGHT,
                    background: ind.gradient,
                    marginBottom: i < industries.length - 1 ? 16 : 0,
                  }}
                >
                  {/* Subtle dot grid */}
                  <div
                    className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Left — content */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between relative z-10">
                    <div>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: "rgba(255,255,255,0.40)" }}
                      >
                        <Icon className="w-4 h-4" style={{ color: "rgba(0,0,0,0.65)" }} />
                      </div>
                      <p
                        className="text-[10px] font-bold uppercase tracking-widest mb-2"
                        style={{ color: "rgba(0,0,0,0.45)" }}
                      >
                        {ind.executionStyle}
                      </p>
                      <h3 className="h3 mb-3" style={{ color: "rgba(0,0,0,0.82)", fontFamily: '"Figtree", sans-serif', fontSize: "24px" }}>
                        {ind.name}
                      </h3>
                      <p
                        className="leading-relaxed mb-5 max-w-md text-[14px]"
                        style={{ color: "rgba(0,0,0,0.58)" }}
                      >
                        {ind.description}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-[10px] font-bold uppercase tracking-widest mb-3"
                        style={{ color: "rgba(0,0,0,0.38)" }}
                      >
                        Key Capabilities
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {ind.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-2.5">
                            <CheckCircle2
                              className="w-3.5 h-3.5 flex-shrink-0"
                              style={{ color: "rgba(0,0,0,0.40)" }}
                            />
                            <span
                              className="text-sm font-medium leading-tight"
                              style={{ color: "rgba(0,0,0,0.68)" }}
                            >
                              {cap}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right — image */}
                  <div className="lg:w-[44%] flex-shrink-0 relative overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="absolute bottom-0 left-0 right-0 w-full object-cover rounded-tl-2xl shadow-2xl"
                      style={{ top: "10%", height: "90%" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-10">
            <Link href="/evoq-projects/features">
              <Button variant="outline" className="font-bold text-sm px-7 py-3 rounded-xl border-2 border-evoq-projects-magenta text-evoq-projects-magenta hover:bg-evoq-projects-magenta hover:text-white transition-all duration-300">
                See Full Feature List <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Workflows & Operations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

            {/* Left — label + heading + description + flow */}
            <div className="lg:w-[38%] flex-shrink-0">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "#7C3AED" }}>
                Workflows &amp; Operations
              </p>
              <div className="w-8 h-[3px] rounded-full mb-6" style={{ background: "#7C3AED" }} />
              <h2 className="text-4xl font-extrabold text-gray-900 leading-[1.15] mb-5">
                Coordinate Work Beyond Traditional Projects
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-10">
                EVOQ Projects supports operational workflows alongside project execution, helping teams coordinate approvals, recurring processes, resource planning, reporting, documentation, and cross-functional activities within a structured operational environment.
              </p>

              {/* Workflow flow diagram */}
              <div className="flex items-center gap-0">
                {([
                  { icon: FileText,   label: "Plan" },
                  { icon: CheckCircle2, label: "Approvals" },
                  { icon: Wrench,     label: "Execute" },
                  { icon: BarChart2,  label: "Monitor" },
                  { icon: Clock,      label: "Report" },
                ] as { icon: ElementType; label: string }[]).map(({ icon: StepIcon, label }, idx, arr) => (
                  <div key={label} className="flex items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ background: "#F5F3FF", border: "1.5px solid #DDD6FE" }}>
                        <StepIcon className="w-5 h-5" style={{ color: "#7C3AED" }} />
                      </div>
                      <span className="text-[11px] font-medium text-gray-500">{label}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="flex items-center mb-5 mx-1">
                        <div className="w-4 border-t-2 border-dashed" style={{ borderColor: "#C4B5FD" }} />
                        <ArrowRight className="w-3 h-3 -ml-1" style={{ color: "#C4B5FD" }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 2×3 feature cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {([
                {
                  icon: Workflow,
                  title: "Workflow Coordination",
                  desc: "Organize operational activities across departments with structured execution flows.",
                },
                {
                  icon: CheckCircle2,
                  title: "Approval Processes",
                  desc: "Manage reviews, validations, and operational approvals with clear accountability.",
                },
                {
                  icon: RefreshCw,
                  title: "Recurring Operations",
                  desc: "Track recurring workflows, routine activities, and repeatable operational processes.",
                },
                {
                  icon: Users,
                  title: "Resource Visibility",
                  desc: "Monitor workloads, responsibilities, and execution capacity across teams.",
                },
                {
                  icon: GanttChart,
                  title: "Timeline Management",
                  desc: "Coordinate milestones, deadlines, dependencies, and execution schedules.",
                },
                {
                  icon: BarChart3,
                  title: "Reporting & Oversight",
                  desc: "Access operational visibility with dashboards, reporting, and activity tracking.",
                },
              ] as { icon: ElementType; title: string; desc: string }[]).map(({ icon: CardIcon, title, desc }) => (
                <div key={title}
                  className="bg-white rounded-2xl p-6 flex flex-col gap-4"
                  style={{ border: "1.5px solid #EDE9FE", boxShadow: "0 2px 12px rgba(124,58,237,0.05)" }}>
                  <CardIcon className="w-8 h-8" style={{ color: "#111827", strokeWidth: 1.5 }} />
                  <div>
                    <h3 className="font-bold text-[15px] text-gray-900 leading-snug mb-1">{title}</h3>
                    <div className="w-6 h-[2.5px] rounded-full mb-3" style={{ background: "#7C3AED" }} />
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Seamless Integration Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: "radial-gradient(circle, #7C3AED 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 lg:pl-16">
            <div className="lg:w-[55%] flex-shrink-0 lg:pr-20">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: "#DDD6FE", color: "#7C3AED" }}>
                <RefreshCw className="w-3 h-3" /> Connected Ecosystem
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-5 leading-[1.15]">
                Integrations That Support<br />Operational Continuity
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                EVOQ Projects integrates with calendars, drives, communication tools, CRMs, and the EVOQ ecosystem to support smoother collaboration, workflow visibility, and coordinated execution across teams and business functions.
              </p>
              <Button variant="outline" className="font-bold text-sm px-7 py-3 rounded-xl border-2 border-evoq-projects-magenta text-evoq-projects-magenta hover:bg-evoq-projects-magenta hover:text-white transition-all duration-300">
                See All Integrations <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Hub-and-spoke integration diagram */}
            <div className="lg:flex-1 flex items-center justify-center py-4">
              {/* Fixed canvas: 420 × 340 */}
              <div className="relative flex-shrink-0" style={{ width: 420, height: 340 }}>

                {/* ── SVG: dashed connection lines ── */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  width="420" height="340"
                  style={{ overflow: "visible" }}
                >
                  {/* Animated dash style */}
                  <style>{`
                    .int-line {
                      stroke-dasharray: 5 5;
                      animation: intFlow 1.8s linear infinite;
                    }
                    @keyframes intFlow {
                      to { stroke-dashoffset: -20; }
                    }
                  `}</style>

                  {/*
                    Hub center: (210, 170)
                    Tile centers (tile TL + 36):
                      R   (346, 170)  TR  (314, 86)
                      T   (210, 54)   TL  (106, 86)
                      L   (74,  170)  BL  (106, 254)
                      B   (210, 286)  BR  (314, 254)
                  */}
                  {([
                    [346, 170],
                    [314,  86],
                    [210,  54],
                    [106,  86],
                    [ 74, 170],
                    [106, 254],
                    [210, 286],
                    [314, 254],
                  ] as [number, number][]).map(([tx, ty], i) => (
                    <line
                      key={i}
                      className="int-line"
                      x1={210} y1={170}
                      x2={tx}  y2={ty}
                      stroke="#7C3AED"
                      strokeWidth="1.5"
                      strokeOpacity="0.30"
                      style={{ animationDelay: `${i * 0.22}s` }}
                    />
                  ))}

                  {/* Small endpoint dots at tile boundary */}
                  {([
                    [346, 170],
                    [314,  86],
                    [210,  54],
                    [106,  86],
                    [ 74, 170],
                    [106, 254],
                    [210, 286],
                    [314, 254],
                  ] as [number, number][]).map(([tx, ty], i) => (
                    <circle key={`dot-${i}`} cx={tx} cy={ty} r="4"
                      fill="#7C3AED" fillOpacity="0.22" />
                  ))}
                </svg>

                {/* ── Center hub: EVOQ Projects ── */}
                <div
                  className="absolute flex flex-col items-center justify-center"
                  style={{
                    left: 172, top: 132, width: 76, height: 76,
                    borderRadius: 20,
                    background: "linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)",
                    boxShadow: "0 0 0 10px rgba(124,58,237,0.10), 0 0 0 22px rgba(124,58,237,0.05), 0 8px 28px rgba(92,30,153,0.35)",
                    zIndex: 10,
                  }}
                >
                  <KanbanSquare className="w-8 h-8 text-white" />
                </div>
                {/* Hub label */}
                <div
                  className="absolute text-center"
                  style={{ left: 172, top: 216, width: 76 }}
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#7C3AED", opacity: 0.7 }}>
                    EVOQ Projects
                  </span>
                </div>

                {/* ── Integration tiles (72 × 72) ── */}
                {([
                  { left: 310, top: 134, Icon: Globe,       bg: "#DDD6FE", ic: "#7C3AED" }, // R
                  { left: 278, top:  50, Icon: GitBranch,   bg: "#5D1E99", ic: "#C4B5FD" }, // TR
                  { left: 174, top:  18, Icon: Cloud,       bg: "#F5F3FF", ic: "#7C3AED" }, // T
                  { left:  70, top:  50, Icon: Calendar,    bg: "#DDD6FE", ic: "#7C3AED" }, // TL
                  { left:  38, top: 134, Icon: Mail,        bg: "#F5F3FF", ic: "#8B5CF6" }, // L
                  { left:  70, top: 218, Icon: LayoutGrid,  bg: "#F5F3FF", ic: "#A78BFA" }, // BL
                  { left: 174, top: 250, Icon: Users,       bg: "#DDD6FE", ic: "#7C3AED" }, // B
                  { left: 278, top: 218, Icon: Database,    bg: "#F5F3FF", ic: "#7C3AED" }, // BR
                ] as { left: number; top: number; Icon: ElementType; bg: string; ic: string }[]).map(
                  ({ left, top, Icon, bg, ic }, i) => (
                    <div
                      key={i}
                      className="absolute rounded-2xl flex items-center justify-center shadow-md"
                      style={{
                        left, top, width: 72, height: 72,
                        background: bg,
                        border: "1px solid rgba(0,0,0,0.06)",
                        zIndex: 5,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: ic }} />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20" style={{ background: "#EEEAFA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[340px]" style={{ background: "#EEEAFA" }}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-80 h-80 opacity-10 blur-3xl rounded-full"
                style={{ background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)" }} />
              <div className="absolute bottom-0 left-1/3 w-64 h-64 opacity-10 blur-2xl rounded-full"
                style={{ background: "radial-gradient(circle, #C4B5FD 0%, transparent 70%)" }} />
            </div>
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: "radial-gradient(circle, #7C3AED 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />

            <div className="relative z-10 flex-1 flex flex-col justify-between p-10 lg:p-14">
              <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-[1.2] mb-4">
                  Bring Planning, Execution, and<br />Team Coordination Together
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "#6D4C9E" }}>
                  Discover how EVOQ Projects helps organizations improve visibility, coordinate workflows, manage execution, and support teams operating across projects, operations, and business functions.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-10">
                <Button size="lg"
                  onClick={() => setShowDemo(true)}
                  className="font-bold text-sm px-7 py-3 rounded-xl text-white transition-all hover:scale-[1.02]"
                  style={{ background: "#7C3AED", boxShadow: "0 6px 24px rgba(124,58,237,0.30)" }}>
                  Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Link href="/evoq-projects/pricing">
                  <button className="inline-flex items-center gap-1.5 font-semibold text-sm px-7 py-3 rounded-xl transition-all"
                    style={{ border: "1.5px solid #7C3AED", color: "#7C3AED" }}>
                    See Pricing <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative z-10 lg:w-[35%] flex-shrink-0 flex items-end justify-end overflow-hidden">
              <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full translate-x-1/4 translate-y-1/4" style={{ background: "#A78BFA", opacity: 0.35 }} />
              <div className="absolute bottom-8 right-36 w-32 h-32 rounded-full" style={{ background: "#C4B5FD", opacity: 0.25 }} />
              <div className="relative m-8 mt-0 lg:mt-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-lg whitespace-nowrap" style={{ background: "#A78BFA" }}>
                  EVOQ Projects
                </div>
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=640&q=85"
                  alt="Team reviewing project dashboards"
                  className="rounded-2xl shadow-2xl object-cover"
                  style={{ width: 320, height: 260, objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EvoqProjectsFooter />
    </div>
  );
}
