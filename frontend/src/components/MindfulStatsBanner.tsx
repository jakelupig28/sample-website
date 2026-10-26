"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./MindfulStatsBanner.module.css";

export default function MindfulStatsBanner() {
  const stats = [
    { number: "10+", label: "Master Stylists", sub: "Trained across London & Paris" },
    { number: "100%", label: "Zero-Ammonia", sub: "Organic botanical color bases" },
    { number: "4.9★", label: "Google Rating", sub: "Over 650 verified 5-star reviews" },
    { number: "15+", label: "Years in NYC", sub: "Greenwich Village flagship since 2011" },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.topRow}>
          <div className={styles.titleBox}>
            <span className={styles.tag}>
              Conscious Luxury
            </span>
            <h2 className={styles.title}>
              Hair & Scalp Wellness Good For You And The Planet
            </h2>
          </div>

          {/* Stats Counters */}
          <div className={styles.statsRow}>
            {stats.slice(0, 2).map((st, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statNumber}>
                  {st.number}
                </span>
                <span className={styles.statLabel}>
                  {st.label}
                </span>
                <span className={styles.statSub}>
                  {st.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width Ambient Showcase Card */}
        <div className={styles.ambientCard}>
          <img
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1600&q=80"
            alt="ÉLAN Japanese Trichology Scalp Sanctuary Chamber"
            className={styles.ambientImage}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className={styles.ambientOverlay}>
            <div className={styles.cardContent}>
              <span className={styles.cardPill}>
                The Japanese Head Spa Chamber
              </span>
              <h3 className={styles.cardTitle}>
                Restorative Hydrotherapy In Total Sensory Stillness
              </h3>
              <p className={styles.cardDesc}>
                Step inside our sound-dampened scalp chamber. Micro-mist steam, warm herbal waterfalls, and cranial meridian acupressure revive fatigued follicles.
              </p>
              <Link href="/services" className="btn btn-terracotta">
                <span>Explore Scalp Sanctuary Services</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
