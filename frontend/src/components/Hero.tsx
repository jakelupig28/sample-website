"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Very Light Pink Base with Silky Moving White Gradient Shimmer */}
      <div className={styles.movingWhiteSheen} aria-hidden="true" />
      <div className={styles.movingWhiteWave} aria-hidden="true" />

      {/* Background Image Layer: True full opacity with smooth mask-image fading into pink base */}
      <div className={styles.heroBgImageLayer} aria-hidden="true">
        <div className={styles.heroBgImage} />
      </div>

      <div className={styles.heroContainer}>
        {/* Left Column: Bold Typography, Magnetic Context & Action Buttons */}
        <div className={styles.heroLeftCol}>
          <div className={styles.heroEyebrowPill}>
            <Sparkles size={12} />
            <span>Haute Coiffure & Trichology Sanctuary</span>
          </div>

          <h1 className={styles.heroMainHeading}>
            YOUR SILHOUETTE IS ARCHITECTURE — WE SCULPT <span>THE LIVING MASTERPIECE</span>.
          </h1>

          <p className={styles.heroDesc}>
            An antidote to the fast-beauty era. Inside our daylight Greenwich Village atelier, master stylists craft lived-in French balayage, architectural dry sculpting, and restorative Japanese head spa hydrotherapy tailored intimately to your bone geometry.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/services" className="btn btn-terracotta">
              <span>Explore Services</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link href="/services" className="btn btn-secondary">
              <span>Our Shop</span>
              <ShoppingBag size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
