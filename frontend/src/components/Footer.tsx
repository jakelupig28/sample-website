"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Check, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";
import SocialLinks from "./SocialLinks";
import { SALON_INFO } from "../data/salonData";
import ElanIcon from "./ElanIcon";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLogo}>
              <ElanIcon size={38} variant="dark" />
              <span className={styles.brandName}>{SALON_INFO.name}</span>
            </Link>
            <p className={styles.brandDesc}>
              A luxury editorial hair atelier and holistic Japanese trichology sanctuary dedicated to architectural
              hair precision and clean botanicals.
            </p>
            <div style={{ marginTop: "0.5rem" }}>
              <SocialLinks color="#181615" size={17} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.footerTitle}>Navigation</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/" className={styles.footerLink}>Home</Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>Services Menu</Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>Our Atelier & Story</Link>
              </li>
              <li>
                <Link href="/lookbook" className={styles.footerLink}>Lookbook Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>Contact & Directions</Link>
              </li>
            </ul>
          </div>

          {/* Sanctuary Hours */}
          <div>
            <h4 className={styles.footerTitle}>Atelier Hours</h4>
            <ul className={styles.footerLinks}>
              {SALON_INFO.hours.map((h, i) => (
                <li key={i} style={{ fontSize: "0.825rem", color: "#a39e96" }}>
                  <strong style={{ color: "#d1cbc2", display: "block" }}>{h.days}</strong>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className={styles.newsletterBox}>
            <h4 className={styles.footerTitle}>The Atelier Journal</h4>
            <p style={{ fontSize: "0.825rem", color: "#9c968c", lineHeight: "1.6" }}>
              Subscribe for private salon slots, seasonal hair care rituals, and invitation-only atelier evenings.
            </p>
            {subscribed ? (
              <div style={{ color: "var(--color-accent-gold-light)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Check size={16} />
                <span>You are subscribed to The Atelier Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.newsletterInputWrapper}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className={styles.newsletterInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe">
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
            <p style={{ fontSize: "0.75rem", color: "#78736b" }}>
              Location: 442 Hudson St, Greenwich Village, NY • (212) 555-0198
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyrightBlock}>
            <p className={styles.copyrightText}>
              © {new Date().getFullYear()} {SALON_INFO.fullName}. All rights reserved.
            </p>
            <p className={styles.creatorCredit}>
              Created by: <span className={styles.creatorName}>Jake Lupig</span>
            </p>
          </div>

          <div className={styles.bottomLegalLinks}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sanitation Standards</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Back to top of page"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} strokeWidth={2} />
          </button>
        </div>
      </div>
    </footer>
  );
}
