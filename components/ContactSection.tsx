'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { siteConfig } from '@/data/site';

type ContactFields = {
  email: string;
  phone: string;
  message: string;
  website: string;
};

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFields>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: { email: '', phone: '', message: '', website: '' },
  });

  const onSubmit = async (fields: ContactFields) => {
    setStatus('loading');
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many requests. Please try again in a minute, or send an email.');
        }
        if (response.status === 503) {
          throw new Error('The form is temporarily unavailable. Please email me directly.');
        }
        throw new Error('Your message could not be sent. Please try again or use email.');
      }

      reset();
      setStatus('success');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please use email.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-card contact-section">
      <div className="section-label">Get in touch</div>
      <h2 className="contact-title">Let&apos;s<br /><span>talk.</span></h2>
      <p className="contact-intro">
        Have a role, a project, or an engineering challenge worth discussing?
        Send a message below or reach out directly.
      </p>
      <a className="contact-direct-link" href={'mailto:' + siteConfig.email}>
        {siteConfig.email}
        <span aria-hidden="true">↗</span>
      </a>

      {status === 'success' ? (
        <div className="contact-success" role="status" aria-live="polite">
          <span className="contact-success-icon" aria-hidden="true">✓</span>
          <h3>Message sent successfully.</h3>
          <p>Thanks for reaching out. I&apos;ll review your message and reply when I can.</p>
          <button type="button" className="submit-btn contact-reset-btn" onClick={() => setStatus('idle')}>
            Write another message
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate aria-busy={status === 'loading'}>
          <div className="form-honeypot" aria-hidden="true">
            <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
          </div>

          <div className="form-row">
            <div className={errors.email ? 'form-group is-invalid' : 'form-group'}>
              <label className="form-label" htmlFor="email">Email address <span aria-hidden="true">*</span></label>
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                className="form-input"
                placeholder="you@example.com"
                maxLength={254}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email', {
                  required: 'Please enter your email address.',
                  maxLength: { value: 254, message: 'Email address is too long.' },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address.',
                  },
                })}
              />
              {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email.message}</span>}
            </div>

            <div className={errors.phone ? 'form-group phone-group is-invalid' : 'form-group phone-group'}>
              <label className="form-label" htmlFor="phone">Phone number <span className="form-optional">(optional)</span></label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className="form-input"
                placeholder="+212 ..."
                maxLength={40}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                {...register('phone', {
                  maxLength: { value: 40, message: 'Phone number is too long.' },
                })}
              />
              {errors.phone && <span id="phone-error" className="form-error" role="alert">{errors.phone.message}</span>}
            </div>
          </div>

          <div className={errors.message ? 'form-group form-group-full is-invalid' : 'form-group form-group-full'}>
            <label className="form-label" htmlFor="message">Message <span aria-hidden="true">*</span></label>
            <textarea
              id="message"
              className="form-textarea"
              rows={5}
              minLength={5}
              maxLength={5000}
              placeholder="Tell me a little about your role, team, or project..."
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : 'message-help'}
              {...register('message', {
                required: 'Please enter a message.',
                minLength: { value: 5, message: 'Please add a little more detail (at least 5 characters).' },
                maxLength: { value: 5000, message: 'Please keep your message under 5,000 characters.' },
              })}
            />
            {errors.message ? (
              <span id="message-error" className="form-error" role="alert">{errors.message.message}</span>
            ) : (
              <p id="message-help" className="form-help">A few lines are enough. Please don&apos;t include sensitive information.</p>
            )}
          </div>

          {status === 'error' && (
            <p className="form-submit-error" role="alert">
              {submitError} <a href={'mailto:' + siteConfig.email}>Email directly ↗</a>
            </p>
          )}

          <div className="submit-row">
            <button type="submit" className="submit-btn" disabled={status === 'loading'}>
              <span>{status === 'loading' ? 'Sending your message…' : 'Send message'}</span>
              {status === 'loading' ? (
                <span className="submit-spinner" aria-hidden="true" />
              ) : (
                <span className="cta-icon" aria-hidden="true">↗</span>
              )}
            </button>
            <p className="form-help">Required fields are marked with *.</p>
          </div>
        </form>
      )}
    </section>
  );
}
