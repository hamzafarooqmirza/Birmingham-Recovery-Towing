import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/battery-replacement")({
  head: () => ({
    meta: pageMeta({ title: "Flat Battery Assistance Birmingham | Battery Help West Midlands", description: "Flat battery in Birmingham? Birmingham Recovery & Towing provides 24/7 battery assistance including jump starts and roadside battery support across West Midlands.", path: "/battery-replacement", image: IMG.breakdownRecoveryAlt }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/battery-replacement" }],
  }),
  component: BatteryReplacement,
});

function BatteryReplacement() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Flat Battery Assistance Birmingham" hero={IMG.breakdownRecoveryAlt}
        description="Flat battery stranding you in Birmingham? Birmingham Recovery & Towing provides fast roadside battery assistance — including jump starts and on-the-spot battery diagnosis — across Birmingham and West Midlands."
        benefits={["Flat battery assistance anywhere in Birmingham and West Midlands", "Professional jump start with safety-rated booster equipment", "On-site battery testing and diagnosis", "24/7 emergency response", "Suitable for cars, vans and light commercial vehicles", "Fair, upfront fixed pricing"]}
        why={[
          { title: "Tested First", desc: "We diagnose the battery issue before taking any action." },
          { title: "Safe Equipment", desc: "Voltage-regulated boosters to protect modern vehicle electronics." },
          { title: "Fast Response", desc: "Average 30-minute response across Birmingham and West Midlands." },
        ]}
        faqs={[
          { q: "My battery is flat — will you come to me in Birmingham?", a: "Yes — call +44 7392 429947 and we'll dispatch to your location 24/7." },
          { q: "What if my battery keeps going flat?", a: "We'll test the battery and charging system on-site and advise on next steps." },
          { q: "Is battery assistance available at night in Birmingham?", a: "Yes — we're available 24 hours a day, 7 days a week including overnight." },
        ]}
      />
    </SiteLayout>
  );
}