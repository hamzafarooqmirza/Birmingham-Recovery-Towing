import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({ title: "About Us — Birmingham Recovery & Towing", description: "Learn about Birmingham Recovery & Towing — Birmingham's trusted 24/7 car recovery, breakdown recovery and vehicle transport company.", path: "/about", image: IMG.roadsideAssistance }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="Built on trust, driven by service" subtitle="Birmingham Recovery & Towing is a Birmingham-based company built on speed, transparency and care for every vehicle we handle." image={IMG.roadsideAssistance} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-2 items-center">
        <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
          <img src={IMG.carTowing} alt="Birmingham Recovery & Towing — tow truck recovering a vehicle in Birmingham" className="h-full w-full object-cover aspect-[4/3]" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black">Our Story</h2>
          <p className="mt-4 text-muted-foreground">Based in Birmingham and serving the West Midlands and the wider UK, Birmingham Recovery & Towing has built a reputation for fast response, fair prices and professional service. We've recovered everything from everyday hatchbacks to vans and specialist vehicles — and we treat every job with the same care and professionalism.</p>
          <p className="mt-4 text-muted-foreground">Our mission is simple: get you back on the road — or get your vehicle safely where it needs to go — quickly, affordably and without stress. Available 24 hours a day, 7 days a week, 365 days a year.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-3">
        {[
          { t: "Our Mission", d: "Deliver fast, honest, professional car recovery and roadside assistance to every driver in Birmingham and the West Midlands." },
          { t: "Our Promise", d: "Transparent pricing, no hidden fees, and a real human on every call — 24 hours a day." },
          { t: "Our Team", d: "Trained, fully insured operators who treat your vehicle with the same care as their own." },
        ].map((b) => (
          <div key={b.t} className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-primary">{b.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </section>
      <EmergencyCTA />
    </SiteLayout>
  );
}