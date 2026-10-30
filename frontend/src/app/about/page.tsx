"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Sparkles, Award, Compass, Leaf, ShieldCheck, ArrowUpRight, X, Phone, Check } from "lucide-react";
import styles from "../../components/AboutSection.module.css";
import { TEAM_MEMBERS, SALON_INFO, TeamMember } from "../../data/salonData";

interface AtelierSpace {
  title: string;
  category: string;
  desc: string;
  extendedDesc: string;
  amenities: string[];
  image: string;
  locationInAtelier: string;
  sessionCapacity: string;
  specifications: { label: string; value: string }[];
  sensoryPairing: string;
}

export default function AboutPage() {
  const [selectedSpace, setSelectedSpace] = useState<AtelierSpace | null>(null);
  const [selectedArtisan, setSelectedArtisan] = useState<TeamMember | null>(null);

  const spaces: AtelierSpace[] = [
    {
      title: "The Main Atelier Styling Gallery",
      category: "Architectural Cut & Daylight Studio",
      desc: "Bathed in true North-facing daylight with bespoke brass-framed mirrors, creating the purest color reflection for precision dry cutting.",
      extendedDesc: "Designed with soaring 14-foot ceilings and expansive floor-to-ceiling casement windows overlooking Greenwich Village greenery. Every styling chair is custom-crafted in Italian saddle leather, spaced 12 feet apart to guarantee complete acoustic and visual privacy during your appointment.",
      locationInAtelier: "Greenwich Village Atelier • 2nd Floor Gallery",
      sessionCapacity: "Single-Client Private Chair Reservation",
      specifications: [
        { label: "Ceiling Height", value: "14ft Soaring" },
        { label: "Station Spacing", value: "12ft Private Radius" },
        { label: "Lighting", value: "5000K Pure Daylight" },
        { label: "Air Filtration", value: "HEPA 14 Pure Flow" },
      ],
      sensoryPairing: "Single-origin pour-over Ethiopian coffee & cold-pressed bergamot aromatherapy",
      amenities: [
        "True North Daylight Calibration",
        "Acoustically Dampened Flooring",
        "Single-Client Consultation Station",
        "Custom Italian Saddle-Leather Chairs",
        "Curated Organic Tea & Espresso Bar",
        "UV Filtered Double-Glazed Windows",
      ],
      image: "https://images.unsplash.com/photo-1629853381656-7878d655f466?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "The Japanese Trichology Sanctuary",
      category: "Scalp Wellness & Hydrotherapy Chamber",
      desc: "A darkened, sound-dampened chamber featuring ergonomic hydro-therapy wash basins and mist warmers designed for total sensory decompression.",
      extendedDesc: "An intimate, quiet sanctuary where ambient light is softened to mimic dusk. Features Japanese Yume ergonomic recliners with integrated neck cushions, high-pressure micro-bubble scalp showerheads, and warm herbal scalp waterfalls.",
      locationInAtelier: "Quiet Sanctuary Level • Suite B",
      sessionCapacity: "Private Sensory Stillness (Single Guest)",
      specifications: [
        { label: "Light Calibration", value: "10% Circadian Dusk" },
        { label: "Wash Architecture", value: "Yume Full-Flat Recliners" },
        { label: "Water Technology", value: "Nano Micro-Bubble Mist" },
        { label: "Acoustic Shield", value: "STC-58 Sound Dampening" },
      ],
      sensoryPairing: "Ceremonial Uji matcha whisked tableside with warm cedarwood & hinoki cypress mist",
      amenities: [
        "Yume Full-Flat Ergonomic Recliners",
        "Ultrasonic Herbal Mist Steamers",
        "200x Follicular Diagnostic Micro-Camera",
        "Custom Hinoki Wood Aromatherapy",
        "Cervical Spine Acupressure Support",
        "Warm Organic Botanical Compresses",
      ],
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "The Botanical Color Apothecary",
      category: "Organic Pigment & Chemistry Lab",
      desc: "Where organic Italian and Japanese micro-pigments are custom blended with cold-pressed marula and jojoba oils for luminous results.",
      extendedDesc: "A dedicated glass-enclosed lab where your colorist formulates your bespoke shade in plain view. We house over 180 ammonia-free organic pigments and plant-derived glazing elixirs that preserve hair elasticity and cuticle integrity.",
      locationInAtelier: "Formulation Center • Glass Cleanroom",
      sessionCapacity: "Master Colorist Clean Lab",
      specifications: [
        { label: "Pigment Range", value: "180+ Ammonia-Free" },
        { label: "Scale Precision", value: "0.01g Micro-Gram" },
        { label: "Glaze Chemistry", value: "Patented Bio-Peptides" },
        { label: "Exhaust System", value: "Negative Pressure Clean" },
      ],
      sensoryPairing: "Organic white peony blossom infusion & French lavender mist",
      amenities: [
        "Ammonia-Free Pigment Library",
        "Cold-Pressed Botanical Oil Infusions",
        "Bio-Active Peptide Glazes",
        "Precision Micro-Gram Digital Scales",
        "Cuticle Bond-Building Chemistry Lab",
        "Cruelty-Free & Vegan Certified Pigments",
      ],
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "The Private Bridal & VIP Suite",
      category: "Exclusive Single-Guest Pavilion",
      desc: "An exclusive private salon suite reserved for high-profile clients, full-day transformations, and bespoke bridal party consultations.",
      extendedDesc: "A secluded sanctum offering complete discretion. Features its own private dressing lounge, dedicated hydrotherapy wash basin, vanity staging mirror, and sommelier champagne service.",
      locationInAtelier: "Top-Floor Private Pavilion",
      sessionCapacity: "VIP Guest + Private Entourage",
      specifications: [
        { label: "Privacy Rating", value: "100% Keycard Secluded" },
        { label: "Dedicated Wash", value: "In-Suite Ceramic Basin" },
        { label: "Runway Mirror", value: "360° Multi-Angle Dressing" },
        { label: "Audio Ambiance", value: "Independent Acoustic Zone" },
      ],
      sensoryPairing: "Vintage French Champagne & chilled white peach bellinis with fresh jasmine petals",
      amenities: [
        "Private Keycard Dedicated Entrance",
        "Dedicated Wash Basin & Styling Chair",
        "Private Fitting & Veiling Area",
        "Sommelier Champagne Service",
        "Custom Accessory & Veil Staging",
        "Complimentary Gourmet Canapés",
      ],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "The Daylight Color Balayage Studio",
      category: "Sunlight Reflection & French Glaze Studio",
      desc: "Calibrated with 5000K pure daylight glass panels allowing colorists to inspect micro-foil transitions and gloss reflections under natural spectrum.",
      extendedDesc: "Balayage requires impeccable natural light to ensure shades do not oxidize or appear different indoors versus outdoors. Our Balayage Studio features double-glazed natural skylights that eliminate artificial color bias.",
      locationInAtelier: "South-Facing Skylight Atrium",
      sessionCapacity: "Bespoke Balayage Station",
      specifications: [
        { label: "Color Spectrum", value: "5000K CRI 98 Natural" },
        { label: "Glare Elimination", value: "Zero-Distortion Optical" },
        { label: "Natural Light", value: "Dual Overhead Skylights" },
        { label: "Surface Type", value: "Tempered Glass Clay Boards" },
      ],
      sensoryPairing: "Sparkling elderflower tonic & citrus blossom room bouquet",
      amenities: [
        "5000K Color-Neutral Daylight Glass",
        "Zero-Glare Anti-Reflective Mirrors",
        "Multi-Angle Lighting Verification",
        "Dedicated Clay Board Formulation",
        "Ergonomic Armrest Support",
        "Post-Balayage Glaze Tonal Verification",
      ],
      image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "The Aromatherapy & Scalp Diagnostic Lounge",
      category: "Trichology Intake & Client Consultation",
      desc: "Equipped with 200x digital trichological scalp microscopes, custom organic tea infusions, and heated botanical towel bars for complete client intake.",
      extendedDesc: "Before any scissors or color touch your hair, every appointment begins in our diagnostic lounge. Colorists and trichologists map hair density, scalp pH, and keratin strength to create a tailored 12-month care roadmap.",
      locationInAtelier: "Intake & Consultation Pavilion",
      sessionCapacity: "1-on-1 Consultation Sanctuary",
      specifications: [
        { label: "Microscope Lens", value: "200x Optical Trichoscope" },
        { label: "Follicle Census", value: "Digital Density Mapping" },
        { label: "Towel Warmers", value: "140°F Herbal Steam Vault" },
        { label: "Roadmap Plan", value: "12-Month Scalp Architecture" },
      ],
      sensoryPairing: "Freshly brewed organic ginger-lemongrass tisane with eucalyptus compresses",
      amenities: [
        "Digital Trichoscope Pore Analysis",
        "Apothecary Essential Oil Bar",
        "Heated Herbal Towel Cabinets",
        "Bespoke Scalp Health Roadmap",
        "Sebum & Keratin Follicle Census",
        "Custom Herbal Scalp Scrub Bar",
      ],
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80",
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
            <span className="breadcrumb-current">About Us</span>
          </div>
          <h1 className="page-hero-title">The Art of Mindful Coiffure & Trichology</h1>
          <p className="page-hero-subtitle">
            Founded in Greenwich Village to dismantle rushed salon norms, ÉLAN unites editorial runway expertise
            with pure organic botanicals.
          </p>
        </div>
      </section>

      {/* In-depth Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyVisuals}>
              <div className={styles.storyMainImageWrapper} style={{ borderRadius: "16px", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1607006411601-775c8cc632dc?auto=format&fit=crop&w=1000&q=80"
                  alt="ÉLAN Salon Interior"
                  className={styles.storyMainImage}
                />
              </div>

              <div className={styles.storyDetailCard} style={{ borderRadius: "14px", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1608248597359-009187cbcfca?auto=format&fit=crop&w=600&q=80"
                  alt="Organic Elixirs"
                  className={styles.storyDetailImage}
                />
              </div>

              <div className={styles.storyQuoteCard} style={{ borderRadius: "14px" }}>
                <p className={styles.storyQuoteText}>
                  &ldquo;We don't merely change hair; we craft an enduring identity that elevates how you carry yourself in the world.&rdquo;
                </p>
                <span className={styles.storyQuoteAuthor}>— Creative Director & Founder</span>
              </div>
            </div>

            <div className={styles.storyContent}>
              <h2 className="section-title">An Antidote to the Fast-Beauty Era</h2>
              <p className={styles.storyParagraph}>
                Traditional salons are notoriously overbooked, noisy, and reliant on harsh synthetic chemicals that degrade
                hair integrity over time. In 2021, ÉLAN was founded to craft the exact opposite: an intimate,
                unhurried retreat where every client receives dedicated, one-on-one attention.
              </p>
              <p className={styles.storyParagraph}>
                Our colorists do not pull foils and run away to another client. We formulate custom color recipes inspired
                by fine art glazing, incorporating patented bio-active peptides that rebuild damaged keratin bonds during the coloring process.
              </p>

              <div className={styles.pillarList}>
                <div className={styles.pillarItem}>
                  <div className={styles.pillarNumber}>I</div>
                  <div>
                    <h4 className={styles.pillarTitle}>Cranial Architecture</h4>
                    <p className={styles.pillarDesc}>
                      Every haircut is tailored in dry motion to work seamlessly with natural hair growth directions, skull contours, and daily styling capability.
                    </p>
                  </div>
                </div>

                <div className={styles.pillarItem}>
                  <div className={styles.pillarNumber}>II</div>
                  <div>
                    <h4 className={styles.pillarTitle}>Zero-Ammonia Longevity</h4>
                    <p className={styles.pillarDesc}>
                      We prioritize MEA-reduced, organic botanical formulas that impart luminous multi-tonal shine without irritation, fading, or brassiness.
                    </p>
                  </div>
                </div>

                <div className={styles.pillarItem}>
                  <div className={styles.pillarNumber}>III</div>
                  <div>
                    <h4 className={styles.pillarTitle}>Follicular Wellness</h4>
                    <p className={styles.pillarDesc}>
                      Radiant hair cannot grow from an inflamed scalp. Our Japanese Head Spa therapies de-stress the mind while purifying the micro-biome.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Spaces Tour (Expanded to 6 Spaces with Interactive Container Modals) */}
      <section className="section-padding" style={{ background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">A Tour of The Atelier Sanctuary</h2>
            <p className="section-subtitle">
              Designed with warm limestone, brushed brass, natural linen, and acoustic soundproofing to provide a calm haven away from Manhattan streets. Click any space to explore details.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {spaces.map((sp, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                  transition: "all var(--transition-smooth)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() => setSelectedSpace(sp)}
                title="Click to view space architectural profile and amenities"
              >
                <div style={{ width: "100%", aspectRatio: "16/11", overflow: "hidden", position: "relative" }}>
                  <img
                    src={sp.image}
                    alt={sp.title}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0.85rem",
                      left: "0.85rem",
                      background: "rgba(24, 22, 21, 0.8)",
                      backdropFilter: "blur(6px)",
                      color: "#ffffff",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "8px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {sp.category}
                  </div>
                </div>
                <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--color-text-main)", marginBottom: "0.5rem", fontFamily: "var(--font-serif)" }}>
                    {sp.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: "1.6", fontWeight: 300, marginBottom: "1.25rem", flex: 1 }}>
                    {sp.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f0ebe2", paddingTop: "0.85rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-accent-terracotta)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <span>Check Space</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Stylists Team Showcase */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.teamHeader}>
            <h2 className="section-title">The Master Stylists</h2>
            <p className="section-subtitle">
              Internationally trained artists dedicated to individual consultation and unmatched technical precision. Click to view background and credentials.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className={styles.teamCard}
                style={{ cursor: "pointer", borderRadius: "16px", overflow: "hidden" }}
                onClick={() => setSelectedArtisan(member)}
                title="Click to read full stylist biography and credentials"
              >
                <div className={styles.teamImageWrapper}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.teamImage}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className={styles.teamExpBadge}>{member.experience}</span>
                </div>
                <div className={styles.teamBody}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <span className={styles.teamSpecialty}>{member.specialty}</span>
                  <p className={styles.teamBio}>{member.bio}</p>
                  <div className={styles.teamAccolade}>
                    <Award size={15} color="var(--color-accent-gold, #9e7938)" />
                    <span>{member.accolades}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Atelier Heritage Action Banner */}
          <div
            style={{
              marginTop: "4.5rem",
              background: "var(--color-bg-dark)",
              borderRadius: "16px",
              padding: "3.5rem 2.5rem",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            <h3 style={{ fontSize: "2.35rem", marginBottom: "1rem", color: "var(--color-bg-primary)" }}>
              Experience The ÉLAN Standard
            </h3>
            <p style={{ maxWidth: "550px", margin: "0 auto 2rem auto", color: "#c9c3ba", fontSize: "1rem", fontWeight: 300 }}>
              Explore our full ritual collection or connect directly with our Greenwich Village concierge.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/services" className="btn btn-terracotta">
                <span>Explore Salon Offerings</span>
              </Link>
              <Link href="/contact" className="btn btn-secondary" style={{ color: "#ffffff", borderColor: "#444" }}>
                <span>Connect With Concierge</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Space Container Modal (Fully Responsive on Tablet & Mobile) */}
      {selectedSpace && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedSpace(null)}
        >
          <div
            className={styles.spaceModalCard}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side: High-Res Architecture Photography & Specs Ribbon */}
            <div className={styles.modalImageCol}>
              <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                <img
                  src={selectedSpace.image}
                  alt={selectedSpace.title}
                  className={styles.modalImage}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    left: "1.5rem",
                    background: "rgba(23, 21, 19, 0.88)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.4rem 0.9rem",
                    borderRadius: "8px",
                  }}
                >
                  {selectedSpace.category}
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    right: "1.5rem",
                    background: "rgba(255, 255, 255, 0.94)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "14px",
                    padding: "1.1rem 1.4rem",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <div style={{ fontSize: "0.725rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-accent-terracotta)", fontWeight: 700, marginBottom: "0.25rem" }}>
                    Location In Atelier
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text-main)", marginBottom: "0.35rem" }}>
                    {selectedSpace.locationInAtelier}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                    {selectedSpace.sessionCapacity}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Deep Architectural Specs & Information */}
            <div className={styles.modalContentCol}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.35rem" }}>
                  <span
                    style={{
                      fontSize: "0.775rem",
                      color: "var(--color-accent-gold, #9e7938)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                    }}
                  >
                    Atelier Architectural Specification
                  </span>
                  <button
                    onClick={() => setSelectedSpace(null)}
                    style={{
                      background: "var(--color-bg-secondary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "50%",
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "#181615",
                    }}
                    aria-label="Close space modal"
                  >
                    <X size={18} />
                  </button>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.1rem",
                    color: "#181615",
                    lineHeight: 1.18,
                    margin: "0.2rem 0 0.65rem 0",
                  }}
                >
                  {selectedSpace.title}
                </h2>

                <p style={{ fontSize: "0.925rem", color: "#544f47", lineHeight: "1.65", marginBottom: "1.25rem" }}>
                  {selectedSpace.extendedDesc}
                </p>

                {/* 4 Architectural Specifications Cards */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#000000", fontWeight: 700, marginBottom: "0.6rem" }}>
                    Engineering & Environmental Metrics:
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
                    {selectedSpace.specifications.map((spec, i) => (
                      <div key={i} style={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", borderRadius: "10px", padding: "0.65rem 0.9rem" }}>
                        <div style={{ fontSize: "0.7rem", color: "var(--color-text-light)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {spec.label}
                        </div>
                        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-text-main)", marginTop: "0.15rem" }}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6 Space Amenities */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <h4
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#000000",
                      fontWeight: 700,
                      marginBottom: "0.6rem",
                    }}
                  >
                    Dedicated Sanctuary Amenities:
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                    {selectedSpace.amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontSize: "0.8rem",
                          color: "#3a3632",
                        }}
                      >
                        <div
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            background: "rgba(158, 121, 56, 0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--color-accent-gold)",
                            flexShrink: 0,
                          }}
                        >
                          <Check size={10} strokeWidth={2.5} />
                        </div>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sensory Pairing Bar */}
                <div
                  style={{
                    background: "rgba(140, 109, 55, 0.08)",
                    border: "1px solid rgba(140, 109, 55, 0.2)",
                    borderRadius: "12px",
                    padding: "0.8rem 1rem",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.65rem",
                  }}
                >
                  <Sparkles size={15} color="var(--color-accent-gold)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <div>
                    <strong style={{ fontSize: "0.725rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-accent-gold-hover)", display: "block", marginBottom: "0.15rem" }}>
                      Curated Sensory & Botanical Pairing
                    </strong>
                    <span style={{ fontSize: "0.825rem", color: "#4a453f", lineHeight: "1.45" }}>
                      {selectedSpace.sensoryPairing}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.modalActionRow}>
                <Link
                  href="/services"
                  className="btn btn-terracotta btn-sm"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <span>Explore Services</span>
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <span>Inquire Concierge</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Artisan Profile Modal (Fully Responsive on Tablet & Mobile) */}
      {selectedArtisan && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedArtisan(null)}
        >
          <div
            className={styles.artisanModalCard}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalImageCol}>
              <img
                src={selectedArtisan.image}
                alt={selectedArtisan.name}
                className={styles.modalImage}
              />
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  left: "1.25rem",
                  background: "rgba(23, 21, 19, 0.85)",
                  backdropFilter: "blur(6px)",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.35rem 0.8rem",
                  borderRadius: "8px",
                }}
              >
                {selectedArtisan.experience}
              </div>
            </div>

            <div className={styles.modalContentCol}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.35rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-accent-gold, #9e7938)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Master Stylist Profile
                  </span>
                  <button
                    onClick={() => setSelectedArtisan(null)}
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
                    aria-label="Close stylist modal"
                  >
                    <X size={16} />
                  </button>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.75rem",
                    color: "#181615",
                    lineHeight: 1.2,
                    margin: "0.2rem 0 0.2rem 0",
                  }}
                >
                  {selectedArtisan.name}
                </h2>

                <span style={{ fontSize: "0.9rem", color: "var(--color-accent-gold)", fontWeight: 600, marginBottom: "0.6rem", display: "block" }}>
                  {selectedArtisan.role}
                </span>

                <p style={{ fontSize: "0.875rem", color: "#544f47", lineHeight: "1.6", marginBottom: "1rem" }}>
                  {selectedArtisan.bio}
                </p>

                <div
                  style={{
                    background: "var(--color-bg-secondary)",
                    padding: "1rem",
                    borderRadius: "12px",
                    marginBottom: "1rem",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.45rem",
                    fontSize: "0.825rem",
                  }}
                >
                  <div>
                    <strong style={{ color: "#181615" }}>Specialty:</strong> {selectedArtisan.specialty}
                  </div>
                  <div>
                    <strong style={{ color: "#181615" }}>Accolades:</strong> {selectedArtisan.accolades}
                  </div>
                  <div>
                    <strong style={{ color: "#181615" }}>Sanctuary:</strong> Greenwich Village Atelier
                  </div>
                </div>
              </div>

              <div className={styles.modalActionRow}>
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="btn btn-terracotta btn-sm"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <Phone size={14} />
                  <span>Call Atelier ({SALON_INFO.phone})</span>
                </a>
                <Link
                  href="/contact"
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <span>Connect With Concierge</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
