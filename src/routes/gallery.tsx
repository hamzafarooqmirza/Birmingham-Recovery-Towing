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
    // Real business photos
    "/images/whatsapp-image-2026-08-08-at-11-02-35-pm-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-36-pm-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-36-pm-1-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-36-pm-2-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-37-pm-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-37-pm-1-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-37-pm-2-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-38-pm-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-38-pm-1-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-38-pm-2-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-39-pm-1-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-39-pm-1600x1200.webp",
    "/images/whatsapp-image-2026-08-08-at-11-02-40-pm-1200x1600.webp",
    "/images/whatsapp-image-2026-08-08-at-11-05-14-pm-1-1275x1530.webp",
    "/images/whatsapp-image-2026-08-08-at-11-05-14-pm-1320x992.webp",
    // Professional service images
    "/images/breakdown-recovery-for-birmingham-website-1448x1086.webp",
    "/images/breakdown-recovery-blue-sedan-on-highway-tow-ramp-1448x1086.webp",
    "/images/accident-recovery-image-in-birmingham-1448x1086.webp",
    "/images/wrecked-blue-sedan-by-the-roadside-1536x1024.webp",
    "/images/car-towing-highway-recovery-with-blue-hatchback-1459x1078.webp",
    "/images/vehicle-transport-1535x1024.webp",
    "/images/vehicle-winching-1535x1024.webp",
    "/images/van-recovery-service-1448x1086.webp",
    "/images/trailer-transport-1536x1024.webp",
    "/images/long-distance-vehicle-transport-1536x1024.webp",
    "/images/trade-vehicle-delivery-1466x1073.webp",
    "/images/auction-vehicle-collection-1536x1024.webp",
    "/images/fuel-delivery-2-1536x1024.webp",
    "/images/portable-jump-starter-in-engine-bay-1448x1086.webp",
    "/images/flat-battery-assistance-1448x1086.webp",
    "/images/wrong-fuel-recovery-1672x941.webp",
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