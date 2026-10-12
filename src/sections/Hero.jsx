import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Device from '../components/Device';

export default function Hero({ t, lang }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      // Apple-style entrance: subtle fade-up 24px + opacity, image scale 0.96 -> 1
      const ease = 'cubic-bezier(0.28, 0.11, 0.32, 1)';

      gsap.from('.hero-eyebrow', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease,
      });

      gsap.from('.hero-headline', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        delay: 0.08,
        ease,
      });

      gsap.from('.hero-subhead', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.16,
        ease,
      });

      gsap.from('.hero-cta-row', {
        y: 16,
        opacity: 0,
        duration: 0.8,
        delay: 0.24,
        ease,
      });

      gsap.from('.hero-device-showcase', {
        scale: 0.96,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease,
      });
    }, heroRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section ref={heroRef} className="hero-section" aria-label="Hero">
      <div className="hero-content">
        <span className="hero-eyebrow">{t.hero.eyebrow}</span>
        <h1 className="hero-headline">{t.hero.headline}</h1>
        <p className="hero-subhead">{t.hero.subhead}</p>

        <div className="hero-cta-row">
          <a
            href="/downloads/GhaithTV-Android-arm64.apk"
            download
            className="apple-pill-btn"
          >
            {t.hero.ctaAndroid}
          </a>
          <a
            href="/downloads/GhaithTV-Windows-Setup.exe"
            download
            className="apple-link-btn"
          >
            {t.hero.ctaWindows}
          </a>
        </div>

        {/* Product Imagery Showcase: Centered, straight devices */}
        <div className="hero-device-showcase">
          <div className="hero-phones-stage">
            {/* Secondary phone behind */}
            <div className="hero-phone-secondary">
              <Device
                src="/shots/detail.webp"
                alt={t.hero.screens.detail}
                orientation="portrait"
                priority={false}
              />
            </div>

            {/* Primary phone front and center */}
            <div className="hero-phone-primary">
              <Device
                src="/shots/home.webp"
                alt={t.hero.screens.home}
                orientation="portrait"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
