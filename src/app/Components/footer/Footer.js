import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center space-y-6 text-center">
        
        {/* Brand Logo */}
        <Link href="/" className="hover:scale-105 transition-transform duration-300">
          <Image
            src="/home_images/Tonton.png"
            width={160}
            height={55}
            alt="Tonton Logo"
            className="object-contain"
          />
        </Link>

        {/* Tagline */}
        <p className="text-slate-300 text-sm sm:text-base max-w-md font-medium leading-relaxed">
          Thanks for stopping by! Let's build modern, secure, and scalable web solutions together.
        </p>

        {/* Quick Nav Links */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 py-2 text-sm font-semibold text-slate-400">
          <Link href="/" className="hover:text-[#4caf50] transition-colors">HOME</Link>
          <Link href="/about" className="hover:text-[#4caf50] transition-colors">ABOUT</Link>
          <Link href="/resume" className="hover:text-[#4caf50] transition-colors">RESUME</Link>
          <Link href="/services" className="hover:text-[#4caf50] transition-colors">SERVICES</Link>
          <Link href="/portfolio" className="hover:text-[#4caf50] transition-colors">PROJECTS</Link>
          <Link href="/contact" className="hover:text-[#4caf50] transition-colors">CONTACT</Link>
        </nav>

        {/* Social Icons Bar */}
        <div className="flex items-center justify-center gap-4 pt-2">
          {socialLinks.map((soc, idx) => (
            <a
              key={idx}
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

        <div className="w-full max-w-sm h-px bg-slate-800/80 my-4" />

        {/* Copyright */}
        <div className="text-xs text-slate-400 space-y-1.5 font-medium">
          <p>&copy; 2024 Tonton's Portfolio. All Rights Reserved.</p>
          <p>
            Designed & Engineered by{" "}
            <span className="text-[#4caf50] font-bold">Chigioke Charles Ugochukwu</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;