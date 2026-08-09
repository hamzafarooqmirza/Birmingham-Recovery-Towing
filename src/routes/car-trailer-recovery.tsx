import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/luxury-sports-car-transport")({
  head: () => ({
    meta: pageMeta({ title: "Car Trailer Recovery & Transport Birmingham | Trailer Recovery West Midlands", description: "Specialist car trailer recovery and transport in Birmingham and West Midlands. Safe, secure handling for vehicles on trailers. Call 24/7.", path: "/luxury-sports-car-transport", image: IMG.luxurySportsCarTransport }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/luxury-sports-car-transport" }],
  }),
  component: LuxurySportsCarTransport,
});

function LuxurySportsCarTransport() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Car Trailer Recovery & Transport Birmingham" hero={IMG.luxurySportsCarTransport}
        description="Need to recover or transport a vehicle on a trailer? Birmingham Recovery & Towing handles car trailer recovery and transport across Birmingham, West Midlands and nationwide UK with specialist care."
        benefits={["Recovery of vehicles on car-carrying trailers", "Transport for single and multi-car trailers", "Soft-tie strapping and secure load restraint", "Local Birmingham and nationwide UK transport", "Experienced operators for safe trailer handling", "Available 24/7 for emergency and planned transport"]}
        why={[
          { title: "Specialist Equipment", desc: "The right towing kit for safe car trailer recovery and transport." },
          { title: "Secure Loading", desc: "Multi-point restraints keep trailer and vehicles safe in transit." },
          { title: "Nationwide Coverage", desc: "Car trailer transport from Birmingham to anywhere in the UK." },
        ]}
        faqs={[
          { q: "Can you recover a vehicle and its car trailer?", a: "Yes — we can recover the tow vehicle and the trailer together." },
          { q: "Do you transport single and twin-axle car trailers?", a: "Yes, we handle single and twin-axle car-carrying trailers." },
          { q: "Can you collect a car trailer in an emergency?", a: "Yes — call us 24/7 for emergency car trailer recovery in Birmingham." },
        ]}
      />
    </SiteLayout>
  );
}
