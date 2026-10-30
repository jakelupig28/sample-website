"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MessageSquare, Clock, ArrowUpRight } from "lucide-react";
import GoogleMapEmbed from "./GoogleMapEmbed";
import SocialLinks from "./SocialLinks";
import { SALON_INFO } from "../data/salonData";
import styles from "./SalonLocationSection.module.css";
import ScrollReveal from "./ScrollReveal";

export default function SalonLocationSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <h2 className="section-title">The Greenwich Village Sanctuary</h2>
            <p className="section-subtitle">
              Quietly situated at 442 Hudson Street between Morton and St. Luke&apos;s Place. We invite you to step away
              from the city rhythm into our serene, single-chair haven.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {/* Left Column: Interactive Google Maps Embed */}
          <ScrollReveal animation="slide-right">
            <div className={styles.mapCol}>
              <GoogleMapEmbed fillContainer={true} />
            </div>
          </ScrollReveal>

          {/* Right Column: Atelier Hours, Direct Channels & Socials */}
          <ScrollReveal animation="slide-left" delay={100}>
            <div className={styles.infoCard}>
            <div>
              <div className={styles.cardHeader}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                  <Clock size={18} strokeWidth={1.5} color="var(--color-accent-terracotta)" />
                  <h3 className={styles.cardTitle}>Visiting Hours</h3>
                </div>
                <span className={styles.byApptBadge}>
                  By Appointment
                </span>
              </div>

              <div className={styles.hoursList}>
                {SALON_INFO.hours.map((h, i) => (
                  <div key={i} className={styles.hoursRow}>
                    <span className={styles.daysLabel}>{h.days}</span>
                    <span className={styles.timesLabel}>{h.hours}</span>
                  </div>
                ))}
              </div>

              <div className={styles.directList}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <Phone size={14} strokeWidth={1.5} color="var(--color-accent-terracotta)" />
                  <div>
                    <strong style={{ color: "var(--color-text-main)" }}>Concierge Phone:</strong>{" "}
                    <a href={`tel:${SALON_INFO.phone}`} style={{ color: "var(--color-accent-terracotta)", fontWeight: 600 }}>
                      {SALON_INFO.phone}
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <MessageSquare size={14} strokeWidth={1.5} color="var(--color-accent-gold)" />
                  <div>
                    <strong style={{ color: "var(--color-text-main)" }}>SMS / WhatsApp:</strong> +1 (212) 555-0199
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <Mail size={14} strokeWidth={1.5} color="var(--color-accent-gold)" />
                  <div>
                    <strong style={{ color: "var(--color-text-main)" }}>Inquiries:</strong> {SALON_INFO.email}
                  </div>
                </div>
              </div>

              <div className={styles.socialBox}>
                <div className={styles.socialLabel}>
                  Connect on Social Media
                </div>
                <SocialLinks size={17} />
              </div>
            </div>

            <Link href="/contact" className={`btn btn-terracotta ${styles.ctaBtn}`}>
              <span>Get Directions &amp; Concierge Inquiries</span>
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
      </div>
    </section>
  );
}
