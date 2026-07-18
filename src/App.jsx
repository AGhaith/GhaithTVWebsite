import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, MonitorPlay, Globe, Tv, Zap, Server, Film } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import BackgroundCanvas from './components/BackgroundCanvas';
import { translations } from './i18n';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({ text, className, lang }) => {
  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {text.split(' ').map((word, wordIdx) => (
        <span key={wordIdx} className="word" style={{ display: 'inline-block', verticalAlign: 'bottom', marginInlineEnd: '0.3em', willChange: 'transform, opacity, filter' }}>
          {lang === 'ar' ? (
            <span className="char" style={{ display: 'inline-block', willChange: 'transform, opacity' }}>
              {word}
            </span>
          ) : (
            word.split('').map((char, charIdx) => (
              <span key={charIdx} className="char" style={{ display: 'inline-block', willChange: 'transform, opacity' }}>
                {char}
              </span>
            ))
          )}
        </span>
      ))}
    </span>
  );
};

// Map string icon names to Lucide components
const IconMap = {
  Tv, Zap, Server, Film
};

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const containerRef = useRef(null);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0, 0);

    const ctx = gsap.context(() => {

      // --- Hero Animations ---
      gsap.from('.hero-title-line .word', {
        y: 40,
        opacity: 0,
        scale: 1.15,
        filter: "blur(15px)",
        duration: 1.5,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 1.5,
        delay: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.btn-wrapper', {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        delay: 1,
        ease: 'power3.out'
      });

      // Glass Panel Reveal
      gsap.from('.hero-glass-panel', {
        opacity: 0,
        x: 50,
        duration: 1.5,
        delay: 1.2,
        ease: 'power3.out'
      });
      
      gsap.from('.panel-item', {
        opacity: 0,
        x: 20,
        duration: 1,
        stagger: 0.15,
        delay: 1.4,
        ease: 'power3.out'
      });

      // Features Parallax
      const sections = gsap.utils.toArray('.vertical-feature-panel');
      sections.forEach((sec) => {
        const titleChars = sec.querySelectorAll('.feature-title-line .char');
        const desc = sec.querySelector('.feature-desc');
        const img = sec.querySelector('.panel-image img');
        const hollowNum = sec.querySelector('.hollow-number');

        gsap.from(titleChars, {
          y: 60,
          rotateX: -90,
          opacity: 0,
          duration: 1.2,
          stagger: 0.03,
          ease: "power4.out",
          transformOrigin: "0% 50% -50",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
          }
        });

        gsap.from(desc, {
          y: 30,
          opacity: 0,
          duration: 1.5,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
          }
        });

        if (img) {
          gsap.fromTo(img, 
            { yPercent: -15, scale: 1.1 },
            { 
              yPercent: 15, scale: 1, ease: "none",
              scrollTrigger: { trigger: sec, start: "top bottom", end: "bottom top", scrub: true }
            }
          );
        }

        if (hollowNum) {
          gsap.fromTo(hollowNum,
            { yPercent: 60 },
            {
              yPercent: -60, ease: "none",
              scrollTrigger: { trigger: sec, start: "top bottom", end: "bottom top", scrub: true }
            }
          );
        }
      });
    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
      gsap.ticker.remove(lenis.raf);
    };
  }, [lang]);

  return (
    <>
      <CustomCursor />
      
      <BackgroundCanvas />

      <div ref={containerRef} className="app-wrapper">
        <nav className="navbar">
          <div className="logo">{t.logo}</div>
          <button className="lang-toggle glass" onClick={() => setLang(l => l === 'en' ? 'ar' : 'en')}>
            <Globe size={18} /> {t.langToggle}
          </button>
        </nav>

        <section className="hero-section container">
          <div className="hero-content">
            
            {/* Left Column: Main Call to Action */}
            <div className="hero-text-col">
              <div className="hero-title-container">
                <h1 className="hero-title-line hero-font">
                  <SplitText text={t.heroTitle1} lang={lang} />
                </h1>
                <h1 className="hero-title-line hero-font">
                  <SplitText text={t.heroTitle2} lang={lang} />
                </h1>
              </div>
              
              <p className="hero-subtitle">
                {t.heroSubtitle}
              </p>
              
              <div className="download-options">
                <div className="btn-wrapper">
                  <a href="https://github.com/AGhaith/GhaithTVWebsite/releases/download/GhaithTV-Android-V1.1.3/GhaithTV.apk" className="btn btn-primary glass">
                    <Download size={20} /> {t.btnAndroid}
                  </a>
                </div>
                <div className="btn-wrapper">
                  <a href="https://github.com/AGhaith/GhaithTVWebsite/releases/download/GhaithTV-Windows-V1.1.3/Ghaith.TV.Setup.1.1.3.exe" className="btn btn-secondary glass">
                    <MonitorPlay size={20} /> {t.btnWindows}
                  </a>
                </div>

              </div>
            </div>

            {/* Right Column: Glassmorphism Feature Panel */}
            <div className="hero-panel-col">
              <div className="hero-glass-panel">
                {t.heroPanel.map((item, idx) => {
                  const IconComp = IconMap[item.icon];
                  return (
                    <div key={idx} className="panel-item">
                      <div className="panel-icon-wrapper">
                        <IconComp size={24} className="panel-icon" />
                      </div>
                      <div className="panel-item-text">
                        <h4 className="space-font">{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        <section className="features-container">
          {t.features.map((feature, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div key={idx} className={`vertical-feature-panel ${isReversed ? 'reversed' : ''}`}>
                <div className="hollow-number elegant-font">{feature.num}</div>
                <div className="panel-content container">
                  <div className="panel-text">
                    <h2 className="feature-title-line elegant-font">
                      <SplitText text={feature.title} lang={lang} />
                    </h2>
                    <p className="feature-desc">{feature.desc}</p>
                  </div>
                  <div className="panel-image">
                    <img src={`/feature_${idx + 1}.png`} alt={`${feature.title} Visualization`} />
                    <div className="image-overlay"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <footer className="footer">
          <div className="logo">{t.logo}</div>
          <p>{t.footerText}</p>
        </footer>
      </div>
    </>
  );
}

export default App;
