"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AccreditationBar from "../components/AccreditationBar";
import AtelierServicesShowcase from "../components/AtelierServicesShowcase";
import SalonPartnerFeature from "../components/SalonPartnerFeature";
import AtelierCraftOrbit from "../components/AtelierCraftOrbit";
import MindfulStatsBanner from "../components/MindfulStatsBanner";
import TrendsGallery from "../components/TrendsGallery";
import ReviewsSection from "../components/ReviewsSection";
import AtelierCalloutBanner from "../components/AtelierCalloutBanner";
import SalonLocationSection from "../components/SalonLocationSection";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section inspired by Image 5 */}
      <ScrollReveal animation="fade-in" duration={900}>
        <Hero />
      </ScrollReveal>

      {/* Press & Editorial Accolades Ribbon */}
      <ScrollReveal animation="fade-up" delay={100} duration={800}>
        <AccreditationBar />
      </ScrollReveal>

      {/* Interactive Salon Services Showcase (Replaces Quiz, fully focused on services) */}
      <ScrollReveal animation="fade-up" duration={800}>
        <AtelierServicesShowcase />
      </ScrollReveal>

      {/* "Your Trusted Hair Atelier & Scalp Care Partner" Feature (inspired by Image 5) */}
      <ScrollReveal animation="fade-up" duration={800}>
        <SalonPartnerFeature />
      </ScrollReveal>

      {/* Interactive Tool Orbit (Comb & Hairdryer Horizontal Circular Rotation with Anime.js) */}
      <ScrollReveal animation="fade-up" duration={800}>
        <AtelierCraftOrbit />
      </ScrollReveal>

      {/* "Hair & Scalp Wellness Good For You And The Planet" Stats & Ambient Card (inspired by Image 5) */}
      <ScrollReveal animation="fade-up" duration={800}>
        <MindfulStatsBanner />
      </ScrollReveal>

      {/* "Discover The Latest Hair Care Trends & Styling" 4-Tile Lookbook Grid (inspired by Image 5) */}
      <ScrollReveal animation="fade-up" duration={800}>
        <TrendsGallery />
      </ScrollReveal>

      {/* Verified Client Reflections */}
      <ScrollReveal animation="fade-up" duration={800}>
        <ReviewsSection />
      </ScrollReveal>

      {/* "Experience The ÉLAN Standard" Action Banner (inspired by Image 5 CTA) */}
      <ScrollReveal animation="fade-up" duration={800}>
        <AtelierCalloutBanner />
      </ScrollReveal>

      {/* Atelier Location, Interactive Google Maps & Social Media Links */}
      <ScrollReveal animation="fade-up" duration={800}>
        <SalonLocationSection />
      </ScrollReveal>

      {/* Modern Minimalist Footer */}
      <Footer />
    </main>
  );
}
