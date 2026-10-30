"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FaqAccordion, { FaqItem } from "../../components/FaqAccordion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, Navigation, Calendar } from "lucide-react";
import styles from "../../components/ContactSection.module.css";
import GoogleMapEmbed from "../../components/GoogleMapEmbed";
import SocialLinks from "../../components/SocialLinks";
import { SALON_INFO } from "../../data/salonData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Appointment Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Appointment Inquiry",
        message: "",
      });
    }, 700);
  };

  const visitFaqs: FaqItem[] = [
    {
      question: "Do you accept walk-in clients?",
      answer:
        "To protect the serene, unhurried atmosphere of our atelier, we work primarily by private reservation. However, same-day openings do occasionally occur due to schedule adjustments. We encourage you to call our concierge directly at (212) 555-0198 to inquire about today's availability.",
    },
    {
      question: "What is your cancellation and rescheduling policy?",
      answer:
        "We kindly request at least 48 hours notice for any rescheduling or cancellations. Because our master stylists reserve dedicated blocks of 2 to 4 hours per guest, appointments cancelled with less than 48 hours notice may be subject to a 50% reservation fee.",
    },
    {
      question: "Where can I park when visiting the Greenwich Village atelier?",
      answer:
        "Convenient valet parking is available directly on Hudson Street through our partnered garage. For public transit, the Christopher St – Sheridan Sq (1 train) is a 3-minute walk, and the West 4th St – Washington Sq station (A, C, E, B, D, F, M) is just 5 minutes away.",
    },
    {
      question: "Can I host a private event or bridal party at ÉLAN?",
      answer:
        "Yes, our private VIP suite and full atelier are available for bridal prep, editorial shoots, and private wellness buyouts. Please email bridal@elansalonnyc.com with your prospective dates and guest count.",
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero animate-fade-in-up">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb-current">Contact & Visit</span>
          </div>
          <h1 className="page-hero-title">Visit The Atelier & Connect</h1>
          <p className="page-hero-subtitle">
            Whether inquiring about a transformative color correction, private bridal suite booking, or directions to our
            Hudson Street location, our concierge is at your service.
          </p>
        </div>
      </section>

      {/* Quick Action Ribbon */}
      <section style={{ background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", padding: "1.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/services" className="btn btn-terracotta btn-sm">
            <span>Explore Services Menu</span>
          </Link>
          <a href={`tel:${SALON_INFO.phone}`} className="btn btn-secondary btn-sm">
            <Phone size={15} />
            <span>Call {SALON_INFO.phone}</span>
          </a>
          <a href={`mailto:${SALON_INFO.email}`} className="btn btn-secondary btn-sm">
            <Mail size={15} />
            <span>Email Concierge</span>
          </a>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left Column: Location & Hours */}
            <div className={styles.contactInfoCard}>
              <div className={styles.infoBlock}>
                <div className={styles.infoIconBox}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Greenwich Village Atelier</h4>
                  <p className={styles.infoText}>{SALON_INFO.address}</p>
                  <p className={styles.infoText} style={{ marginTop: "0.4rem", fontSize: "0.825rem", color: "#8c857b" }}>
                    Nestled between Morton St & St. Luke&apos;s Place in historic Greenwich Village.
                  </p>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIconBox}>
                  <Navigation size={22} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Transit & Parking</h4>
                  <p className={styles.infoText}>
                    • 1 Train: Christopher St Station (3 min walk)<br />
                    • A, C, E, B, D, F, M: West 4th St Station (5 min walk)<br />
                    • Valet Garage: 432 Hudson St Garage (Direct entry)
                  </p>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIconBox}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Direct Communication</h4>
                  <p className={styles.infoText}>
                    Phone: <a href={`tel:${SALON_INFO.phone}`} style={{ color: "var(--color-accent-gold)", fontWeight: 500 }}>{SALON_INFO.phone}</a><br />
                    SMS / WhatsApp Concierge: +1 (212) 555-0199<br />
                    Email: {SALON_INFO.email}
                  </p>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIconBox}>
                  <Clock size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 className={styles.infoTitle}>Operating Hours</h4>
                  <div className={styles.hoursTable}>
                    {SALON_INFO.hours.map((h, i) => (
                      <div key={i} className={styles.hoursRow}>
                        <span className={styles.hoursDays}>{h.days}</span>
                        <span className={styles.hoursTimes}>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <p className={styles.formSubtitle}>
                  Please fill out the details below. Our concierge desk will review your inquiry and get back to you
                  within 4 business hours.
                </p>
              </div>

              {isSubmitted && (
                <div className={styles.submitSuccessAlert}>
                  <CheckCircle2 size={24} color="#16a34a" />
                  <div className={styles.submitSuccessText}>
                    <strong>Thank you for contacting ÉLAN Atelier.</strong>
                    <br />
                    Your inquiry has been received. Our salon manager will reach out shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name" className={styles.formLabel}>
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={styles.formInput}
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email" className={styles.formLabel}>
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={styles.formInput}
                      placeholder="yourname@example.com"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-phone" className={styles.formLabel}>
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={styles.formInput}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-subject" className={styles.formLabel}>
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={styles.formSelect}
                    >
                      <option value="Appointment Inquiry">Appointment Inquiry</option>
                      <option value="Color & Balayage Consultation">Color & Balayage Consultation</option>
                      <option value="Japanese Head Spa Ritual">Japanese Head Spa Ritual</option>
                      <option value="Bridal Suite & Events">Bridal Suite & Events</option>
                      <option value="Press & Media">Press & Media</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-message" className={styles.formLabel}>
                    Message or Hair Questions *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={styles.formTextarea}
                    placeholder="Describe your hair history, desired timeline, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-gold"
                  style={{ width: "100%", marginTop: "0.5rem" }}
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message to Concierge</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Interactive Google Maps Frame */}
          <div style={{ marginTop: "4.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.85rem", color: "var(--color-text-main)", marginBottom: "1rem" }}>
              Atelier Location Map & Navigation
            </h3>
            <GoogleMapEmbed height={420} />
          </div>
        </div>
      </section>

      {/* Visit FAQ Section */}
      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Visiting The Atelier</h2>
            <p className="section-subtitle">
              Common questions regarding salon etiquette, parking, cancellation policies, and arrival procedures.
            </p>
          </div>

          <FaqAccordion items={visitFaqs} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
