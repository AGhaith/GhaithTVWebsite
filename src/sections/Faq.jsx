import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq({ t }) {
  const f = t.faq;

  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <div className="faq-intro">
        <h2 className="section-heading">{f.heading}</h2>
      </div>

      <div className="faq-accordion-list">
        {f.items.map((item, idx) => (
          <details key={idx} className="faq-item">
            <summary className="faq-summary">
              <span className="faq-question">{item.q}</span>
              <ChevronDown size={20} className="faq-chevron" aria-hidden="true" />
            </summary>
            <div className="faq-answer-body">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
