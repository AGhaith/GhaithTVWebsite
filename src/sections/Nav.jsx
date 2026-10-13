import React, { useState, useEffect } from 'react';

export default function Nav({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: -48 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`global-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#" className="nav-brand" aria-label="GhaithTV Home">
          <span className="brand-primary">{t.brand}</span>
          <span className="brand-secondary">{t.brandSubtitle}</span>
        </a>

        {/* Desktop navigation links */}
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#features" onClick={scrollTo('features')} className="nav-link">
            {t.nav.features}
          </a>
          <a href="#player" onClick={scrollTo('player')} className="nav-link">
            {t.nav.player}
          </a>
          <a href="#downloads" onClick={scrollTo('downloads')} className="nav-link">
            {t.nav.download}
          </a>
        </nav>

        {/* Trailing actions: Lang toggle & Download pill */}
        <div className="nav-actions">
          <button
            type="button"
            className="nav-lang-btn"
            onClick={() => setLang((prev) => (prev === 'en' ? 'ar' : 'en'))}
            aria-label={`Switch language to ${t.nav.langToggle}`}
          >
            {t.nav.langToggle}
          </button>

          <a
            href="#downloads"
            onClick={scrollTo('downloads')}
            className="nav-pill-btn"
          >
            {t.nav.downloadBtn}
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown sheet */}
      {mobileMenuOpen && (
        <div className="nav-mobile-dropdown">
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            <a href="#features" onClick={scrollTo('features')} className="mobile-nav-link">
              {t.nav.features}
            </a>
            <a href="#player" onClick={scrollTo('player')} className="mobile-nav-link">
              {t.nav.player}
            </a>
            <a href="#downloads" onClick={scrollTo('downloads')} className="mobile-nav-link">
              {t.nav.download}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
