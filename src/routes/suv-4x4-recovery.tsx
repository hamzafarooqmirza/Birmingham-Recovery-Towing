import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/suv-4x4-recovery")({
  head: () => ({
    meta: pageMeta({ title: "SUV & 4x4 Recovery Birmingham | 4x4 Recovery West Midlands", description: "SUV and 4x4 recovery across Birmingham and West Midlands. Heavier-rated equipment for larger vehicles, on-road or off it. Call 24/7.", path: "/suv-4x4-recovery", image: IMG.suv4x4Recovery }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/suv-4x4-recovery" }],
  }),
  component: Suv4x4Recovery,
});

function Suv4x4Recovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="SUV & 4x4 Recovery Birmingham" hero={IMG.suv4x4Recovery}
        description="SUVs and 4x4s are heavier and wider than standard cars. Birmingham Recovery & Towing uses recovery trucks and ramps rated for their extra size and weight — covering Birmingham, West Midlands and nationwide UK."
        benefits={["Recovery equipment rated for SUV and 4x4 weights", "Wider ramps and heavy-duty winches", "On-road breakdown and accident recovery across Birmingham", "Winch recovery for stuck or bogged vehicles", "Suitable for pickups, large SUVs and 4x4s", "Available 24/7 including nights and weekends"]}
        why={[
          { title: "Right-Sized Equipment", desc: "Our trucks and ramps are rated for heavier 4x4s and SUVs." },
          { title: "On- and Off-Road", desc: "We recover vehicles on and off the tarmac across West Midlands." },
          { title: "Experienced Crews", desc: "Trained specifically on larger, heavier vehicle recoveries." },
        ]}
        faqs={[
          { q: "Can you recover a large SUV or pickup in Birmingham?", a: "Yes — call +44 7392 429947 and our equipment is rated for SUVs, 4x4s and pickups." },
          { q: "What if my 4x4 is stuck off-road near Birmingham?", a: "We carry winching equipment for safely recovering stuck vehicles on and off road." },
          { q: "Is there an extra charge for larger vehicles?", a: "Pricing reflects vehicle size and job complexity, always agreed upfront." },
        ]}
      />
    </SiteLayout>
  );
}
