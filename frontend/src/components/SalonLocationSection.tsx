"use client";

import React from "react";
import Link from "next/link";
import GoogleMapEmbed from "./GoogleMapEmbed";
import SocialLinks from "./SocialLinks";
import { SALON_INFO } from "../data/salonData";
import styles from "./SalonLocationSection.module.css";

export default function SalonLocationSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Greenwich Village Sanctuary</h2>
          <p className="section-subtitle">
            Quietly situated at 442 Hudson Street between Morton and St. Luke&apos;s Place. We invite you to step away
            from the city rhythm into our serene, single-chair haven.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Interactive Google Maps Embed */}
          <div className={styles.mapCol}>
            <GoogleMapEmbed fillContainer={true} />
          </div>

          {/* Right Column: Atelier Hours, Direct Channels & Socials */}
          <div className={styles.infoCard}>
            <div>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  Visiting Hours
                </h3>
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
                <div>
                  <strong>Concierge Phone:</strong>{" "}
                  <a href={`tel:${SALON_INFO.phone}`} style={{ color: "var(--color-accent-terracotta)", fontWeight: 600 }}>
                    {SALON_INFO.phone}
                  </a>
                </div>
                <div>
                  <strong>SMS / WhatsApp:</strong> +1 (212) 555-0199
                </div>
                <div>
                  <strong>Inquiries:</strong> {SALON_INFO.email}
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
              <span>Get Directions & Concierge Inquiries</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
