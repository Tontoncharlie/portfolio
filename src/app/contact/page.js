import React from 'react';
import Link from 'next/link';
import Input from '../Components/input/Input';

export const metadata = {
  title: "Contact | Tonton's Portfolio",
  description: "Get in touch with Chigioke Charles Ugochukwu for freelance projects, technical consulting, or full-time software engineering roles.",
};

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Tontoncharlie',
    svg: (
      <svg className="w-5 h-5 fill-current text-white group-hover:text-[#4caf50] transition-colors" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  },
  {
    name: 'X',
    url: 'https://x.com/Ugobest72212396',
    svg: (
      <svg className="w-5 h-5 fill-current text-white group-hover:text-[#4caf50] transition-colors" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/19Ry4zqZRe/',
    svg: (
      <svg className="w-5 h-5 fill-current text-white group-hover:text-[#4caf50] transition-colors" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/le_ccu?igsh=eW1mYThmd3N6eTJo',
    svg: (
      <svg className="w-5 h-5 fill-current text-white group-hover:text-[#4caf50] transition-colors" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chigioke-charles-ugochukiou-3196281b7/',
    svg: (
      <svg className="w-5 h-5 fill-current text-white group-hover:text-[#4caf50] transition-colors" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  }
];

const page = () => {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header Banner */}
      <section className="relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 md:p-12 overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4caf50]/10 border border-[#4caf50]/30 text-[#4caf50] text-xs font-semibold tracking-wider uppercase">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              CONTACT ME
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Got a question, project proposal, or collaboration idea? Feel free to send a message, I'd love to hear from you!
            </p>
          </div>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-semibold bg-slate-950/60 border border-slate-800/80 px-4 py-2 rounded-xl">
            <Link href="/" className="text-[#4caf50] hover:text-[#43a047] transition-colors">
              HOME
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300">CONTACT</span>
          </nav>
        </div>
      </section>

      {/* Grid: Contact Info + Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Location */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md flex items-start gap-4 hover:border-[#4caf50]/40 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#4caf50]/15 border border-[#4caf50]/30 flex items-center justify-center shrink-0 group-hover:bg-[#4caf50]/25 transition-colors">
              <svg className="w-6 h-6 text-[#4caf50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#4caf50] uppercase tracking-wider">Location</h2>
              <p className="text-slate-200 text-sm mt-1">Port Harcourt, Rivers State, Nigeria</p>
            </div>
          </div>

          {/* Direct Phone */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md flex items-start gap-4 hover:border-[#4caf50]/40 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#4caf50]/15 border border-[#4caf50]/30 flex items-center justify-center shrink-0 group-hover:bg-[#4caf50]/25 transition-colors">
              <svg className="w-6 h-6 text-[#4caf50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#4caf50] uppercase tracking-wider">Direct Phone</h2>
              <p className="text-slate-200 text-sm mt-1">+234 8116373426 / +234 9060272544 / +234 8165507171</p>
            </div>
          </div>

          {/* Email Address */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md flex items-start gap-4 hover:border-[#4caf50]/40 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#4caf50]/15 border border-[#4caf50]/30 flex items-center justify-center shrink-0 group-hover:bg-[#4caf50]/25 transition-colors">
              <svg className="w-6 h-6 text-[#4caf50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#4caf50] uppercase tracking-wider">Email Address</h2>
              <p className="text-slate-200 text-sm mt-1">ugochukwucharles1418@gmail.com</p>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md space-y-4">
            <h2 className="text-sm font-bold text-[#4caf50] uppercase tracking-wider">Social Profiles</h2>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((soc, i) => (
                <a
                  key={i}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="p-3.5 rounded-full bg-slate-900 border border-slate-700/80 hover:border-[#4caf50] hover:bg-[#4caf50]/20 hover:-translate-y-1 hover:scale-110 shadow-lg transition-all duration-300 group flex items-center justify-center"
                >
                  {soc.svg}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white">Send A Direct Message</h2>
            <p className="text-slate-400 text-sm">Fill out the form below and I will respond within 24 hours.</p>
          </div>
          <Input />
        </div>

      </section>
    </main>
  );
};

export default page;