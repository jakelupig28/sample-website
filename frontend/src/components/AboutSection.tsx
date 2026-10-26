"use client";

import React from "react";
import styles from "./AboutSection.module.css";
import { TEAM_MEMBERS } from "../data/salonData";

export default function AboutSection() {
  return (
    <section id="about" className={`section-padding ${styles.aboutSection}`}>
      <div className="container">
        {/* Story Section */}
        <div className={styles.storyGrid}>
          {/* Visuals on Left */}
          <div className={styles.storyVisuals}>
            <div className={styles.storyMainImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80"
                alt="Modern luxury hair salon atelier interior at ÉLAN"
                className={styles.storyMainImage}
              />
            </div>
            <div className={styles.storyCaption}>
              <span>The Atelier Interior • 442 Hudson Street, Greenwich Village</span>
            </div>
          </div>

          {/* Story Content on Right */}
          <div className={styles.storyContent}>
            <div className={styles.storyQuote}>
              &ldquo;Hair is not an accessory—it is living architecture that moves with your posture, reflects your vitality,
              and frames your identity.&rdquo;
              <span className={styles.storyQuoteAuthor}>Creative Director & Founder</span>
            </div>

            <h2 className="section-title">The Philosophy of Clean Luxury & Hair Longevity</h2>

            <p className={styles.storyParagraph}>
              Founded in Greenwich Village, ÉLAN was created to dismantle the rushed, chemical-heavy salon environment.
              We replace noise and conveyor-belt appointments with an intimate sanctuary where couture craftsmanship and
              trichological scalp health coexist in quiet harmony.
            </p>

            <div className={styles.disciplineList}>
              <div className={styles.disciplineItem}>
                <h3 className={styles.disciplineTitle}>Cranial Architecture</h3>
                <p className={styles.disciplineDesc}>
                  Every cut is sculpted wet and dry to follow natural cowlicks and movement, ensuring effortless wash-and-wear longevity.
                </p>
              </div>

              <div className={styles.disciplineItem}>
                <h3 className={styles.disciplineTitle}>Zero-Ammonia Color Alchemy</h3>
                <p className={styles.disciplineDesc}>
                  MEA-reduced, organic botanical color infusions enriched with pure amino acids for luminous, multidimensional shine without irritation.
                </p>
              </div>

              <div className={styles.disciplineItem}>
                <h3 className={styles.disciplineTitle}>Holistic Trichology</h3>
                <p className={styles.disciplineDesc}>
                  Healthy hair begins at the follicular microbiome. Our Japanese head spa rituals detoxify and rebalance the scalp.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Master Stylists Team Showcase */}
        <div className={styles.teamHeader}>
          <h2 className="section-title">The Master Artisans</h2>
          <p className="section-subtitle">
            Internationally trained artists dedicated to individual consultation and technical mastery.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member) => (
            <article key={member.id} className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <img src={member.image} alt={member.name} className={styles.teamImage} />
              </div>
              <div className={styles.teamBody}>
                <h3 className={styles.teamName}>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
                <span className={styles.teamSpecialty}>{member.specialty}</span>
                <p className={styles.teamBio}>{member.bio}</p>
                <div className={styles.teamAccolade}>
                  <span>{member.accolades}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
