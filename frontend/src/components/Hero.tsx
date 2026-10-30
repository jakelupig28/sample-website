"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import styles from "./Hero.module.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className={styles.heroSection} data-reveal-skip>
      {/* Silky Moving White & Pearl Gradient Shimmer */}
      <div className={styles.movingWhiteSheen} aria-hidden="true" />
      <div className={styles.movingWhiteWave} aria-hidden="true" />

      {/* Background Image Layer: Soft cinematic zoom-in entrance */}
      <motion.div
        className={styles.heroBgImageLayer}
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
      >
        <div className={styles.heroBgImage} />
      </motion.div>

      <div className={styles.heroContainer}>
        {/* Left Column: Bold Typography & Action Buttons */}
        <div className={styles.heroLeftCol}>
          <motion.h1
            className={styles.heroMainHeading}
            initial={{ opacity: 0, y: 26, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: easeOut }}
          >
            YOUR SILHOUETTE IS ARCHITECTURE — WE SCULPT <span>THE LIVING MASTERPIECE</span>.
          </motion.h1>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: easeOut }}
          >
            An antidote to the fast-beauty era. Inside our daylight Greenwich Village atelier, master stylists craft lived-in French balayage, architectural dry sculpting, and restorative Japanese head spa hydrotherapy tailored intimately to your bone geometry.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: easeOut }}
          >
            <Link href="/services" className="btn btn-terracotta">
              <span>Explore Services</span>
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>

            <Link href="/services" className="btn btn-secondary">
              <span>Our Shop</span>
              <ShoppingBag size={15} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
