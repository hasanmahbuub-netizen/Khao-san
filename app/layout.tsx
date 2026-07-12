import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";
import { ReservationProvider } from "@/components/ReservationContext";

export const metadata: Metadata = {
  metadataBase: new URL('https://khaosan.com.bd'),
  title: "Khao San | The Thai Way in Dhaka",
  description: "Experience the uncompromising standard of authentic Thai Street Food at Khao San Dhaka. A curated dining experience in Gulshan, Dhanmondi, and Uttara.",
  keywords: ["Thai Food Dhaka", "Khao San", "Best Thai Restaurant", "Fine Dining", "Tom Yum Goong", "Pad Thai", "Gulshan Restaurant"],
  openGraph: {
      title: "Khao San | The Thai Way",
      description: "An evening of unforgettable Thai hospitality. Experience the uncompromising standard of authentic Thai cuisine in Dhaka.",
      url: "https://khaosan.com.bd",
      siteName: "Khao San",
      images: [
        {
          url: "/assets/Background-20260709T183540Z-2-001/Background/Elephant%2016%20by%209%20Ratio%20Landscape.webp",
          width: 1920,
          height: 1080,
          alt: "Khao San Restaurant",
        },
      ],
      type: "website",
      locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khao San | The Thai Way",
    description: "Experience the uncompromising standard of authentic Thai cuisine in Dhaka.",
    images: ["/assets/Background-20260709T183540Z-2-001/Background/Elephant%2016%20by%209%20Ratio%20Landscape.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" type="image/webp" href="/assets/Logos-20260709T183558Z-2-001/Logos/Dark Blue.webp" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ReservationProvider>
            <Header />
            <ClientWrapper>
                <main className="page-transition">{children}</main>
            </ClientWrapper>
            <Footer />
        </ReservationProvider>
      </body>
    </html>
  );
}
