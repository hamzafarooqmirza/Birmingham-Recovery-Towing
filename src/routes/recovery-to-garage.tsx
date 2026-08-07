import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/recovery-to-garage")({
  head: () => ({
    meta: pageMeta({ title: "Trade Vehicle Delivery Birmingham | Trade Car Transport West Midlands", description: "Reliable trade vehicle delivery across Birmingham, West Midlands and the UK. Birmingham Recovery & Towing collects and delivers vehicles for dealers, traders and fleet operators.", path: "/recovery-to-garage", image: IMG.recoveryToGarage }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/recovery-to-garage" }],
  }),
  component: RecoveryToGarage,
});

function RecoveryToGarage() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Trade Vehicle Delivery Birmingham" hero={IMG.recoveryToGarage}
        description="Need a vehicle collected and delivered for trade purposes in Birmingham, West Midlands or across the UK? Birmingham Recovery & Towing provides reliable trade vehicle delivery for car dealers, fleet operators, rental companies and private traders."
        benefits={["Trade vehicle delivery across Birmingham and West Midlands", "Nationwide UK collection and delivery available", "Suitable for car dealers, fleet operators and rental companies", "Single vehicle and multi-vehicle delivery runs", "Careful handling and pre-delivery condition checks", "Flexible scheduling to suit your business hours"]}
        why={[
          { title: "Trade Experienced", desc: "We regularly deliver vehicles for dealers, fleets and rental companies." },
          { title: "Careful Handling", desc: "Pre-delivery condition checks protect you and your customer." },
          { title: "Flexible Scheduling", desc: "We work around your business hours for collection and delivery." },
        ]}
        faqs={[
          { q: "Can you deliver trade vehicles across Birmingham?", a: "Yes — call +44 7392 429947 to arrange trade vehicle delivery locally or nationwide." },
          { q: "Do you deliver for car dealers and fleet operators?", a: "Yes, we regularly work with dealers, fleet companies and rental businesses across the UK." },
          { q: "Can you do multiple vehicle deliveries in one run?", a: "Contact us to discuss multi-vehicle delivery runs — we can accommodate regular trade requirements." },
        ]}
      />
    </SiteLayout>
  );
}
