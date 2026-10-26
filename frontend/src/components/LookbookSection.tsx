"use client";

import React, { useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import styles from "./LookbookSection.module.css";
import { LOOKBOOK_GALLERY } from "../data/salonData";

interface LookbookSectionProps {
  onOpenBooking: () => void;
}

export default function LookbookSection({ onOpenBooking }: LookbookSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

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
    <section id="lookbook" className={`section-padding ${styles.lookbookSection}`}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">The Client Transformation Lookbook</h2>
          <p className="section-subtitle">
            Unfiltered hair portraits sculpted and formulated by our master artisans under natural daylight studio lighting.
          </p>
        </div>

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
            <div key={item.id} className={styles.galleryCard} onClick={onOpenBooking} title="Click to book this look">
              <img src={item.image} alt={item.title} className={styles.galleryImage} />
              <div className={styles.galleryOverlay}>
                <span className={styles.galleryTag}>{item.technique}</span>
                <h3 className={styles.galleryTitle}>{item.title}</h3>
                <p className={styles.galleryTechnique}>{item.description}</p>
                <div className={styles.galleryMeta}>
                  <span className={styles.galleryStylist}>Created by {item.stylist}</span>
                  <span className={styles.galleryAction}>
                    <span>Reserve Look</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
