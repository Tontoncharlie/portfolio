import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Skills from '../Components/skills/Skills';
import Interest from '../Components/interest/Interest';

export const metadata = {
  title: "About | Tonton's Portfolio",
  description: "Learn about Chigioke Charles Ugochukwu - Full Stack Web Developer and Cybersecurity Specialist.",
};

const page = () => {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header Banner */}
      <section className="relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 md:p-12 overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4caf50]/10 border border-[#4caf50]/30 text-[#4caf50] text-xs font-semibold tracking-wider uppercase">
              Get To Know Me
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              ABOUT ME
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Passionate Full Stack Developer & Cybersecurity enthusiast with a background in Petroleum Engineering, building secure and high-performing digital solutions.
            </p>
          </div>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-semibold bg-slate-950/60 border border-slate-800/80 px-4 py-2 rounded-xl">
            <Link href="/" className="text-[#4caf50] hover:text-[#43a047] transition-colors">
              HOME
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300">ABOUT</span>
          </nav>
        </div>
      </section>

      {/* Main Bio Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-md">
            <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-3 shadow-2xl overflow-hidden">
              <Image
                src="/home_images/pic7.jpg"
                width={500}
                height={500}
                alt="Chigioke Charles Ugochukwu"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Full Stack Web Developer & <span className="text-[#4caf50]">Ethical Hacker</span>
            </h2>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              Hey there! I'm a full stack web developer who loves turning ideas into clean, responsive, and user-friendly digital experiences. Whether it's designing a sleek frontend or architecting a resilient backend, I thrive on bringing complex projects to life.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              I also integrate ethical hacking principles and cybersecurity best practices into my software engineering workflow to construct resilient applications. Good code tells a story, and I’m here to write it with reliable solutions.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              { label: "Languages", value: "English / French / Basic Spanish" },
              { label: "Location", value: "Port Harcourt, Rivers State, Nigeria" },
              { label: "Phone", value: "+234 8116373426 / +234 9060272544" },
              { label: "Email", value: "ugochukwucharles1418@gmail.com" },
              { label: "Role Status", value: "Available for Freelance & Full-time" },
              { label: "Education", value: "B.Eng Petroleum Engineering (FUTO)" }
            ].map((info, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#4caf50] mt-2 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#4caf50] uppercase tracking-wider">{info.label}</p>
                  <p className="text-sm font-medium text-slate-200 mt-0.5">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4caf50]">Technical Proficiency</p>
          <h2 className="text-3xl font-extrabold text-white">SKILLS & CORE COMPETENCIES</h2>
        </div>
        <Skills />
      </section>

      {/* Interests Section */}
      <section className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4caf50]">Personal Hobbies</p>
          <h2 className="text-3xl font-extrabold text-white">WHAT I ENJOY OUTSIDE CODE</h2>
        </div>
        <Interest />
      </section>
    </main>
  );
};

export default page;

