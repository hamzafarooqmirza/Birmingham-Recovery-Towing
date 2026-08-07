import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/heavy-duty-truck-towing")({
  head: () => ({
    meta: pageMeta({ title: "Long Distance Vehicle Transport Birmingham | UK Vehicle Transport", description: "Long distance vehicle transport from Birmingham to anywhere in the UK. Birmingham Recovery & Towing offers safe, reliable nationwide vehicle transport for cars, vans and light commercials.", path: "/heavy-duty-truck-towing", image: IMG.heavyDutyTruckTowing }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/heavy-duty-truck-towing" }],
  }),
  component: HeavyDutyTruckTowing,
});

function HeavyDutyTruckTowing() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Long Distance Vehicle Transport Birmingham" hero={IMG.heavyDutyTruckTowing}
        description="Need your vehicle transported from Birmingham to another UK city — or collected from anywhere in the UK? Birmingham Recovery & Towing provides safe, professional long distance vehicle transport for cars, vans and light commercials nationwide."
        benefits={["Long distance vehicle transport from Birmingham to anywhere in the UK", "Nationwide collection — we come to you wherever you are", "Safe flatbed transport to protect vehicles over long distances", "Suitable for cars, vans and light commercial vehicles", "Pre-transport condition checks for your peace of mind", "Available 7 days a week including weekends and bank holidays"]}
        why={[
          { title: "Nationwide Coverage", desc: "We transport vehicles from Birmingham to any UK destination, or collect from anywhere." },
          { title: "Safe Transit", desc: "Flatbed transport and secure strapping protect your vehicle on long journeys." },
          { title: "Transparent Pricing", desc: "Fixed quote before we start — no hidden charges on long distance jobs." },
        ]}
        faqs={[
          { q: "Can you transport my car from Birmingham to London?", a: "Yes — call +44 7392 429947 for a quote on long distance vehicle transport to any UK destination." },
          { q: "Do you collect vehicles from outside Birmingham?", a: "Yes, we collect from anywhere in the UK and deliver to Birmingham or any other UK address." },
          { q: "Is long distance vehicle transport available at weekends?", a: "Yes, we operate 7 days a week including weekends and bank holidays." },
        ]}
      />
    </SiteLayout>
  );
}
