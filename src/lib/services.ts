import { IMG } from "./assets";

export const SERVICES = [
  { slug: "/vehicle-recovery", title: "Towing & Recovery", image: IMG.tow4, desc: "24/7 nationwide vehicle recovery with modern tilt-and-slide tow trucks." },
  { slug: "/jump-start", title: "Jump Start", image: IMG.jumpstart, desc: "Flat battery? Our mobile jump start service gets you moving in minutes." },
  { slug: "/battery-replacement", title: "Battery Replacement", image: IMG.battery, desc: "On-site battery testing and replacement with quality batteries." },
  { slug: "/mobile-tyre-service", title: "Mobile Tyre Service", image: IMG.tyre, desc: "Flat tyre? We come to you with a fully equipped tyre van." },
  { slug: "/vehicle-storage", title: "Vehicle Storage", image: IMG.storage, desc: "Secure short-term and long-term indoor vehicle storage facility." },
] as const;