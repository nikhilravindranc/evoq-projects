"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";
import Header from "@/components/Header";
import EvoqProjectsSubHeader from "@/components/EvoqProjectsSubHeader";
import EvoqProjectsFooter from "@/components/EvoqProjectsFooter";
import { Button } from "@/components/ui/button";
import FeatureMockup from "@/components/FeatureMockup";
import {
  Users, Bell, Shield, MessageSquare, ArrowRight, LayoutGrid,
  FileBarChart, FileText, CheckCircle2, ListTodo, Clock,
  AlertCircle, Filter, TrendingUp, Folder, Calendar,
} from "lucide-react";

export default function EvoqProjectsFeaturesPage() {

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <EvoqProjectsSubHeader />

      {/* Hero Section */}
      <section className="py-24 overflow-hidden" style={{ background: "#F5F3FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-[48%] flex-shrink-0">
              <h1 className="h1 text-gray-900 mb-7" style={{ fontFamily: '"Figtree", sans-serif', fontSize: "48px" }}>
                Built to Support Operational Execution Across Teams
              </h1>
              <p className="body text-gray-500" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                EVOQ Projects helps organizations plan work, coordinate workflows, manage execution, track progress, and maintain operational visibility across teams and ongoing activities.
              </p>
            </div>

            <div className="lg:flex-1">
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square rounded-2xl flex items-center justify-center shadow-sm" style={{ background: "#F5F3FF", border: "1px solid rgba(167,139,250,0.15)" }}>
                  <LayoutGrid className="w-10 h-10" style={{ color: "#7C3AED", strokeWidth: 1.5 }} />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-sm" style={{ border: "1px solid rgba(167,139,250,0.15)" }}>
                  <motion.img src="/images/hero/professional-woman-laptop.jpg" alt="Professional woman with laptop" className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} />
                </div>
                <div className="aspect-square rounded-2xl flex items-center justify-center shadow-sm" style={{ background: "#F5F3FF", border: "1px solid rgba(167,139,250,0.15)" }}>
                  <CheckCircle2 className="w-10 h-10" style={{ color: "#7C3AED", strokeWidth: 1.5 }} />
                </div>
                <div className="aspect-square rounded-2xl flex items-center justify-center shadow-sm" style={{ background: "#C4B5FD", border: "1px solid rgba(167,139,250,0.15)" }}>
                  <Calendar className="w-10 h-10" style={{ color: "#7C3AED", strokeWidth: 1.5 }} />
                </div>
                <div className="aspect-square rounded-2xl flex items-center justify-center shadow-sm" style={{ background: "#F5F3FF", border: "1px solid rgba(167,139,250,0.15)" }}>
                  <MessageSquare className="w-10 h-10" style={{ color: "#7C3AED", strokeWidth: 1.5 }} />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-sm" style={{ border: "1px solid rgba(167,139,250,0.15)" }}>
                  <motion.img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" alt="" className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-sm" style={{ border: "1px solid rgba(167,139,250,0.15)" }}>
                  <motion.img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces" alt="" className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} />
                </div>
                <div className="aspect-square rounded-2xl flex items-center justify-center shadow-sm" style={{ background: "#EDE9FE", border: "1px solid rgba(167,139,250,0.15)" }}>
                  <Bell className="w-10 h-10" style={{ color: "#7C3AED", strokeWidth: 1.5 }} />
                </div>
                <div className="aspect-square rounded-2xl flex items-center justify-center shadow-sm" style={{ background: "#DDD6FE", border: "1px solid rgba(167,139,250,0.15)" }}>
                  <TrendingUp className="w-10 h-10" style={{ color: "#7C3AED", strokeWidth: 1.5 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Work Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 mb-12">
            <div className="lg:w-1/2">
              <h2 className="h2 text-gray-900" style={{ fontFamily: '"Figtree", sans-serif', fontSize: "38px" }}>
                Plan Work with More Structure and Clarity
              </h2>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="text-lg text-gray-500 leading-relaxed">
                Organize workflows, responsibilities, timelines, and recurring operational activities using flexible structures that help teams prepare, prioritize, and manage work more effectively.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden mb-12 relative" style={{ background: "linear-gradient(135deg, #DDD6FE 0%, #EDE9FE 100%)", minHeight: 380 }}>
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10 p-10 flex items-center justify-center" style={{ minHeight: 380 }}>
              <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-white">
                <FeatureMockup type="gantt" className="h-[280px]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-2">
            {[
              { Icon: LayoutGrid, title: "Workflow Setup",          desc: "Create structured workflows that match how your teams operate across projects, recurring activities, and operational processes." },
              { Icon: Calendar,   title: "Timeline Planning",        desc: "Manage schedules, execution stages, priorities, and delivery timelines with better visibility across ongoing work." },
              { Icon: Clock,      title: "Recurring Workflows",      desc: "Support repeatable operational processes and recurring activities without rebuilding workflows each time." },
              { Icon: Users,      title: "Responsibility Assignment", desc: "Assign ownership clearly across teams, workflows, approvals, and operational activities." },
              { Icon: ListTodo,   title: "Operational Scheduling",   desc: "Coordinate work schedules, planned activities, and execution timelines across teams and departments." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-2 border-t border-gray-200 pt-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#F5F3FF", border: "1px solid #DDD6FE" }}>
                  <Icon className="w-4 h-4" style={{ color: "#7C3AED" }} />
                </div>
                <p className="text-xs font-bold text-gray-900 mt-1">{title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinate Execution Section */}
      <section className="py-24" style={{ background: "#FAFAFA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 mb-12">
            <div className="lg:w-1/2">
              <h2 className="h2 text-gray-900" style={{ fontFamily: '"Figtree", sans-serif', fontSize: "38px" }}>
                Coordinate Execution Across Teams
              </h2>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="text-lg text-gray-500 leading-relaxed">
                Keep workflows moving with better visibility across approvals, operational handoffs, updates, and active execution processes.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden mb-12 relative" style={{ background: "linear-gradient(135deg, #BFDBFE 0%, #DBEAFE 100%)", minHeight: 380 }}>
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10 p-10 flex items-center justify-center" style={{ minHeight: 380 }}>
              <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-white">
                <FeatureMockup type="workflow" className="h-[280px]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-2">
            {[
              { Icon: LayoutGrid,   title: "Workflow Coordination", desc: "Track operational activities across departments and maintain visibility throughout execution stages." },
              { Icon: CheckCircle2, title: "Approval Management",   desc: "Manage reviews, validations, checkpoints, and operational approvals with clearer accountability." },
              { Icon: Users,        title: "Cross-Team Visibility", desc: "Improve coordination between teams working across connected operational activities and shared workflows." },
              { Icon: TrendingUp,   title: "Execution Tracking",    desc: "Monitor workflow progress, operational movement, and active responsibilities in real time." },
              { Icon: Shield,       title: "Team Accountability",   desc: "Maintain clear ownership visibility across tasks, workflows, approvals, and operational activities." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-2 border-t border-gray-200 pt-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#F5F3FF", border: "1px solid #DDD6FE" }}>
                  <Icon className="w-4 h-4" style={{ color: "#7C3AED" }} />
                </div>
                <p className="text-xs font-bold text-gray-900 mt-1">{title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Progress Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 mb-12">
            <div className="lg:w-1/2">
              <h2 className="h2 text-gray-900" style={{ fontFamily: '"Figtree", sans-serif', fontSize: "38px" }}>
                Track Operational Progress with Better Visibility
              </h2>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="text-lg text-gray-500 leading-relaxed">
                Access operational insights, reporting tools, workload visibility, and activity tracking that help teams monitor ongoing execution more effectively.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden mb-12 relative" style={{ background: "linear-gradient(135deg, #99F6E4 0%, #CCFBF1 100%)", minHeight: 380 }}>
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10 p-10 flex items-center justify-center" style={{ minHeight: 380 }}>
              <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-white">
                <FeatureMockup type="dashboard" className="h-[280px]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-2">
            {[
              { Icon: FileBarChart, title: "Dashboards & Reporting", desc: "Monitor operational activity, workflow progress, execution status, and team performance from a centralized view." },
              { Icon: AlertCircle,  title: "Activity Monitoring",    desc: "Track workflow updates, operational changes, and execution movement across teams and processes." },
              { Icon: Filter,       title: "Workload Visibility",    desc: "Balance responsibilities and monitor execution capacity across active teams and workflows." },
              { Icon: TrendingUp,   title: "Progress Monitoring",    desc: "Maintain visibility into execution stages, operational timelines, and workflow completion status." },
              { Icon: Clock,        title: "Time Tracking",          desc: "Monitor operational effort, execution duration, and workflow timelines across ongoing activities." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-2 border-t border-gray-200 pt-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#F5F3FF", border: "1px solid #DDD6FE" }}>
                  <Icon className="w-4 h-4" style={{ color: "#7C3AED" }} />
                </div>
                <p className="text-xs font-bold text-gray-900 mt-1">{title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep Teams Connected Section */}
      <section className="py-24" style={{ background: "#FAFAFA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 mb-12">
            <div className="lg:w-1/2">
              <h2 className="h2 text-gray-900" style={{ fontFamily: '"Figtree", sans-serif', fontSize: "38px" }}>
                Keep Teams Connected Throughout Execution
              </h2>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="text-lg text-gray-500 leading-relaxed">
                Support communication, operational discussions, file sharing, and execution visibility across active workflows and ongoing activities.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden mb-12 relative" style={{ background: "linear-gradient(135deg, #FECDD3 0%, #FFE4E6 100%)", minHeight: 380 }}>
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative z-10 p-10 flex items-center justify-center" style={{ minHeight: 380 }}>
              <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-white">
                <FeatureMockup type="kanban" className="h-[280px]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-2">
            {[
              { Icon: MessageSquare, title: "Team Discussions",           desc: "Keep workflow conversations connected to operational activities, updates, and ongoing execution." },
              { Icon: Bell,          title: "Notifications & Updates",    desc: "Ensure important changes, approvals, and workflow updates reach the right teams quickly." },
              { Icon: FileText,      title: "Documentation Sharing",      desc: "Manage files, supporting documents, and operational context directly within active workflows." },
              { Icon: Folder,        title: "Activity History",           desc: "Maintain visibility into workflow actions, ownership updates, and operational progress over time." },
              { Icon: Users,         title: "Shared Operational Visibility", desc: "Help teams stay aligned with clearer communication and execution transparency across departments." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-2 border-t border-gray-200 pt-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#F5F3FF", border: "1px solid #DDD6FE" }}>
                  <Icon className="w-4 h-4" style={{ color: "#7C3AED" }} />
                </div>
                <p className="text-xs font-bold text-gray-900 mt-1">{title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: "#DDD6FE" }}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] opacity-15 blur-3xl rounded-full" style={{ background: "radial-gradient(ellipse, #7C3AED 0%, transparent 70%)" }} />
            </div>
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #7C3AED 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
            <div className="relative z-10 flex flex-col items-center text-center gap-8 px-12 py-16">
              <div className="max-w-4xl w-full">
                <h2 className="h2 text-gray-900 mb-5" style={{ fontFamily: '"Figtree", sans-serif', fontSize: "38px" }}>
                  Bring More Structure and Visibility to <span style={{ color: "#7C3AED" }}>Operational Execution</span>
                </h2>
                <p className="body-large text-gray-600" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                  Discover how EVOQ Projects helps teams coordinate workflows, improve accountability, manage operational activities, and maintain visibility across ongoing work.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <Button size="lg" className="font-bold text-base px-9 py-5 rounded-2xl text-white transition-all hover:scale-[1.02]" style={{ background: "#7C3AED", boxShadow: "0 8px 24px rgba(124,58,237,0.3)" }}>
                  Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="transition-all rounded-2xl font-semibold" style={{ border: "1.5px solid #7C3AED", color: "#7C3AED" }}>
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EvoqProjectsFooter />
    </motion.div>
  );
}
