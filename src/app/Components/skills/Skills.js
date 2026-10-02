'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js & Next.js', level: 95, category: 'Frontend' },
  { name: 'JavaScript (ES6+) & TypeScript', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS & Modern UI', level: 98, category: 'Frontend' },
  { name: 'Node.js & Express API', level: 88, category: 'Backend' },
  { name: 'Python & Django Web Framework', level: 90, category: 'Backend' },
  { name: 'Cybersecurity & Penetration Testing', level: 85, category: 'Security' },
  { name: 'PostgreSQL & Supabase DB', level: 86, category: 'Database' },
  { name: 'Git & Deployment (Vercel / Render)', level: 92, category: 'DevOps' },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 space-y-2.5 shadow-md hover:border-[#4caf50]/30 transition-all">
          <div className="flex justify-between items-center text-sm font-bold">
            <span className="text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
              {skill.name}
            </span>
            <span className="text-[#4caf50] font-mono text-xs px-2 py-0.5 rounded bg-[#4caf50]/10 border border-[#4caf50]/30">
              {skill.level}%
            </span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
            <motion.div
              className="h-full rounded-full bg-[#4caf50]"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2, delay: index * 0.08 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

