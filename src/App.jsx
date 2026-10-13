import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { translations } from './i18n';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import StickyScene from './sections/StickyScene';
import Player from './sections/Player';
import Bento from './sections/Bento';
import Downloads from './sections/Downloads';
import Footer from './sections/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    ScrollTrigger.refresh();
  }, [lang]);

  useEffect(() => {
    // Preload and decode screenshots ahead of scroll to prevent decoding hitching
    const shots = [
      '/shots/home.webp',
      '/shots/detail.webp',
      '/shots/search.webp',
      '/shots/live.webp',
      '/shots/player.webp',
      '/shots/player-seek.webp',
    ];
    shots.forEach((src) => {
      const img = new Image();
      img.src = src;
      if (img.decode) {
        img.decode().catch(() => {});
      }
    });
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Smooth momentum scroll via Lenis tied directly to GSAP ticker
    const lenis = new Lenis({
      duration: 1.0,
      easing: (val) => Math.min(1, 1.001 - Math.pow(2, -10 * val)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      autoRaf: false,
      syncTouch: false,
    });

    window.__lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tickHandler = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickHandler);
    gsap.ticker.lagSmoothing(0);

    return () => {
      delete window.__lenis;
      gsap.ticker.remove(tickHandler);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="site-wrapper">
      <Nav lang={lang} setLang={setLang} t={t} />
      <main id="main-content">
        <Hero t={t} lang={lang} />
        <StickyScene t={t} lang={lang} />
        <Player t={t} lang={lang} />
        <Bento t={t} lang={lang} />
        <Downloads t={t} />
      </main>
      <Footer t={t} lang={lang} setLang={setLang} />
    </div>
  );
}
