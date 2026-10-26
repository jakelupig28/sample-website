"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, User, CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import styles from "./BookingModal.module.css";
import { SERVICES_DATA, TEAM_MEMBERS, ServiceItem } from "../data/salonData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export default function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>("");
  const [selectedStylist, setSelectedStylist] = useState<string>("Any Master Stylist");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("11:30 AM");
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [clientNotes, setClientNotes] = useState<string>("");
  const [bookingCode, setBookingCode] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      if (initialService) {
        setSelectedServiceId(initialService.id);
        setSelectedStylist(initialService.recommendedStylist);
      } else if (SERVICES_DATA.length > 0 && !selectedServiceId) {
        setSelectedServiceId(SERVICES_DATA[0].id);
      }
    }
  }, [initialService, isOpen]);

  useEffect(() => {
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split("T")[0];
    setSelectedDate(dateStr);
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const timeSlots = [
    "09:30 AM",
    "11:00 AM",
    "12:30 PM",
    "02:00 PM",
    "03:45 PM",
    "05:15 PM",
  ];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 3) {
      // Generate random confirmation code
      const code = `ELAN-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingCode(code);
      setStep(4);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>Reserve an Appointment</h2>
            <p className={styles.modalSubtitle}>Haute Coiffure & Trichology Consultation</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          {/* Progress Indicator */}
          {step < 4 && (
            <div className={styles.stepIndicator}>
              <div
                className={`${styles.stepDot} ${
                  step === 1 ? styles.stepDotActive : step > 1 ? styles.stepDotCompleted : ""
                }`}
              >
                1
              </div>
              <div
                className={`${styles.stepDot} ${
                  step === 2 ? styles.stepDotActive : step > 2 ? styles.stepDotCompleted : ""
                }`}
              >
                2
              </div>
              <div className={`${styles.stepDot} ${step === 3 ? styles.stepDotActive : ""}`}>
                3
              </div>
            </div>
          )}

          {/* Step 1: Service & Stylist Selection */}
          {step === 1 && (
            <form onSubmit={handleNextStep}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Select Service / Ritual *</label>
                <select
                  className={styles.formSelect}
                  value={selectedServiceId}
                  onChange={(e) => {
                    setSelectedServiceId(e.target.value);
                    const matched = SERVICES_DATA.find((s) => s.id === e.target.value);
                    if (matched) setSelectedStylist(matched.recommendedStylist);
                  }}
                  required
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} ({srv.duration} — {srv.price})
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup} style={{ marginTop: "1.25rem" }}>
                <label className={styles.formLabel}>Preferred Stylist / Specialist</label>
                <select
                  className={styles.formSelect}
                  value={selectedStylist}
                  onChange={(e) => setSelectedStylist(e.target.value)}
                >
                  <option value="Any Master Stylist">Any First Available Master Stylist</option>
                  {TEAM_MEMBERS.map((stylist) => (
                    <option key={stylist.id} value={stylist.name}>
                      {stylist.name} ({stylist.role})
                    </option>
                  ))}
                </select>
              </div>

              {currentService && (
                <div
                  style={{
                    marginTop: "1.5rem",
                    padding: "1rem",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--color-bg-secondary)",
                    border: "1px solid var(--color-border)",
                    fontSize: "0.85rem",
                  }}
                >
                  <div style={{ fontWeight: 600, color: "var(--color-text-main)", marginBottom: "0.25rem" }}>
                    {currentService.name}
                  </div>
                  <div style={{ color: "var(--color-accent-gold)", fontWeight: 500, marginBottom: "0.4rem" }}>
                    Duration: {currentService.duration} • Investment: {currentService.price}
                  </div>
                  <div style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", lineHeight: "1.5" }}>
                    {currentService.tagline}
                  </div>
                </div>
              )}

              <div className={styles.buttonRow}>
                <div></div>
                <button type="submit" className="btn btn-gold">
                  <span>Continue to Date & Time</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Date & Time Slot Selection */}
          {step === 2 && (
            <form onSubmit={handleNextStep}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Select Preferred Date *</label>
                <input
                  type="date"
                  className={styles.formInput}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup} style={{ marginTop: "1.25rem" }}>
                <label className={styles.formLabel}>Select Start Time Slot *</label>
                <div className={styles.timesGrid}>
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`${styles.timeBtn} ${selectedTime === time ? styles.timeBtnActive : ""}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.buttonRow}>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn btn-secondary btn-sm"
                >
                  <ArrowLeft size={15} />
                  <span>Back</span>
                </button>
                <button type="submit" className="btn btn-gold">
                  <span>Guest Information</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Guest Details */}
          {step === 3 && (
            <form onSubmit={handleNextStep}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Full Legal Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vivienne Westwood"
                  className={styles.formInput}
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="vivienne@atelier.com"
                    className={styles.formInput}
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (212) 000-0000"
                    className={styles.formInput}
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.formGroup} style={{ marginTop: "1rem" }}>
                <label className={styles.formLabel}>Hair Notes & Allergies (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell us if you have previous bleach, keratin treatments, or sensitive scalp allergies..."
                  className={styles.formTextarea}
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                />
              </div>

              <div className={styles.buttonRow}>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn btn-secondary btn-sm"
                >
                  <ArrowLeft size={15} />
                  <span>Back</span>
                </button>
                <button type="submit" className="btn btn-gold">
                  <span>Confirm Reservation</span>
                  <CheckCircle2 size={16} />
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Booking Confirmation Screen */}
          {step === 4 && (
            <div className={styles.confirmationCard}>
              <div className={styles.successIconBadge}>
                <CheckCircle2 size={42} />
              </div>
              <h3 className={styles.confirmationTitle}>Appointment Reserved</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
                A confirmation concierge SMS & email have been dispatched to <strong>{clientEmail}</strong>.
              </p>

              <div className={styles.confirmationSummary}>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Booking Reference:</span>
                  <span className={styles.summaryVal} style={{ color: "var(--color-accent-gold)" }}>
                    {bookingCode}
                  </span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Service:</span>
                  <span className={styles.summaryVal}>{currentService?.name}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Stylist:</span>
                  <span className={styles.summaryVal}>{selectedStylist}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Date & Time:</span>
                  <span className={styles.summaryVal}>
                    {selectedDate} at {selectedTime}
                  </span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Guest:</span>
                  <span className={styles.summaryVal}>{clientName || "Valued Client"}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Salon Location:</span>
                  <span className={styles.summaryVal}>442 Hudson St, Greenwich Village, NY</span>
                </div>
              </div>

              <button onClick={handleReset} className="btn btn-primary" style={{ marginTop: "1rem" }}>
                Done & Return to Atelier
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
