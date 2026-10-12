import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  RotateCcw,
  RotateCw,
  Sun,
  Volume2,
  Lock,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';

export default function PlayerGestures({ t, lang }) {
  const [activeGesture, setActiveGesture] = useState('seek');
  const [seekCount, setSeekCount] = useState(1); // 1 = +10s, 2 = +20s, 3 = +30s
  const isRTL = lang === 'ar';
  const playerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection observer to pause timer when player is off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (playerRef.current) {
      observer.observe(playerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Gesture loop when in view and motion is allowed
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !isInView) return;

    const gestures = ['seek', 'speed', 'swipe', 'lock'];
    const timer = setInterval(() => {
      setActiveGesture((prev) => {
        const nextIdx = (gestures.indexOf(prev) + 1) % gestures.length;
        return gestures[nextIdx];
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isInView]);

  // Animate stacking seek count when seek is active
  useEffect(() => {
    if (activeGesture !== 'seek') {
      setSeekCount(1);
      return;
    }

    const interval = setInterval(() => {
      setSeekCount((c) => (c < 3 ? c + 1 : 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [activeGesture]);

  return (
    <section className="player-section" aria-label="Touch Player Gestures">
      <div className="player-intro">
        <h2 className="section-heading">{t.player.heading}</h2>
        <p className="section-subhead">{t.player.subhead}</p>
      </div>

      <div ref={playerRef} className="player-demo-container">
        {/* The 16:9 Cinematic Video Player Canvas */}
        <div className="cinema-screen" role="region" aria-label="Interactive Player Simulation">
          {/* Ambient Player Backdrop Artwork Simulation */}
          <div className="cinema-backdrop" aria-hidden="true">
            <div className="cinema-vignette" />
          </div>

          {/* Top Bar: Title & Metadata */}
          <div className="cinema-topbar">
            <div className="cinema-title-group">
              <button type="button" className="cinema-icon-btn" aria-label="Back">
                {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              </button>
              <span className="cinema-movie-pill">{t.player.moviePill}</span>
              <h3 className="cinema-title">{t.player.movieTitle}</h3>
            </div>
            <div className="cinema-meta-pill">
              <span>{t.player.movieMeta}</span>
            </div>
          </div>

          {/* Center Stage: Dynamic Gesture Simulations */}
          <div className="cinema-gesture-stage" aria-live="polite">
            {/* Gesture 1: Stacking Double-Tap Seek */}
            {activeGesture === 'seek' && (
              <div className="gesture-anim-seek">
                <div className="seek-ripple-container">
                  <div className="seek-ripple" />
                  <div className="seek-ripple delay-1" />
                </div>
                <div className="seek-stack-pill">
                  <RotateCw size={18} className="seek-icon" />
                  <span className="seek-number">+{seekCount * 10}s</span>
                </div>
              </div>
            )}

            {/* Gesture 2: Hold for 2x Speed */}
            {activeGesture === 'speed' && (
              <div className="gesture-anim-speed">
                <div className="speed-pill">
                  <span className="speed-label">2x</span>
                  <span className="speed-text">{isRTL ? 'تسريع المشاهدة' : 'Speed Boost'}</span>
                </div>
              </div>
            )}

            {/* Gesture 3: Swipe Vertical Controls (Brightness & Volume) */}
            {activeGesture === 'swipe' && (
              <div className="gesture-anim-swipe">
                {/* Left Side: Brightness */}
                <div className="swipe-bar-left">
                  <Sun size={18} className="swipe-icon" />
                  <div className="swipe-level-track">
                    <div className="swipe-level-fill brightness-fill" />
                  </div>
                  <span className="swipe-percent">75%</span>
                </div>

                {/* Right Side: Volume */}
                <div className="swipe-bar-right">
                  <Volume2 size={18} className="swipe-icon" />
                  <div className="swipe-level-track">
                    <div className="swipe-level-fill volume-fill" />
                  </div>
                  <span className="swipe-percent">80%</span>
                </div>
              </div>
            )}

            {/* Gesture 4: Pinch to Fill & Lock Controls */}
            {activeGesture === 'lock' && (
              <div className="gesture-anim-lock">
                <div className="lock-pill">
                  <Lock size={16} />
                  <span>{isRTL ? 'التحكم مقفل' : 'Controls Locked'}</span>
                </div>
                <div className="aspect-pill">
                  <Maximize2 size={16} />
                  <span>{t.player.aspectRatio}</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar: Scrubber & Quick Actions */}
          <div className="cinema-bottombar">
            {/* Scrubber Progress Bar */}
            <div className="scrubber-container">
              <div className="scrubber-track">
                <div className="scrubber-buffer" style={{ width: '68%' }} />
                <div className="scrubber-progress" style={{ width: '48%' }}>
                  <div className="scrubber-thumb" />
                </div>
              </div>
            </div>

            <div className="cinema-controls-row">
              <div className="controls-left">
                <button type="button" className="cinema-play-btn" aria-label="Play / Pause">
                  <Play size={16} fill="currentColor" />
                </button>
                <div className="cinema-time">
                  <span className="time-current">{t.player.currentTime}</span>
                  <span className="time-divider">/</span>
                  <span className="time-total">{t.player.totalTime}</span>
                </div>
              </div>

              <div className="controls-right">
                <button type="button" className="cinema-control-btn" aria-label="Lock controls">
                  <Lock size={16} />
                </button>
                <button type="button" className="cinema-control-btn" aria-label="Playback ratio">
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gesture Selection Tabs / Cards */}
        <div className="gesture-cards-grid">
          {t.player.gestures.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`gesture-card ${activeGesture === item.id ? 'is-selected' : ''}`}
              onClick={() => setActiveGesture(item.id)}
            >
              <div className="gesture-card-header">
                <span className="gesture-card-badge">{item.badge}</span>
              </div>
              <h4 className="gesture-card-title">{item.title}</h4>
              <p className="gesture-card-desc">{item.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
