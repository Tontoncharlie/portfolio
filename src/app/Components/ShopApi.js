import React from 'react';

export default function ShopApi() {
  return (
    <div className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 shadow-xl hover:border-[#4caf50]/50 transition-all duration-300 group h-full">
      <div className="space-y-4 relative z-10">
        <div className="flex flex-wrap gap-2">
          {["Django REST", "Python", "E-Commerce", "PostgreSQL", "JWT Auth"].map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-[#4caf50]/10 text-[#4caf50] border border-[#4caf50]/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50] animate-pulse" />
            Backend REST API
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#4caf50] transition-colors flex items-center justify-between">
            <span>Shop E-Commerce API</span>
            <svg
              className="w-5 h-5 text-[#4caf50] transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            A scalable E-Commerce backend API engine built with Django REST Framework. Handles product catalogs, category filtering, customer cart sessions, checkout order processing, and secure JWT authentication.
          </p>
        </div>
      </div>

      <div className="my-4 p-3 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-1 overflow-hidden select-none">
        <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800 text-slate-500 text-[10px]">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <span className="w-2 h-2 rounded-full bg-green-500/80" />
          <span className="ml-2 font-sans font-medium text-slate-400">shop-api/views.py</span>
        </div>
        <p><span className="text-purple-400">class</span> <span className="text-yellow-300">ProductViewSet</span>(viewsets.ModelViewSet):</p>
        <p className="pl-4"><span className="text-blue-400">queryset</span> = Product.objects.all()</p>
        <p className="pl-4"><span className="text-blue-400">permission_classes</span> = [IsAuthenticatedOrReadOnly]</p>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between relative z-10">
        <span className="text-xs text-slate-400 font-medium">Django E-Commerce API</span>
        <a
          href="https://github.com/Tontoncharlie/shop-api"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4caf50] hover:bg-[#43a047] text-white font-bold text-xs shadow-md transition-all duration-200"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>GitHub Repo</span>
        </a>
      </div>
    </div>
  );
}