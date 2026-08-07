import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/recovery-to-mechanic")({
  head: () => ({
    meta: pageMeta({ title: "Recovery to Mechanic Birmingham | Vehicle Recovery to Garage West Midlands", description: "Recovery to your chosen mechanic or garage across Birmingham and West Midlands. Birmingham Recovery & Towing takes your vehicle straight to whoever you trust.", path: "/recovery-to-mechanic", image: IMG.recoveryToMechanic }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/recovery-to-mechanic" }],
  }),
  component: RecoveryToMechanic,
});

function RecoveryToMechanic() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Recovery to Mechanic Birmingham" hero={IMG.recoveryToMechanic}
        description="Got a mechanic you already trust in Birmingham or West Midlands? Birmingham Recovery & Towing will recover your car straight to them — no matter where they're based across Birmingham, West Midlands or the wider UK."
        benefits={["Transport to any independent mechanic or garage you choose", "Ideal for customers with a trusted local mechanic in Birmingham", "Suitable for non-runners and drivable vehicles alike", "Flexible scheduling around your mechanic's availability", "Careful handling from pickup to drop-off", "Clear updates throughout the recovery"]}
        why={[
          { title: "Your Choice", desc: "We recover to whichever mechanic you already trust in Birmingham." },
          { title: "Reliable Timing", desc: "We aim to arrive within your agreed window and keep you updated." },
          { title: "Careful Handover", desc: "Your mechanic gets the vehicle in the same condition we collected it." },
        ]}
        faqs={[
          { q: "Can I choose which mechanic you take my car to in Birmingham?", a: "Yes — call +44 7392 429947, give us the address, and we'll deliver straight there." },
          { q: "What if my mechanic works from a residential address?", a: "No problem — we can recover to residential workshops across Birmingham and West Midlands." },
          { q: "Do you coordinate with the mechanic directly?", a: "If needed, we can coordinate arrival timing directly with them." },
        ]}
      />
    </SiteLayout>
  );
}
