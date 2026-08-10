import { Link } from "@tanstack/react-router";
import { IMG, PHONE, PHONE_DISPLAY, WHATSAPP, EMAIL, ADDRESS, BRAND } from "@/lib/assets";
import { SERVICES } from "@/lib/services";
import { Phone, Mail, MapPin, MessageCircle, Heart, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="space-y-4">
          <img src={IMG.logo} alt={`${BRAND} logo`} className="h-14 w-auto" />
          <p className="text-sm text-muted-foreground">Birmingham's trusted 24/7 car recovery, breakdown recovery, accident recovery and vehicle transport specialists. Serving West Midlands & nationwide UK.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}><Link to={s.slug} className="hover:text-primary">{s.title.split(" (")[0]}</Link></li>
            ))}
            <li><Link to="/services" className="font-semibold text-primary hover:underline">View all services →</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/service-areas" className="hover:text-primary">Service Areas</Link></li>
            <li><Link to="/faqs" className="hover:text-primary">FAQs</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /><a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE_DISPLAY}</a></li>
            <li className="flex items-start gap-2"><MessageCircle className="h-4 w-4 mt-0.5 text-primary" /><a href={WHATSAPP} className="hover:text-primary">WhatsApp</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /><a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" />{ADDRESS}</li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a href="https://www.facebook.com/share/1eKs8qRC1A/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/baqoshi_recovery247?igsh=MTF5emhpYzF1cmtqMg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@baqoshirecovery247?_r=1&_t=ZN-98jgknvOXYc" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-primary transition">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        Design with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> by{" "}
        <a href="https://linkedo.co.uk/" target="_blank" rel="noopener noreferrer nofollow" className="font-semibold text-primary hover:underline">
          Linkedo
        </a>
      </div>
    </footer>
  );
}