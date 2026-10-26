"use client";

import React, { createContext, useContext, useState } from "react";
import { ServiceItem, SERVICES_DATA } from "../data/salonData";
import ServiceDetailModal from "../components/ServiceDetailModal";
import BookingModal from "../components/BookingModal";

interface BookingContextType {
  openBooking: (service?: ServiceItem | null) => void;
  closeBooking: () => void;
  openReservation: (service?: ServiceItem | null) => void;
  closeReservation: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const openBooking = (service?: ServiceItem | null) => {
    setSelectedService(service || SERVICES_DATA[0]);
    setIsDetailOpen(true);
  };

  const closeBooking = () => {
    setIsDetailOpen(false);
  };

  const openReservation = (service?: ServiceItem | null) => {
    if (service) {
      setSelectedService(service);
    } else if (!selectedService) {
      setSelectedService(SERVICES_DATA[0]);
    }
    setIsDetailOpen(false);
    setIsReservationOpen(true);
  };

  const closeReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        openBooking,
        closeBooking,
        openReservation,
        closeReservation,
      }}
    >
      {children}
      <ServiceDetailModal
        isOpen={isDetailOpen}
        onClose={closeBooking}
        service={selectedService}
        onReserve={(srv) => openReservation(srv)}
      />
      <BookingModal
        isOpen={isReservationOpen}
        onClose={closeReservation}
        initialService={selectedService}
      />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
