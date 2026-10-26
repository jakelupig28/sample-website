"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { SALON_INFO } from "../data/salonData";
import styles from "./AtelierCalloutBanner.module.css";

export default function AtelierCalloutBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.bannerCard}>
          {/* Subtle background glow */}
          <div className={styles.glowOrb} aria-hidden="true" />

          <div className={styles.contentWrapper}>
            <span className={styles.tag}>
              Private Single-Chair Consultations
            </span>
            <h2 className={styles.title}>
              Experience The ÉLAN Standard In Greenwich Village
            </h2>
            <p className={styles.description}>
              {SALON_INFO.address}. Open Tuesday through Saturday by appointment. Unhurried, dedicated single-chair care with zero double-booking.
            </p>
          </div>

          <div className={styles.buttonRow}>
            <Link
              href="/contact"
              className="btn btn-terracotta"
            >
              <span>Connect With Concierge</span>
              <ArrowUpRight size={17} />
            </Link>
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="btn btn-secondary"
              style={{ color: "#ffffff", borderColor: "#4d463f", justifyContent: "center" }}
            >
              <Phone size={15} />
              <span>Direct: {SALON_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
