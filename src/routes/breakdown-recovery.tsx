import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/breakdown-recovery")({
  head: () => ({
    meta: pageMeta({ title: "Breakdown Recovery Birmingham | 24/7 Breakdown Recovery West Midlands", description: "24/7 breakdown recovery in Birmingham and West Midlands. Engine trouble, flat battery or car won't start — we get you and your vehicle home safely. Call now.", path: "/breakdown-recovery", image: IMG.breakdownRecovery }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/breakdown-recovery" }],
  }),
  component: BreakdownRecovery,
});

function BreakdownRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="24/7 Breakdown Recovery Birmingham" hero={IMG.breakdownRecovery}
        description="Breakdowns never happen at a convenient time. Birmingham Recovery & Towing dispatches fast across Birmingham, West Midlands and surrounding areas — 24 hours a day, 7 days a week."
        benefits={["Roadside diagnosis and assistance where possible", "Recovery to your home, garage or a safe location", "Space for driver and passengers in the cab", "Support for mechanical, electrical and battery-related breakdowns", "Available on motorways, A-roads, city streets and rural lanes", "Rapid response — average 30 minutes across Birmingham"]}
        why={[
          { title: "Reassuring Support", desc: "We keep you informed from the first call until you're safely home." },
          { title: "Anywhere in Birmingham", desc: "Motorway hard shoulder or quiet side street — we'll find you." },
          { title: "One Simple Call", desc: "We handle the full recovery so you don't have to worry about a thing." },
        ]}
        faqs={[
          { q: "My car won't start in Birmingham — what should I do?", a: "Call us on +44 7392 429947 with your location — we'll dispatch a recovery truck immediately." },
          { q: "Can you take me and my passengers?", a: "Yes, our trucks have seating for the driver and passengers." },
          { q: "Do you recover from motorways near Birmingham?", a: "Yes, including the M6, M42, M5 and hard shoulders — safely and quickly." },
        ]}
      />
    </SiteLayout>
  );
}
