"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/placements", label: "Placements" },
  { href: "/training", label: "Training" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/99 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 lg:px-8">
        {/* <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-sm font-bold leading-tight text-foreground">
              TPC
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-wide text-primary">
              PHCET
            </span>
          </div>
        </Link> */}
        {/* <Link href="/" className="flex items-center gap-3 group">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQEGPXuN03vkzg/company-logo_200_200/0/1655014344498?e=2147483647&v=beta&t=aTKyb4U6vOu4duqSFAhfb3gTedbd_dRUexcqIezjjGo"
            alt="TPC PHCET Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link> */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/tpc-phcet-logo.png"
            alt="TPC PHCET Logo"
            className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>


        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors accent-underline",
                pathname === link.href
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-secondary/50 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary/15 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
