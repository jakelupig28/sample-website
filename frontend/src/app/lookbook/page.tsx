"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Sparkles, ArrowUpRight, X, Calendar, Check, Clock, Phone } from "lucide-react";
import styles from "../../components/LookbookSection.module.css";
import ScrollReveal from "../../components/ScrollReveal";
import { LOOKBOOK_GALLERY, LookbookItem, SALON_INFO } from "../../data/salonData";

export default function LookbookPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedLook, setSelectedLook] = useState<LookbookItem | null>(null);

  const filters = [
    { id: "all", label: "All Looks" },
    { id: "balayage", label: "Dimensional Balayage" },
    { id: "cut", label: "Precision Cuts & Styling" },
    { id: "treatment", label: "Head Spa Transformations" },
    { id: "editorial", label: "Editorial & Bridal" },
  ];

  const filteredLooks =
    activeFilter === "all"
      ? LOOKBOOK_GALLERY
      : LOOKBOOK_GALLERY.filter((item) => item.category === activeFilter);

  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero animate-fade-in-up">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb-current">Lookbook</span>
          </div>
          <h1 className="page-hero-title">Client Transformations & Editorial Looks</h1>
          <p className="page-hero-subtitle">
            Unfiltered results captured in natural daylight. Explore our signature French balayage, precision bobs,
            and head spa revitalizations.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <ScrollReveal animation="fade-up" duration={800}>
        <section className="section-padding">
          <div className="container">
            {/* Filter Bar */}
            <div className={styles.galleryFilter}>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.filterBtnActive : ""}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className={styles.galleryGrid}>
              {filteredLooks.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.galleryCard} animate-fade-in-scale`}
                  onClick={() => setSelectedLook(item)}
                  title="Click to view look details and formula"
                >
                  <div className={styles.galleryImageWrapper}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.galleryImage}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <div className={styles.galleryBody}>
                    <span className={styles.galleryTag}>{item.technique}</span>
                    <h3 className={styles.galleryTitle}>{item.title}</h3>
                    <p className={styles.galleryTechnique}>{item.description}</p>
                    <div className={styles.galleryMeta}>
                      <span className={styles.galleryStylist}>Atelier Portfolio</span>
                      <span className={styles.galleryAction}>
                        <span>Check Service</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Interactive Look Detail Modal (Fully Responsive on Tablet & Mobile) */}
      {selectedLook && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedLook(null)}
        >
          <div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalImageCol}>
              <img
                src={selectedLook.image}
                alt={selectedLook.title}
                className={styles.modalImage}
              />
            </div>

            <div className={styles.modalContentCol}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.35rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#000000",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      display: "block",
                    }}
                  >
                    {selectedLook.technique}
                  </span>
                  <button
                    onClick={() => setSelectedLook(null)}
                    style={{
                      background: "var(--color-bg-secondary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "50%",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "#181615",
                    }}
                    aria-label="Close modal"
                  >
                    <X size={16} />
                  </button>
                </div>

                <h2 style={{ fontSize: "1.75rem", fontFamily: "var(--font-serif)", color: "#181615", margin: "0.2rem 0 0.5rem 0", lineHeight: 1.2 }}>
                  {selectedLook.title}
                </h2>

                <p style={{ fontSize: "0.875rem", color: "#544f47", lineHeight: "1.6", marginBottom: "1rem" }}>
                  {selectedLook.description}
                </p>

                <div
                  style={{
                    background: "var(--color-bg-secondary)",
                    padding: "1rem",
                    borderRadius: "12px",
                    marginBottom: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    fontSize: "0.825rem",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div>
                    <strong style={{ color: "#181615" }}>Maintenance:</strong> Glaze refresh recommended every 8–10 weeks
                  </div>
                  <div>
                    <strong style={{ color: "#181615" }}>Suitability:</strong> Fine to medium density hair looking for natural movement
                  </div>
                  <div>
                    <strong style={{ color: "#181615" }}>Philosophy:</strong> Hand-painted dimension with zero harsh lines
                  </div>
                </div>
              </div>

              <div className={styles.modalButtonRow}>
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="btn btn-terracotta btn-sm"
                  style={{ flex: 1, justifyContent: "center", display: "inline-flex", alignItems: "center", gap: "0.45rem" }}
                >
                  <Phone size={14} strokeWidth={1.5} />
                  <span>Call Atelier ({SALON_INFO.phone})</span>
                </a>
                <Link
                  href="/contact"
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <span>Inquire About This Look</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <ScrollReveal animation="fade-up" duration={720}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
