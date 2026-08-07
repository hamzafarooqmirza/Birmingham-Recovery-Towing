import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/emergency-car-recovery")({
  head: () => ({
    meta: pageMeta({ title: "24/7 Emergency Car Recovery Birmingham | Emergency Recovery West Midlands", description: "Round-the-clock emergency car recovery across Birmingham and West Midlands. One call gets a fully-equipped recovery truck to you immediately, day or night.", path: "/emergency-car-recovery", image: IMG.emergencyCarRecovery }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/emergency-car-recovery" }],
  }),
  component: EmergencyCarRecovery,
});

function EmergencyCarRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="24/7 Emergency Car Recovery Birmingham" hero={IMG.emergencyCarRecovery}
        description="Whatever's happened and whenever it happens, Birmingham Recovery & Towing's emergency recovery team is on standby 24 hours a day, 7 days a week. One call gets a fully-equipped recovery truck moving towards you immediately across Birmingham and West Midlands."
        benefits={["Live 24/7/365 emergency dispatch across Birmingham and West Midlands", "Average response time 30 minutes in Birmingham", "Recovery trucks dispatched to your exact location", "Covers breakdowns, accidents and non-drivable vehicles", "Clear, upfront pricing before we roll out", "Professional, experienced recovery operators"]}
        why={[
          { title: "Always Available", desc: "Our phones and trucks never sleep — call +44 7392 429947 any hour." },
          { title: "Rapid Dispatch", desc: "The nearest available truck is sent the moment you call." },
          { title: "No Surprises", desc: "You get a fixed quote before any work begins." },
        ]}
        faqs={[
          { q: "Is emergency recovery really available at 3am in Birmingham?", a: "Yes — our dispatch line and trucks run 24/7, every day of the year across Birmingham and West Midlands." },
          { q: "How fast can you reach me in Birmingham?", a: "Typically around 30 minutes depending on your location and traffic." },
          { q: "Do you charge extra for night call-outs?", a: "No — our pricing is transparent and fixed regardless of the hour." },
        ]}
      />
    </SiteLayout>
  );
}
