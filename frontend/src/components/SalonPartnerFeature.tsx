"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowUpRight, Leaf } from "lucide-react";
import styles from "./SalonPartnerFeature.module.css";

export default function SalonPartnerFeature() {
  const points = [
    {
      title: "100% Bio-Active Botanical Formulations",
      desc: "Free from ammonia, resorcinol, phthalates, and synthetic silicones. We utilize cold-pressed marula, jojoba, and patented biomimetic peptides to protect hair integrity.",
    },
    {
      title: "Cranial Geometry & Precision Dry Sculpting",
      desc: "Every cut is crafted in dry motion to work in harmony with your natural hair density, cowlicks, and cranial contours for effortless 5-minute home maintenance.",
    },
    {
      title: "Japanese Trichology Hydrotherapy Chamber",
      desc: "A darkened, sound-dampened sensory oasis dedicated to deep scalp detox, warm herbal waterfalls, and acupressure to stimulate cellular follicle micro-circulation.",
    },
    {
      title: "Proven Results & 7-Day Adjustment Promise",
      desc: "We stand behind every shade and silhouette. If your tone needs a gentle refinement within 7 days, we welcome you back with our compliments.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Narrative & Key Commitments */}
          <div>
            <span className={styles.tag}>
              The Atelier Difference
            </span>

            <h2 className={styles.title}>
              Your Trusted Hair Atelier & Scalp Sanctuary
            </h2>

            <div className={styles.pointsList}>
              {points.map((pt, i) => (
                <div key={i} className={styles.pointItem}>
                  <div className={styles.pointIcon}>
                    <Check size={13} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className={styles.pointTitle}>
                      {pt.title}
                    </h4>
                    <p className={styles.pointDesc}>
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actionsRow}>
              <Link href="/about" className="btn btn-terracotta">
                <span>Discover Our Story &amp; Stylists</span>
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
              <Link href="/services" className="btn btn-secondary">
                <span>View All Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Photo Composition */}
          <div className={styles.imageCol}>
            <div className={styles.imageCard}>
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                alt="ÉLAN Greenwich Village Atelier Interior"
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Overlapping organic badge */}
            <div className={styles.organicBadge}>
              <div className={styles.badgeIcon}>
                <Leaf size={20} strokeWidth={1.5} />
              </div>
              <div>
                <div className={styles.badgeTitle}>
                  100% Zero-Ammonia
                </div>
                <div className={styles.badgeSub}>
                  Clean Organic Formulations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
