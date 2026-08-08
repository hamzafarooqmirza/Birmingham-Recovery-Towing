import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/vehicle-storage")({
  head: () => ({
    meta: pageMeta({ title: "Wrong Fuel Recovery Birmingham | Wrong Fuel Draining West Midlands", description: "Put the wrong fuel in your car in Birmingham? Don't start the engine — call Birmingham Recovery & Towing 24/7 for fast, professional wrong fuel recovery and draining.", path: "/vehicle-storage", image: IMG.wrongFuelRecovery }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/vehicle-storage" }],
  }),
  component: VehicleStorage,
});

function VehicleStorage() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Wrong Fuel Recovery Birmingham" hero={IMG.wrongFuelRecovery}
        description="Put the wrong fuel in your vehicle in Birmingham? Stop — do NOT start the engine. Birmingham Recovery & Towing provides fast, professional wrong fuel recovery and tank draining across Birmingham and West Midlands, 24/7."
        benefits={["Wrong fuel diagnosis and draining on-site", "Petrol in diesel and diesel in petrol covered", "Fast response — average 30 minutes in Birmingham", "Flush and refuel with the correct fuel", "Available 24/7 including weekends and bank holidays", "Cars, vans and commercial vehicles covered"]}
        why={[
          { title: "Don't Start the Engine", desc: "The moment you realise, call us — do not start or move the vehicle." },
          { title: "Professional Draining", desc: "We safely drain and flush the tank with specialist equipment." },
          { title: "Fast Response", desc: "We reach you quickly to prevent costly engine damage." },
        ]}
        faqs={[
          { q: "I've put petrol in my diesel car in Birmingham — what do I do?", a: "Do NOT start the engine. Call us immediately on +44 7392 429947 and we'll come to you." },
          { q: "Can wrong fuel damage my engine?", a: "Yes — starting the engine circulates the wrong fuel and can cause serious damage. Call before starting." },
          { q: "How do you drain the wrong fuel?", a: "We use specialist pump equipment to fully drain the tank and flush the fuel system before refuelling with the correct fuel." },
        ]}
      />
    </SiteLayout>
  );
}