import { IMG } from "./assets";

export const SERVICES = [
  { slug: "/breakdown-recovery", title: "24/7 Breakdown Recovery", image: IMG.breakdownRecovery, desc: "Stranded anywhere in Birmingham or the West Midlands? We dispatch fast — day or night, 365 days a year." },
  { slug: "/vehicle-recovery", title: "Car Recovery", image: IMG.emergencyCarRecovery, desc: "Safe, damage-free car recovery across Birmingham, the West Midlands and nationwide UK." },
  { slug: "/commercial-vehicle-towing", title: "Van Recovery", image: IMG.commercialVehicleTowing, desc: "Van broken down? We recover all sizes of vans — transit, luton, Sprinter and more." },
  { slug: "/accident-recovery", title: "Accident Recovery", image: IMG.accidentRecovery, desc: "Professional, sensitive accident scene recovery co-ordinated with your insurer when needed." },
  { slug: "/vehicle-towing-service", title: "Vehicle Transport", image: IMG.vehicleTowingService, desc: "Safe flatbed and towing transport for your car, van or specialist vehicle to any UK destination." },
  { slug: "/flatbed-towing", title: "Trailer Transport", image: IMG.flatbedTowing, desc: "We transport trailers of all sizes safely and securely to any location across the UK." },
  { slug: "/luxury-sports-car-transport", title: "Car Trailer Recovery & Transport", image: IMG.luxurySportsCarTransport, desc: "Specialist recovery and transport for vehicles on trailers — handled with care and precision." },
  { slug: "/jump-start", title: "Jump Start", image: IMG.carAndTowingVan, desc: "Flat battery? Our mobile team will jump-start your vehicle and get you moving within minutes." },
  { slug: "/battery-replacement", title: "Flat Battery Assistance", image: IMG.breakdownRecoveryAlt, desc: "We diagnose and assist with flat batteries on the spot — jump starts and roadside battery support." },
  { slug: "/mobile-tyre-service", title: "Fuel Delivery", image: IMG.roadsideAssistance, desc: "Run out of fuel? We'll deliver enough to get you to the nearest station, fast." },
  { slug: "/vehicle-storage", title: "Wrong Fuel Recovery", image: IMG.carTowing, desc: "Misfuelled your vehicle? Don't start it — call us immediately for professional wrong-fuel recovery." },
  { slug: "/desert-offroad-recovery", title: "Vehicle Winching", image: IMG.desertOffroadRecovery, desc: "Stuck in mud, a ditch or off-road? Our winch-equipped trucks will pull you out safely." },
  { slug: "/recovery-to-dealership", title: "Auction Vehicle Collection", image: IMG.recoveryToDealership, desc: "We collect vehicles from auctions across the UK and deliver them safely to your door." },
  { slug: "/recovery-to-garage", title: "Trade Vehicle Delivery", image: IMG.recoveryToGarage, desc: "Reliable trade vehicle delivery for dealerships, garages and motor traders nationwide." },
  { slug: "/heavy-duty-truck-towing", title: "Long Distance Vehicle Transport", image: IMG.heavyDutyTruckTowing, desc: "Nationwide long-distance vehicle transport across the entire UK — fully insured and tracked." },
] as const;
