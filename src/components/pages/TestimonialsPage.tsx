"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useApplyModal } from "@/context/ApplyModalContext";
import { useFadeUp } from "@/hooks/useFadeUp";
import {
  agentTestimonials,
  hasTestimonialVideo,
  videoTestimonials,
  type AgentTestimonial,
} from "@/lib/testimonials";

export default function TestimonialsPage() {
  const { openApplyModal } = useApplyModal();
  const ref = useFadeUp<HTMLDivElement>();
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTestimonialVideo, setActiveTestimonialVideo] = useState<AgentTestimonial | null>(null);
  const videoElements = useRef<Record<number, HTMLVideoElement | null>>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const updateViewport = useCallback(() => {
    setIsMobile(window.innerWidth <= 900);
  }, []);

  useEffect(() => {
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, [updateViewport]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeTestimonialVideo) closeTestimonialVideo();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [activeTestimonialVideo]);

  const pauseOtherVideos = (id: number | null) => {
    Object.entries(videoElements.current).forEach(([key, videoEl]) => {
      if (!videoEl) return;
      if (Number(key) !== id && !videoEl.paused) videoEl.pause();
    });
  };

  const playVideo = (id: number) => {
    pauseOtherVideos(id);
    setActiveVideoId(id);
    const targetIndex = videoTestimonials.findIndex((video) => video.id === id);
    if (targetIndex !== -1) setMobileIndex(targetIndex);

    window.setTimeout(() => {
      const targetVideo = videoElements.current[id];
      if (!targetVideo) return;
      targetVideo.load();
      const playPromise = targetVideo.play();
      if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
    }, 0);
  };

  const nextVideo = () => {
    pauseOtherVideos(null);
    setActiveVideoId(null);
    setMobileIndex((index) => (index + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    pauseOtherVideos(null);
    setActiveVideoId(null);
    setMobileIndex((index) => (index - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const goToVideo = (index: number) => {
    if (index < 0 || index >= videoTestimonials.length) return;
    pauseOtherVideos(null);
    setActiveVideoId(null);
    setMobileIndex(index);
  };

  const openTestimonialVideo = (testimonial: AgentTestimonial) => {
    if (!hasTestimonialVideo(testimonial)) return;
    setActiveTestimonialVideo(testimonial);
    window.setTimeout(() => {
      if (!modalVideoRef.current) return;
      modalVideoRef.current.currentTime = 0;
      modalVideoRef.current.load();
      const playPromise = modalVideoRef.current.play();
      if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
    }, 0);
  };

  const closeTestimonialVideo = () => {
    if (modalVideoRef.current && !modalVideoRef.current.paused) {
      modalVideoRef.current.pause();
    }
    setActiveTestimonialVideo(null);
  };

  const renderVideoCard = (video: (typeof videoTestimonials)[number]) => (
    <div className="video-card">
      <div className="video-frame">
        {activeVideoId === video.id ? (
          <video
            ref={(el) => {
              videoElements.current[video.id] = el;
            }}
            className="testimonial-video"
            controls
            preload="metadata"
            playsInline
            poster={video.poster}
            onPlay={() => pauseOtherVideos(video.id)}
          >
            <source src={video.mp4Src} type="video/mp4" />
            <source src={video.videoSrc} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            <Image className="testimonial-poster" src={video.poster} alt={`${video.name} testimonial poster`} fill sizes="(max-width: 900px) 100vw, 340px" style={{ objectFit: "cover" }} loading="lazy" />
            <button className="play-button" type="button" aria-label={`Play testimonial from ${video.name}`} onClick={() => playVideo(video.id)}>
              <span className="play-icon" aria-hidden="true" />
            </button>
          </>
        )}
      </div>
      <div className="video-card-meta">
        <div className="video-card-name">{video.name}</div>
        <div className="video-card-role">{video.role}</div>
        <p className="video-card-hook">{video.hook}</p>
      </div>
    </div>
  );

  return (
    <div className="page active" id="page-testimonials" ref={ref}>
      <section className="test-hero">
        <div className="test-hero-inner">
          <p className="section-eyebrow" style={{ color: "var(--gold)" }}>
            Real People. Real Growth.
          </p>
          <h1 className="section-title" style={{ color: "var(--white)", fontSize: "clamp(3rem,8vw,9rem)" }}>
            PROOF.
          </h1>
          <p className="section-body" style={{ color: "rgba(255,255,255,0.5)", textAlign: "center", margin: "1.5rem auto 0", maxWidth: 520 }}>
            Every name below is real. These are agents who made a decision to level up in every aspect of life and never looked back.
          </p>
        </div>
      </section>

      <section className="test-video-section" aria-labelledby="agent-video-testimonials-title">
        <p className="section-eyebrow" style={{ color: "var(--gold)" }}>
          Agent Spotlights
        </p>
        <h2 id="agent-video-testimonials-title">VIDEO TESTIMONIALS</h2>
        <p className="test-video-intro">Watch real Visionaries agents share what changed once they committed to the process.</p>

        {!isMobile ? (
          <div className="video-grid" role="list" aria-label="Agent video testimonials">
            {videoTestimonials.map((video) => (
              <article key={video.id} role="listitem">
                {renderVideoCard(video)}
              </article>
            ))}
          </div>
        ) : (
          <div className="video-carousel" aria-label="Mobile video testimonial carousel">
            <div className="video-track" style={{ transform: `translateX(-${mobileIndex * 100}%)` }}>
              {videoTestimonials.map((video) => (
                <article key={`mobile-${video.id}`} className="video-slide">
                  {renderVideoCard(video)}
                </article>
              ))}
            </div>
            <div className="carousel-controls">
              <button className="carousel-arrow" type="button" aria-label="Show previous testimonial video" onClick={prevVideo}>
                <span aria-hidden="true">&#8592;</span>
              </button>
              <div className="carousel-dots" role="tablist" aria-label="Choose testimonial video">
                {videoTestimonials.map((video, index) => (
                  <button
                    key={`dot-${video.id}`}
                    className={`carousel-dot${mobileIndex === index ? " active" : ""}`}
                    type="button"
                    role="tab"
                    aria-label={`Go to testimonial ${index + 1} from ${video.name}`}
                    aria-selected={mobileIndex === index}
                    onClick={() => goToVideo(index)}
                  />
                ))}
              </div>
              <button className="carousel-arrow" type="button" aria-label="Show next testimonial video" onClick={nextVideo}>
                <span aria-hidden="true">&#8594;</span>
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="test-grid-section">
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="fade-up">
          <p className="section-eyebrow">The Team</p>
          <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(2rem,4vw,4rem)", letterSpacing: "0.06em" }}>
            AGENT STORIES
          </h2>
        </div>
        <div className="test-cards">
          {agentTestimonials.map((testimonial) => (
            <article key={testimonial.id} className="test-card fade-up">
              <div className="test-card-img">
                <Image src={testimonial.image} alt={testimonial.alt} fill sizes="(max-width: 1280px) 50vw, 33vw" style={{ objectFit: "cover" }} loading="lazy" />
                {hasTestimonialVideo(testimonial) && (
                  <button
                    className="test-card-video-button"
                    type="button"
                    aria-label={`Play video testimonial from ${testimonial.author}`}
                    onClick={() => openTestimonialVideo(testimonial)}
                  >
                    <svg className="test-card-video-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                      <circle cx="32" cy="32" r="29" fill="rgba(10, 10, 10, 0.72)" stroke="#C9A96E" strokeWidth="2.5" />
                      <path d="M27 22L42 32L27 42V22Z" fill="#F4DFB6" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="test-card-body">
                <div className="quote-text">&quot;{testimonial.quote}&quot;</div>
                <div className="author">{testimonial.author}</div>
                <div className="author-meta">{testimonial.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="test-featured">
        <div className="test-featured-img">
          <Image src="/DSC01930.webp" alt="John Baocius" fill sizes="50vw" loading="lazy" style={{ objectFit: "cover" }} />
        </div>
        <div className="test-featured-text fade-up">
          <p className="section-eyebrow">Featured Story</p>
          <div className="test-quote">
            I joined Visionaries needing structure, not motivation speeches. What I got was daily accountability, practical coaching, and a team that pushes me to execute. My confidence and consistency are on a completely different level now.
          </div>
          <div className="test-name">JOHN BAOCIUS</div>
          <div className="test-meta">Visionaries Agent</div>
        </div>
      </section>

      <section className="cta-band">
        <h2>
          YOUR NAME COULD BE
          <br />
          <span>UP THERE NEXT.</span>
        </h2>
        <button className="btn-gold" onClick={openApplyModal}>
          START YOUR JOURNEY
        </button>
      </section>

      {activeTestimonialVideo && (
        <div
          className="testimonial-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeTestimonialVideo.author} video testimonial`}
          onClick={closeTestimonialVideo}
        >
          <div className="testimonial-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="testimonial-video-modal-close" type="button" aria-label="Close testimonial video" onClick={closeTestimonialVideo}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M6.4 5L5 6.4L10.6 12L5 17.6L6.4 19L12 13.4L17.6 19L19 17.6L13.4 12L19 6.4L17.6 5L12 10.6L6.4 5Z" />
              </svg>
            </button>
            <video
              ref={modalVideoRef}
              className="testimonial-modal-player"
              controls
              preload="metadata"
              playsInline
              autoPlay
            >
              <source src={activeTestimonialVideo.videoMp4} type="video/mp4" />
              <source src={activeTestimonialVideo.videoWebm} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
