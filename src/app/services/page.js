import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Services | Tonton's Portfolio",
  description: "Web development, Frontend & Backend Engineering, Cybersecurity Basics, and Technical Consulting services by Chigioke Charles.",
};

const servicesList = [
  {
    icon: "/home_images/tools.png",
    title: "Web Development",
    desc: "Designing and building responsive, user-friendly websites using modern tools like React, Next.js, and Node.js."
  },
  {
    icon: "/home_images/paint.png",
    title: "Frontend Development",
    desc: "Creating clean, interactive, and accessible interfaces that look great on all screen sizes."
  },
  {
    icon: "/home_images/tool.png",
    title: "Backend Development",
    desc: "Developing secure, scalable server-side applications with efficient database management (Django, Node.js, PostgreSQL)."
  },
  {
    icon: "/home_images/lock.png",
    title: "Cybersecurity Basics",
    desc: "Helping individuals and small businesses understand digital safety, identify vulnerabilities, and secure online assets."
  },
  {
    icon: "/home_images/lab.png",
    title: "Website Testing & Debugging",
    desc: "Finding and fixing bugs, optimizing load performance, and ensuring a seamless end-user experience."
  },
  {
    icon: "/home_images/bulb.png",
    title: "Technical Consulting & Support",
    desc: "Providing guidance on website architecture, maintenance, small edits, and tech troubleshooting."
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
              What I Offer
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              SERVICES
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Looking for help with your next web product or security assessment? Here is how I can help bring your vision to life.
            </p>
          </div>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-semibold bg-slate-950/60 border border-slate-800/80 px-4 py-2 rounded-xl">
            <Link href="/" className="text-[#4caf50] hover:text-[#43a047] transition-colors">
              HOME
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300">SERVICES</span>
          </nav>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl bg-slate-900/70 backdrop-blur-md border border-slate-800 p-8 hover:border-[#4caf50]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-xl bg-slate-950/80 border border-slate-800 p-3.5 flex items-center justify-center group-hover:border-[#4caf50]/40 transition-colors">
                <Image src={service.icon} width={40} height={40} alt={service.title} className="object-contain" />
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-[#4caf50] transition-colors">
                {service.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#4caf50] hover:text-[#43a047] transition-colors"
              >
                <span>Request Service</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default page;

