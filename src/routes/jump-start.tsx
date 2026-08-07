import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/jump-start")({
  head: () => ({
    meta: pageMeta({ title: "Jump Start Birmingham | Flat Battery Jump Start West Midlands", description: "Mobile jump start service across Birmingham and West Midlands. Flat battery? Birmingham Recovery & Towing comes to you 24/7 with professional booster equipment.", path: "/jump-start", image: IMG.carAndTowingVan }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/jump-start" }],
  }),
  component: JumpStart,
});

function JumpStart() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Jump Start Birmingham" hero={IMG.carAndTowingVan}
        description="Flat battery leaving you stranded in Birmingham? Birmingham Recovery & Towing's mobile jump start service uses professional booster packs to get your engine running again — fast, 24/7."
        benefits={["Jump start service across Birmingham and West Midlands", "Emergency jump start available 24/7", "Professional booster packs — safe for modern vehicle electronics", "Quick on-the-spot diagnosis", "Advice if a full battery replacement is needed", "Fair, upfront fixed pricing"]}
        why={[
          { title: "Right Equipment", desc: "Heavy-duty boosters that start cars, vans and all modern vehicles." },
          { title: "Safe for Modern Cars", desc: "Voltage-protected equipment to prevent ECU and electronics damage." },
          { title: "Fast Response", desc: "Average 30-minute response across Birmingham and West Midlands." },
        ]}
        faqs={[
          { q: "My car won't start in Birmingham — can you jump start it?", a: "Yes — call us on +44 7392 429947 and we'll dispatch immediately." },
          { q: "Is jump starting safe for modern cars with stop-start?", a: "Yes — our equipment is voltage-regulated and specifically designed for modern vehicle electronics." },
          { q: "How long does a jump start take?", a: "Most jump starts are completed in under 10 minutes once our technician arrives." },
        ]}
      />
    </SiteLayout>
  );
}