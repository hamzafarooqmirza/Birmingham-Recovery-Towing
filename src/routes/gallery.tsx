import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: pageMeta({ title: "Gallery — Birmingham Recovery & Towing", description: "Photos of our recovery fleet, tow trucks and roadside assistance work across Birmingham and West Midlands.", path: "/gallery", image: IMG.carAndTowingVan }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const images = [
    IMG.hero, IMG.roadsideAssistance, IMG.carTowing, IMG.carAndTowingVan,
    IMG.emergencyCarRecovery, IMG.vehicleTowingService, IMG.breakdownRecovery, IMG.breakdownRecoveryAlt,
    IMG.accidentRecovery, IMG.flatbedTowing, IMG.luxurySportsCarTransport, IMG.suv4x4Recovery,
    IMG.recoveryToGarage, IMG.recoveryToMechanic, IMG.recoveryToDealership, IMG.luxuryExoticCarTowing,
    IMG.desertOffroadRecovery, IMG.heavyDutyTruckTowing, IMG.commercialVehicleTowing,
  ];
  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="Our work, on the road" subtitle="A look at our fleet, our crew and the jobs we handle every day across Birmingham and West Midlands." image={IMG.carAndTowingVan} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl border border-border shadow-xl aspect-[4/3]">
              <img src={src} alt={`Birmingham Recovery & Towing work photo ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}