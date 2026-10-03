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

          {/* Breadcrumb Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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