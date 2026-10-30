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

export default function Home() {
  return (
    <main>
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Press & Editorial Accolades Ribbon */}
      <AccreditationBar />

      {/* Interactive Salon Services Showcase */}
      <AtelierServicesShowcase />

      {/* "Your Trusted Hair Atelier & Scalp Care Partner" Feature */}
      <SalonPartnerFeature />

      {/* Interactive Signature Services in Motion */}
      <AtelierCraftOrbit />

      {/* "Hair & Scalp Wellness Good For You And The Planet" Stats */}
      <MindfulStatsBanner />

      {/* "Discover The Latest Hair Care Trends & Styling" Lookbook Grid */}
      <TrendsGallery />

      {/* Verified Client Reflections */}
      <ReviewsSection />

      {/* "Experience The ÉLAN Standard" Action Banner */}
      <AtelierCalloutBanner />

      {/* Atelier Location, Interactive Google Maps & Social Media Links */}
      <SalonLocationSection />

      {/* Modern Minimalist Footer */}
      <Footer />
    </main>
  );
}
