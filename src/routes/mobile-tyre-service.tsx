import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mobile-tyre-service")({
  head: () => ({
    meta: pageMeta({ title: "Fuel Delivery Birmingham | Emergency Fuel Delivery West Midlands", description: "Run out of fuel in Birmingham? Birmingham Recovery & Towing delivers emergency fuel 24/7 to get you moving. Fast, affordable fuel delivery service.", path: "/mobile-tyre-service", image: IMG.roadsideAssistance }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/mobile-tyre-service" }],
  }),
  component: MobileTyre,
});

function MobileTyre() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Fuel Delivery Birmingham" hero={IMG.roadsideAssistance}
        description="Run out of fuel in Birmingham or the West Midlands? Don't risk running your tank dry and damaging your engine. Birmingham Recovery & Towing delivers emergency fuel to your location, fast — 24/7."
        benefits={["Emergency fuel delivery across Birmingham and West Midlands", "Petrol and diesel delivery available", "Fast response — average 30 minutes", "Enough fuel delivered to get you to the nearest station safely", "24/7 availability including nights, weekends and bank holidays", "Cars, vans and light commercial vehicles covered"]}
        why={[
          { title: "Fast Delivery", desc: "We get fuel to you quickly so you're not stranded for long." },
          { title: "Petrol & Diesel", desc: "We carry both petrol and diesel for all vehicle types." },
          { title: "Always Available", desc: "Emergency fuel delivery 24/7 — day or night across Birmingham." },
        ]}
        faqs={[
          { q: "I've run out of fuel in Birmingham — can you help?", a: "Yes — call us on +44 7392 429947 and we'll deliver fuel to your location 24/7." },
          { q: "How much fuel do you deliver?", a: "We deliver enough to get you safely to the nearest petrol station." },
          { q: "Do you deliver both petrol and diesel?", a: "Yes, we carry both petrol and diesel for emergency fuel delivery." },
        ]}
      />
    </SiteLayout>
  );
}