"use client";

import React, { useState } from "react";
import styles from "./ServicesSection.module.css";
import { SERVICES_DATA, ServiceItem } from "../data/salonData";

interface ServicesSectionProps {
  onSelectServiceToBook: (service: ServiceItem) => void;
}

export default function ServicesSection({ onSelectServiceToBook }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Offerings" },
    { id: "cut", label: "Couture Cut & Style" },
    { id: "color", label: "Bespoke Balayage & Color" },
    { id: "scalp", label: "Scalp Sanctuary & Head Spa" },
    { id: "bridal", label: "Bridal & Editorial" },
    { id: "nails", label: "Nails & Esthetics" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className={`section-padding ${styles.servicesSection}`}>
      <div className="container">
        {/* Section Heading — Heading carries its own weight without kickers/eyebrows */}
        <div className="section-header">
          <h2 className="section-title">The Atelier Service Tariff</h2>
          <p className="section-subtitle">
            Every session begins with an uninterrupted 1-on-1 consultation to evaluate hair porosity, bone geometry,
            and daily maintenance. Formulated exclusively with ammonia-free Italian and Japanese botanicals.
          </p>
        </div>

        {/* Category Navigation */}
        <div className={styles.categoryFilter}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.categoryBtnActive : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Listing */}
        <div className={styles.servicesGrid}>
          {filteredServices.map((service) => (
            <article key={service.id} className={styles.serviceCard}>
              <div className={styles.cardImageWrapper}>
                <img src={service.image} alt={service.name} className={styles.cardImage} />
                <span className={styles.categoryTag}>{service.categoryLabel}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardHeaderRow}>
                  <h3 className={styles.cardTitle}>{service.name}</h3>
                  <div className={styles.priceBadge}>{service.price}</div>
                </div>

                <div className={styles.cardMetaRow}>
                  <span className={styles.cardMetaItem}>Session: {service.duration}</span>
                  <span className={styles.cardMetaItem}>Lead: {service.recommendedStylist}</span>
                </div>

                <p className={styles.cardDescription}>{service.description}</p>

                <ul className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.featureDot}></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <div className={styles.stylistRecommendation}>
                    <span className={styles.stylistLabel}>Specialist Artisan</span>
                    <span className={styles.stylistName}>{service.recommendedStylist}</span>
                  </div>
                  <button
                    onClick={() => onSelectServiceToBook(service)}
                    className="btn btn-primary btn-sm"
                  >
                    Reserve Service
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* The ÉLAN Standard Manifesto (Zero icon boxes or template cards) */}
        <div className={styles.manifestoBanner}>
          <h3 className={styles.manifestoTitle}>The ÉLAN Standard & Commitment</h3>
          <p className={styles.manifestoText}>
            We reject the chaotic, assembly-line salon model. When you sit in our chair, your stylist does not leave to mix
            another client&apos;s foils. Your block is exclusively yours from consultation to final mirror review.
          </p>

          <div className={styles.manifestoPrinciples}>
            <div>
              <h4 className={styles.principleTitle}>Seven-Day Courtesy</h4>
              <p className={styles.principleDesc}>
                Complimentary tonal shift or weight adjustments within seven days of any cut or color appointment.
              </p>
            </div>

            <div>
              <h4 className={styles.principleTitle}>Clean Chemistry</h4>
              <p className={styles.principleDesc}>
                100% ammonia-free, MEA-reduced pigments that preserve cuticle strength and scalp moisture balance.
              </p>
            </div>

            <div>
              <h4 className={styles.principleTitle}>Unbroken Attention</h4>
              <p className={styles.principleDesc}>
                Dedicated 1-on-1 scheduling with bespoke French press coffee, ceremonial matcha, or vintage champagne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
