'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type FormData = { email: string; phone: string; message: string };

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        opacity: 0,
        y: 40,
        duration: 1,
        immediateRender: false,
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 95%',
        }
      });

      gsap.from('.form-group, .submit-row', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        immediateRender: false,
        scrollTrigger: {
          trigger: 'form',
          start: 'top 95%',
        }
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-card" ref={containerRef}>
      <h2 className="contact-title">
        Contact For<br /><span>Work</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="form-input"
              {...register('email', { required: 'Email required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } })}
            />
            {errors.email && <span className="form-error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone (with country code)</label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 234 567 890"
              className="form-input"
              {...register('phone')}
            />
          </div>
        </div>

        <div className="form-group form-group-full" style={{ marginTop: 8 }}>
          <label className="form-label" htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Tell me about your project..."
            className="form-textarea"
            {...register('message')}
          />
        </div>

        <div className="submit-row">
          <button type="submit" className="submit-btn" id="contact-submit">
            <span>{submitted ? 'Message Sent! ✓' : 'Send Message'}</span>
            <span className="cta-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}
