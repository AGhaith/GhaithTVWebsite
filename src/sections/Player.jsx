import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Device from '../components/Device';

export default function Player({ t, lang }) {
  const sectionRef = useRef(null);
  const screensStackRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !screensStackRef.current) return;

    const ctx = gsap.context(() => {
      // Discrete swap: ScrollTrigger at section midpoint toggles .is-seeking
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'center 50%',
        toggleClass: {
          targets: screensStackRef.current,
          className: 'is-seeking',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section id="player" ref={sectionRef} className="player-dark-section" aria-label="Player Showcase">
      <div className="player-content-wrap">
        {/* Header */}
        <div className="player-header">
          <span className="player-eyebrow">{t.player.eyebrow}</span>
          <h2 className="player-headline">{t.player.headline}</h2>
          <p className="player-subhead">{t.player.subhead}</p>
        </div>

        {/* Landscape Phone Frame with Discrete Swap */}
        <div className="player-landscape-wrap">
          <Device
            alt="GhaithTV video player"
            orientation="landscape"
            className="player-device"
          >
            <div ref={screensStackRef} className="player-screens-stack">
              <img
                src="/shots/player.webp"
                alt="GhaithTV player controls"
                width={1200}
                height={540}
                loading="eager"
                decoding="async"
                className="player-layer player-base-layer"
              />
              <img
                src="/shots/player-seek.webp"
                alt="GhaithTV player showing stacked seek feedback"
                width={1200}
                height={540}
                loading="eager"
                decoding="async"
                className="player-layer player-seek-layer"
              />
            </div>
          </Device>
        </div>

        {/* 4 Gesture Lines in a Simple 2x2 Text Grid (No cards, purely typographic) */}
        <div className="player-gestures-grid">
          {t.player.gestures.map((gesture) => (
            <div key={gesture.id} className="gesture-text-item">
              <h3 className="gesture-title">{gesture.title}</h3>
              <p className="gesture-desc">{gesture.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
