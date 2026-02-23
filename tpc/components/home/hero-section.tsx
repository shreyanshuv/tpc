import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-border/50">
      {/* Background Image */}
      <Image
        src="/images/clg.png"
        alt="Campus and professional environment"
        fill
        className="absolute inset-0 object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75" />

      {/* Subtle decorative elements */}
      <div className="absolute top-32 right-1/4 h-48 w-48 rounded-full bg-primary/3 blur-3xl z-0" />
      <div className="absolute bottom-32 left-1/4 h-48 w-48 rounded-full bg-primary/3 blur-3xl z-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            <span className="text-xs font-medium text-foreground/85">
              Placement Season 2025-26 is Live
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground text-balance">
            Train Potential,{" "}
            <span className="text-primary">Promote Skills</span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-foreground/80">
            The Training and Placement Cell of PHCET bridges the gap between
            academia and industry, empowering students with the skills and
            opportunities to thrive in their careers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover-lift">
              <Link href="/recruiters">
                <Briefcase className="h-4 w-4" />
                Our Recruiters
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="gap-2 border border-border/60 bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors hover-lift"
            >
              <Link href="/about">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-4 institutional-border rounded-lg p-5 bg-secondary/20">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary border border-border/70">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-foreground/70">Students Placed</p>
              </div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border/50" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary border border-border/70">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">100+</p>
                <p className="text-sm text-foreground/70">Recruiters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
