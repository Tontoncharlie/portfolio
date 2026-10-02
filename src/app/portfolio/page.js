import React from 'react';
import Link from 'next/link';
import SeventyNineDigital from '../Components/SeventyNineDigital';
import Fediboards from '../Components/Fediboards';
import Qesh from '../Components/Qesh';
import EduStream from '../Components/EduStream';
import Inventa from '../Components/Inventa';
import Velocity from '../Components/Velocity';
import Staffly from '../Components/Staffly';
import ShopApi from '../Components/ShopApi';
import LogisticApi from '../Components/LogisticApi';

export const metadata = {
  title: "Projects | Tonton's Portfolio",
  description: "Explore live full-stack web applications and backend API microservices built by Chigioke Charles (Tonton).",
};

const page = () => {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header Banner */}
      <section className="relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 md:p-12 overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4caf50]/10 border border-[#4caf50]/30 text-[#4caf50] text-xs font-semibold tracking-wider uppercase">
              Featured Work & Products
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              PROJECTS
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Explore a showcase of production-ready full-stack applications, interactive web tools, and robust backend REST APIs.
            </p>
          </div>

          {/* Breadcrumb Navigation & GitHub CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://github.com/Tontoncharlie?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-sm shadow-lg transition-all duration-200 group"
            >
              <svg className="w-5 h-5 fill-current text-[#4caf50] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>More Projects on GitHub</span>
            </a>

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-semibold bg-slate-950/60 border border-slate-800/80 px-4 py-2 rounded-xl">
              <Link href="/" className="text-[#4caf50] hover:text-[#43a047] transition-colors">
                HOME
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300">PROJECTS</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Live Applications Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>All Featured Applications & Codebases</span>
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-slate-800 text-[#4caf50] border border-slate-700">
              9 Featured
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SeventyNineDigital />
          <Fediboards />
          <Qesh />
          <Inventa />
          <Velocity />
          <Staffly />
          <EduStream />
          <ShopApi />
          <LogisticApi />
        </div>
      </section>

    </main>
  );
};

export default page;