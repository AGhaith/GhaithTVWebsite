import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { translations } from './i18n';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import PinnedStory from './sections/PinnedStory';
import PlayerGestures from './sections/PlayerGestures';
import Downloads from './sections/Downloads';
import Faq from './sections/Faq';
import Footer from './sections/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Single RAF loop tied directly to gsap.ticker, avoiding Lenis double-stepping
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickHandler = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickHandler);
    gsap.ticker.lagSmoothing(0);

    return () => {
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
        <PinnedStory t={t} lang={lang} />
        <PlayerGestures t={t} lang={lang} />
        <Downloads t={t} />
        <Faq t={t} />
      </main>
      <Footer t={t} lang={lang} setLang={setLang} />
    </div>
  );
}
