import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

type SubmissionStatus = 'idle' | 'success' | 'fallback' | 'rate_limited';

const CONTACT_REQUEST_TIMEOUT_MS = 8000;

const nextSteps = [
  'We respond within 2 business hours',
  'You receive a practical growth action plan',
  'No long-term commitment required to start',
];

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [feedbackTitle, setFeedbackTitle] = useState('Message Sent');
  const [feedbackMessage, setFeedbackMessage] = useState(
    "Message sent successfully. We'll be in touch shortly."
  );

  const validate = () => {
    const nextErrors: Partial<FormData> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Please share at least 10 characters about your project.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Company: ${formData.company || 'N/A'}`,
        '',
        'Project Details:',
        formData.message,
      ].join('\n')
    );

    return `mailto:kinerticmedia97@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmissionStatus('idle');
    setIsSubmitting(true);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), CONTACT_REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      const payload = await response.json().catch(() => null);

      if (response.ok && payload?.success) {
        setFeedbackTitle('Message Sent');
        setFeedbackMessage(payload.message || "Message sent successfully. We'll be in touch shortly.");
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else if (response.status === 429) {
        setFeedbackTitle('Please Try Again Soon');
        setFeedbackMessage(
          payload?.message || 'Too many requests. Please wait a few minutes before trying again.'
        );
        setSubmissionStatus('rate_limited');
      } else {
        setFeedbackTitle('Email Service Unavailable');
        setFeedbackMessage(
          payload?.message || 'Please message us on WhatsApp or open an email draft instead.'
        );
        setSubmissionStatus('fallback');
      }
    } catch {
      setFeedbackTitle('Connection Interrupted');
      setFeedbackMessage(
        'We could not send your message right now. Use WhatsApp or open an email draft and we will still respond quickly.'
      );
      setSubmissionStatus('fallback');
    } finally {
      window.clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const whatsappUrl = `https://wa.me/260975219796?text=${encodeURIComponent(
    "Hi Kinertic! I'd like to discuss a project."
  )}`;

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-gradient-to-b from-background to-green-500/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">LET&apos;S BUILD YOUR</span>
            <br />
            <span className="text-green-500">NEXT GROWTH ENGINE</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            Start with a free discovery call and get a focused action plan for your next 90 days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`${isVisible ? 'animate-slide-right animation-delay-200' : 'opacity-0'}`}>
            <div className="glass rounded-2xl p-8 border border-green-500/20">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-green-500 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Typically responds within 2 hours
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {nextSteps.map((step) => (
                  <div key={step} className="rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-xs text-foreground/80">
                    {step}
                  </div>
                ))}
              </div>

              {submissionStatus === 'success' || submissionStatus === 'fallback' ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 mx-auto mb-5 bg-green-500/15 rounded-full flex items-center justify-center">
                    <Send className="w-7 h-7 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{feedbackTitle}</h3>
                  <p className="text-foreground/65 mb-5">{feedbackMessage}</p>
                  {submissionStatus === 'success' ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Prefer WhatsApp? Message us directly
                    </a>
                  ) : (
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-white font-semibold hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Message Us on WhatsApp
                      </a>
                      <a
                        href={mailtoHref()}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-500 px-5 py-3 text-green-500 font-semibold hover:bg-green-500 hover:text-white transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Open Email Draft
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {submissionStatus === 'rate_limited' && (
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-foreground/85">
                      <p className="font-semibold text-amber-500">{feedbackTitle}</p>
                      <p className="mt-1 text-foreground/75">{feedbackMessage}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border-green-500/30 focus:border-green-500 focus:ring-green-500"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border-green-500/30 focus:border-green-500 focus:ring-green-500"
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-background border-green-500/30 focus:border-green-500 focus:ring-green-500"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-background border-green-500/30 focus:border-green-500 focus:ring-green-500 resize-none"
                      placeholder="Tell us your goals, timeline, and what is currently blocking growth..."
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 text-lg rounded-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Get My Growth Plan'}
                  </Button>

                  <p className="text-xs text-foreground/60 text-center">
                    Or{' '}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400"
                    >
                      message us directly on WhatsApp
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-left animation-delay-300' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8 border border-green-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:kinerticmedia97@gmail.com"
                      className="text-foreground/65 hover:text-green-500 transition-colors"
                    >
                      kinerticmedia97@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 border border-green-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone / WhatsApp</h3>
                    <a
                      href="tel:+260975219796"
                      className="text-foreground/65 hover:text-green-500 transition-colors"
                    >
                      +260 975 219 796
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 border border-green-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-foreground/65">Independence Ave, Lusaka, Zambia</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 border border-green-500/20 bg-gradient-to-br from-green-500/10 to-green-600/5">
                <h3 className="text-lg font-semibold text-foreground mb-4">Business Hours</h3>
                <div className="space-y-2 text-foreground/65">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
