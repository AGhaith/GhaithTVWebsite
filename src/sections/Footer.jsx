import React from 'react';

export default function Footer({ t, lang, setLang }) {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="apple-footer">
      <div className="footer-container">
        {/* Footnote / Disclaimer */}
        <div className="footer-footnote">
          <p>{t.footer.note}</p>
        </div>

        <div className="footer-hairline" />

        {/* Directory links */}
        <div className="footer-links-row">
          <nav className="footer-links-list" aria-label="Footer Navigation">
            {t.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={scrollTo(link.href.replace('#', ''))}
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="footer-lang-btn"
            onClick={() => setLang((prev) => (prev === 'en' ? 'ar' : 'en'))}
            aria-label={`Switch language to ${t.nav.langToggle}`}
          >
            {t.nav.langToggle}
          </button>
        </div>

        {/* Legal bottom row */}
        <div className="footer-legal-row">
          <p className="footer-copyright">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
