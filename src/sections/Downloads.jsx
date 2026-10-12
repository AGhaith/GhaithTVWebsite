import React from 'react';

export default function Downloads({ t }) {
  const d = t.downloads;

  return (
    <section id="downloads" className="downloads-apple-section" aria-label="Downloads">
      <div className="downloads-container">
        <div className="downloads-header">
          <span className="downloads-eyebrow">{d.eyebrow}</span>
          <h2 className="downloads-headline">{d.heading}</h2>
          <p className="downloads-subhead">{d.subhead}</p>
        </div>

        {/* Two Big Platform Tiles */}
        <div className="downloads-platform-grid">
          {/* Android Tile */}
          <div className="download-platform-tile">
            <div className="tile-copy">
              <h3 className="platform-name">{d.android.title}</h3>
              <p className="platform-tagline">{d.android.desc}</p>
            </div>

            <div className="tile-action-row">
              <a
                href={d.android.url}
                download
                className="apple-pill-btn"
              >
                {d.android.cta}
              </a>
              <a
                href={d.android.secondaryUrl}
                download
                className="apple-link-btn"
              >
                {d.android.secondary}
              </a>
            </div>

            <div className="tile-footer-info">
              <span className="requirements-text">{d.android.requirements}</span>
              <p className="install-tip-text">{d.android.installTip}</p>
            </div>
          </div>

          {/* Windows Tile */}
          <div className="download-platform-tile">
            <div className="tile-copy">
              <h3 className="platform-name">{d.windows.title}</h3>
              <p className="platform-tagline">{d.windows.desc}</p>
            </div>

            <div className="tile-action-row">
              <a
                href={d.windows.url}
                download
                className="apple-pill-btn"
              >
                {d.windows.cta}
              </a>
            </div>

            <div className="tile-footer-info">
              <span className="requirements-text">{d.windows.requirements}</span>
              <p className="install-tip-text">{d.windows.installTip}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
