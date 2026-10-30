"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FaqAccordion, { FaqItem } from "../../components/FaqAccordion";
import { Clock, Check, Sparkles, Search, ShieldCheck, Heart, Coffee, Award, ArrowRight } from "lucide-react";
import styles from "../../components/ServicesSection.module.css";
import { SERVICES_DATA, ServiceItem } from "../../data/salonData";
import { useBooking } from "../../context/BookingContext";
import AtelierSignaturesSpread from "../../components/AtelierSignaturesSpread";

export default function ServicesPage() {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Offerings" },
    { id: "cut", label: "Couture Cut & Style" },
    { id: "color", label: "Bespoke Balayage & Color" },
    { id: "scalp", label: "Scalp Sanctuary & Head Spa" },
    { id: "bridal", label: "Bridal & Editorial" },
    { id: "nails", label: "Nails & Esthetics" },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((s) => {
      const matchesCategory = activeCategory === "all" || s.category === activeCategory;
      const matchesSearch =
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const servicesFaqs: FaqItem[] = [
    {
      question: "What should I expect during my first color or balayage consultation?",
      answer:
        "Every initial appointment begins with a 15-minute diagnostic session under daylight-spectrum lighting. We evaluate your hair porosity, current pigment depth, cranial bone structure, and maintenance lifestyle before custom-blending zero-ammonia organic pigments tailored specifically to your skin undertones.",
    },
    {
      question: "How does the Japanese Trichology Head Spa differ from a standard salon wash?",
      answer:
        "Unlike a quick shampoo, our Head Spa is a clinical sensory ritual. It incorporates high-magnification scalp micro-camera analysis, warm herbal waterfall hydrotherapy, exfoliating sea kelp masks, and targeted shiatsu acupressure along the cranial meridians to eliminate oxidative sebum and stimulate follicle micro-circulation.",
    },
    {
      question: "What is your 7-day touch-up and adjustment guarantee?",
      answer:
        "We are devoted to perfection. If within 7 days of your appointment your toner tone requires a slight shift or your fringe needs minor weight adjustments, we invite you back for a complimentary refinement with our compliments.",
    },
    {
      question: "Can I book multiple services together (e.g., Balayage + Head Spa)?",
      answer:
        "Yes, our atelier experience is frequently curated as multi-ritual retreats. When booking online, note your desired combination or reach out to our concierge to reserve our private VIP sanctuary suite.",
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Page Hero Header */}
      <section className="page-hero animate-fade-in-up">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb-current">Services Menu</span>
          </div>
          <h1 className="page-hero-title">Bespoke Services & Trichology Rituals</h1>
          <p className="page-hero-subtitle">
            Every ritual is a marriage of French aesthetic finesse and clean botanical science, tailored without compromise
            to your natural beauty.
          </p>
        </div>
      </section>

      {/* The Three House Signatures Feature */}
      <AtelierSignaturesSpread />

      {/* Search & Category Filter Section */}
      <section className="section-padding" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          {/* Search Bar */}
          <div
            style={{
              maxWidth: "520px",
              margin: "0 auto 2.5rem auto",
              position: "relative",
            }}
          >
            <Search
              size={18}
              style={{
                position: "absolute",
                left: "1.25rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--color-text-light)",
              }}
            />
            <input
              type="text"
              placeholder="Search services (e.g., Balayage, Head Spa, Cut)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.85rem 1.25rem 0.85rem 3rem",
                borderRadius: "12px",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-secondary)",
                fontSize: "0.95rem",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
          </div>

          {/* Category Filter Tabs */}
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

          <div
            style={{
              textAlign: "center",
              marginBottom: "2.5rem",
              fontSize: "0.85rem",
              color: "var(--color-text-light)",
            }}
          >
            Showing {filteredServices.length} {filteredServices.length === 1 ? "service" : "services"}
          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`${styles.serviceCard} animate-fade-in-scale`}
                onClick={() => openBooking(service)}
                style={{ cursor: "pointer" }}
                title="Click to check service details and formulation"
              >
                <div className={styles.cardImageWrapper}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className={styles.cardImage}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {service.isPopular && (
                    <div className={styles.popularBadge}>
                      <Sparkles size={12} />
                      <span>Signature Service</span>
                    </div>
                  )}
                  <span className={styles.categoryTag}>{service.categoryLabel}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardHeaderRow}>
                    <h3 className={styles.cardTitle}>{service.name}</h3>
                    <div className={styles.priceBadge}>{service.price}</div>
                  </div>

                  <div className={styles.cardMetaRow}>
                    <span className={styles.cardMetaItem}>Duration: {service.duration}</span>
                    <span className={styles.cardMetaItem}>Single-Chair Session</span>
                  </div>

                  <p className={styles.cardDescription}>{service.description}</p>

                  <ul className={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <Check size={14} className={styles.featureIcon} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.cardFooter} style={{ justifyContent: "flex-end" }}>
                    <span
                      className="btn btn-secondary btn-sm"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
                    >
                      <span>Check Service</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Banner */}
          <div className={styles.guaranteeBanner}>
            <div>
              <h3 className={styles.guaranteeTitle}>The ÉLAN Distinction & Commitment</h3>
              <p className={styles.guaranteeText}>
                We never double-book our stylists. Your time is sacred. From complimentary custom-tailored espresso to
                our post-service 7-day adjustment guarantee, excellence is our baseline.
              </p>
            </div>

            <div className={styles.guaranteePerks}>
              <div className={styles.perkItem}>
                <div className={styles.perkIconBox}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className={styles.perkTitle}>7-Day Guarantee</div>
                  <div className={styles.perkDesc}>Complimentary tonal tweak or adjustment within 7 days.</div>
                </div>
              </div>

              <div className={styles.perkItem}>
                <div className={styles.perkIconBox}>
                  <Heart size={20} />
                </div>
                <div>
                  <div className={styles.perkTitle}>Ammonia & Toxin-Free</div>
                  <div className={styles.perkDesc}>Pure botanical extracts that honor hair fiber integrity.</div>
                </div>
              </div>

              <div className={styles.perkItem}>
                <div className={styles.perkIconBox}>
                  <Coffee size={20} />
                </div>
                <div>
                  <div className={styles.perkTitle}>Artisanal Refreshments</div>
                  <div className={styles.perkDesc}>French press espresso, matcha, organic herbal infusions & bubbly.</div>
                </div>
              </div>

              <div className={styles.perkItem}>
                <div className={styles.perkIconBox}>
                  <Award size={20} />
                </div>
                <div>
                  <div className={styles.perkTitle}>Master Stylists Only</div>
                  <div className={styles.perkDesc}>Trained across London, Paris, Tokyo, and New York.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQ Section */}
      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about our atelier appointments, consultation process, and care philosophy.
            </p>
          </div>

          <FaqAccordion items={servicesFaqs} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
