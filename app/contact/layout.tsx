import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Get a Free Software Quote in Sri Lanka",
  description:
    "Contact Swiftcode for ERP software, POS systems, web or mobile app development in Sri Lanka. Get a free quote within 24 hours. Based in Athurugiriya.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
