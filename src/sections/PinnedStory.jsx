import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhoneFrame from '../components/PhoneFrame';
import AppScreen from '../components/AppScreen';

export default function PinnedStory({ t, lang }) {
  const sectionRef = useRef(null);
  const pinWrapRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = t.story.steps;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile || !sectionRef.current || !pinWrapRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const stepEls = gsap.utils.toArray('.story-step-item');

      stepEls.forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });

      // Pin the phone container while captions scroll
      ScrollTrigger.create({
        // Pin within the two-column grid and release when the phone's bottom
        // meets the grid's bottom, so it never slides over the next section.
        trigger: pinWrapRef.current.closest('.story-desktop-container'),
        start: 'top 80px',
        end: () => `bottom ${80 + pinWrapRef.current.offsetHeight}px`,
        pin: pinWrapRef.current,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section ref={sectionRef} className="story-section" aria-label="Feature Story">
      <div className="story-intro">
        <h2 className="section-heading">{t.story.heading}</h2>
      </div>

      {/* Desktop Layout: Pinned Phone with Scrolling Captions */}
      <div className="story-desktop-container">
        {/* Scrolling Captions Column */}
        <div className="story-captions-col">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`story-step-item ${activeStep === idx ? 'is-active' : ''}`}
            >
              <div className="step-tag">{step.tag}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Pinned Phone Showcase Column */}
        <div className="story-showcase-col">
          <div ref={pinWrapRef} className="story-pinned-phone">
            <div className="pinned-phone-glow" aria-hidden="true" />
            <PhoneFrame ariaLabel={steps[activeStep].title}>
              <div className="crossfade-screen-stack">
                {steps.map((step, idx) => (
                  <div
                    key={step.id}
                    className={`crossfade-screen ${activeStep === idx ? 'is-visible' : ''}`}
                  >
                    <AppScreen variant={step.variant} lang={lang} />
                  </div>
                ))}
              </div>
            </PhoneFrame>
          </div>
        </div>
      </div>

      {/* Mobile Layout: Unpinned Responsive Stack (Phone + Caption Pairs) */}
      <div className="story-mobile-stack">
        {steps.map((step) => (
          <div key={`m-${step.id}`} className="story-mobile-card">
            <div className="step-tag">{step.tag}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
            <div className="mobile-phone-holder">
              <PhoneFrame ariaLabel={step.title}>
                <AppScreen variant={step.variant} lang={lang} />
              </PhoneFrame>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
