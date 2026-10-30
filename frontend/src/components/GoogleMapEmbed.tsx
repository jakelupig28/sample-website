"use client";

import React, { useState } from "react";
import { MapPin, Navigation, ExternalLink, RefreshCw, AlertCircle } from "lucide-react";

interface GoogleMapEmbedProps {
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  fillContainer?: boolean;
}

export default function GoogleMapEmbed({
  height = 420,
  className = "",
  style = {},
  fillContainer = false,
}: GoogleMapEmbedProps) {
  const [retryKey, setRetryKey] = useState<number>(0);

  const mapAddress = "442 Hudson St, New York, NY 10014";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "442 Hudson Street, Greenwich Village, New York, NY 10014"
  )}`;

  // Official Google Maps Embed URL for 442 Hudson St, Greenwich Village, NY
  const googleEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.284724915664!2d-74.00932292346764!3d40.7313889372278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259929845511b%3A0x6b83f0c3f58e0a17!2s442%20Hudson%20St%2C%20New%20York%2C%20NY%2010014!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        height: fillContainer ? "100%" : "auto",
        flex: fillContainer ? "1 1 0%" : "initial",
        width: "100%",
        background: "#ffffff",
        border: "1px solid var(--color-border)",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        boxSizing: "border-box",
        position: "relative",
        ...style,
      }}
    >
      {/* Interactive Map Frame: Exclusively Google Maps */}
      <div
        style={{
          position: "relative",
          width: "100%",
          flex: fillContainer ? "1 1 0%" : "initial",
          height: fillContainer ? "100%" : `clamp(280px, 44vh, ${height}px)`,
          minHeight: fillContainer ? "340px" : "300px",
          background: "#e8e5e0",
          overflow: "hidden",
        }}
      >
        {/* Official Google Maps Embed iframe */}
        <iframe
          key={retryKey}
          title="ÉLAN Atelier & Salon Location Map on Google Maps"
          src={googleEmbedUrl}
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            filter: "contrast(1.02) saturate(0.9)",
          }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Map Footer Bar with Direct Google Maps Navigation */}
      <div
        style={{
          padding: "1.25rem 1.75rem",
          background: "var(--color-bg-secondary)",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <MapPin size={18} strokeWidth={1.5} color="var(--color-accent-terracotta, #cb6d3e)" />
          <div>
            <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-text-main)" }}>
              {mapAddress}
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--color-text-light)" }}>
              Christopher St (1) &amp; West 4th St (A, C, E, B, D, F, M)
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={() => setRetryKey((k) => k + 1)}
            className="btn btn-secondary btn-sm"
            style={{ gap: "0.35rem", fontSize: "0.78rem" }}
            title="Reload Google Map Frame"
          >
            <RefreshCw size={12} strokeWidth={1.5} />
            <span>Reload Map</span>
          </button>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-terracotta btn-sm"
            style={{ gap: "0.4rem" }}
          >
            <Navigation size={14} strokeWidth={1.5} />
            <span>Get Directions</span>
            <ExternalLink size={12} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
}
