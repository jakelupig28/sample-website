"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LOOKBOOK_GALLERY } from "../data/salonData";
import styles from "./TrendsGallery.module.css";
import ScrollReveal from "./ScrollReveal";

export default function TrendsGallery() {
  const trendingItems = LOOKBOOK_GALLERY.slice(0, 4);

  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className={styles.header}>
            <span className={styles.tag}>
              Runway Trends &amp; Daylight Portfolios
            </span>
            <h2 className={styles.title}>
              Discover The Latest Hair Care Trends &amp; Styling
            </h2>
            <p className={styles.subtitle}>
              Captured in true North-facing daylight in our Greenwich Village atelier. Explore our signature French balayage, precision bobs, and head spa revitalizations.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Tile Grid */}
        <div className={styles.grid}>
          {trendingItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={(index % 4) * 80} animation="fade-up">
              <Link
                href="/lookbook"
                className={`${styles.card} trend-card`}
              >
                <div className={styles.cardImageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.cardImage}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.techniqueTag}>
                    {item.technique}
                  </span>
                  <h3 className={styles.cardTitle}>
                    {item.title}
                  </h3>
                  <p className={styles.cardDesc}>
                    {item.description}
                  </p>
                  <div className={styles.cardFooter}>
                    <span className={styles.locationLabel}>
                      Greenwich Village Atelier
                    </span>
                    <span className={styles.actionLabel}>
                      <span>Check Service</span>
                      <ArrowUpRight size={13} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className={styles.viewAllRow}>
          <Link href="/lookbook" className="btn btn-terracotta">
            <span>Explore Complete Lookbook Gallery</span>
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
