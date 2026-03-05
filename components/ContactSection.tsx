'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type FormData = { email: string; phone: string; message: string };

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: { email: '', phone: '', message: '' }
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        opacity: 0, y: 40, duration: 1, immediateRender: false,
        scrollTrigger: { trigger: '.contact-title', start: 'top 95%' }
      });
      gsap.from('.form-group, .submit-row', {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.8, immediateRender: false,
        scrollTrigger: { trigger: 'form', start: 'top 95%' }
      });
      ScrollTrigger.refresh();
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      reset(); // Clear form inputs on success
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section-card" ref={containerRef}>
      <h2 className="contact-title">
        Contact For<br /><span>Work</span>
      </h2>

      {status === 'success' ? (
        <div className="success-message" style={{ textAlign: 'center', padding: '60px 20px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', animation: 'fadeIn 0.5s ease-out forwards' }}>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes scaleIn { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1); } }
            @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
          `}} />
          <div className="success-icon" style={{ width: '64px', height: '64px', backgroundColor: 'rgba(243, 79, 17, 0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 24px', color: '#F34F11', animation: 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary, #fff)', opacity: 0, animation: 'fadeIn 0.5s ease-out 0.2s forwards' }}>Message Sent Successfully!</h3>
          <p style={{ color: 'var(--text-secondary, #9ca3af)', fontSize: '16px', lineHeight: '1.5', maxWidth: '400px', margin: '0 auto', opacity: 0, animation: 'fadeIn 0.5s ease-out 0.3s forwards' }}>
            Thank you for reaching out. I&apos;ll get back to you as soon as possible.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="submit-btn" 
            style={{ 
              marginTop: '40px', 
              display: 'inline-flex', 
              alignItems: 'center',
              justifyContent: 'center',
              width: 'auto', 
              padding: '16px 40px',
              fontSize: '16px',
              fontWeight: '500',
              opacity: 0, 
              animation: 'fadeIn 0.5s ease-out 0.4s forwards',
              gap: '12px'
            }}
          >
            <span>Send Another Message</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="email">Your Email</label>
              <input
                id="email" type="email" placeholder="Enter your email"
                className="form-input"
                {...register('email', {
                  required: 'Email required',
                  pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' }
                })}
              />
              {errors.email && <span className="form-error">{errors.email.message}</span>}
            </div>

            <div className="form-group phone-group">
              <label className="form-label" htmlFor="phone">Phone Number (Optional)</label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="form-input"
                {...register('phone')}
              />
            </div>
          </div>

          <div className="form-group form-group-full" style={{ marginTop: 8 }}>
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message" placeholder="Tell me about your project..."
              className="form-textarea"
              {...register('message', { required: 'Message required' })}
            />
            {errors.message && <span className="form-error">{errors.message.message}</span>}
          </div>

          <div className="submit-row" style={{ marginTop: '32px' }}>
            <button type="submit" className="submit-btn" id="contact-submit" disabled={status === 'loading'}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeLinecap="round" opacity="0.3"/>
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    Sending...
                  </>
                ) : status === 'error' ? 'Error. Try Again.' : 'Send Message'}
              </span>
              {status !== 'loading' && (
                <span className="cta-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              )}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
