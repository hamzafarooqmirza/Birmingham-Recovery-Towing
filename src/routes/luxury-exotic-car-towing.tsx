import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/luxury-exotic-car-towing")({
  head: () => ({
    meta: pageMeta({ title: "Luxury & Prestige Car Recovery Birmingham | Classic Car Recovery West Midlands", description: "Specialist luxury and prestige car recovery across Birmingham and West Midlands. Extra care and the right equipment for high-value, classic and exotic vehicles.", path: "/luxury-exotic-car-towing", image: IMG.luxuryExoticCarTowing }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/luxury-exotic-car-towing" }],
  }),
  component: LuxuryExoticCarTowing,
});

function LuxuryExoticCarTowing() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Luxury & Prestige Car Recovery Birmingham" hero={IMG.luxuryExoticCarTowing}
        description="Luxury, prestige and classic vehicles need specialist care. Birmingham Recovery & Towing plans each high-value car recovery individually — using the right ramps, securing methods and handling for the specific vehicle, across Birmingham and West Midlands."
        benefits={["Pre-recovery assessment of clearance and securing points", "Extra-low ramps for supercars, classics and low-profile vehicles", "Careful loading and securing techniques suited to high-value cars", "Suitable for prestige, classic, limited-edition and exotic vehicles", "Experienced, professional operators only", "Fully insured for high-value vehicle recovery"]}
        why={[
          { title: "Vehicle-Specific Care", desc: "We plan the recovery around your exact vehicle's needs and clearance." },
          { title: "High-Value Experience", desc: "Trusted with prestige, classic and limited-edition cars across Birmingham." },
          { title: "Fully Insured", desc: "Appropriate insurance cover for genuinely high-value vehicles." },
        ]}
        faqs={[
          { q: "Do you recover classic or limited-edition cars in Birmingham?", a: "Yes — call +44 7392 429947 and we handle rare and classic vehicles with the extra care they deserve." },
          { q: "How do you avoid damaging low-clearance supercars?", a: "We use extra-low ramps and carefully plan the approach angle before loading." },
          { q: "Are you insured for high-value vehicle recovery?", a: "Yes, our insurance covers high-value vehicles — ask us when you call." },
        ]}
      />
    </SiteLayout>
  );
}
