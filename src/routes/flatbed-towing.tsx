import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/flatbed-towing")({
  head: () => ({
    meta: pageMeta({ title: "Trailer Transport Birmingham | Trailer Recovery West Midlands", description: "Safe trailer transport and recovery across Birmingham, West Midlands and nationwide UK. All trailer sizes. Birmingham Recovery & Towing — call 24/7.", path: "/flatbed-towing", image: IMG.flatbedTowing }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/flatbed-towing" }],
  }),
  component: FlatbedTowing,
});

function FlatbedTowing() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Trailer Transport Birmingham" hero={IMG.flatbedTowing}
        description="Birmingham Recovery & Towing transports trailers of all sizes safely and securely across Birmingham, West Midlands and nationwide UK — 24 hours a day."
        benefits={["Transport for all trailer sizes and types", "Secure strapping and load restraint systems", "Local Birmingham and nationwide UK delivery", "Available 24/7 for urgent and planned transport", "Experienced operators with proper towing equipment", "Fixed-fee quotes with no hidden costs"]}
        why={[
          { title: "All Trailer Types", desc: "We transport flatbed trailers, box trailers, car trailers and more." },
          { title: "Nationwide Coverage", desc: "From Birmingham to anywhere in the UK — safely and on time." },
          { title: "Secure Load", desc: "Multi-point restraints keep your trailer safe throughout transit." },
        ]}
        faqs={[
          { q: "Can you transport my trailer from Birmingham nationwide?", a: "Yes — we transport trailers to any UK destination from Birmingham." },
          { q: "Do you transport car-carrying trailers?", a: "Yes, including car trailers and specialist transport trailers." },
          { q: "Can you collect a trailer in an emergency?", a: "Yes — call us 24/7 for urgent trailer transport and recovery." },
        ]}
      />
    </SiteLayout>
  );
}
