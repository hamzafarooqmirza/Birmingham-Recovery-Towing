import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/jump-start")({
  head: () => ({
    meta: pageMeta({ title: "Jump Start Service — Flat Battery Help | T1T Ireland", description: "Mobile jump start service across Ireland. Flat battery? We come to you with professional booster equipment and get you moving fast.", path: "/jump-start", image: IMG.jumpstart }),
    links: [{ rel: "canonical", href: "/jump-start" }],
  }),
  component: JumpStart,
});

function JumpStart() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Jump Start" hero={IMG.jumpstart}
        description="Flat battery leaving you stranded? Our mobile jump start service uses professional booster packs and jumper cables to get your engine running again — fast."
        benefits={["Flat battery assistance anywhere in Ireland", "Emergency jump start, 24/7", "Professional booster packs — safe for modern electronics", "Quick on-the-spot diagnosis", "We'll advise if a full battery replacement is needed", "Fair, upfront pricing"]}
        why={[
          { title: "Right Equipment", desc: "Heavy-duty boosters that start cars, vans and 4x4s." },
          { title: "Safe for Modern Cars", desc: "Voltage-protected to prevent ECU damage." },
          { title: "Fast Arrival", desc: "Local vans dispatched in minutes." },
        ]}
        faqs={[
          { q: "What if my battery won't hold a charge?", a: "We'll diagnose on the spot — if needed, we offer a separate battery replacement service." },
          { q: "Is jump starting safe for modern cars?", a: "Yes — our equipment is voltage-regulated and designed for modern vehicle electronics." },
          { q: "How long does it take?", a: "Most jump starts are done in under 10 minutes once we arrive." },
        ]}
      />
    </SiteLayout>
  );
}