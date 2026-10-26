import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BookingProvider } from "../context/BookingContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ÉLAN Atelier & Salon | Haute Coiffure, Bespoke Color & Scalp Sanctuary",
  description: "Experience bespoke color formulations, editorial precision cuts, and organic scalp rituals at ÉLAN Salon & Atelier. Greenwich Village, New York.",
  keywords: ["luxury hair salon", "balayage nyc", "bespoke hair color", "scalp spa sanctuary", "editorial hair styling", "ÉLAN salon"],
  authors: [{ name: "ÉLAN Atelier Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@600;700;800&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;1,6..96,400&family=Tenor+Sans&family=Manrope:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
