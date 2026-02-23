import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react"
// test

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-secondary/50 text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-sm font-bold leading-tight">TPC</span>
                <span className="text-[9px] font-semibold uppercase tracking-wide text-primary/90">
                  PHCET
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80">
              Training and Placement Cell of Pillai HOC College of Engineering and Technology. Bridging academia and industry.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/placements", label: "Placements" },
                { href: "/training", label: "Training" },
                { href: "/team", label: "Our Team" },
                { href: "/events", label: "Events" },
                { href: "/recruiters", label: "Recruiters" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary accent-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground">
              Contact Info
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground/80">
                  Rasayani, Raigad, Maharashtra
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground/80">tpc@phcet.ac.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground/80">+91 22 2745 1700</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground">
              Follow Us
            </h3>
            <div className="flex gap-2">
              {["LinkedIn", "Instagram", "Twitter"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary border border-border/70 text-primary text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-foreground/75">
              Stay updated with placement opportunities.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-xs text-foreground/70">
            TPC - PHCET. All rights reserved.
          </p>
          <p className="text-xs text-foreground/70">
            Pillai HOC College of Engineering and Technology
          </p>
        </div>
      </div>
    </footer>
  )
}
