"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ProjectCard({ title, description, images = [], link, github, tags = ["React", "Next.js", "Tailwind CSS"] }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const touchStartX = useRef(null);

  // Auto slide on hover
  useEffect(() => {
    if (!hovering || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [hovering, images.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40 && images.length > 1) {
      if (diff > 0) {
        setCurrentImage((prev) => (prev + 1) % images.length);
      } else {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <>
      <div
        className="group relative flex flex-col rounded-2xl bg-slate-900/70 backdrop-blur-md border border-slate-800 hover:border-[#4caf50]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={() => setShowModal(true)}
      >
        {/* Top Image Banner */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-950">
          {images.length > 0 ? (
            <img
              src={images[currentImage]}
              alt={title}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-slate-600 bg-slate-900">
              No Preview Available
            </div>
          )}

          {/* Simple overlay */}
          <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors" />

          {/* Image Dots Indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImage
                      ? "w-6 bg-[#4caf50]"
                      : "w-1.5 bg-slate-600/70 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Quick View Tag */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#4caf50] text-white shadow-md">
              Click to Inspect
            </span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="flex flex-col flex-1 p-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-[#4caf50]/10 text-[#4caf50] border border-[#4caf50]/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[#4caf50] transition-colors flex items-center justify-between">
              <span>{title}</span>
              <svg
                className="w-5 h-5 opacity-0 group-hover:opacity-100 text-[#4caf50] transition-all duration-300 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </h3>
            <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="pt-2 mt-auto flex items-center justify-between border-t border-slate-800/80">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(true);
              }}
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Screenshots ({images.length})
            </button>

            <div className="flex items-center gap-2">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#4caf50] hover:bg-[#43a047] text-white shadow-md transition-all duration-200"
                >
                  <span>Live Demo</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Gallery Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-y-auto space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <p className="text-slate-400 text-sm mt-1">{description}</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Screenshots Grid */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4caf50]">
                Project Screenshots Gallery ({images.length})
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((img, idx) => (
                  <div key={idx} className="group relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                    <img
                      src={img}
                      alt={`${title} screenshot ${idx + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                Close
              </button>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-sm font-semibold rounded-lg bg-[#4caf50] hover:bg-[#43a047] text-white shadow-md transition-all"
                >
                  Visit Live Site →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

