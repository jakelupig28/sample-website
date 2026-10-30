"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Clock, Check } from "lucide-react";
import styles from "./AtelierServicesShowcase.module.css";
import { SERVICES_DATA, ServiceItem } from "../data/salonData";
import { useBooking } from "../context/BookingContext";
import ScrollReveal from "./ScrollReveal";

export default function AtelierServicesShowcase() {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "cut", label: "Couture Cut & Style" },
    { id: "color", label: "French Balayage & Glazes" },
    { id: "scalp", label: "Scalp Sanctuary & Head Spa" },
    { id: "bridal", label: "Bridal & Runway" },
  ];

  const displayedServices =
    activeCategory === "all"
      ? SERVICES_DATA.slice(0, 6)
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section className={styles.section} id="salon-services-showcase">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className={styles.header}>
            <span className={styles.headerTag}>Bespoke Hair &amp; Scalp Artistry</span>
            <h2 className={styles.title}>Discover The Finest Hair Salon Services</h2>
            <p className={styles.subtitle}>
              Every service is a marriage of French aesthetic finesse and clean botanical science. Click any service below to check formulations, duration, and session details.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal animation="fade-up" delay={80}>
          <div className={styles.filterRow}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Services Grid with Clickable Cards */}
        <div className={styles.grid}>
          {displayedServices.map((service, index) => (
            <ScrollReveal key={service.id} delay={(index % 3) * 90} animation="fade-up">
              <div
                className={styles.card}
                onClick={() => openBooking(service)}
                title="Click to check service details and formula"
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className={styles.image}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className={styles.categoryBadge}>{service.categoryLabel}</span>
                  {service.isPopular && (
                    <span className={styles.popularBadge}>
                      <Sparkles size={12} strokeWidth={1.5} />
                      <span>House Signature</span>
                    </span>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardHeaderRow}>
                    <h3 className={styles.cardTitle}>{service.name}</h3>
                    <span className={styles.priceTag}>{service.price}</span>
                  </div>

                  <div className={styles.metaRow}>
                    <span>Duration: {service.duration}</span>
                  </div>

                  <p className={styles.desc}>{service.description}</p>

                  <div className={styles.cardFooter}>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-text-light)", fontWeight: 500 }}>
                      Dedicated 1-on-1 Care
                    </span>
                    <div className={styles.actionHint}>
                      <span>Check Service</span>
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Offerings Link */}
        <ScrollReveal delay={150} animation="fade-up">
          <div className={styles.viewAllCta}>
            <Link href="/services" className="btn btn-terracotta">
              <span>Explore Full Services Menu &amp; Pricing</span>
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
