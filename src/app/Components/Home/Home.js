"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const roles = [
  "Full Stack Web Developer",
  "Cybersecurity & Penetration Tester",
  "Web Development Tutor & Mentor"
];

const HomeHero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-28 pb-16 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Text & CTA Column */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-[#4caf50]/30 shadow-md">
            <span className="text-xs font-bold tracking-wide text-[#4caf50] uppercase">
              Available for Hire & Web Projects
            </span>
          </div>

          {/* Main Title & Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              CHIJIOKE CHARLES <br />
              <span className="text-[#4caf50]">
                UGOCHUKWU
              </span>
            </h1>

            {/* Dynamic Role Switcher */}
            <div className="h-10 flex items-center overflow-hidden">
              <p className="text-lg sm:text-2xl font-bold text-slate-300">
                Specialized in{" "}
                <span className="text-[#4caf50] transition-all duration-500 underline decoration-[#4caf50]/50 underline-offset-4">
                  {roles[currentRoleIndex]}
                </span>
              </p>
            </div>
          </div>

          {/* Bio Summary */}
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            I design and build secure, high-performance web applications with React, Next.js, Node.js, and Django. Blending creative frontend aesthetics with hardened cybersecurity practices to deliver digital experiences that perform flawlessly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#4caf50] hover:bg-[#43a047] shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore My Work</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-[#4caf50]/50 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Get In Touch</span>
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-[#4caf50] transition-colors"
            >
              <span>View Resume →</span>
            </Link>
          </div>

          {/* Social Links Bar */}
          <div className="pt-4 flex items-center gap-4 border-t border-slate-800/80">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect:</span>
            <div className="flex items-center gap-3">
              {[
                { name: 'GitHub', url: 'https://github.com/Tontoncharlie', icon: '/home_images/gt_wh.png' },
                { name: 'X', url: 'https://x.com/Ugobest72212396', icon: '/home_images/x_wh.png' },
                { name: 'Facebook', url: 'https://www.facebook.com/share/19Ry4zqZRe/', icon: '/home_images/fb_wh.png' },
                { name: 'Instagram', url: 'https://www.instagram.com/le_ccu?igsh=eW1mYThmd3N6eTJo', icon: '/home_images/in_wh.png' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chigioke-charles-ugochukiou-3196281b7/', icon: '/home_images/ln_wh.png' },
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="p-2.5 rounded-full bg-slate-900/90 border border-slate-800 hover:border-[#4caf50] hover:bg-[#4caf50]/10 hover:-translate-y-1 transition-all duration-200"
                >
                  <Image src={soc.icon} width={20} height={20} alt={soc.name} className="object-contain opacity-90 hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right Photo Column */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-md">
            {/* Glass Container */}
            <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-4 shadow-2xl overflow-hidden">
              <Image
                src="/home_images/new-pic.jpeg"
                width={450}
                height={550}
                priority
                alt="Chigioke Charles Ugochukwu"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-102 transition-transform duration-500"
              />

              {/* Stats Card Overlay */}
              <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex justify-around text-center">
                <div>
                  <p className="text-2xl font-extrabold text-[#4caf50]">7+</p>
                  <p className="text-xs text-slate-400 font-medium">Live Apps</p>
                </div>
                <div className="w-px bg-slate-800" />
                <div>
                  <p className="text-2xl font-extrabold text-[#4caf50]">Full-Stack</p>
                  <p className="text-xs text-slate-400 font-medium">React & Node</p>
                </div>
                <div className="w-px bg-slate-800" />
                <div>
                  <p className="text-2xl font-extrabold text-[#4caf50]">Secure</p>
                  <p className="text-xs text-slate-400 font-medium">CyberSec Trained</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;

