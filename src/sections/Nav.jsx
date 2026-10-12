import React from 'react';
import { Globe, ArrowDown } from 'lucide-react';

export default function Nav({ lang, setLang, t }) {
  const scrollToDownloads = (e) => {
    e.preventDefault();
    const el = document.getElementById('downloads');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="nav-container">
        {/* Wordmark */}
        <a href="#" className="site-logo" aria-label="GhaithTV Home">
          <span className="logo-accent">{t.brand}</span>
          <span className="logo-suffix">{t.brandSubtitle}</span>
        </a>

        {/* Right action group */}
        <div className="nav-actions">
          <button
            type="button"
            className="lang-switcher"
            onClick={() => setLang((prev) => (prev === 'en' ? 'ar' : 'en'))}
            aria-label={`Switch language to ${t.nav.langToggle}`}
          >
            <Globe size={16} aria-hidden="true" />
            <span>{t.nav.langToggle}</span>
          </button>

          <a
            href="#downloads"
            onClick={scrollToDownloads}
            className="nav-download-btn"
          >
            <span>{t.nav.downloadBtn}</span>
            <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
