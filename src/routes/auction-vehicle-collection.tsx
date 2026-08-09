import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/recovery-to-dealership")({
  head: () => ({
    meta: pageMeta({ title: "Auction Vehicle Collection Birmingham | Auction Car Transport West Midlands", description: "Collecting a vehicle from auction in Birmingham or West Midlands? Birmingham Recovery & Towing provides reliable auction vehicle collection and transport nationwide.", path: "/recovery-to-dealership", image: IMG.recoveryToDealership }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/recovery-to-dealership" }],
  }),
  component: RecoveryToDealership,
});

function RecoveryToDealership() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Auction Vehicle Collection Birmingham" hero={IMG.recoveryToDealership}
        description="Won a vehicle at auction in Birmingham, West Midlands or anywhere in the UK? Birmingham Recovery & Towing provides professional auction vehicle collection and transport — collecting your purchase and delivering it safely to your home, business or storage."
        benefits={["Auction vehicle collection from all major UK auction houses", "Safe flatbed transport to protect your purchase", "Collection from Birmingham, West Midlands and nationwide UK auctions", "Delivery to home, business or storage address", "Trade and private buyers welcome", "Prompt collection to meet auction clearance deadlines"]}
        why={[
          { title: "Auction Specialists", desc: "We understand clearance deadlines and collect promptly to avoid storage charges." },
          { title: "Safe Transport", desc: "Flatbed loading protects your auction purchase during transit." },
          { title: "Nationwide Coverage", desc: "We collect from auction houses across the UK and deliver anywhere." },
        ]}
        faqs={[
          { q: "Can you collect my auction vehicle in Birmingham?", a: "Yes — call +44 7392 429947 and we'll arrange collection to fit the auction's clearance deadline." },
          { q: "Do you collect from auction houses outside Birmingham?", a: "Yes, we collect auction vehicles from auction houses across the UK." },
          { q: "Can you deliver my auction vehicle to any address?", a: "Yes, we deliver to home, business or storage addresses anywhere in the UK." },
        ]}
      />
    </SiteLayout>
  );
}
