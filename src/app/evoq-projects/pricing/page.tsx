"use client";

import { useState } from "react";
import Header from "@/components/Header";
import EvoqProjectsSubHeader from "@/components/EvoqProjectsSubHeader";
import EvoqProjectsFooter from "@/components/EvoqProjectsFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Minus, X, MessageSquare, Calendar } from "lucide-react";
import DemoModal from "@/components/DemoModal";

const teamSizeOptions = ["1–10", "11–25", "26–50", "51–100", "101+"];
const currentToolOptions = [
  "Jira", "Asana", "Monday.com", "Trello", "Notion",
  "ClickUp", "Basecamp", "Microsoft Project", "Spreadsheets", "Other",
];

interface ContactPricingModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactPricingModal = ({ open, onClose }: ContactPricingModalProps) => {
  const [form, setForm] = useState({
    fullName: "", email: "", mobile: "", company: "",
    teamSize: "", currentTool: "", requirements: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ fullName: "", email: "", mobile: "", company: "", teamSize: "", currentTool: "", requirements: "" });
    onClose();
  };

  const inputBase: React.CSSProperties = { border: "1.5px solid #E8E4F8", background: "#FAFBFF" };
  const focusBorder = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = "#7C3AED");
  const blurBorder  = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = "#E8E4F8");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(93,30,153,0.55)", backdropFilter: "blur(6px)" }}
      onClick={handleClose}>
      <div className="relative w-full max-w-lg rounded-3xl overflow-hidden"
        style={{ background: "white", boxShadow: "0 32px 80px rgba(124,58,237,0.22)" }}
        onClick={(e) => e.stopPropagation()}>
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #5D1E99 0%, #7C3AED 100%)" }} />
        <div className="px-8 pt-8 pb-10">
          <button onClick={handleClose} className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100">
            <X className="w-4 h-4 text-gray-400" />
          </button>
          {!submitted ? (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ background: "#EDE9F8" }}>
                  <MessageSquare className="w-3.5 h-3.5" style={{ color: "#7C3AED" }} />
                  <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#7C3AED" }}>Contact Pricing</span>
                </div>
                <h2 className="text-2xl font-extrabold text-[#5D1E99] leading-snug mb-1.5">
                  Let&apos;s build a plan<br /><span style={{ color: "#7C3AED" }}>around your organisation.</span>
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">Tell us about your team and what you need — we&apos;ll come back with a tailored proposal.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">Full Name</label>
                  <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl text-sm text-[#5D1E99] placeholder-gray-300 outline-none transition-all"
                    style={inputBase} onFocus={focusBorder} onBlur={blurBorder} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">Work Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-[#5D1E99] placeholder-gray-300 outline-none transition-all"
                      style={inputBase} onFocus={focusBorder} onBlur={blurBorder} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">Mobile Number</label>
                    <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="+1 555 000 0000"
                      className="w-full px-4 py-3 rounded-xl text-sm text-[#5D1E99] placeholder-gray-300 outline-none transition-all"
                      style={inputBase} onFocus={focusBorder} onBlur={blurBorder} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">Company Name</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl text-sm text-[#5D1E99] placeholder-gray-300 outline-none transition-all"
                      style={inputBase} onFocus={focusBorder} onBlur={blurBorder} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">Team Size</label>
                    <select name="teamSize" value={form.teamSize} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer"
                      style={{ ...inputBase, color: form.teamSize ? "#5D1E99" : "#9CA3AF" }}
                      onFocus={focusBorder} onBlur={blurBorder}>
                      <option value="" disabled>Select range</option>
                      {teamSizeOptions.map((o) => <option key={o} value={o} style={{ color: "#5D1E99" }}>{o} people</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">Current Project Tool</label>
                  <select name="currentTool" value={form.currentTool} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer"
                    style={{ ...inputBase, color: form.currentTool ? "#5D1E99" : "#9CA3AF" }}
                    onFocus={focusBorder} onBlur={blurBorder}>
                    <option value="" disabled>What are you using today?</option>
                    {currentToolOptions.map((t) => <option key={t} value={t} style={{ color: "#5D1E99" }}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">
                    What are you looking for? <span className="font-normal text-gray-400 ml-1">(optional)</span>
                  </label>
                  <textarea name="requirements" value={form.requirements} onChange={handleChange} rows={3}
                    placeholder="e.g. SSO, custom integrations, multi-team reporting, SLA requirements…"
                    className="w-full px-4 py-3 rounded-xl text-sm text-[#5D1E99] placeholder-gray-300 outline-none transition-all resize-none"
                    style={inputBase} onFocus={focusBorder} onBlur={blurBorder} />
                </div>
                <button type="submit"
                  className="w-full font-bold text-sm py-3.5 rounded-xl text-white transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  style={{ background: "#5D1E99", boxShadow: "0 6px 24px rgba(93,30,153,0.28)" }}>
                  Send My Requirements <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[11px] text-gray-400">We&apos;ll respond with a custom proposal within 1–2 business days</p>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "#EDE9F8" }}>
                <MessageSquare className="w-8 h-8" style={{ color: "#7C3AED" }} />
              </div>
              <h3 className="text-2xl font-extrabold text-[#5D1E99] mb-2">Message received!</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-7">
                Thanks, <strong>{form.fullName.split(" ")[0]}</strong>! Our team will review your requirements and send a tailored proposal to <strong>{form.email}</strong> within 1–2 business days.
              </p>
              <button onClick={handleClose} className="px-8 py-3 rounded-xl font-bold text-sm text-white transition-all hover:scale-[1.01]" style={{ background: "#5D1E99", boxShadow: "0 6px 20px rgba(93,30,153,0.25)" }}>
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function EvoqProjectsPricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("Professional");
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [showDemo, setShowDemo] = useState(false);
  const [showContactPricing, setShowContactPricing] = useState(false);

  interface PricingPlan {
    name: string;
    monthly: string;
    annual: string;
    description: string;
    popular: boolean;
  }

  const plans: PricingPlan[] = [
    { name: "Starter",      monthly: "350",    annual: "300",    description: "Perfect for small teams getting started with project management.", popular: false },
    { name: "Professional", monthly: "600",    annual: "500",    description: "For growing teams that need advanced tools, dashboards, and reporting.", popular: true },
    { name: "Enterprise",   monthly: "Custom", annual: "Custom", description: "For large organisations needing custom integrations, SSO, and SLAs.", popular: false },
  ];

  const getPrice = (plan: PricingPlan) => {
    if (plan.monthly === "Custom") return "Custom";
    return billing === "yearly" ? plan.annual : plan.monthly;
  };

  const faqs = [
    { question: "Is there a free trial?",                    answer: "Yes! We offer a 14-day free trial for all plans. No credit card required to start." },
    { question: "Can I change plans later?",                 answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes are prorated automatically." },
    { question: "What payment methods do you accept?",       answer: "We accept all major credit cards, PayPal, and wire transfers for annual Enterprise plans." },
    { question: "Do you offer discounts for annual billing?", answer: "Yes! Save 20% when you choose annual billing on any plan." },
  ];

  const currentPlan = plans.find((p) => p.name === selectedPlan);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <EvoqProjectsSubHeader />

      <DemoModal open={showDemo} onClose={() => setShowDemo(false)} />
      <ContactPricingModal open={showContactPricing} onClose={() => setShowContactPricing(false)} />

      {/* Main Pricing Section */}
      <section className="flex-1 py-16" style={{ background: "#F5F3FF" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden" style={{ border: "1px solid #E8E4F8", boxShadow: "0 8px 40px rgba(124,58,237,0.08)" }}>
            <div className="flex flex-col lg:flex-row">

              {/* LEFT — heading + FAQ */}
              <div className="lg:w-[44%] p-10 lg:p-12 border-r border-gray-100">
                <p className="text-[10px] font-extrabold uppercase tracking-widest mb-4" style={{ color: "#7C3AED" }}>Simple, Transparent Pricing</p>
                <h1 className="text-4xl font-extrabold text-gray-900 leading-[1.1] mb-10">
                  Powerful tools.<br />Honest pricing.
                </h1>
                <div className="divide-y divide-gray-100">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between py-4 text-left group">
                        <span className="text-sm font-semibold text-[#5D1E99] group-hover:text-[#7C3AED] transition-colors pr-4">{faq.question}</span>
                        {openFaq === i
                          ? <Minus className="w-4 h-4 flex-shrink-0" style={{ color: "#7C3AED" }} />
                          : <Plus className="w-4 h-4 flex-shrink-0 text-gray-400" />}
                      </button>
                      {openFaq === i && <p className="text-sm text-gray-600 leading-relaxed pb-4 pr-4">{faq.answer}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — plan cards + CTA */}
              <div className="lg:w-[56%] p-10 lg:p-12 flex flex-col" style={{ background: "#FAFBFF" }}>

                {/* Billing toggle */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-[#5D1E99]">Billing cycle</span>
                  <div className="flex items-center gap-1 p-1 rounded-full" style={{ background: "#EDE9F8" }}>
                    <button onClick={() => setBilling("monthly")} className="px-4 py-1.5 rounded-full text-xs font-bold transition-all"
                      style={billing === "monthly" ? { background: "#7C3AED", color: "white", boxShadow: "0 2px 8px rgba(124,58,237,0.3)" } : { color: "#7C3AED" }}>
                      Monthly
                    </button>
                    <button onClick={() => setBilling("yearly")} className="px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5"
                      style={billing === "yearly" ? { background: "#7C3AED", color: "white", boxShadow: "0 2px 8px rgba(124,58,237,0.3)" } : { color: "#7C3AED" }}>
                      Yearly
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full"
                        style={{ background: billing === "yearly" ? "rgba(255,255,255,0.25)" : "#DDD6FE", color: billing === "yearly" ? "white" : "#7C3AED" }}>
                        −20%
                      </span>
                    </button>
                  </div>
                </div>

                {/* Plan cards */}
                <div className="space-y-3 mb-7">
                  {plans.map((plan) => {
                    const isSelected = selectedPlan === plan.name;
                    return (
                      <button key={plan.name} onClick={() => setSelectedPlan(plan.name)}
                        className="w-full text-left rounded-2xl p-5 transition-all duration-200"
                        style={{ background: "white", border: isSelected ? "2px solid #7C3AED" : "2px solid #EDE9F8", boxShadow: isSelected ? "0 4px 20px rgba(124,58,237,0.13)" : "none" }}>
                        <div className="flex items-center gap-4">
                          <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border-2 transition-all"
                            style={{ borderColor: isSelected ? "#7C3AED" : "#D1D5DB" }}>
                            {isSelected && <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#7C3AED" }} />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-base font-bold text-[#5D1E99]">{plan.name}</span>
                              {plan.popular && (
                                <span className="text-[9px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full" style={{ background: "#DDD6FE", color: "#7C3AED" }}>Popular</span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">{plan.description}</p>
                          </div>
                          <div className="text-right flex-shrink-0 pl-3">
                            {plan.monthly === "Custom" ? (
                              <span className="text-lg font-extrabold text-[#5D1E99]">Custom</span>
                            ) : (
                              <div>
                                <div className="flex items-baseline gap-1 justify-end">
                                  <span className="text-lg font-extrabold text-[#5D1E99]">₹{getPrice(plan)}</span>
                                  <span className="text-xs text-gray-400">/mo.</span>
                                </div>
                                {billing === "yearly" && <span className="text-[10px] text-gray-400 line-through">₹{plan.monthly}/mo.</span>}
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* CTA button */}
                <Button
                  onClick={() => currentPlan?.monthly === "Custom" ? setShowContactPricing(true) : setShowDemo(true)}
                  className="w-full font-bold text-base py-5 rounded-2xl text-white transition-all hover:scale-[1.01] mb-4"
                  style={{
                    background: currentPlan?.monthly === "Custom" ? "#5D1E99" : "#7C3AED",
                    boxShadow: currentPlan?.monthly === "Custom" ? "0 6px 24px rgba(93,30,153,0.3)" : "0 6px 24px rgba(124,58,237,0.35)",
                  }}>
                  {currentPlan?.monthly === "Custom"
                    ? <><MessageSquare className="mr-2 w-4 h-4" />Contact Pricing</>
                    : <><Calendar className="mr-2 w-4 h-4" />Book a Demo</>}
                </Button>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {billing === "yearly" ? "🎉 20% discount applied" : "Switch to yearly to save 20%"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: "#F5F3FF" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: "#7C3AED" }}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] opacity-30 blur-3xl rounded-full" style={{ background: "radial-gradient(ellipse, #8B5CF6 0%, transparent 70%)" }} />
            </div>
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-12 py-14">
              <div className="lg:max-w-[60%]">
                <h2 className="text-3xl font-extrabold text-white leading-[1.2] mb-3">
                  Ready to Get Started?{" "}
                  <span style={{ color: "#A78BFA" }}>Your first 14 days are free.</span>
                </h2>
                <p className="text-white/70 leading-relaxed">Join thousands of teams already delivering better projects with EVOQ Projects.</p>
              </div>
              <Button size="lg" onClick={() => setShowDemo(true)}
                className="font-bold text-base px-10 py-5 rounded-2xl text-white transition-all hover:scale-[1.02] flex-shrink-0 flex items-center gap-2"
                style={{ background: "#8B5CF6", boxShadow: "0 8px 32px rgba(139,92,246,0.4)" }}>
                <Calendar className="w-5 h-5" />
                Book a Demo <ArrowRight className="ml-1 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EvoqProjectsFooter />
    </div>
  );
}
