"use client";

import React, { useState } from 'react';

const Input = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);
    setLoading(true);

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("https://formspree.io/f/xzzgkgar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required
            className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#4caf50] focus:ring-1 focus:ring-[#4caf50] transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            required
            className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#4caf50] focus:ring-1 focus:ring-[#4caf50] transition-all text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Project Inquiry / Job Opportunity"
          required
          className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#4caf50] focus:ring-1 focus:ring-[#4caf50] transition-all text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Tell me about your project, timeline, and goals..."
          rows="5"
          required
          className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#4caf50] focus:ring-1 focus:ring-[#4caf50] transition-all text-sm resize-y"
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-[#4caf50] hover:bg-[#43a047] shadow-md transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <span>Send Message →</span>
          )}
        </button>
      </div>

      {submitted && (
        <div className="p-4 rounded-xl bg-[#4caf50]/10 border border-[#4caf50]/40 text-[#4caf50] text-sm font-medium flex items-center gap-2">
          <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-sm font-medium flex items-center gap-2">
          <span>❌</span>
          <span>Something went wrong while sending. Please try again or email me directly at ugochukwucharles1418@gmail.com</span>
        </div>
      )}
    </form>
  );
};

export default Input;

