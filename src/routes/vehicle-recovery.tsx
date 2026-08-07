import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/vehicle-recovery")({
  head: () => ({
    meta: pageMeta({ title: "Car Recovery Birmingham | 24/7 Car Recovery West Midlands", description: "Professional 24/7 car recovery across Birmingham and West Midlands. Fast response, fixed fair pricing, fully insured. Call Birmingham Recovery & Towing now.", path: "/vehicle-recovery", image: IMG.emergencyCarRecovery }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/vehicle-recovery" }],
  }),
  component: VehicleRecovery,
});

function VehicleRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Car Recovery Birmingham" hero={IMG.emergencyCarRecovery}
        description="Whether you've broken down, been in an accident or need a vehicle transported, Birmingham Recovery & Towing provides fast, professional car recovery across Birmingham, West Midlands and nationwide UK."
        benefits={["24/7 emergency car recovery Birmingham", "Flatbed trucks for safe, damage-free loading", "All car types — hatchbacks, saloons, estates, sports cars", "Accident recovery and insurance work", "Nationwide car transport across the UK", "Fully insured, fixed fair pricing"]}
        why={[
          { title: "Fast Response", desc: "Our nearest truck dispatches within minutes of your call across Birmingham." },
          { title: "Damage-Free Loading", desc: "Modern hydraulic flatbeds keep your vehicle safe throughout." },
          { title: "Transparent Pricing", desc: "You'll know the exact price upfront — no hidden charges." },
        ]}
        faqs={[
          { q: "Do you provide car recovery anywhere in the UK?", a: "Yes, we offer nationwide car recovery and transport 24/7 from Birmingham." },
          { q: "Do you handle insurance recovery jobs?", a: "Absolutely — we work alongside most major UK insurers." },
          { q: "Can you recover my car to a specific garage in Birmingham?", a: "Yes — we'll take it to your preferred garage, dealership or home." },
        ]}
      />
    </SiteLayout>
  );
}