import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Device from '../components/Device';

export default function StickyScene({ t, lang }) {
  const sectionRef = useRef(null);
  const pinTargetRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const statements = t.sticky.statements;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile || !sectionRef.current || !pinTargetRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const stepTriggers = gsap.utils.toArray('.sticky-scroll-step');

      stepTriggers.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveIdx(index),
          onEnterBack: () => setActiveIdx(index),
        });
      });

      // Pin the central display stage while user scrolls through the steps
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinTargetRef.current,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="sticky-scene-section"
      aria-label="Features Showcase"
    >
      {/* Desktop Pinned Stage */}
      <div ref={pinTargetRef} className="sticky-pinned-stage">
        <div className="sticky-stage-content">
          <div className="sticky-copy-area">
            {statements.map((stmt, idx) => (
              <div
                key={stmt.id}
                className={`sticky-statement-slide ${activeIdx === idx ? 'is-active' : ''}`}
                aria-hidden={activeIdx !== idx}
              >
                <h2 className="sticky-statement-title">{stmt.title}</h2>
                <p className="sticky-statement-desc">{stmt.desc}</p>
              </div>
            ))}
          </div>

          {/* Central Pinned Phone with Crossfading Screenshots */}
          <div className="sticky-device-wrap">
            <Device
              alt={statements[activeIdx]?.title || 'GhaithTV preview'}
              orientation="portrait"
            >
              <div className="device-crossfade-stack">
                {statements.map((stmt, idx) => (
                  <img
                    key={stmt.id}
                    src={stmt.shot}
                    alt={stmt.alt}
                    width={540}
                    height={1200}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className={`crossfade-layer ${activeIdx === idx ? 'is-visible' : ''}`}
                  />
                ))}
              </div>
            </Device>
          </div>
        </div>
      </div>

      {/* Desktop Scroll Steps (Invisible triggers driving the pinned progress) */}
      <div className="sticky-scroll-track" aria-hidden="true">
        {statements.map((stmt) => (
          <div key={`trigger-${stmt.id}`} className="sticky-scroll-step" />
        ))}
      </div>

      {/* Mobile Stacked Fallback (no pin, natural stacked cards) */}
      <div className="sticky-mobile-stack">
        {statements.map((stmt) => (
          <div key={`mobile-${stmt.id}`} className="sticky-mobile-card">
            <h2 className="sticky-statement-title">{stmt.title}</h2>
            <p className="sticky-statement-desc">{stmt.desc}</p>
            <div className="sticky-mobile-device">
              <Device
                src={stmt.shot}
                alt={stmt.alt}
                orientation="portrait"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
