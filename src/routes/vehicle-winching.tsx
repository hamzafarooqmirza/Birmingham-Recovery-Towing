import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/desert-offroad-recovery")({
  head: () => ({
    meta: pageMeta({ title: "Vehicle Winching Birmingham | Winch Recovery West Midlands", description: "Vehicle stuck in mud, a ditch or inaccessible ground in Birmingham? Birmingham Recovery & Towing provides professional winch recovery 24/7 across West Midlands.", path: "/desert-offroad-recovery", image: IMG.desertOffroadRecovery }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/desert-offroad-recovery" }],
  }),
  component: DesertOffroadRecovery,
});

function DesertOffroadRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Vehicle Winching Birmingham" hero={IMG.desertOffroadRecovery}
        description="Vehicle stuck in a ditch, mud, soft ground or otherwise inaccessible? Birmingham Recovery & Towing provides professional vehicle winching across Birmingham and West Midlands, available 24/7 to pull you free safely."
        benefits={["Heavy-duty winching equipment on every recovery vehicle", "Recovery from ditches, mud, embankments and soft ground", "Snatch straps, shackles and recovery boards carried as standard", "Safe attachment points used to protect your vehicle", "Careful ground assessment before every pull", "Follow-on tow available if the vehicle cannot be driven away"]}
        why={[
          { title: "Right Equipment", desc: "Heavy-rated winches capable of recovering cars, vans and 4x4s." },
          { title: "Safe Assessment", desc: "We assess the ground and recovery angle before winching to avoid further damage." },
          { title: "One Call, Full Recovery", desc: "We free the vehicle and tow it onward if needed — all in one visit." },
        ]}
        faqs={[
          { q: "My car has gone into a ditch in Birmingham — can you winch it out?", a: "Yes — call us on +44 7392 429947 and we'll dispatch with winching equipment immediately." },
          { q: "Can you recover a vehicle stuck in mud or soft ground?", a: "Yes, we regularly recover vehicles from muddy fields, verges and soft terrain across West Midlands." },
          { q: "Will winching damage my vehicle?", a: "We use correct attachment points and assess the situation carefully before any pull to protect your vehicle." },
        ]}
      />
    </SiteLayout>
  );
}
