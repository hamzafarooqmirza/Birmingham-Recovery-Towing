import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/commercial-vehicle-towing")({
  head: () => ({
    meta: pageMeta({ title: "Van Recovery Birmingham | Van Breakdown Recovery West Midlands", description: "Fast van recovery across Birmingham and West Midlands. Transit, Sprinter, Luton and all sizes — 24/7. Call Birmingham Recovery & Towing.", path: "/commercial-vehicle-towing", image: IMG.commercialVehicleTowing }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/commercial-vehicle-towing" }],
  }),
  component: CommercialVehicleTowing,
});

function CommercialVehicleTowing() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Van Recovery Birmingham" hero={IMG.commercialVehicleTowing}
        description="Van broken down in Birmingham or the West Midlands? Birmingham Recovery & Towing recovers all sizes of vans — Ford Transit, Mercedes Sprinter, Luton vans and more — 24/7."
        benefits={["Recovery for all van sizes — SWB, LWB, Luton, Sprinter", "Fast response across Birmingham and West Midlands", "Recovery to your home, depot, garage or preferred location", "Careful handling of loaded vans and equipment", "Nationwide van recovery across the UK", "24/7 availability including weekends and bank holidays"]}
        why={[
          { title: "All Van Sizes", desc: "From small panel vans to large Luton vans — we've got the right truck." },
          { title: "Minimise Downtime", desc: "We get your van recovered fast to keep your day moving." },
          { title: "Nationwide Cover", desc: "Van recovery from Birmingham to anywhere in the UK." },
        ]}
        faqs={[
          { q: "Do you recover Luton vans?", a: "Yes, we can recover Luton box vans and other larger light commercial vehicles." },
          { q: "Can you recover a loaded van?", a: "Yes, we take care to secure both the vehicle and any contents." },
          { q: "How fast can you get to me in Birmingham?", a: "Our average response time across Birmingham is around 30 minutes, 24/7." },
        ]}
      />
    </SiteLayout>
  );
}
