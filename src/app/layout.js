import { Manrope, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";
import { ScrollProgressBar } from "@/components/ui/MotionReveal";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Sanuma | Business Building, AI & Technology",
    template: "%s",
  },
  description: SITE_CONFIG.description,
  applicationName: "Sanuma",
  authors: [{ name: SITE_CONFIG.legalName, url: SITE_CONFIG.url }],
  generator: "Next.js",
  keywords: SITE_CONFIG.keywords,
  referrer: "origin-when-cross-origin",
  creator: SITE_CONFIG.legalName,
  publisher: SITE_CONFIG.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sanuma | Business Building, AI & Technology",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Sanuma India Private Limited Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanuma | Business Building, AI & Technology",
    description: SITE_CONFIG.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* Global Structured Data (JSON-LD) for SEO, AEO, and GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#172121] antialiased selection:bg-[#009688] selection:text-white">
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
