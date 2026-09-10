import { SITE_CONFIG } from "@/lib/constants";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema";
import PodcastStudioExperience from "@/components/sections/PodcastStudioExperience";

export const metadata = {
  title: "The Sanuma Podcast | Building Scalable Businesses & AI Systems",
  description:
    "Listen to The Sanuma Podcast. Deep-dive conversations on venture building, operating systems, AI automation, and scalable business architecture in India.",
  alternates: {
    canonical: "/podcast",
  },
  openGraph: {
    title: "The Sanuma Podcast | Building Scalable Businesses & AI Systems",
    description:
      "Deep-dive conversations on venture building, operating systems, AI automation, and scalable business architecture.",
    url: `${SITE_CONFIG.url}/podcast`,
    type: "website",
  },
};

export default function PodcastPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Podcast", url: "/podcast" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const webPageSchema = getWebPageSchema({
    title: "The Sanuma Podcast | Building Scalable Businesses & AI Systems",
    description:
      "Deep-dive conversations on venture building, operating systems, AI automation, and scalable business architecture.",
    url: `${SITE_CONFIG.url}/podcast`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <PodcastStudioExperience />
    </>
  );
}
