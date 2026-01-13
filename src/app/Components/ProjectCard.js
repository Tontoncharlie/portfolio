"use client"

import { useState, useEffect, useRef } from "react";

export default function ProjectCard({ title, description, images, link }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const touchStartX = useRef(null);

  // Desktop: auto-slide images on hover
  useEffect(() => {
    if (!hovering) return;

    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [hovering, images.length]);

  // Mobile: swipe
  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = e => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentImage(prev => (prev + 1) % images.length);
      } else {
        setCurrentImage(prev => (prev - 1 + images.length) % images.length);
      }
    }
    touchStartX.current = null;
  };

  // Mobile tap to show overlay
  const handleTap = e => {
    // Prevent click from opening modal immediately
    if (window.innerWidth <= 768) {
      if (!showOverlay) {
        setShowOverlay(true);
      } else {
        setShowAll(true); // second tap opens modal
      }
    } else {
      setShowAll(true); // desktop click opens modal immediately
    }
  };

  return (
    <>
      <div
        className="project-card"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={handleTap}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="image-wrapper">
          <img
            src={images[currentImage]}
            alt={title}
            className="project-image"
          />
          <div className={`text-overlay ${hovering || showOverlay ? "active" : ""}`}>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
          </div>
        </div>
      </div>

      {showAll && (
        <div className="modal-overlay" onClick={() => setShowAll(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{title}</h2>
            <div className="all-images">
              {images.map((img, idx) => (
                <img key={idx} src={img} alt={`${title} ${idx + 1}`} />
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-link"
            >
              Visit Site
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .project-card {
          width: 350pxpx;
          margin: 20px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
          text-align: center;
          background: #ffffff;
          overflow: hidden;
          touch-action: pan-y;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
          background: #f9f9f9;
        }

        .image-wrapper {
          position: relative;
        }

        .project-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px 12px 0 0;
          display: block;
        }

        /* Overlay for title & description */
        .text-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
          padding: 10px;
          transform: translateY(50%);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .text-overlay.active {
          transform: translateY(0);
          opacity: 1;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 5px 0;
          color: #111827;
          transition: color 0.3s;
        }

        .project-card:hover .project-title {
          color: #0070f3;
        }

        .project-description {
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.5;
          margin: 0;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          max-width: 90%;
          max-height: 90%;
          overflow-y: auto;
          text-align: center;
        }

        .all-images {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin: 20px 0;
        }

        .all-images img {
          width: 200px;
          height: 150px;
          object-fit: cover;
          border-radius: 6px;
        }

        .visit-link {
          display: inline-block;
          margin-top: 10px;
          padding: 8px 18px;
          background: #0070f3;
          color: white;
          border-radius: 6px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.3s;
        }

        .visit-link:hover {
          background: #005bb5;
        }

        @media (max-width: 768px) {
          .project-card {
            width: 90%;
          }
          .all-images img {
            width: 100%;
            max-width: 300px;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
