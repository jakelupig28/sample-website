"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Clock, ShieldCheck, Check, Layers, ChevronRight } from "lucide-react";
import styles from "./AtelierCraftOrbit.module.css";
import { useBooking } from "../context/BookingContext";
import { SERVICES_DATA, ServiceItem } from "../data/salonData";
import ScrollReveal from "./ScrollReveal";

interface ServiceMotionStep {
  id: string;
  stepNumber: string;
  category: "cut" | "color" | "scalp" | "bridal" | "nails";
  categoryLabel: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  metrics: { label: string; value: string }[];
  hotspots: { x: number; y: number; title: string; desc: string }[];
  features: string[];
}

const SERVICE_MOTION_STEPS: ServiceMotionStep[] = [
  {
    id: "couture-cut",
    stepNumber: "01",
    category: "cut",
    categoryLabel: "Couture Cut & Style",
    name: "Architectural Precision Cut & Velvet Blowout",
    tagline: "Custom sculpted silhouette tailored to cranial geometry and natural growth pattern",
    description:
      "Every cut begins with dry cranial geometry analysis. Master stylists carve weightlessness through the interior while anchoring sharp, intentional perimeters. Finished with cold-air memory locking for 72-hour humidity defense.",
    duration: "75 mins",
    price: "Starts at $145",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=85",
    metrics: [
      { label: "Ritual Duration", value: "75 Mins" },
      { label: "Cortex Hydration", value: "100% Preserved" },
      { label: "Frizz-Free Hold", value: "72-Hour Memory" },
    ],
    hotspots: [
      { x: 30, y: 32, title: "Dry Razoring Detailing", desc: "Interior weight reduction preserving perimeter density" },
      { x: 68, y: 48, title: "Silk-Touch Round Brush", desc: "Sealing mirror shine without excessive heat" },
      { x: 44, y: 75, title: "Cold-Air Memory Lock", desc: "Setting hydrogen bonds into effortless bounce" },
    ],
    features: [
      "Personalized Face-Shape Analysis",
      "Botanical Scalp Wash & Acupressure",
      "Precision Wet & Dry Detailing",
      "Signature Silk Finish",
    ],
  },
  {
    id: "french-balayage",
    stepNumber: "02",
    category: "color",
    categoryLabel: "Bespoke Color",
    name: "Couture French Balayage & Gloss Melting",
    tagline: "Sun-drenched, seamless multi-tonal dimensional lightening with invisible grow-out",
    description:
      "Hand-painted bespoke highlights customized for seamless root transitions and low-maintenance longevity. Finished with an organic amino acid toner and high-gloss moisture glaze that illuminates under daylight.",
    duration: "180 mins",
    price: "Starts at $320",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85",
    metrics: [
      { label: "Session Duration", value: "180 Mins" },
      { label: "Grow-Out Longevity", value: "4-6 Months" },
      { label: "Tone Radiance", value: "+95% Mirror Glaze" },
    ],
    hotspots: [
      { x: 38, y: 26, title: "Freehand Clay Painting", desc: "Feathered root diffusion with organic clay lightener" },
      { x: 66, y: 55, title: "Amino Acid Gloss Glaze", desc: "Neutralizing brass and restoring liquid shine" },
      { x: 26, y: 72, title: "Bond-Building K18 Infusion", desc: "Reconnecting broken polypeptide keratin chains" },
    ],
    features: [
      "Freehand Clay Painting Technique",
      "Custom Tone Harmonization",
      "Bond-Building K18 Infusion",
      "High-Shine Glaze Seal",
    ],
  },
  {
    id: "japanese-head-spa",
    stepNumber: "03",
    category: "scalp",
    categoryLabel: "Scalp Sanctuary",
    name: "Holistic Japanese Trichology Head Spa",
    tagline: "Deep follicular detoxification, circulation hydrotherapy & tension release",
    description:
      "Step inside our sound-dampened scalp chamber. Micro-mist steam, warm herbal waterfalls, and cranial meridian acupressure revive fatigued follicles while eliminating weeks of screen fatigue and urban pollutants.",
    duration: "90 mins",
    price: "Starts at $195",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    metrics: [
      { label: "Treatment Duration", value: "90 Mins" },
      { label: "Follicular Detox", value: "100% Clarified" },
      { label: "Scalp Circulation", value: "+38% Stimulated" },
    ],
    hotspots: [
      { x: 40, y: 30, title: "Micro-Mist Herbal Steam", desc: "Opening pores for deep follicular clarification" },
      { x: 68, y: 48, title: "Japanese Scalp Waterfall", desc: "Warm rhythmic herbal hydrotherapy tension release" },
      { x: 32, y: 70, title: "Cranial Acupressure Points", desc: "Stimulating micro-circulation and tension relief" },
    ],
    features: [
      "200x Trichological Camera Analysis",
      "Japanese Halo Waterfall & Herbal Steam",
      "Cranial Meridian Massage Therapy",
      "Cellular Follicle Moisture Seal",
    ],
  },
  {
    id: "k18-molecular",
    stepNumber: "04",
    category: "scalp",
    categoryLabel: "Hair Reconstruction",
    name: "Molecular K18 Biomimetic Peptide Infusion",
    tagline: "Patented bioactive peptide traveling into the inner cortex to reverse chemical damage",
    description:
      "A clinical breakthrough in hair biotechnology. Rather than patching cuticle surfaces with heavy oils, patented biomimetic peptides reconnect broken polypeptide keratin chains, permanently renewing tensile bounce and virgin hair elasticity.",
    duration: "45 mins",
    price: "Starts at $85",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    metrics: [
      { label: "Infusion Duration", value: "45 Mins" },
      { label: "Virgin Elasticity", value: "91% Restored" },
      { label: "Tensile Strength", value: "94% Rebuilt" },
    ],
    hotspots: [
      { x: 36, y: 28, title: "Bioactive Peptide Matrix", desc: "Restores broken keratin bonds at the molecular level" },
      { x: 64, y: 56, title: "Lipid Matrix Lock", desc: "Repairs the outer protective F-layer barrier" },
      { x: 46, y: 76, title: "Virgin Elasticity Revival", desc: "Restores natural bounce and tensile resistance" },
    ],
    features: [
      "Patented Bioactive Peptide Matrix",
      "Zero Surface Build-Up or Weigh-Down",
      "Restores 91% Original Elasticity",
      "Clinically Proven Lasting Reversal",
    ],
  },
];

