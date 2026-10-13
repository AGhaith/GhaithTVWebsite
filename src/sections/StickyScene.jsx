import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Device from '../components/Device';

export default function StickyScene({ t, lang }) {
  const sectionRef = useRef(null);
  const slidesRef = useRef([]);
  const imagesRef = useRef([]);
  const statements = t.sticky.statements;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile || !sectionRef.current) {
      return;
    }

    const slides = slidesRef.current.filter(Boolean);
    const images = imagesRef.current.filter(Boolean);
    const numSteps = statements.length;

    let activeIndex = 0;

    const setStep = (index) => {
      if (index === activeIndex) return;
      activeIndex = index;
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('is-active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('is-active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });
      images.forEach((img, i) => {
        if (i === index) {
          img.classList.add('is-visible');
        } else {
          img.classList.remove('is-visible');
        }
      });
    };

    const ctx = gsap.context(() => {
      // Single ScrollTrigger driving statement switches without React re-renders
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const step = Math.min(numSteps - 1, Math.floor(self.progress * numSteps));
          setStep(step);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang, statements.length]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="sticky-scene-section"
      aria-label="Features Showcase"
    >
      {/* Desktop Pinned Stage (CSS sticky on compositor thread) */}
      <div className="sticky-pinned-stage">
        <div className="sticky-stage-content">
          <div className="sticky-copy-area">
            {statements.map((stmt, idx) => (
              <div
                key={stmt.id}
                ref={(el) => (slidesRef.current[idx] = el)}
                className={`sticky-statement-slide ${idx === 0 ? 'is-active' : ''}`}
                aria-hidden={idx !== 0}
              >
                <h2 className="sticky-statement-title">{stmt.title}</h2>
                <p className="sticky-statement-desc">{stmt.desc}</p>
              </div>
            ))}
          </div>

          {/* Central Pinned Phone with Crossfading Screenshots */}
          <div className="sticky-device-wrap">
            <Device
              alt="GhaithTV preview"
              orientation="portrait"
            >
              <div className="device-crossfade-stack">
                {statements.map((stmt, idx) => (
                  <img
                    key={stmt.id}
                    ref={(el) => (imagesRef.current[idx] = el)}
                    src={stmt.shot}
                    alt={stmt.alt}
                    width={540}
                    height={1200}
                    loading="eager"
                    decoding="async"
                    className={`crossfade-layer ${idx === 0 ? 'is-visible' : ''}`}
                  />
                ))}
              </div>
            </Device>
          </div>
        </div>
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
                priority={true}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
