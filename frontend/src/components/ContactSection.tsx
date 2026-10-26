"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
import styles from "./ContactSection.module.css";
import { SALON_INFO } from "../data/salonData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Appointment Inquiry",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous feedback
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

  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Visit The Atelier or Send an Inquiry</h2>
          <p className="section-subtitle">
            Located in the quiet residential sanctuary of Greenwich Village. We invite you into our unhurried space.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Contact & Hours Info */}
          <div className={styles.contactInfoCard}>
            <div className={styles.infoBlock}>
              <div className={styles.infoIconBox}>
                <MapPin size={22} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Salon Location</h4>
                <p className={styles.infoText}>{SALON_INFO.address}</p>
                <p className={styles.infoText} style={{ marginTop: "0.25rem", fontSize: "0.8rem", color: "#8c857b" }}>
                  Nearby: Christopher St Subway (1) & West 4th St (A/C/E/B/D/F/M). Valet parking available on Hudson St.
                </p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIconBox}>
                <Phone size={22} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Concierge Desk</h4>
                <p className={styles.infoText}>
                  Direct: <a href={`tel:${SALON_INFO.phone}`} style={{ color: "var(--color-accent-gold)", fontWeight: 500 }}>{SALON_INFO.phone}</a>
                </p>
                <p className={styles.infoText}>SMS / WhatsApp: +1 (212) 555-0199</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIconBox}>
                <Mail size={22} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Email Inquiries</h4>
                <p className={styles.infoText}>{SALON_INFO.email}</p>
                <p className={styles.infoText}>Press & Bridal: bridal@elansalonnyc.com</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIconBox}>
                <Clock size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 className={styles.infoTitle}>Hours of Operation</h4>
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
                Have a question about a service, formula consultation, or bridal booking? Fill in the details below and
                our concierge will respond within 4 hours.
              </p>
            </div>

            {isSubmitted && (
              <div className={styles.submitSuccessAlert}>
                <CheckCircle2 size={24} color="#16a34a" />
                <div className={styles.submitSuccessText}>
                  <strong>Thank you for contacting ÉLAN Atelier.</strong>
                  <br />
                  Your message has been received. Our salon director will contact you shortly.
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
                  Your Message or Hair Goals *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.formTextarea}
                  placeholder="Tell us about your current hair texture, past color history, or any questions..."
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
      </div>
    </section>
  );
}
