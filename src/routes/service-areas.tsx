import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: pageMeta({ title: "Service Areas — Fast Recovery Pro", description: "We cover Dublin, Kildare, Meath, Wicklow and the wider Leinster area, with nationwide recovery available 24/7.", path: "/service-areas", image: IMG.tow1 }),
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: AreasPage,
});

const areas = ["Dublin City", "North Dublin", "South Dublin", "West Dublin", "Kildare", "Meath", "Wicklow", "Louth", "Carlow", "Wexford", "Laois", "Offaly", "M50 / N7 / N4", "Nationwide on request"];

function AreasPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Service Areas" title="Covering Ireland, day and night" subtitle="Based in Dublin and operating across Leinster, with long-distance recovery available nationwide." image={IMG.tow1} />
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