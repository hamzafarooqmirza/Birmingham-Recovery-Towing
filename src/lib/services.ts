import { IMG } from "./assets";

export const SERVICES = [
  { slug: "/emergency-car-recovery", title: "24/7 Emergency Car Recovery (الانتشال الطارئ للسيارات على مدار الساعة)", image: IMG.tow4, desc: "Round-the-clock emergency recovery — day or night, we're on the way within minutes of your call." },
  { slug: "/vehicle-towing-service", title: "Vehicle Towing Service (خدمة سحب المركبات)", image: IMG.tow1, desc: "Safe, reliable towing for cars, vans and light vehicles wherever you've stopped." },
  { slug: "/breakdown-recovery", title: "Breakdown Recovery (انتشال حالات الأعطال)", image: IMG.tow2, desc: "Engine trouble, flat battery, or a car that just won't start — we'll get you and your vehicle home safely." },
  { slug: "/accident-recovery", title: "Accident Recovery (انتشال حوادث السيارات)", image: IMG.tow4, desc: "Sensitive, professional recovery after a collision, coordinated with insurers when needed." },
  { slug: "/flatbed-towing", title: "Flatbed Towing Service (خدمة السحب بالونش المسطح)", image: IMG.tow5, desc: "Zero-contact, wheels-off-the-ground transport for vehicles that need the gentlest ride." },
  { slug: "/luxury-sports-car-transport", title: "Luxury & Sports Car Transport (نقل السيارات الفاخرة والرياضية)", image: IMG.tow3, desc: "Enclosed-care handling and flatbed transport built around high-value performance cars." },
  { slug: "/suv-4x4-recovery", title: "SUV & 4x4 Recovery (انتشال سيارات الدفع الرباعي)", image: IMG.tow2, desc: "Heavier-duty recovery equipment sized correctly for SUVs, pickups and 4x4s." },
  { slug: "/recovery-to-garage", title: "Recovery to Garage/Workshop (النقل إلى الكراج / الورشة)", image: IMG.tow1, desc: "We'll take your vehicle straight to your trusted garage or workshop for repair." },
  { slug: "/recovery-to-mechanic", title: "Recovery to Mechanic (النقل إلى الميكانيكي)", image: IMG.tow3, desc: "Fast recovery to an independent mechanic of your choice, anywhere you need." },
  { slug: "/recovery-to-dealership", title: "Recovery to Dealership (النقل إلى الوكالة)", image: IMG.tow5, desc: "Vehicle recovery straight to your dealership for warranty work, service, or diagnostics." },
  { slug: "/luxury-exotic-car-towing", title: "Luxury & Exotic Car Towing (سحب السيارات الفاخرة والنادرة)", image: IMG.tow4, desc: "Specialist towing for rare and exotic vehicles that demand extra precision." },
  { slug: "/desert-offroad-recovery", title: "Desert & Off-Road Recovery / Winching (انتشال الصحراء والطرق الوعرة / السحب بالونش)", image: IMG.tow2, desc: "Winch-equipped recovery for vehicles stuck in sand, mud or rough, unpaved terrain." },
  { slug: "/heavy-duty-truck-towing", title: "Heavy-Duty & Truck Towing (سحب الشاحنات والمركبات الثقيلة)", image: IMG.tow5, desc: "Rated equipment and experienced crews for trucks, lorries and heavy vehicles." },
  { slug: "/commercial-vehicle-towing", title: "Commercial Vehicle Towing (سحب المركبات التجارية)", image: IMG.tow1, desc: "Reliable towing for vans, fleet vehicles and business-critical transport." },
] as const;
