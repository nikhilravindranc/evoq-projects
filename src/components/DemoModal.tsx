"use client";

import { useState } from "react";
import { ArrowRight, X, Calendar } from "lucide-react";

const teamSizeOptions = ["1–10", "11–25", "26–50", "51–100", "101+"];

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

const DemoModal = ({ open, onClose }: DemoModalProps) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    company: "",
    teamSize: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ fullName: "", email: "", mobile: "", company: "", teamSize: "" });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(93,30,153,0.55)", backdropFilter: "blur(6px)" }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden"
        style={{ background: "white", boxShadow: "0 32px 80px rgba(124,58,237,0.22)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient bar */}
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%)" }} />

        <div className="px-8 pt-8 pb-10">
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>

          {!submitted ? (
            <>
              <div className="mb-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ background: "#EDE9F8" }}>
                  <Calendar className="w-3.5 h-3.5" style={{ color: "#7C3AED" }} />
                  <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#7C3AED" }}>
                    Book a Demo
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-[#5D1E99] leading-snug mb-1.5">
                  See EVOQ Projects<br />
                  <span style={{ color: "#7C3AED" }}>working for your team.</span>
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Get a personalised walkthrough from our team — no scripts, just answers.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">Full Name</label>
                  <input
                    type="text" name="fullName" value={form.fullName}
                    onChange={handleChange} required placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl text-sm text-[#5D1E99] placeholder-gray-300 outline-none transition-all"
                    style={{ border: "1.5px solid #E8E4F8", background: "#FAFBFF" }}
                    onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                    onBlur={(e) => (e.target.style.borderColor = "#E8E4F8")}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">Work Email</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} required placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-[#5D1E99] placeholder-gray-300 outline-none transition-all"
                      style={{ border: "1.5px solid #E8E4F8", background: "#FAFBFF" }}
                      onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                      onBlur={(e) => (e.target.style.borderColor = "#E8E4F8")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">Mobile Number</label>
                    <input
                      type="tel" name="mobile" value={form.mobile}
                      onChange={handleChange} placeholder="+1 555 000 0000"
                      className="w-full px-4 py-3 rounded-xl text-sm text-[#5D1E99] placeholder-gray-300 outline-none transition-all"
                      style={{ border: "1.5px solid #E8E4F8", background: "#FAFBFF" }}
                      onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                      onBlur={(e) => (e.target.style.borderColor = "#E8E4F8")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">Company Name</label>
                    <input
                      type="text" name="company" value={form.company}
                      onChange={handleChange} required placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl text-sm text-[#5D1E99] placeholder-gray-300 outline-none transition-all"
                      style={{ border: "1.5px solid #E8E4F8", background: "#FAFBFF" }}
                      onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                      onBlur={(e) => (e.target.style.borderColor = "#E8E4F8")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5D1E99] mb-1.5">Team Size</label>
                    <select
                      name="teamSize" value={form.teamSize} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer"
                      style={{ border: "1.5px solid #E8E4F8", background: "#FAFBFF", color: form.teamSize ? "#5D1E99" : "#9CA3AF" }}
                      onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                      onBlur={(e) => (e.target.style.borderColor = "#E8E4F8")}
                    >
                      <option value="" disabled>Select range</option>
                      {teamSizeOptions.map((o) => (
                        <option key={o} value={o} style={{ color: "#5D1E99" }}>{o} people</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full font-bold text-sm py-3.5 rounded-xl text-white transition-all hover:scale-[1.01] mt-1 flex items-center justify-center gap-2"
                  style={{ background: "#7C3AED", boxShadow: "0 6px 24px rgba(124,58,237,0.32)" }}
                >
                  Book My Demo <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-gray-400">
                  No commitment required · Usually responds within 1 business day
                </p>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "#EDE9F8" }}>
                <Calendar className="w-8 h-8" style={{ color: "#7C3AED" }} />
              </div>
              <h3 className="text-2xl font-extrabold text-[#5D1E99] mb-2">You&apos;re on the list!</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-7">
                Thanks, <strong>{form.fullName.split(" ")[0]}</strong>! Our team will reach out to{" "}
                <strong>{form.email}</strong> within one business day to schedule your demo.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 rounded-xl font-bold text-sm text-white transition-all hover:scale-[1.01]"
                style={{ background: "#7C3AED", boxShadow: "0 6px 20px rgba(124,58,237,0.3)" }}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
