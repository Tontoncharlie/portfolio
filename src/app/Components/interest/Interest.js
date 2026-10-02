import React from 'react';
import Image from 'next/image';

const interests = [
  { icon: "/home_images/book.png", label: "Tech Reading & Articles" },
  { icon: "/home_images/headphones.png", label: "Music & Production" },
  { icon: "/home_images/leaf.png", label: "Nature Walks" },
  { icon: "/home_images/planet.png", label: "Cultural Exploration" },
  { icon: "/home_images/popcorn.png", label: "Anime & Sci-Fi Movies" },
  { icon: "/home_images/meditation.png", label: "Mindfulness & Growth" },
];

const Interest = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {interests.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#4caf50]/40 hover:-translate-y-1 transition-all duration-300 text-center space-y-3 group shadow-lg"
        >
          <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center p-2.5 group-hover:bg-[#4caf50]/10 transition-colors">
            <Image src={item.icon} width={30} height={30} alt={item.label} className="object-contain" />
          </div>
          <p className="text-xs font-bold text-slate-200 group-hover:text-[#4caf50] transition-colors">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Interest;

