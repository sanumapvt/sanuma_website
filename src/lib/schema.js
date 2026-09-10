import { SITE_CONFIG } from "@/lib/constants";

/**
 * Generates JSON-LD Organization and LocalBusiness schema for Sanuma.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation", "LocalBusiness"],
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    foundingDate: `${SITE_CONFIG.foundingYear}-01-01`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.contact.addressLocality,
      addressCountry: SITE_CONFIG.contact.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.0225,
      longitude: 72.5714,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.contact.phone,
      contactType: "customer service",
      email: SITE_CONFIG.contact.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Business Building",
      "Business Development",
      "Business Scaling",
      "Artificial Intelligence",
      "Operating Systems",
      "Process Engineering",
      "Enterprise Technology",
    ],
  };
}

/**
 * Generates JSON-LD WebSite schema.
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.legalName,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
  };
}

/**
 * Generates JSON-LD BreadcrumbList schema for subpages.
 */
export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

/**
 * Generates JSON-LD FAQPage schema for Answer Engine Optimization (AEO).
 */
export function getFAQSchema(faqs = SITE_CONFIG.faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates JSON-LD WebPage schema for specific pages.
 */
export function getWebPageSchema({ title, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      "@id": `${SITE_CONFIG.url}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: "en-IN",
  };
}
