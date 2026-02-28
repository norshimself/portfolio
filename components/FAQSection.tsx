'use client';

import { useEffect, useRef, useState } from 'react';
import { faqs } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        immediateRender: false,
        scrollTrigger: {
          trigger: '#faq',
          start: 'top 95%',
        }
      });
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" className="section-card" ref={containerRef}>
      <div className="section-label">FAQ</div>
      <h2 className="faq-main-title">
        Frequently Asked Questions
      </h2>

      <div>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`faq-item${active === i ? ' active' : ''}`}
            onClick={() => setActive(active === i ? null : i)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-bottom">
        Still have questions?{' '}
        <a href="#contact" className="faq-contact-link">Contact me</a>
      </div>
    </section>
  );
}
