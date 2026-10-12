import React from 'react';
import { Smartphone, Monitor, Download, ShieldCheck, Check, Info } from 'lucide-react';

export default function Downloads({ t }) {
  const d = t.downloads;

  return (
    <section id="downloads" className="downloads-section" aria-label="Downloads">
      <div className="downloads-intro">
        <h2 className="section-heading">{d.heading}</h2>
        <p className="section-subhead">{d.subhead}</p>
      </div>

      <div className="downloads-grid">
        {/* Android Card */}
        <div className="download-card download-card-android">
          <div className="card-top">
            <div className="platform-icon-wrap">
              <Smartphone size={28} className="platform-icon" aria-hidden="true" />
            </div>
            <div className="platform-meta">
              <span className="card-tech-tag">{d.android.tag}</span>
              <h3 className="card-platform-title">{d.android.title}</h3>
              <span className="card-os-req">{d.android.platformNote}</span>
            </div>
          </div>

          <p className="card-description">{d.android.description}</p>

          <div className="card-actions">
            {/* Primary arm64 download */}
            <a
              href={d.android.primaryUrl}
              download
              className="download-btn-primary"
            >
              <Download size={20} aria-hidden="true" />
              <div className="btn-label-block">
                <span className="btn-main-label">{d.android.primaryBtn}</span>
                <span className="btn-sub-label">{d.android.primaryMeta}</span>
              </div>
            </a>

            {/* Secondary armv7 download */}
            <a
              href={d.android.secondaryUrl}
              download
              className="download-btn-secondary"
            >
              <Download size={16} aria-hidden="true" />
              <div className="btn-label-block">
                <span className="btn-secondary-label">{d.android.secondaryBtn}</span>
                <span className="btn-secondary-meta">{d.android.secondaryMeta}</span>
              </div>
            </a>
          </div>

          <div className="install-tip-box">
            <Info size={16} className="tip-icon" aria-hidden="true" />
            <p className="tip-text">{d.android.installTip}</p>
          </div>
        </div>

        {/* Windows Card */}
        <div className="download-card download-card-windows">
          <div className="card-top">
            <div className="platform-icon-wrap">
              <Monitor size={28} className="platform-icon" aria-hidden="true" />
            </div>
            <div className="platform-meta">
              <span className="card-tech-tag">{d.windows.tag}</span>
              <h3 className="card-platform-title">{d.windows.title}</h3>
              <span className="card-os-req">{d.windows.platformNote}</span>
            </div>
          </div>

          <p className="card-description">{d.windows.description}</p>

          <div className="card-actions">
            <a
              href={d.windows.primaryUrl}
              download
              className="download-btn-primary"
            >
              <Download size={20} aria-hidden="true" />
              <div className="btn-label-block">
                <span className="btn-main-label">{d.windows.primaryBtn}</span>
                <span className="btn-sub-label">{d.windows.primaryMeta}</span>
              </div>
            </a>
          </div>

          <ul className="windows-highlights-list">
            {d.windows.features.map((feat, idx) => (
              <li key={idx} className="highlight-item">
                <Check size={16} className="check-icon" aria-hidden="true" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Security Banner */}
      <div className="security-banner">
        <ShieldCheck size={20} className="security-icon" aria-hidden="true" />
        <p className="security-text">{d.securityNote}</p>
      </div>
    </section>
  );
}
