import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: pageMeta({ title: "Service Areas — Birmingham Recovery & Towing | Recovery Near Me Birmingham", description: "We cover Birmingham, West Midlands and all surrounding areas — plus nationwide UK vehicle recovery and transport available 24/7.", path: "/service-areas", image: IMG.roadsideAssistance }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/service-areas" }],
  }),
  component: AreasPage,
});

const areas = ["Birmingham City Centre", "Edgbaston", "Erdington", "Sutton Coldfield", "Solihull", "Coventry", "Wolverhampton", "West Bromwich", "Walsall", "Dudley", "Stourbridge", "Bromsgrove", "Redditch", "Tamworth", "Lichfield", "Stafford", "Nationwide Across the UK"];

function AreasPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Service Areas" title="Covering Birmingham & Beyond" subtitle="Based in Birmingham, West Midlands — covering the city and surrounding areas with nationwide vehicle recovery and transport available 24/7 across the UK." image={IMG.roadsideAssistance} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {areas.map((a) => (
            <div key={a} className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl">
              <MapPin className="h-5 w-5 text-primary" /> <span className="font-semibold">{a}</span>
            </div>
          ))}
        </div>
      </section>
      <EmergencyCTA />
    </SiteLayout>
  );
}