export default function AtelierCraftOrbit() {
  const { openBooking } = useBooking();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const currentStep = SERVICE_MOTION_STEPS[activeIndex];

  // Helper to open booking modal with matching service
  const handleBookCurrentService = () => {
    const matchingService: ServiceItem = SERVICES_DATA.find((s) => s.id === currentStep.id) || {
      id: currentStep.id,
      name: currentStep.name,
      category: currentStep.category,
      categoryLabel: currentStep.categoryLabel,
      tagline: currentStep.tagline,
      duration: currentStep.duration,
      price: currentStep.price,
      image: currentStep.image,
      description: currentStep.description,
      features: currentStep.features,
      recommendedStylist: "Master Stylist",
    };
    openBooking(matchingService);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SERVICE_MOTION_STEPS.length);
    setActiveHotspot(null);
  };

  return (
    <section className={styles.motionSection} id="atelier-services-motion">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Atelier Signature Services In Motion
            </h2>
            <p className={styles.sectionSubtitle}>
              Explore how master stylists combine editorial precision, clean botanicals, and scientific scalp hydrotherapy through fluid, choreographed craft.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Split Stage */}
        <div className={styles.stageGrid}>
          {/* Left Column: Interactive Visual Showcase Stage */}
          <ScrollReveal animation="slide-right">
            <div className={styles.visualColumn}>
              <div className={styles.visualStageCard}>
              <img
                src={currentStep.image}
                alt={currentStep.name}
                className={styles.stageImage}
              />
              <div className={styles.stageOverlay} />

              {/* Live Category Tag & Phase Badge */}
              <div className={styles.floatingTopBar}>
                <span className={styles.categoryPill}>
                  {currentStep.categoryLabel}
                </span>
                <span className={styles.phaseIndicator}>
                  Phase {currentStep.stepNumber} of 04
                </span>
              </div>

              {/* Interactive Pulsing Hotspots on the Service Stage */}
              {currentStep.hotspots.map((spot, i) => (
                <div
                  key={i}
                  className={`${styles.hotspotWrapper} ${activeHotspot === i ? styles.hotspotActive : ""}`}
                  style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                  onMouseEnter={() => setActiveHotspot(i)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
                  title={spot.title}
                >
                  <span className={styles.hotspotPulseRing} />
                  <span className={styles.hotspotCenterDot} />
                  {/* Tooltip Card */}
                  <div className={styles.hotspotTooltip}>
                    <strong className={styles.tooltipTitle}>{spot.title}</strong>
                    <span className={styles.tooltipDesc}>{spot.desc}</span>
                  </div>
                </div>
              ))}

              {/* Bottom Scrubber & Progress Indicator */}
              <div className={styles.stageBottomBar}>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: `${((activeIndex + 1) / SERVICE_MOTION_STEPS.length) * 100}%`,
                    }}
                  />
                </div>
                <div className={styles.scrubberLabels}>
                  <span>PHASE {currentStep.stepNumber} OF 04 • {currentStep.categoryLabel.toUpperCase()}</span>
                  <span>{currentStep.duration}</span>
                </div>
              </div>
            </div>

            {/* Bottom Phase Selector Tabs */}
            <div className={styles.phaseTabsContainer} role="tablist">
              {SERVICE_MOTION_STEPS.map((step, idx) => (
                <button
                  key={step.id}
                  role="tab"
                  aria-selected={activeIndex === idx}
                  className={`${styles.phaseTabBtn} ${activeIndex === idx ? styles.phaseTabBtnActive : ""}`}
                  onClick={() => {
                    setActiveIndex(idx);
                    setActiveHotspot(null);
                  }}
                >
                  <span className={styles.tabNum}>{step.stepNumber}</span>
                  <span className={styles.tabName}>{step.categoryLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Kinetic Narrative, Specs & Action Panel */}
        <ScrollReveal animation="slide-left" delay={120}>
          <div className={styles.narrativeColumn}>
            <div className={styles.narrativeCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardEyebrow}>
                  <span className={styles.accentDot} />
                  <span className={styles.accentLabel}>{currentStep.categoryLabel}</span>
                  <span className={styles.accentDivider}>•</span>
                  <span className={styles.accentPrice}>{currentStep.price}</span>
                </div>
                <span className={styles.phaseCounterBadge}>
                  Phase {currentStep.stepNumber} of 04
                </span>
              </div>

              <h3 className={styles.serviceTitle}>{currentStep.name}</h3>
              <p className={styles.serviceTagline}>{currentStep.tagline}</p>
              <p className={styles.serviceDescription}>{currentStep.description}</p>

              {/* 3 Kinetic Metric Cards */}
              <div className={styles.metricsGrid}>
                {currentStep.metrics.map((m, i) => (
                  <div key={i} className={styles.metricCard}>
                    <div className={styles.metricValue}>{m.value}</div>
                    <div className={styles.metricLabel}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Key Features Checklist */}
              <div className={styles.featuresList}>
                {currentStep.features.map((feat, i) => (
                  <div key={i} className={styles.featureItem}>
                    <div className={styles.checkIcon}>
                      <Check size={11} strokeWidth={2.2} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Actions Row */}
              <div className={styles.actionRow}>
                <button
                  onClick={handleBookCurrentService}
                  className="btn btn-terracotta"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <span>Reserve This Ritual</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>

                <button
                  onClick={handleNext}
                  className="btn btn-secondary"
                  style={{ justifyContent: "center" }}
                  title="Next signature service in motion"
                >
                  <span>Next Service</span>
                  <ChevronRight size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Trust Subtext */}
              <div className={styles.trustFooter}>
                <ShieldCheck size={15} strokeWidth={1.5} color="var(--color-accent-terracotta)" />
                <span>Single-chair private care • Certified Paris &amp; Tokyo Master Artisans</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      </div>
    </section>
  );
}
