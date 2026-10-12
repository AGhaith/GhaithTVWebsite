import React from 'react';

export default function Bento({ t, lang }) {
  const bento = t.bento;

  return (
    <section id="bento" className="bento-section" aria-label="Feature Bento">
      <div className="bento-container">
        <div className="bento-header">
          <span className="bento-eyebrow">{bento.eyebrow}</span>
          <h2 className="bento-headline">{bento.headline}</h2>
        </div>

        {/* Bento Grid: 4 Large Tiles */}
        <div className="bento-grid">
          {/* Tile 1: Security */}
          <div className="bento-tile bento-tile-security">
            <div className="bento-tile-text">
              <span className="bento-caption">{bento.tiles[0].caption}</span>
              <h3 className="bento-title">{bento.tiles[0].title}</h3>
              <p className="bento-desc">{bento.tiles[0].desc}</p>
            </div>
            <div className="bento-visual bento-visual-vault">
              <div className="vault-hardware-chip">
                <span className="chip-label">KEYSTORE</span>
                <span className="chip-sub">CREDENTIAL MANAGER</span>
              </div>
            </div>
          </div>

          {/* Tile 2: Windows 2 MB footprint */}
          <div className="bento-tile bento-tile-performance">
            <div className="bento-tile-text">
              <span className="bento-caption">{bento.tiles[1].caption}</span>
              <h3 className="bento-title">{bento.tiles[1].title}</h3>
              <p className="bento-desc">{bento.tiles[1].desc}</p>
            </div>
            <div className="bento-visual bento-visual-metric">
              <span className="metric-huge">2<span className="metric-unit">MB</span></span>
            </div>
          </div>

          {/* Tile 3: Resume on any episode */}
          <div className="bento-tile bento-tile-resume">
            <div className="bento-tile-text">
              <span className="bento-caption">{bento.tiles[2].caption}</span>
              <h3 className="bento-title">{bento.tiles[2].title}</h3>
              <p className="bento-desc">{bento.tiles[2].desc}</p>
            </div>
            <div className="bento-visual bento-visual-resume">
              <div className="resume-progress-track">
                <div className="resume-progress-fill" />
              </div>
              <span className="resume-time-indicator">S02 E04 · 24:18 / 42:00</span>
            </div>
          </div>

          {/* Tile 4: Arabic and English */}
          <div className="bento-tile bento-tile-bilingual">
            <div className="bento-tile-text">
              <span className="bento-caption">{bento.tiles[3].caption}</span>
              <h3 className="bento-title">{bento.tiles[3].title}</h3>
              <p className="bento-desc">{bento.tiles[3].desc}</p>
            </div>
            <div className="bento-visual bento-visual-lang">
              <div className="bilingual-sample">
                <span className="sample-ar">خط عربي أصيل</span>
                <span className="sample-en">Clean typography</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
