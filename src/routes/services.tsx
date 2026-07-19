import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ServiceCard } from "@/components/site/ServiceCard";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { SERVICES } from "@/lib/services";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: pageMeta({ title: "Services — T1T Towing & Recovery", description: "Vehicle recovery, jump start, battery replacement, mobile tyre service and secure vehicle storage across Ireland.", path: "/services", image: IMG.tow1 }),
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Services" title="Full-service roadside assistance" subtitle="Everything you need when something goes wrong — handled by one professional, fully-insured team." image={IMG.tow1} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <ServiceCard key={s.slug} to={s.slug} image={s.image} title={s.title} desc={s.desc} />)}
        </div>
      </section>
      <EmergencyCTA />
    </SiteLayout>
  );
}