"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { SERVICES_DATA } from "../data/salonData";
import styles from "./AtelierSignaturesSpread.module.css";

export default function AtelierSignaturesSpread() {
  const { openReservation, openBooking } = useBooking();
  const [activeTab, setActiveTab] = useState<number>(0);

  const signatures = [
    {
      roman: "I",
      name: "Bespoke French Balayage & Glaze Melt",
      subtitle: "The Lived-In Sunlit Signature",
      desc: "Our colorists do not rely on aggressive bleach packets or harsh foils. Instead, we hand-paint freehand clay lighteners onto hair surface planes, depositing translucent botanical glazes that transition seamlessly over four to six months.",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80",
      caption: "Balayage Glaze by Master Colorist",
      duration: "180 Mins",
      price: "Starts at $320",
      serviceId: "french-balayage",
    },
    {
      roman: "II",
      name: "The Japanese Trichology Head Spa",
      subtitle: "Restorative Follicular Hydrotherapy",
      desc: "A darkened, sound-dampened sanctuary session featuring microscopic camera follicle diagnostics, warm herbal mist therapy, sea kelp purification, and rhythmic shiatsu pressure-point massage along the cranial meridians.",
      image: "https://images.unsplash.com/photo-1522337094344-661c2bc7835e?auto=format&fit=crop&w=1000&q=80",
      caption: "Hydro-Waterfall Basin Ritual with Lead Trichologist",
      duration: "90 Mins",
      price: "Starts at $195",
      serviceId: "japanese-head-spa",
    },
    {
      roman: "III",
      name: "Architectural Precision Dry Sculpting",
      subtitle: "Cranial Geometry & Weight Redistribution",
      desc: "Refined dry in natural motion to honour natural cowlicks, skull architecture, and texture density for effortless air-dry longevity.",
      image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1000&q=80",
      caption: "Dry Sculpting by Creative Director",
      duration: "75 Mins",
      price: "Starts at $145",
      serviceId: "sculpture-cut",
    },
  ];

  const current = signatures[activeTab];
  const matchedService = SERVICES_DATA.find((s) => s.id === current.serviceId);

  return (
    <section className={styles.section} id="signatures-spread">
      <div className="container">
        <div className="section-header">
          <span
            style={{
              fontSize: "0.775rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--color-accent-terracotta)",
              display: "block",
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            The Atelier Pillars
          </span>
          <h2 className="section-title">The Three House Signatures</h2>
          <p className="section-subtitle">
            While our complete catalog spans eight bespoke treatments, these three defining disciplines represent the heart
            and soul of the ÉLAN atelier experience.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className={styles.tabList}>
          {signatures.map((sig, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`${styles.tabBtn} ${activeTab === idx ? styles.tabBtnActive : ""}`}
            >
              Signature {sig.roman}: {sig.subtitle}
            </button>
          ))}
        </div>

        {/* Asymmetrical Feature Presentation */}
        <div className={styles.spreadGrid}>
          {/* Editorial Image */}
          <div>
            <div className={styles.imageCard}>
              <img
                src={current.image}
                alt={current.name}
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className={styles.captionRow}>
              <span>{current.caption}</span>
              <span>442 Hudson St • Greenwich Village</span>
            </div>
          </div>

          {/* Editorial Copy */}
          <div className={styles.copyCol}>
            <span className={styles.disciplineTag}>
              House Discipline {current.roman}
            </span>

            <h3 className={styles.title}>
              {current.name}
            </h3>

            <div className={styles.metaRow}>
              <span>Duration: {current.duration}</span>
              <span>•</span>
              <span className={styles.price}>{current.price}</span>
            </div>

            <p className={styles.description}>
              {current.desc}
            </p>

            <div className={styles.actionRow}>
              <button
                type="button"
                onClick={() => openReservation(matchedService)}
                className="btn btn-terracotta"
              >
                <Calendar size={15} />
                <span>Reserve This Signature</span>
              </button>

              <button
                type="button"
                onClick={() => openBooking(matchedService)}
                className="btn btn-secondary"
              >
                <span>Check Service Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
