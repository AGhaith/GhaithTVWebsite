import React, { useEffect, useRef } from 'react';
import { Smartphone, Monitor, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhoneFrame from '../components/PhoneFrame';
import AppScreen from '../components/AppScreen';

export default function Hero({ t, lang }) {
  const heroRef = useRef(null);
  const phoneFrontRef = useRef(null);
  const phoneBackRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      // Gentle initial reveal
      gsap.from('.hero-headline', {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.hero-subhead', {
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta-group', {
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.28,
        ease: 'power3.out',
      });

      // Phone entrance and scroll parallax
      gsap.from('.hero-phones-cluster', {
        opacity: 0,
        y: 35,
        scale: 0.96,
        duration: 1.1,
        delay: 0.2,
        ease: 'power3.out',
      });

      if (phoneFrontRef.current && phoneBackRef.current) {
        gsap.to(phoneFrontRef.current, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });

        gsap.to(phoneBackRef.current, {
          y: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.4,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section ref={heroRef} className="hero-section" aria-label="Product Hero">
      <div className="hero-container">
        {/* Left Column: Copy & Actions */}
        <div className="hero-copy-col">
          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true" />
            <span className="badge-text">{t.hero.badge}</span>
          </div>

          <h1 className="hero-headline">
            {t.hero.headline}
          </h1>

          <p className="hero-subhead">
            {t.hero.subhead}
          </p>

          <div className="hero-cta-group">
            <a
              href="/downloads/GhaithTV-Android-arm64.apk"
              download
              className="cta-button cta-primary"
            >
              <Smartphone size={20} className="cta-icon" aria-hidden="true" />
              <div className="cta-text-wrap">
                <span className="cta-label">{t.hero.ctaAndroid}</span>
                <span className="cta-meta">{t.hero.ctaAndroidMeta}</span>
              </div>
            </a>

            <a
              href="/downloads/GhaithTV-Windows-Setup.exe"
              download
              className="cta-button cta-secondary"
            >
              <Monitor size={20} className="cta-icon" aria-hidden="true" />
              <div className="cta-text-wrap">
                <span className="cta-label">{t.hero.ctaWindows}</span>
                <span className="cta-meta">{t.hero.ctaWindowsMeta}</span>
              </div>
            </a>
          </div>

          <div className="hero-trust-row">
            <ShieldCheck size={16} className="trust-icon" aria-hidden="true" />
            <span className="trust-text">
              {t.downloads.securityNote}
            </span>
          </div>
        </div>

        {/* Right Column: Overlapping Phone Showcase */}
        <div className="hero-showcase-col">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-phones-cluster">
            {/* Back phone */}
            <div ref={phoneBackRef} className="hero-phone-back">
              <PhoneFrame ariaLabel={t.hero.screens.detail}>
                <AppScreen variant="detail" lang={lang} />
              </PhoneFrame>
            </div>

            {/* Front phone */}
            <div ref={phoneFrontRef} className="hero-phone-front">
              <PhoneFrame ariaLabel={t.hero.screens.series}>
                <AppScreen variant="home" lang={lang} />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
