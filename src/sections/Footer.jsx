import React from 'react';
import { Globe } from 'lucide-react';

export default function Footer({ t, lang, setLang }) {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand-row">
          <a href="#" className="site-logo" aria-label="GhaithTV Home">
            <span className="logo-accent">{t.brand}</span>
            <span className="logo-suffix">{t.brandSubtitle}</span>
          </a>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">{t.footer.copyright}</p>
          <button
            type="button"
            className="lang-switcher footer-lang-btn"
            onClick={() => setLang((prev) => (prev === 'en' ? 'ar' : 'en'))}
            aria-label={`Switch language to ${t.nav.langToggle}`}
          >
            <Globe size={15} aria-hidden="true" />
            <span>{t.nav.langToggle}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
