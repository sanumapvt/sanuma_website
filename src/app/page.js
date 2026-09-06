import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import HowWeBuild from "@/components/sections/HowWeBuild";
import Approach from "@/components/sections/Approach";
import Businesses from "@/components/sections/Businesses";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Sanuma | Business Building, AI & Technology",
  description:
    "Sanuma is an AI and technology-driven business-building company in Ahmedabad that creates, develops and scales businesses using strategy, systems, processes, AI and technology.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sanuma | Business Building, AI & Technology",
    description:
      "Sanuma builds and scales businesses by combining business strategy, strong operating systems, AI, technology and execution.",
    url: SITE_CONFIG.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HowWeBuild />
      <Approach />
      <Businesses />
    </>
  );
}
