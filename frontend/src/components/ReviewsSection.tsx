import React from "react";
import { Star, Sparkles, Quote } from "lucide-react";
import styles from "./ReviewsSection.module.css";
import { TESTIMONIALS_DATA } from "../data/salonData";
import ScrollReveal from "./ScrollReveal";

export default function ReviewsSection() {
  return (
    <section id="reviews" className={`section-padding ${styles.reviewsSection}`}>
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <h2 className="section-title">Client Reflections &amp; Reviews</h2>
            <p className="section-subtitle">
              Unprompted reflections from our community of discerning clientele who trust ÉLAN with their hair identity.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.reviewsGrid}>
          {TESTIMONIALS_DATA.map((t, index) => (
            <ScrollReveal key={t.id} delay={index * 100} animation="fade-up">
              <div className={styles.reviewCard}>
                <div className={styles.ratingRow}>
                  <div className={styles.starsGroup}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#b38b4d" />
                    ))}
                  </div>
                  <span className={styles.reviewDate}>{t.date}</span>
                </div>

                <p className={styles.reviewComment}>&ldquo;{t.comment}&rdquo;</p>

                <div className={styles.reviewerMeta}>
                  <img src={t.avatar} alt={t.author} className={styles.reviewerAvatar} />
                  <div>
                    <h4 className={styles.reviewerName}>{t.author}</h4>
                    <span className={styles.reviewerService}>
                      {t.service} • with {t.stylist}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
