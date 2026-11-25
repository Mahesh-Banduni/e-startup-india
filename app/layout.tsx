import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EStartUp India - Launch & Grow Your Business in India",
  description:
    "India's leading startup consultancy for company registration, DPIIT recognition, GST compliance, trademark, and funding advisory. Trusted by 10,000+ startups.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        {/* Iconify Icons */}
        <script
          src="https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js"
          async
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-charcoal font-body antialiased selection:bg-accent/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
