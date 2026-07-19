import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: pageMeta({ title: "Service Areas — Fast Recovery Pro", description: "We cover every district of Abu Dhabi — from Downtown and Al Reem Island to Al Ain and the Western Region — with nationwide recovery available 24/7.", path: "/service-areas", image: IMG.roadsideAssistance }),
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: AreasPage,
});

const areas = ["Abu Dhabi City", "Al Reem Island", "Al Raha Beach", "Khalifa City", "Mussafah", "Yas Island", "Saadiyat Island", "Al Bateen", "Al Ain", "Al Dhafra (Western Region)", "Sheikh Zayed Road (E11)", "Nationwide on request"];

function AreasPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Service Areas" title="Covering Abu Dhabi, day and night" subtitle="Based in Abu Dhabi and covering every district of the emirate, with long-distance recovery available nationwide across the UAE." image={IMG.roadsideAssistance} />
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