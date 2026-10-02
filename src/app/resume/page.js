import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Resume | Tonton's Portfolio",
  description: "Career journey, certifications, education, and professional experience of Chigioke Charles Ugochukwu.",
};

const resumeData = {
  summary: {
    title: "Executive Summary",
    name: "CHIGIOKE CHARLES UGOCHUKWU",
    text: "With a strong foundation in Petroleum Engineering, I’ve evolved into full-stack software development and cybersecurity. My background gives me deep technical problem-solving capabilities, adaptable teamwork skills, and a drive to engineer secure digital tools.",
    contacts: ["+234 8116373426 / +234 9060272544", "ugochukwucharles1418@gmail.com"]
  },
  education: [
    {
      degree: "Bachelor of Engineering (B.Eng) in Petroleum Engineering",
      period: "2017 - 2022",
      institution: "Federal University of Technology Owerri (FUTO), Imo State, Nigeria",
      details: "Studied the fundamentals of energy systems, mathematical modeling, analytical problem solving, and collaborative engineering design."
    }
  ],
  certifications: [
    {
      title: "Full Stack Web Development Certification",
      period: "2023 - 2024",
      institution: "Loctech IT Training Institute, Rivers State, Nigeria",
      details: "Comprehensive training in frontend and backend software development: React, Next.js, Node.js, Python, Django, PostgreSQL, and modern APIs."
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      period: "2023 - 2024",
      institution: "Loctech IT Training Institute, Rivers State, Nigeria",
      details: "Hands-on experience in vulnerability assessment, network defense, penetration testing methodologies, and secure application architecture."
    }
  ],
  experience: [
    {
      role: "Full Stack Web Development Tutor & Mentor",
      period: "2024 - Present",
      company: "LOCTECH IT TRAINING INSTITUTE, Rivers State, Nigeria",
      details: "Mentoring upcoming developers in full-stack web engineering. Teaching React, Next.js, Node.js, and Django through project-based learning."
    },
    {
      role: "Sales & Technical Operations Manager",
      period: "2017 - 2019",
      company: "CJ Chijioke Electrical Company Nig Ltd, Imo State, Nigeria",
      details: "Managed customer relations, handled product consultation for electrical infrastructure, and optimized client acquisition."
    }
  ]
};

const page = () => {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">      {/* Header Banner */}
      <section className="relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 md:p-12 overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4caf50]/10 border border-[#4caf50]/30 text-[#4caf50] text-xs font-semibold tracking-wider uppercase">
              Career Timeline
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              RESUME
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              My professional journey in a nutshell: technical skills, formal education, certifications, and hands-on teaching experience.
            </p>
          </div>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-semibold bg-slate-950/60 border border-slate-800/80 px-4 py-2 rounded-xl">
            <Link href="/" className="text-[#4caf50] hover:text-[#43a047] transition-colors">
              HOME
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300">RESUME</span>
          </nav>
        </div>
      </section>

      {/* Main Resume Content */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Column: Summary & Education */}
        <div className="space-y-10">
          
          {/* Summary Card */}
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md space-y-4 shadow-xl">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#4caf50]" />
              {resumeData.summary.title}
            </h2>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#4caf50]">{resumeData.summary.name}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{resumeData.summary.text}</p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1 font-mono">
              {resumeData.summary.contacts.map((c, i) => (
                <p key={i}>• {c}</p>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md space-y-6 shadow-xl">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#4caf50]" />
              Education
            </h2>
            <div className="space-y-6 border-l-2 border-[#4caf50]/30 pl-6 ml-1.5">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="relative space-y-2 group">
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-[#4caf50] group-hover:scale-125 transition-transform" />
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded bg-[#4caf50]/10 text-[#4caf50] border border-[#4caf50]/30">
                    {edu.period}
                  </span>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-xs font-medium text-slate-400">{edu.institution}</p>
                  <p className="text-slate-300 text-sm leading-relaxed pt-1">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Certifications & Experience */}
        <div className="space-y-10">
          
          {/* Certifications Timeline */}
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md space-y-6 shadow-xl">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#4caf50]" />
              Training & Certifications
            </h2>
            <div className="space-y-6 border-l-2 border-[#4caf50]/30 pl-6 ml-1.5">
              {resumeData.certifications.map((cert, idx) => (
                <div key={idx} className="relative space-y-2 group">
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-[#4caf50] group-hover:scale-125 transition-transform" />
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded bg-[#4caf50]/10 text-[#4caf50] border border-[#4caf50]/30">
                    {cert.period}
                  </span>
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <p className="text-xs font-medium text-slate-400">{cert.institution}</p>
                  <p className="text-slate-300 text-sm leading-relaxed pt-1">{cert.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md space-y-6 shadow-xl">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#4caf50]" />
              Professional Experience
            </h2>
            <div className="space-y-6 border-l-2 border-[#4caf50]/30 pl-6 ml-1.5">
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} className="relative space-y-2 group">
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-[#4caf50] group-hover:scale-125 transition-transform" />
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded bg-[#4caf50]/10 text-[#4caf50] border border-[#4caf50]/30">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-xs font-medium text-slate-400">{exp.company}</p>
                  <p className="text-slate-300 text-sm leading-relaxed pt-1">{exp.details}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>
    </main>
  );
};

export default page;

