import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import BackToTop from "../components/BacktoTop";
import WhatsAppButton from "../components/WhatsAppButton";

const GA_ID = "G-8WRN9S451Q";
const SITE_URL = "https://swiftcode.lk";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Swiftcode | Software Company in Sri Lanka – ERP, POS, Web & Mobile Development",
    template: "%s | Swiftcode",
  },
  description:
    "Swiftcode is a software company in Sri Lanka providing ERP software, POS systems, web application and mobile app development for growing businesses.",
  keywords: [
    "software company Sri Lanka",
    "ERP software Sri Lanka",
    "POS system Sri Lanka",
    "web development Sri Lanka",
    "mobile app development Sri Lanka",
    "custom software development",
  ],
  authors: [{ name: "Swiftcode" }],
  creator: "Swiftcode",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Swiftcode",
    title: "Swiftcode | Software Company in Sri Lanka",
    description:
      "ERP software, POS systems, web and mobile app development for growing businesses in Sri Lanka.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swiftcode | Software Company in Sri Lanka",
    description:
      "ERP software, POS systems, web and mobile app development for growing businesses in Sri Lanka.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d2535",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Swiftcode",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Software company in Sri Lanka providing ERP software, POS systems, web application and mobile app development.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Athurugiriya",
    addressCountry: "LK",
  },
  areaServed: "Sri Lanka",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+94-70-490-0850",
      contactType: "sales",
      areaServed: "LK",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { send_page_view: true });
          `}
        </Script>
        {/* Structured data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <BackToTop />
        <WhatsAppButton /> 
      </body>
    </html>
  );
}
