"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Calendar, Sparkles } from "lucide-react";
import styles from "./Navbar.module.css";
import { SALON_INFO } from "../data/salonData";
import { useBooking } from "../context/BookingContext";
import SocialLinks from "./SocialLinks";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking, openReservation } = useBooking();

  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      openReservation();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Atelier Location & Atelier Status Line */}
      <div className={styles.topBanner}>
        <span>442 HUDSON STREET, GREENWICH VILLAGE</span>
        <span className={styles.topBannerHighlight}>TUESDAY – SATURDAY BY APPOINTMENT</span>
      </div>

      {/* Main Header Bar */}
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          {/* Brand Logo */}
          <Link href="/" className={styles.brandLogo} onClick={closeMobileMenu}>
            <div className={styles.brandMonogram}>É</div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>{SALON_INFO.name}</span>
              <span className={styles.brandSub}>ATELIER & SANCTUARY</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav>
            <ul className={styles.navLinks}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Nav Actions */}
          <div className={styles.navActions}>
            <a href={`tel:${SALON_INFO.phone}`} className={styles.phoneLink} title="Call Concierge">
              <Phone size={15} />
              <span>{SALON_INFO.phone}</span>
            </a>

            <button
              onClick={handleBookingClick}
              className="btn btn-terracotta btn-sm"
              id="nav-reserve-btn"
              aria-label="Book Appointment"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
            >
              <Calendar size={13} />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.mobileOverlayOpen : ""}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ""}`}>
        <div className={styles.mobileDrawerHeader}>
          <div className={styles.brandLogo}>
            <div className={styles.brandMonogram}>É</div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>{SALON_INFO.name}</span>
              <span className={styles.brandSub}>ATELIER & SANCTUARY</span>
            </div>
          </div>
          <button className={styles.mobileCloseBtn} onClick={closeMobileMenu} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <ul className={styles.mobileNavLinks}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.mobileDrawerFooter}>
          <button
            onClick={() => {
              closeMobileMenu();
              openReservation();
            }}
            className="btn btn-terracotta"
            style={{ width: "100%", justifyContent: "center", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
          >
            <Calendar size={15} />
            <span>Book Appointment</span>
          </button>
          <Link
            href="/services"
            onClick={closeMobileMenu}
            className="btn btn-secondary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>Explore Services Menu</span>
          </Link>
          <a
            href={`tel:${SALON_INFO.phone}`}
            className="btn btn-secondary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <Phone size={16} />
            <span>Call {SALON_INFO.phone}</span>
          </a>

          <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}
