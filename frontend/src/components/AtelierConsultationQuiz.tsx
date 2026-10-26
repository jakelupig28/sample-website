"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, Check, RefreshCw, Calendar } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { SERVICES_DATA } from "../data/salonData";

export default function AtelierConsultationQuiz() {
  const { openBooking } = useBooking();
  const [selectedTexture, setSelectedTexture] = useState<string>("fine");
  const [selectedGoal, setSelectedGoal] = useState<string>("balayage");

  const textures = [
    { id: "fine", label: "Fine & Delicate", desc: "Seeks weightless body, root lift, and anti-limpness" },
    { id: "medium", label: "Medium & Wavy", desc: "Prone to humidity frizz, wants natural air-dry shape" },
    { id: "coarse", label: "Thick & Textured", desc: "Requires internal weight distribution & moisture retention" },
    { id: "bleached", label: "Color Treated / Fragile", desc: "Needs keratin bond repair and cellular peptide replenishment" },
  ];

  const goals = [
    { id: "balayage", label: "Dimensional Lived-In Balayage", serviceId: "french-balayage" },
    { id: "headspa", label: "Scalp Detox & Head Spa Reset", serviceId: "japanese-head-spa" },
    { id: "cut", label: "Architectural Precision Haircut", serviceId: "sculpture-cut" },
    { id: "gloss", label: "Liquid Glass Espresso Brunette", serviceId: "rich-brunette-gloss" },
  ];

  // Map chosen goal to corresponding service
  const matchedService =
    SERVICES_DATA.find((s) => s.id === (goals.find((g) => g.id === selectedGoal)?.serviceId || "french-balayage")) ||
    SERVICES_DATA[0];

  const getPrescription = () => {
    switch (selectedGoal) {
      case "balayage":
        return {
          formula: "Zero-Ammonia Freehand Clay Lift + K18 Molecular Peptide + Vanilla Glaze Seal",
          technique: "Surface feathering tailored to daylight facial contours with seamless 4-month grow-out.",
        };
      case "headspa":
        return {
          formula: "Micro-Camera Diagnostic + Warm Herbal Waterfall Hydrotherapy + Organic Sea Kelp Clay",
          technique: "Deep follicular sebum purge with Shiatsu pressure-point cranial drainage.",
        };
      case "cut":
        return {
          formula: "Dry Cranial Sculpting + Botanical Scalp Acupressure + Silk Finish",
          technique: "Internal weight carving respecting natural hair swirls for effortless 5-minute home styling.",
        };
      case "gloss":
      default:
        return {
          formula: "Zero-Ammonia Vegan Cocoa Micro-Pigment + Thermal Keratin Glaze",
          technique: "High-refraction light bounce delivering mirror finish without brassy red degradation.",
        };
    }
  };

  const prescription = getPrescription();

  return (
    <section className="section-padding" style={{ background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Bespoke Diagnostic</h2>
          <p className="section-subtitle">
            Every hair profile is unique. Select your texture and aesthetic intention below to preview the formulation
            and ritual prescribed by our master artisans.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: "3.5rem",
            alignItems: "stretch",
          }}
        >
          {/* Diagnostic Controls */}
          <div
            style={{
              background: "#ffffff",
              padding: "2.5rem",
              border: "1px solid var(--color-border)",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Step 1: Texture */}
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-accent-gold)",
                  marginBottom: "0.85rem",
                }}
              >
                1. Select Hair Texture & Condition
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {textures.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTexture(t.id)}
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      background: selectedTexture === t.id ? "var(--color-bg-secondary)" : "#ffffff",
                      border: `1px solid ${selectedTexture === t.id ? "var(--color-accent-gold)" : "var(--color-border)"}`,
                      cursor: "pointer",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text-main)", marginBottom: "0.2rem" }}>
                      {t.label}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-light)", lineHeight: "1.4" }}>
                      {t.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Goal */}
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-accent-gold)",
                  marginBottom: "0.85rem",
                }}
              >
                2. Select Primary Aesthetic Goal
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {goals.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedGoal(g.id)}
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      background: selectedGoal === g.id ? "var(--color-bg-secondary)" : "#ffffff",
                      border: `1px solid ${selectedGoal === g.id ? "var(--color-accent-gold)" : "var(--color-border)"}`,
                      cursor: "pointer",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text-main)" }}>
                      {g.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Diagnostic Result Prescription Card */}
          <div
            style={{
              background: "var(--color-bg-dark)",
              color: "#ffffff",
              padding: "2.75rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid var(--color-border-dark)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--color-accent-gold-light)",
                  marginBottom: "0.75rem",
                }}
              >
                Recommended Atelier Prescription
              </div>

              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#ffffff", lineHeight: "1.25", marginBottom: "1rem" }}>
                {matchedService.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  fontSize: "0.85rem",
                  color: "#d1cbc2",
                  paddingBottom: "1.25rem",
                  borderBottom: "1px solid #2a2a27",
                  marginBottom: "1.5rem",
                }}
              >
                <span>Estimated Duration: {matchedService.duration}</span>
                <span>•</span>
                <span style={{ color: "var(--color-accent-gold-light)", fontWeight: 600 }}>{matchedService.price}</span>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8e8982", marginBottom: "0.35rem" }}>
                  Active Botanical Formulation:
                </div>
                <div style={{ fontSize: "0.95rem", color: "#f0ece4", lineHeight: "1.6", fontWeight: 300 }}>
                  {prescription.formula}
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8e8982", marginBottom: "0.35rem" }}>
                  Technique Approach:
                </div>
                <div style={{ fontSize: "0.875rem", color: "#c4beb5", lineHeight: "1.6", fontWeight: 300 }}>
                  {prescription.technique}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8e8982", marginBottom: "0.35rem" }}>
                  Recommended Artisan Lead:
                </div>
                <div style={{ fontSize: "0.95rem", color: "#ffffff", fontWeight: 600 }}>
                  {matchedService.recommendedStylist}
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #2a2a27" }}>
              <button
                onClick={() => openBooking(matchedService)}
                className="btn btn-gold"
                style={{ width: "100%" }}
              >
                <Calendar size={16} />
                <span>Reserve This Prescribed Ritual</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
