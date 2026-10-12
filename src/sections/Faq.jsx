import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Faq({ t }) {
  const f = t.faq;
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (idx) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section id="faq" className="faq-apple-section" aria-label="Frequently Asked Questions">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-eyebrow">{f.eyebrow}</span>
          <h2 className="faq-headline">{f.heading}</h2>
        </div>

        <div className="faq-accordion-wrap">
          {f.items.map((item, idx) => {
            const isOpen = !!openItems[idx];
            return (
              <div
                key={idx}
                className={`faq-row ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-icon-wrap" aria-hidden="true">
                    <Plus size={18} className="faq-plus-icon" />
                  </span>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  className="faq-answer-container"
                  hidden={!isOpen}
                >
                  <p className="faq-answer-text">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
