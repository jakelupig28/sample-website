"use client";

import React, { useEffect } from "react";
import { X, Clock, Check, Phone, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { ServiceItem, SALON_INFO } from "../data/salonData";
import styles from "./ServiceDetailModal.module.css";

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceItem | null;
  onReserve?: (service: ServiceItem) => void;
}

export default function ServiceDetailModal({ isOpen, onClose, service, onReserve }: ServiceDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Left Side: High-res Service Image & Tag */}
        <div className={styles.imageWrapper}>
          <img
            src={service.image}
            alt={service.name}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className={styles.image}
          />
          <div className={styles.categoryBadge}>
            {service.categoryLabel}
          </div>
        </div>

        {/* Right Side: Service Profile */}
        <div className={styles.contentCol}>
          <div>
            <div className={styles.headerRow}>
              <span className={styles.profileTag}>
                Atelier Service Profile
              </span>
              <button
                onClick={onClose}
                className={styles.closeBtn}
                aria-label="Close details"
              >
                <X size={16} />
              </button>
            </div>

            <h2 className={styles.title}>
              {service.name}
            </h2>

            <div className={styles.metaRow}>
              <span className={styles.priceTag}>
                {service.price}
              </span>
              <span className={styles.durationTag}>
                <Clock size={14} />
                <span>{service.duration} Session</span>
              </span>
            </div>

            <p className={styles.description}>
              {service.description}
            </p>

            <div>
              <h4 className={styles.featureTitle}>
                Included In This Service:
              </h4>
              <div className={styles.featureList}>
                {service.features.map((feat, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <div className={styles.featureIconBox}>
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.actionFooter}>
            <div className={styles.footerNote}>
              Have questions regarding formulation or suitability for this service?
            </div>
            <div className={styles.buttonGrid}>
              {onReserve && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onReserve(service);
                  }}
                  className="btn btn-terracotta btn-sm"
                  style={{ flex: 1.2, minWidth: "150px", justifyContent: "center" }}
                >
                  <Calendar size={14} />
                  <span>Reserve Online</span>
                </button>
              )}
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="btn btn-primary btn-sm"
                style={{ flex: 1, minWidth: "130px", justifyContent: "center" }}
              >
                <Phone size={14} />
                <span>Call Atelier</span>
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="btn btn-secondary btn-sm"
                style={{ flex: 1, minWidth: "130px", justifyContent: "center" }}
              >
                <Mail size={14} />
                <span>Inquire Concierge</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
